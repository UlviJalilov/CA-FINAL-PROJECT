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


const Dialog = dynamic(() => import("@mui/material/Dialog"), { ssr: false });

type Props = {
  products: FeaturedProduct[];
};

const modalVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, y: "100%", transition: { duration: 0.3, ease: easeIn } },
};

export default function ShopGrid({ products }: Props) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<FeaturedProduct | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleAddToWishlist = (product: FeaturedProduct) => {
    const exists = wishlist.some((item) => item._id === product._id);
    if (exists) {
      removeFromWishlist(product._id);
      toast.success("Product removed from wishlist.", {
        style: { borderRadius: "15px", background: "#333", color: "#fff" },
      });
    } else {
      addToWishlist(product);
      toast.success("Product added to wishlist.", {
        style: { borderRadius: "15px", background: "#e51515", color: "#fff" },
      });
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
    toast.success("Congratulations! Your item has been added.", {
      style: { borderRadius: "15px", background: "#e51515", color: "#fff" },
    });
  };

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-12 gap-6">
      {/* LEFT FILTER PANEL */}
      <div className="col-span-3 bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-4">Filter By Year, Make, Model</h3>
      </div>

    
      <div className="col-span-9 flex flex-col gap-6">
     
        <div className="w-full flex items-center justify-between  rounded-md px-4 text-sm">
          <ProductFilterBar />
        </div>
   
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="group relative rounded-[20px] w-full max-w-[320px] mx-auto overflow-hidden min-h-[540px] flex flex-col border border-[#ccc]"
            >
           
              <div className="actions text-[#363c45] absolute top-5 left-5 flex flex-col gap-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 z-10">
                <div className="relative">
                  <FaHeart
                    onClick={() => handleAddToWishlist(product)}
                    size={21}
                    className="cursor-pointer hover:text-[#e51515] transition peer"
                  />
                </div>

                <Link href={`/product/${product.slug}`}>
                  <div className="relative cursor-pointer">
                    <FaSignal size={21} className="hover:text-[#f29101] transition peer" />
                  </div>
                </Link>

                <div className="relative">
                  <FaEye
                    size={21}
                    className="cursor-pointer hover:text-[#0af] transition peer"
                    onClick={(e) => handleQuickViewClick(product, e)}
                  />
                </div>
              </div>

             
              <Link href={`/product/${product.slug}`}>
                <div className="featured-img relative w-full h-[290px] flex justify-center items-center overflow-hidden rounded-t-[20px] group">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    quality={100}
                    className="object-cover w-full h-full transition-transform duration-800 ease-in-out group-hover:scale-105 group-hover:blur-sm"
                  />
                  {product.hoverImage && (
                    <Image
                      src={product.hoverImage}
                      alt={product.title + " Hover"}
                      fill
                      quality={100}
                      className="object-cover w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-in-out"
                    />
                  )}
                </div>
              </Link>

            
              <div className="featured-content py-5 p-4 flex flex-col flex-1">
                <div className="stars border-b border-[#ccc] pb-4 flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaRegStar size={15} key={i} className="text-[#f29101]" />
                  ))}
                </div>

                <h2 className="text-[12px] text-[#181b23] font-medium primary-font border-b border-[#ccc] pt-4 pb-4">
                  {product.title}
                </h2>

                <div className="flex items-center gap-2 pt-4">
                  <span className="text-[#e51515] font-medium primary-font text-[15px]">
                    €{product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="group flex gap-3 w-full py-4 mt-8 rounded-[25px] justify-center items-center bg-[#efefef] hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 text-[#838896] hover:text-white"
                >
                  <FiShoppingCart />
                  <span className="text-[12px] primary-font font-medium">ADD TO CART</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

   
      <AnimatePresence>
        {open && selectedProduct && (
          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <motion.div
              className="!p-5 bg-[#fff] text-black relative rounded-lg"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-black hover:text-[#e51515]"
              >
                <IoClose size={25} />
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] group rounded-lg overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  {selectedProduct.hoverImage && (
                    <Image
                      src={selectedProduct.hoverImage}
                      alt={selectedProduct.title + " Hover"}
                      fill
                      className="object-cover rounded-lg absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                    />
                  )}
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                  <h2 className="text-[24px] text-[#181b23] primary-font font-medium mb-2">
                    {selectedProduct.title}
                  </h2>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#e51515] text-lg font-semibold">
                      €{selectedProduct.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-10">
                    <input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-16 text-center border border-gray-300 rounded h-10"
                    />
                    <button
                      onClick={() => {
                        handleAddToCart(selectedProduct);
                        handleClose();
                      }}
                      className="py-2 px-12 bg-[#e51515] hover:bg-[#ff1f1f] transition text-white font-semibold h-10 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <p className="text-sm text-gray-400 mt-10">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>

  );
}
