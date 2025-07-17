import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  price: number;
  oldPrice?: number;
  discountPrice?: number;
  description: string;
  rating: number;
  image: string;
  isFeatured?: boolean;
}

const ProductSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, default: 0 },
    discountPrice: { type: Number, default: 0 },
    description: { type: String, required: true },
    rating: { type: Number, default: 0 },
    image: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
