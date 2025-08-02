import mongoose, { Schema, Document } from "mongoose";

export interface IFeaturedProduct extends Document {
  title: string;
  price: number;
  oldPrice?: number;
  discountBtn?: string;
  description?: string;
  rating: number;
  image: string;
  hoverImage?: string;
  isFeatured?: boolean;
  discountPercent?: number;
}

const FeaturedProductSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, default: 0 },
    discountBtn: { type: String, required: false },
    description: { type: String, required: false },
    rating: { type: Number, default: 0 },
    image: { type: String, required: true },
    hoverImage: { type: String },
    isFeatured: { type: Boolean, default: false },
    discountPercent: { type: Number, required: false }
  },
  { timestamps: true }
);

const FeaturedProduct = mongoose.models.FeaturedProduct || mongoose.model<IFeaturedProduct>("FeaturedProduct", FeaturedProductSchema);
export default FeaturedProduct;
