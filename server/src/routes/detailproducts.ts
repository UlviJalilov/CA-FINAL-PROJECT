import express from "express";
import FeaturedProduct from "../models/FeaturedProductSchema";

const detailProduct = express.Router();

detailProduct.get("/:slug", async (req, res) => {
  try {
    const product = await FeaturedProduct.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching product" });
  }
});


export default detailProduct;
