import express, { Request, Response } from "express";
import { Product } from "../models/product";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const { make, model, year } = req.query as {
      make?: string;
      model?: string;
      year?: string;
    };

    const query: any = {};

    if (make) query.make = { $regex: `^${make}$`, $options: "i" };
    if (model) query.model = { $regex: `^${model}$`, $options: "i" };
    if (year) query.year = year;

    const products = await Product.find(query);

    if (!products.length) {
      return res.status(404).json({ message: "Products Not Found" });
    }

    res.json(products);
  } catch (error) {
    console.error("Product fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
