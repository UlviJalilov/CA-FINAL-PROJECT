
import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-07-30.basil",
});


interface CartItem {
    title: string;
    price: number;
    quantity: number;
}
router.post("/", async (req, res) => {
    try {
        const { cartItems, shippingMethod }: { cartItems: CartItem[]; shippingMethod?: { label: string; price: number } } = req.body;

        

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: cartItems.map((item) => ({
                price_data: {
                    currency: "usd",
                    product_data: { name: item.title },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            })),
            shipping_options: [
                {
                    shipping_rate_data: {
                        display_name: shippingMethod?.label || "Standard Shipping",
                        type: "fixed_amount",
                        fixed_amount: {
                            amount:
                                shippingMethod && typeof shippingMethod?.price === "number"
                                    ? Math.round(shippingMethod.price * 100)
                                    : 0,
                            currency: "usd",
                        },
                    },
                },
            ],

            success_url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cancel`,
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error("Stripe Error:", error);
        res.status(500).json({ error: "Payment failed" });
    }
});

export default router;
