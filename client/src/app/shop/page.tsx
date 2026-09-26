import React from "react";

import ShopBanner from "@/components/shop/ShopBanner/ShopBanner";
import CategorySection from "@/components/shop/CategorySection/CategorySection";
import ShopGrid from "@/components/shop/ShopGrid/ShopGrid";

import { FeaturedProduct } from "@/types/FeaturedProduct";

export default async function ShopPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/featured-products`, {
    cache: "no-store",
  });

  const resCars = await fetch(`${API_URL}/car-products`, {
    cache: "no-store",
  });

  const carProducts: FeaturedProduct[] = await resCars.json();
  const products: FeaturedProduct[] = await res.json();

  const images: string[] = products.map((p) => p.image);

  return (
    <div className="bg-white">
      <ShopBanner />
      <CategorySection images={images} />
      <ShopGrid products={products} carProducts={carProducts} />
    </div>
  );
}