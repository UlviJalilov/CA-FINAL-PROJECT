"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { CarProducts } from "@/components/home/CarProducts/CarProducts";
import Navbar from "@/components/shared/Navbar/Navbar";
import SearchForm from "@/components/home/SearchForm/SearchForm";

interface Product {
  _id: string;
  make: string;
  carModel: string;  
  year: number;
  image: string;
  price: number;
  title: string;
  id: string;
}

const fetchProducts = async (params: { make?: string; model?: string; year?: string; title?: string }) => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value && value.trim() !== "") {
      
      if (key === "model") {
        queryParams.append("carModel", value);
      } else {
        queryParams.append(key, value);
      }
    }
  });

  const res = await fetch(`http://localhost:3001/api/car-products?${queryParams.toString()}`, { cache: "no-store" });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to fetch products");
  }

  return res.json();
};

export default function SearchPage() {
  const searchParams = useSearchParams();

  const make = searchParams.get("make") || "";
  const model = searchParams.get("model") || "";
  const year = searchParams.get("year") || "";
  const title = searchParams.get("title") || "";

  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: ["products", make, model, year, title],
    queryFn: () => fetchProducts({ make, model, year, title }),
    enabled: !!make || !!model || !!year || !!title,
  });

  return (
    <>
      <Navbar />
      <SearchForm />
      {isLoading && <p className="p-10 text-center">Loading...</p>}
      {error && <p className="p-10 text-center text-red-500">{error.message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-10  xl:grid-cols-4 gap-5">
        {products.map((p) => (
          <CarProducts key={p._id} product={p} />
        ))}
      </div>
    </>
  );
}
