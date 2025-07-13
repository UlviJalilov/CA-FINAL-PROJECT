"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { CarProducts } from "@/components/home/CarProducts/CarProducts";
import Navbar from "@/components/shared/Navbar/Navbar";
import SearchForm from "@/components/home/SearchForm/SearchForm";

interface Product {
  make: string;
  model: string;
  year: string;
  image: string;
  price: number;
  title: string;
  id: string;
}


const fetchProducts = async ({
  make,
  model,
  year,
  title,
}: {
  make: string;
  model: string;
  year: string;
  title: string;
}) => {
  const params = new URLSearchParams();

  if (make) params.append("make", make);
  if (model) params.append("model", model);
  if (year) params.append("year", year);
  if (title) params.append("title", title);

  const res = await fetch(
    `http://localhost:3001/api/products?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
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
    queryFn: () =>
      fetchProducts({
        make,
        model,
        year,
        title,
      }),
    enabled: !!make || !!model || !!year || !!title,
  });

  console.log("products:", products);

  return (
    <>
      <Navbar />
      <SearchForm />
      {isLoading && <p className="p-10 text-center">Loading...</p>}
      {error && (
        <p className="p-10 text-center text-red-500">
          Error fetching products
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10">
        {products.map((p) => (
          <CarProducts key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
