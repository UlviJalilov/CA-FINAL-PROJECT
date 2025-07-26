// admin/services/featuredProductService.ts
import axios from "axios";
import { FeaturedProduct } from "@/types/FeaturedProduct";

const BASE_URL = "http://localhost:3001/api/featured-products";

export const fetchAllFeaturedProducts = async (): Promise<FeaturedProduct[]> => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const createFeaturedProduct = async (product: Omit<FeaturedProduct, "_id">): Promise<void> => {
  await axios.post(BASE_URL, product);
};

export const updateFeaturedProduct = async (id: string, product: FeaturedProduct): Promise<void> => {
  await axios.put(`${BASE_URL}/${id}`, product);
};

export const deleteFeaturedProduct = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
