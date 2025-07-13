"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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

export default function SearchPage() {
  const searchParams = useSearchParams();

  const make = searchParams.get("make") || "";
  const model = searchParams.get("model") || "";
  const year = searchParams.get("year") || "";

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const params = new URLSearchParams();

      if (make) params.append("make", make);
      if (model) params.append("model", model);
      if (year) params.append("year", year);

      const res = await fetch(
        `http://localhost:3001/api/products?${params.toString()}`,
        { cache: "no-store" }
      );

      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    }

    fetchProducts();
  }, [make, model, year]);

  console.log("products:", products);

  return (
    <>
     
      <Navbar />
      <SearchForm />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10">
        {products.map((p) => (
          <CarProducts key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
