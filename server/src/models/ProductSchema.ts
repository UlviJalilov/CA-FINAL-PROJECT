import mongoose, { Schema, Document } from "mongoose";
export interface IProduct {
  id: string;
  make: string;
  model: string;
  year: string;
  title: string;
  price: number;
  image: string;
}


const ProductSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});
export const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

