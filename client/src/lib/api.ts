import axios from "axios";
import { FeaturedProduct } from "../types/FeaturedProduct";

export async function getProductBySlug(slug: string): Promise<FeaturedProduct | null> {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/detailproducts/${slug}`);
    return res.data;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error fetching data", err);
    }
    return null;
  }
}
