import express from "express";
import Stripe from "stripe";
import OrderModel from "../models/OrderModel";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

router.post("/", async (req, res) => {
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

   
    const existingOrder = await OrderModel.findOne({ orderId: session.id });
    if (!existingOrder) {
      try {
        await OrderModel.create(order);
        console.log(" New order written to DB:", order);
      } catch (error) {
        console.error(" Error writing to DB:", error);
      }
    } else {
      console.log("Order already exists");
    }
  }

  res.json({ received: true });
});



export default router;
