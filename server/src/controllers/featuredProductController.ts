import { Request, Response } from "express";
import FeaturedProduct from "../models/FeaturedProductSchema";

export const createFeaturedProduct = async (req: Request, res: Response) => {
  try {
    const product = new FeaturedProduct(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Product creation failed", err });
  }
};

export const getFeaturedProducts = async (req: Request, res: Response) => {
  try {
    const { isFeatured } = req.query;
    let query = {};

    if (isFeatured === "true") {
      query = { isFeatured: true };
    }

    const products = await FeaturedProduct.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", err });
  }
};

export const updateFeaturedProduct = async (req: Request, res: Response) => {
  try {
    const updated = await FeaturedProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Product update failed", err });
  }
};

export const deleteFeaturedProduct = async (req: Request, res: Response) => {
  try {
    await FeaturedProduct.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Product delete failed", err });
  }
};