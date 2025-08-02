
import axios from "axios";
import { FeaturedProduct } from "@/types/FeaturedProduct";

const BASE_URL = "http://localhost:3001/api/featured-products";

export const fetchAllFeaturedProducts = async (isFeaturedOnly = false): Promise<FeaturedProduct[]> => {
  try {
    const url = isFeaturedOnly ? `${BASE_URL}?isFeatured=true` : BASE_URL;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


export const createFeaturedProduct = async (product: Omit<FeaturedProduct, "_id">): Promise<void> => {
  await axios.post(BASE_URL, {
    ...product,
    isFeatured: product.isFeatured ?? false,
  });
};

export const updateFeaturedProduct = async (id: string, product: FeaturedProduct): Promise<void> => {
  await axios.put(`${BASE_URL}/${id}`, {
    ...product,
    isFeatured: product.isFeatured ?? false,
  });
};

export const deleteFeaturedProduct = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
