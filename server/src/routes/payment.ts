// // routes/payment.ts
// import Stripe from "stripe";
// import express from "express";

// const router = express.Router();
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-07-30.basil" });

// router.post("/create-checkout-session", async (req, res) => {
//   const { cartItems } = req.body;

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: cartItems.map((item) => ({
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: item.title,
//             images: [item.image],
//           },
//           unit_amount: Math.round(item.price * 100),
//         },
//         quantity: item.quantity,
//       })),
//       mode: "payment",
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//     });

//     res.json({ url: session.url });
//   } catch (error) {
//     res.status(500).json({ error: "Stripe session error" });
//   }
// });

// export default router;
