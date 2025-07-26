import axios from "axios";
import { CarProduct } from "@/types/CarProduct";

const BASE_URL = "http://localhost:3001/api/car-products";

export const fetchAllCarProducts = async (): Promise<CarProduct[]> => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const createCarProduct = async (product: CarProduct): Promise<void> => {
  await axios.post(BASE_URL, product);
};

export const updateCarProduct = async (id: string, product: CarProduct): Promise<void> => {
  await axios.put(`${BASE_URL}/${id}`, product);
};

export const deleteCarProduct = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
