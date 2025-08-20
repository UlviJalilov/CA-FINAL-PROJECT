"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { FaHeart, FaSignal, FaEye, FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";
import ProductFilterBar from "../ProductFilterBar/ProductFilterBar";
import ShopSearchSidebar from "../ShopSearchSidebar/ShopSearchSidebar";
import LoadMoreButton from "@/components/shared/LoadMoreButton/LoadMoreButton";

const Dialog = dynamic(() => import("@mui/material/Dialog"), { ssr: false });

type Props = {
  products: FeaturedProduct[];
  carProducts?: FeaturedProduct[];
  defaultView?: "grid" | "gridLarge" | "list" | "listLarge";
};

const modalVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, y: "100%", transition: { duration: 0.3, ease: easeIn } },
};

export default function ShopGrid({ products, carProducts = [], defaultView }: Props) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<FeaturedProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeView, setActiveView] = useState(defaultView || "grid");

  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);


  const gridClasses: Record<string, string> = {
    grid: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    gridLarge: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
    list: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    listLarge: "grid-cols-1",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleAddToWishlist = (product: FeaturedProduct) => {
    const exists = wishlist.some((item) => item._id === product._id);
    if (exists) {
      removeFromWishlist(product._id);
      toast.success("Product removed from wishlist.", { style: { borderRadius: "15px", background: "#333", color: "#fff" } });
    } else {
      addToWishlist(product);
      toast.success("Product added to wishlist.", { style: { borderRadius: "15px", background: "#e51515", color: "#fff" } });
    }
  };

  const handleQuickViewClick = (product: FeaturedProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
    setQuantity(1);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleAddToCart = (product: FeaturedProduct) => {
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
    });
    toast.success("Congratulations! Your item has been added.", { style: { borderRadius: "15px", background: "#e51515", color: "#fff" } });
  };


  return (
    <div className="container mx-auto bg-white px-4 sm:px-6 md:px-10 py-6 md:py-10 grid grid-cols-12 gap-6">

      <div className="col-span-12 md:col-span-3 bg-white p-4 rounded shadow">
        <ShopSearchSidebar />
      </div>


      <div className="col-span-12 md:col-span-9 flex flex-col gap-6">

        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-md text-sm gap-4 sm:gap-0">
          <ProductFilterBar
            activeView={activeView}
            onViewChange={(view: string) => setActiveView(view as "grid" | "gridLarge" | "list" | "listLarge")}
          />
        </div>


     
        <div className={`grid ${gridClasses[activeView]} gap-4 sm:gap-6`}>
          <AnimatePresence>
            {products.map((product) => (
              <motion.div
                key={product._id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-[20px] overflow-hidden border border-[#ccc] w-full
          ${activeView === "list"
                    ? "flex flex-col h-[320px] sm:h-[400px]"
                    : activeView === "listLarge"
                      ? "flex flex-col sm:flex-row min-h-[260px]"
                      : activeView === "gridLarge"
                        ? "flex flex-col h-[400px] sm:h-[470px]"
                        : "flex flex-col h-auto"
                  }`}
              >

                <div className="actions text-[#363c45] absolute top-3 left-3 flex flex-col gap-2 sm:gap-3 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                  <div className="relative">
                    <FaHeart
                      onClick={() => handleAddToWishlist(product)}
                      size={20}
                      className="cursor-pointer hover:text-[#e51515] transition peer"
                    />
                  </div>
                  <Link href={`/product/${product.slug}`}>
                    <div className="relative cursor-pointer">
                      <FaSignal size={20} className="hover:text-[#f29101] transition peer" />
                    </div>
                  </Link>
                  <div className="relative">
                    <FaEye
                      size={20}
                      className="cursor-pointer hover:text-[#0af] transition peer"
                      onClick={(e) => handleQuickViewClick(product, e)}
                    />
                  </div>
                </div>


                <Link
                  href={`/product/${product.slug}`}
                  className={`${activeView === "listLarge"
                    ? "relative block overflow-hidden w-full sm:w-[45%] h-[220px] sm:h-auto"
                    : "relative block overflow-hidden w-full h-[200px] sm:h-[290px]"
                    }`}
                >
                  <div className="relative w-full h-full">
                 
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />

                  
                    {product.hoverImage && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-full"
                      >
                        <Image
                          src={product.hoverImage}
                          alt={product.title + " Hover"}
                          fill
                          className="object-cover w-full h-full"
                        />
                      </motion.div>
                    )}
                  </div>
                </Link>


                <div
                  className={`${activeView === "listLarge"
                    ? "featured-content p-3 sm:p-6 flex flex-col flex-1 justify-between"
                    : "featured-content p-3 sm:p-4 flex flex-col flex-1"
                    }`}
                >
                  <div className="stars border-b border-[#ccc] pb-2 sm:pb-4 flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaRegStar size={14} key={i} className="text-[#f29101]" />
                    ))}
                  </div>

                  <h2 className="text-[13px] sm:text-[14px] text-[#181b23] font-medium primary-font border-b border-[#ccc] pt-2 sm:pt-4 pb-2 sm:pb-4">
                    {product.title}
                  </h2>

                  {activeView === "listLarge" && (
                    <p className="text-[12px] sm:text-[13px] text-[#666] mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  )}

                  <div className="flex items-center gap-2 pt-2 sm:pt-4">
                    <span className="text-[#e51515] font-medium primary-font text-[14px] sm:text-[15px]">
                      €{product.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="group flex gap-2 sm:gap-3 w-full py-3 sm:py-4 mt-4 sm:mt-8 rounded-[25px] justify-center items-center bg-[#efefef] hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 text-[#838896] hover:text-white"
                  >
                    <FiShoppingCart />
                    <span className="text-[11px] sm:text-[12px] primary-font font-medium">ADD TO CART</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


        {visibleCount > 0 && carProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {carProducts.slice(0, visibleCount).map((product) => (
              <motion.div key={product._id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
                className="group relative rounded-[20px] overflow-hidden border border-[#ccc] w-full flex flex-col h-[400px] sm:h-[470px]"
              >
               
                <div className="actions text-[#363c45] absolute top-3 left-3 flex flex-col gap-2 sm:gap-3 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                  <div className="relative">
                    <FaHeart onClick={() => handleAddToWishlist(product)} size={20} className="cursor-pointer hover:text-[#e51515] transition peer" />
                  </div>
                  <Link href={`/product/${product.slug}`}>
                    <div className="relative cursor-pointer">
                      <FaSignal size={20} className="hover:text-[#f29101] transition peer" />
                    </div>
                  </Link>
                  <div className="relative">
                    <FaEye size={20} className="cursor-pointer hover:text-[#0af] transition peer" onClick={(e) => handleQuickViewClick(product, e)} />
                  </div>
                </div>

                <Link href={`/product/${product.slug}`} className="relative block overflow-hidden w-full h-[200px] sm:h-[290px]">
                  <Image src={product.image} alt={product.title} fill className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105" />
                </Link>

                <div className="featured-content p-3 sm:p-4 flex flex-col flex-1">
                  <div className="stars border-b border-[#ccc] pb-2 sm:pb-4 flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaRegStar size={14} key={i} className="text-[#f29101]" />
                    ))}
                  </div>

                  <h2 className="text-[13px] sm:text-[14px] text-[#181b23] font-medium primary-font border-b border-[#ccc] pt-2 sm:pt-4 pb-2 sm:pb-4">
                    {product.title}
                  </h2>

                  <div className="flex items-center gap-2 pt-2 sm:pt-4">
                    <span className="text-[#e51515] font-medium primary-font text-[14px] sm:text-[15px]">€{product.price.toFixed(2)}</span>
                  </div>

                  <button onClick={() => handleAddToCart(product)}
                    className="group flex gap-2 sm:gap-3 w-full py-3 sm:py-4 mt-4 sm:mt-8 rounded-[25px] justify-center items-center bg-[#efefef] hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 text-[#838896] hover:text-white">
                    <FiShoppingCart />
                    <span className="text-[11px] sm:text-[12px] primary-font font-medium">ADD TO CART</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}



        <div className="flex justify-center mt-6">

          <LoadMoreButton
            total={carProducts.length}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
            loading={loading}
            setLoading={setLoading}
          />
        </div>


      </div>


      <AnimatePresence>
        {open && selectedProduct && (
          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <motion.div className="!p-5 bg-[#fff] text-black relative rounded-lg" variants={modalVariants} initial="hidden" animate="visible" exit="exit">
              <button onClick={handleClose} className="absolute top-3 right-3 text-black hover:text-[#e51515]">
                <IoClose size={25} />
              </button>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="w-full md:w-1/2 relative h-[220px] sm:h-[300px] md:h-[400px] group rounded-lg overflow-hidden">
                  <Image src={selectedProduct.image} alt={selectedProduct.title} fill className="object-cover rounded-lg" />
                  {selectedProduct.hoverImage && (
                    <Image src={selectedProduct.hoverImage} alt={selectedProduct.title + " Hover"} fill className="object-cover rounded-lg absolute top-0 left-0 opacity-0 group-hover:opacity-100" />
                  )}
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left">
                  <h2 className="text-[20px] sm:text-[22px] md:text-[24px] text-[#181b23] primary-font font-medium mb-2">{selectedProduct.title}</h2>

                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    <span className="text-[#e51515] text-base sm:text-lg font-semibold">€{selectedProduct.price.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-10">
                    <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className="w-12 sm:w-16 text-center border border-gray-300 rounded h-8 sm:h-10" />
                    <button
                      onClick={() => {
                        handleAddToCart(selectedProduct);
                        handleClose();
                      }}
                      className="py-2 px-8 sm:px-12 bg-[#e51515] hover:bg-[#ff1f1f] transition text-white font-semibold h-8 sm:h-10 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-gray-400 mt-4 sm:mt-10">{selectedProduct.description}</p>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
