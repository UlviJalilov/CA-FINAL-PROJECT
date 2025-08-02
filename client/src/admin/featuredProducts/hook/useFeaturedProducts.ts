"use client"
import { useQuery } from "@tanstack/react-query";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { fetchAllFeaturedProducts } from "@/admin/featuredProducts/service/featuredProductService";

export const useFeaturedProducts = () => {
  const { data, isLoading, isError, refetch } = useQuery<FeaturedProduct[], Error>({
    queryKey: ["admin-featured-products"],
    queryFn: () => fetchAllFeaturedProducts(false),
  });

  return {
    data: data ?? [],
    isLoading,
    isError,
    refetch,
  };
};
