import mongoose, { Schema, Document } from "mongoose";

export interface ICarProduct extends Document {
  id: string;
  make: string;
  carModel: string;
  year: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  rating?: number;
  isFeatured?: boolean;
  discountBtn?: string;
  oldPrice?: number;
}

const CarProductSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  make: { type: String, required: true },
  carModel: { type: String, required: true },
  year: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  rating: { type: Number, default: 0 },
  image: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
  oldPrice: { type: Number },
  discountBtn: { type: String },
});

const CarProduct = mongoose.models.CarProduct || mongoose.model<ICarProduct>("CarProduct", CarProductSchema);
export default CarProduct;