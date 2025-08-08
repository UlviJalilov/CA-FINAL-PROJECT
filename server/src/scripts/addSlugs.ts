import mongoose from "mongoose";
import dotenv from "dotenv";
import slugify from "slugify";
import FeaturedProduct from "../models/FeaturedProductSchema";

dotenv.config();

async function addSlugs() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected");

    const products = await FeaturedProduct.find({ slug: { $exists: false } });
    for (const product of products) {
      product.slug = slugify(product.title, { lower: true, strict: true });
      await product.save();
      console.log(`Slug added for product: ${product.title}`);
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error("MongoDB connection or slug update error:", err);
  }
}

addSlugs();
