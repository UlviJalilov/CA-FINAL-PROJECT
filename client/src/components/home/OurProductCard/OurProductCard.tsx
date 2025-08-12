"use client";

import Image from "next/image";
import { FaHeart, FaSignal, FaEye, FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { IoClose } from "react-icons/io5";
import { easeIn, easeOut } from "framer-motion";
import Link from "next/link"

const Dialog = dynamic(() => import("@mui/material/Dialog"), { ssr: false });

type Props = {
  product: FeaturedProduct;
};

const modalVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, y: "100%", transition: { duration: 0.3, ease: easeIn } },
};

const OurProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;



  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity,
    });

    toast.success("Congratulations! Your item has been added.", {
      style: {
        borderRadius: "15px",
        background: "#e51515",
        color: "#fff",
        fontSize: "15px",
        padding: "15px 16px",
      },
      iconTheme: {
        primary: "#e51515",
        secondary: "#fff",
      },
    });
  };

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="group border-2 border-[#21252c] rounded-[20px] w-full max-w-[320px] mx-auto overflow-hidden min-h-[550px] flex flex-col relative">
        <div className="actions text-[#363c45] absolute top-5 left-5 flex flex-col gap-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
          <div className="relative">
            <FaHeart size={21} className="cursor-pointer hover:text-[#e51515] transition peer" />
            <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#e51515] text-[12px] font-medium text-white px-2 py-[2px] rounded shadow-md whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-hover:translate-y-1 transition-all duration-300 z-20">
              Add to Wishlist
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-0 h-0 border-y-[5px] border-r-[5px] border-y-transparent border-r-[#e51515]" />
            </div>
          </div>

          <Link href={`/product/${product.slug}`}>
            <div className="relative">
              <FaSignal size={21} className="cursor-pointer hover:text-[#f29101] transition peer" />
              <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#e51515] text-[12px] font-medium text-white px-2 py-[2px] rounded shadow-md whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-hover:translate-y-1 transition-all duration-300 z-20">
                View Details
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-0 h-0 border-y-[5px] border-r-[5px] border-y-transparent border-r-[#e51515]" />
              </div>
            </div>
          </Link>

          <div className="relative">
            <FaEye
              size={21}
              className="cursor-pointer hover:text-[#0af] transition peer"
              onClick={handleOpen}
            />
            <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#e51515] text-[12px] font-medium text-white px-2 py-[2px] rounded shadow-md whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-hover:translate-y-1 transition-all duration-300 z-20">
              Quick View
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-0 h-0 border-y-[5px] border-r-[5px] border-y-transparent border-r-[#e51515]" />
            </div>
          </div>
        </div>

        <div className="featured-img group relative w-full h-[290px] flex justify-center items-center overflow-hidden rounded-2xl border-2 border-transparent hover:border-yellow-400 transition-colors duration-500 shadow-lg hover:shadow-yellow-500/40">
          <Image
            src={product.image}
            alt={product.title}
            fill
            quality={100}
            className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:blur-sm group-hover:scale-105"
          />
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt={product.title + " Hover"}
              fill
              quality={100}
              className="object-cover w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-8 transition-all duration-700 ease-in-out"
              style={{ transformOrigin: "left center" }}
            />
          )}

          {product.discountBtn && (
            <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold z-10 shadow-md">
              {product.discountBtn}
            </span>
          )}
        </div>

        <div className="featured-content py-5 p-4">
          <div className="stars border-b border-[#2a2c32] pb-4 flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <FaRegStar key={i} className="text-[#f29101]" />
            ))}
          </div>

          <h2 className="text-[12px] primary-font text-[#838896] font-semibold border-b border-[#2a2c32] pt-4 pb-4">
            {product.title}
          </h2>

          <div className="flex primary-font items-center gap-2 pt-4">
            {product.discountPercent && (
              <span className="relative bg-[#ffd700] text-[#444] text-[13px] font-semibold px-2 py-1 rounded-sm mr-1">
                -{product.discountPercent}%
                <span className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 w-0 h-0 border-y-[5px] border-l-[6px] border-y-transparent border-l-[#ffd700]" />
              </span>
            )}
            <span className="text-[#e51515] font-medium text-[15px]">
              €{product.price.toFixed(2)}
            </span>
            {typeof product.oldPrice === "number" && product.oldPrice > 0 && (
              <span className="line-through text-gray-400 text-sm">
                €{product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            className="group flex gap-3 w-full py-4 mt-8 rounded-[25px] justify-center items-center bg-[#21252c] hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300"
            onClick={handleAddToCart}
          >
            <motion.div
              className="text-[#838896] group-hover:text-white"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FiShoppingCart className="text-[#838896] group-hover:text-white" />
            </motion.div>

            <span className="text-[#838896] group-hover:text-white text-sm font-medium">
              ADD TO CART
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <motion.div
              className="!p-5 bg-[#fff] text-black relative rounded-lg"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key="modal"
            >
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-black hover:text-[#e51515]"
              >
                <IoClose className="hover:text-[#e51515]" size={25} />
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Image */}
                <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] group rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                  />
                  {product.hoverImage && (
                    <Image
                      src={product.hoverImage}
                      alt={product.title + " Hover"}
                      fill
                      className="object-cover rounded-lg absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    />
                  )}
                </div>

                {/* Right: Product Info */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                  <div>
                    <h2 className="text-[24px] text-[#181b23] hover:text-yellow-500 primary-font font-medium mb-2">
                      {product.title}
                    </h2>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#e51515] text-lg font-semibold">
                        €{product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          €{product.oldPrice.toFixed(2)}
                        </span>
                      )}

                      {product.discountPercent && (
                        <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">
                          -{product.discountPercent}%
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-10">
                      <input
                        type="number"
                        min={1}
                        value={quantity}

                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (val > 0) setQuantity(val);
                        }}
                        className="w-16 text-center border border-gray-300 outline-none rounded h-10"
                      />
                      <button
                        onClick={() => {
                          handleAddToCart();
                          handleClose();
                        }}
                        className="py-2 px-12 bg-[#e51515] hover:bg-[#ff1f1f] transition text-white font-semibold h-10 rounded"
                      >
                        Add to Cart
                      </button>
                    </div>

                    <p className="text-sm text-gray-400 mt-10">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default OurProductCard;
