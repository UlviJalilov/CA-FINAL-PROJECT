"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { useEffect } from "react";

type WishlistContextType = {
  wishlist: FeaturedProduct[];
  addToWishlist: (product: FeaturedProduct) => void;
  removeFromWishlist: (id: string) => void;

  
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<FeaturedProduct[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist));
      } catch {
        setWishlist([]);
      }
    }
  }, []);

   useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product: FeaturedProduct) => {
    setWishlist(prev => {
      if (prev.find(p => p._id === product._id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(prev => prev.filter(p => p._id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
};
