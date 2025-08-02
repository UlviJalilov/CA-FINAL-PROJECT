import { useState, useEffect } from "react";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { fetchAllFeaturedProducts } from "@/admin/featuredProducts/service/featuredProductService";
import { tabs } from "@/utils/filterProductsByTab";

export const useTabbedProducts = () => {
  const [products, setProducts] = useState<FeaturedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [prevTab, setPrevTab] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllFeaturedProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleTabClick = (tab: string) => {
    if (tab === activeTab || animating) return;

    setPrevTab(activeTab);
    setAnimating(true);

    setTimeout(() => {
      setActiveTab(tab);
      setAnimating(false);
      setPrevTab(null);
    }, 600);
  };

  return {
    products,
    loading,
    activeTab,
    prevTab,
    animating,
    handleTabClick,
    setActiveTab,
  };
};
