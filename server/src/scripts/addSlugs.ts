import dns from "node:dns";
import mongoose from "mongoose";
import dotenv from "dotenv";
import slugify from "slugify";
import FeaturedProduct from "../models/FeaturedProductSchema";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

async function addSlugs() {
  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(uri);

    console.log("MongoDB connected");

    // Hansı database-ə qoşulduğunu göstərir
    console.log("Database:", mongoose.connection.name);

    // FeaturedProduct modelinin hansı collection-a baxdığını göstərir
    console.log("Collection:", FeaturedProduct.collection.name);

    // Database-də olan bütün collection-ları göstərir
    const collections = await mongoose.connection.db
      ?.listCollections()
      .toArray();

    console.log(
      "Collections:",
      collections?.map((collection) => collection.name)
    );

    // Məhsulları tap
    const products = await FeaturedProduct.find();

    console.log(`Products found: ${products.length}`);

    for (const product of products) {
      const slug = slugify(product.title, {
        lower: true,
        strict: true,
      });

      product.slug = slug;

      await product.save();

      console.log(`Slug added: ${product.title} -> ${slug}`);
    }

    await mongoose.disconnect();

    console.log("All slugs updated successfully");
  } catch (err) {
    console.error("MongoDB connection or slug update error:", err);
  }
}

addSlugs();