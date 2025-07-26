import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAllCarProducts, deleteCarProduct } from "../service/carProductService";
import { CarProduct } from "@/types/CarProduct";
export const useCarProducts = () => {
  const queryClient = useQueryClient();

  const productsQuery = useQuery<CarProduct[], Error>({
    queryKey: ["car-products"],
    queryFn: fetchAllCarProducts,
  });

  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: deleteCarProduct,
    onSuccess: (_data, id) => {
      queryClient.setQueryData<CarProduct[]>(["car-products"], old =>
        old ? old.filter(p => p._id !== id) : []
      );
    },
  });

  const refetch = () => queryClient.invalidateQueries({ queryKey: ["car-products"] });

  return {
    ...productsQuery,
    deleteMutation,
    refetch,
  };
};
