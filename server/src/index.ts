import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import productRoutes from './routes/productRoutes';
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import uploadRoutes from "./routes/uploadRoutes";
import carProductRoutes from "./routes/carproducts";
import featuredProductRoutes from "./routes/FeaturedProductRoutes";
import paymentRouter from "./routes/payment";
import webhookRoute from "./routes/webhook";
import orderRoute from "./routes/orderRoutes"
import detailProduct from "./routes/detailproducts"
import reviews from "./routes/reviews"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(cors());


app.use(
  "/api/webhook",
  express.raw({ type: "application/json" }),
  webhookRoute
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/products", productRoutes);
app.use("/api/car-products", carProductRoutes);
app.use("/api/featured-products", featuredProductRoutes);
app.use("/api/payment", paymentRouter);
app.use("/api/orders", orderRoute);
app.use("/api/detailproducts", detailProduct)
app.use("/api/reviews", reviews)

app.get("/", (_, res) => {
  res.send("Backend server is running!");
});

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
