import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import productsRouter from "./routes/products"; // Buraya diqqət

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

connectDB(); // MongoDB bağlantısı

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE-lar
app.use("/api/products", productsRouter);

app.get("/", (_, res) => {
  res.send("🚀 Backend server is running!");
});

app.listen(PORT, () => {
  console.log(`✅ Server ready at http://localhost:${PORT}`);
});
