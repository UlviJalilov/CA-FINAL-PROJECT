import express from "express";
import Stripe from "stripe";
import bodyParser from "body-parser";
import OrderModel from "../models/OrderModel";
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"] as string;

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err: any) {
      console.error("Webhook Error:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session & { shipping_details?: any };

      const order = {
        orderId: session.id,
        email: session.customer_email,
        total: session.amount_total,
        paymentStatus: session.payment_status,
        shipping: session.shipping_details,
        createdAt: new Date(),
      };

      try {
        await OrderModel.create(order);
        console.log("New order saved to DB: ", order);
      } catch (error) {
        console.error("Error while saving order to DB:", error);
      }

      console.log("New Order:", order);
    }

    res.json({ received: true });
  }
);

export default router;
