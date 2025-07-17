import { Request, Response } from "express";
import Product from "@/models/FeaturedProductSchema"; // Bu artıq Mongoose model olmalıdır

// Create Product
export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = new Product(req.body);
        const saved = await product.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ message: "Product creation failed", err });
    }
};

// Get All
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products", err });
    }
};

// Get Featured
export const getFeaturedProducts = async (req: Request, res: Response) => {
    try {
        const featured = await Product.find({ isFeatured: true });
        res.json(featured);
    } catch (err) {
        res.status(500).json({ message: "Error fetching featured", err });
    }
};

// Update Product
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: "Product update failed", err });
    }
};

// Delete Product
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ message: "Product delete failed", err });
    }
};
