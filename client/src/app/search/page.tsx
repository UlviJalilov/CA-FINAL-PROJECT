"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import ShopGrid from "@/components/shop/ShopGrid/ShopGrid";
import Navbar from "@/components/shared/Navbar/Navbar";
import SearchForm from "@/components/home/SearchForm/SearchForm";
import { CarProducts } from "@/components/home/CarProducts/CarProducts";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import CategorySection from "@/components/shop/CategorySection/CategorySection";


interface CarProduct {
  _id: string;
  make: string;
  carModel: string;
  year: number;
  image: string;
  title: string;
  price: number;
  hoverImage?: string;
  description?: string;
}

const fetchCarProducts = async (params: { make?: string; model?: string; year?: string; title?: string }) => {
  const queryParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value && value.trim() !== "") {
      queryParams.append(key === "model" ? "carModel" : key, value);
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
  const source = searchParams.get("source");
  

  const from = searchParams.get("from");
  const make = searchParams.get("make") || "";
  const model = searchParams.get("model") || "";
  const year = searchParams.get("year") || "";
  const title = searchParams.get("title") || "";

  const { data: products = [], isLoading, error } = useQuery<CarProduct[]>({
    queryKey: ["car-products", make, model, year, title],
    queryFn: () => fetchCarProducts({ make, model, year, title }),
    enabled: !!make || !!model || !!year || !!title,
  });

  const mappedProducts: FeaturedProduct[] = products.map((p) => ({
    _id: p._id,
    title: p.title,
    price: p.price,
    rating: 0,
    image: p.image,
    hoverImage: p.hoverImage,
    isFeatured: false,
    slug: p._id,
    description: p.description,
    oldPrice: 0,
    discountBtn: "",
  }));

  const images: string[] = products.map((p) => p.image);


  return (
    <div className={from === "shop" ? "bg-white min-h-screen" : "bg-[#0F111A] min-h-screen"}>
      <Navbar />
      {source === "home" && <SearchForm />}
      {from === "shop" && <CategorySection images={images} />}
      {isLoading && <p className="p-10 text-center">Loading...</p>}
      {error && <p className="p-10 text-center text-red-500">{error.message}</p>}

      {from === "home" && products.length > 0 && (
        <div className="grid grid-cols-1 py-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-10 xl:grid-cols-4 gap-5">
          {products.map((p) => (
            <CarProducts key={p._id} product={p} />
          ))}
        </div>
      )}

      {from === "shop" && mappedProducts.length > 0 && <ShopGrid products={mappedProducts} />}
    </div>
  );
}
