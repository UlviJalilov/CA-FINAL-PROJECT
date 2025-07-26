import { Request, Response } from "express";
import CarProduct from "../models/CarProductSchema";
import slugify from "slugify";

export const getAllCarProducts = async (req: Request, res: Response) => {
  try {
    const { make, carModel, year, title } = req.query as {
      make?: string;
      carModel?: string;
      year?: string;
      title?: string;
    };

    const query: any = {};

    if (make?.trim()) query.make = { $regex: make, $options: "i" };
    if (carModel?.trim()) query.carModel = { $regex: carModel, $options: "i" };
    if (year?.trim()) {
      const yearNum = parseInt(year);
      if (!isNaN(yearNum)) query.year = yearNum;
    }
    if (title?.trim()) query.title = { $regex: title, $options: "i" };

    const products = await CarProduct.find(query);

    if (!products.length) {
      return res.status(404).json({ message: "Products Not Found" });
    }

    res.json(products);
  } catch (error) {
    console.error("Product fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createCarProduct = async (req: Request, res: Response) => {
  try {
    const {
      make,
      carModel,
      year,
      title,
      price,
      image,
      oldPrice,
      discountBtn,
      description,
      rating,
      isFeatured,
      hoverImage,
    } = req.body;

    const id = slugify(`${make}-${carModel}-${year}`, { lower: true, strict: true });

    const newProduct = new CarProduct({
      id,
      make,
      carModel,
      year,
      title,
      price,
      image,
      oldPrice,
      discountBtn,
      description,
      rating,
      isFeatured,
      hoverImage,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateCarProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; 

    const updatedData = req.body;

   
    const updatedProduct = await CarProduct.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error("Update product error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteCarProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedProduct = await CarProduct.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
