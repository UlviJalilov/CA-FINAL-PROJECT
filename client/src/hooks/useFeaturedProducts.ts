"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FeaturedProduct } from "@/types/FeaturedProduct";

const fetchFeaturedProducts = async (): Promise<FeaturedProduct[]> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  return data;
};

export const useFeaturedProducts = () => {
  return useQuery<FeaturedProduct[], Error>({
    queryKey: ["products"],
    queryFn: fetchFeaturedProducts,
  });
};
