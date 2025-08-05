import express from "express";
import Stripe from "stripe";
import OrderModel from "../models/OrderModel";
import dotenv from "dotenv";
import { countryCodeMap } from "../utils/countrycodemap";


dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

router.post("/", async (req, res) => {
  try {
    const {
      cartItems,
      shippingMethod,
      email,
      shippingAddress,
    }: {
      cartItems: CartItem[];
      shippingMethod?: { label: string; price: number };
      email: string;
      shippingAddress: {
        country: string;
        city: string;
        address?: string;
        postalCode?: string;
      };
    } = req.body;

    if (!shippingAddress || !shippingAddress.country || !shippingAddress.city) {
      return res.status(400).json({ error: "Shipping address is required." });
    }
    const allowedCountries = Object.values(countryCodeMap) as Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,

      shipping_address_collection: {
        allowed_countries: allowedCountries, 
      },

      shipping_options: [
        {
          shipping_rate_data: {
            display_name: shippingMethod?.label || "Standard Shipping",
            type: "fixed_amount",
            fixed_amount: {
              amount: shippingMethod ? Math.round(shippingMethod.price * 100) : 0,
              currency: "usd",
            },
          },
        },
      ],

      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.title },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),

      success_url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ error: "Payment failed" });
  }
});

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"] as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err: any) {
      console.error("Webhook Error:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const paymentIntent = await stripe.paymentIntents.retrieve(
        session.payment_intent as string,
        { expand: ["shipping"] }
      );

      const shippingAddress = paymentIntent.shipping?.address;

      const email = session.customer_email || session.customer_details?.email;

      if (!email) {
        console.warn("No email, order will not be written to DB.");
        return res.status(400).json({ message: "Email is required" });
      }

      const order = {
        orderId: session.id,
        email,
        total: session.amount_total,
        paymentStatus: session.payment_status,
        shipping: {
          country: shippingAddress?.country || "N/A",
          city: shippingAddress?.city || shippingAddress?.state || "N/A",
          address: shippingAddress?.line1 || "",
          postalCode: shippingAddress?.postal_code || "",
        },
        createdAt: new Date(),
      };

      try {
        await OrderModel.create(order);
        console.log("New order written to DB:", order);
      } catch (error) {
        console.error("Error writing to DB:", error);
      }
    }


    res.json({ received: true });
  }
);

export default router;
