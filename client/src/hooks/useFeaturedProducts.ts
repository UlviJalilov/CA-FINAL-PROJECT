import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FeaturedProduct } from "@/types/FeaturedProduct";

const fetchFeaturedProducts = async (): Promise<FeaturedProduct[]> => {
  const { data } = await axios.get("http://localhost:3001/api/products?isFeatured=true");
  return data
};

export const useFeaturedProducts = () => {
  return useQuery<FeaturedProduct[], Error>({
    queryKey: ["products"],
    queryFn: fetchFeaturedProducts,
  });
};
