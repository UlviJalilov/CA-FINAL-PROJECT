"use client";

import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { FaHeart } from "react-icons/fa";
import { FaSignal } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

import { useCart } from "@/context/CartContext"; 



type Props = {
  product: FeaturedProduct;
};



const FeaturedProductCard = ({ product }: Props) => {

  const { addToCart } = useCart();

  
const handleAddToCart = () => {
  console.log("Adding product to cart:", product);
  addToCart({
    id: product._id,
    title: product.title,
    image: product.image,
    price: product.price,
  });
};


  return (
    <>
      <div className=" group border-2 border-[#21252c] rounded-[20px] w-full sm:w-[340px] md:w-[360px] lg:w-[380px] group overflow-hidden relative">
        <div className="actions text-[#363c45] absolute top-5 left-5 flex flex-col gap-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">

          <div className="relative">
            <FaHeart
              size={21}
              className="cursor-pointer hover:text-[#e51515] transition relative peer"
            />
            <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#e51515] text-[12px] font-medium text-[#fff] px-2 py-[2px] rounded shadow-md whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-hover:translate-y-1 transition-all duration-300 z-20">
              Add to Wishlist
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-0 h-0 border-t-[5px] border-b-[5px] border-r-[5px] border-t-transparent border-b-transparent border-r-[#e51515]" />
            </div>
          </div>


          <div className="relative">
            <FaSignal
              size={21}
              className="cursor-pointer hover:text-[#f29101] transition relative peer"
            />
            <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#e51515] text-[12px] font-medium text-[#fff] px-2 py-[2px] rounded shadow-md whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-hover:translate-y-1 transition-all duration-300 z-20">
              View Details
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-0 h-0 border-t-[5px] border-b-[5px] border-r-[5px] border-t-transparent border-b-transparent border-r-[#e51515]" />
            </div>
          </div>


          <div className="relative">
            <FaEye
              size={21}
              className="cursor-pointer hover:text-[#0af] transition relative peer"
            />
            <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#e51515] text-[12px] font-medium text-[#fff] px-2 py-[2px] rounded shadow-md whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-hover:translate-y-1 transition-all duration-300 z-20">
              Quick View
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-0 h-0 border-t-[5px] border-b-[5px] border-r-[5px] border-t-transparent border-b-transparent border-r-[#e51515]" />
            </div>
          </div>

        </div>


        <div className="featured-img group relative w-full h-[350px] flex justify-center items-center overflow-hidden rounded-2xl border-2 border-transparent hover:border-[#e51515] transition-colors duration-500 shadow-lg hover:shadow-[#e51515]">

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
              className="object-cover w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-95 group-hover:scale-100"
            />
          )}


          {product.discountBtn && (
            <span className="absolute top-3 right-3 bg-[#e51515] text-white text-xs px-3 py-1 rounded-full font-semibold z-10 shadow-md">
              {product.discountBtn}
            </span>
          )}
        </div>


        <div className="featured-content py-7 p-4">
          <div className="stars border-b border-[#2a2c32] pb-4 flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <FaRegStar key={i} className="text-[#f29101]" />
            ))}
          </div>
          <h2 className="text-[12px] primary-font text-[#838896] font-semibold border-b border-[#2a2c32] pt-4 pb-4">
            {product.title}
          </h2>
          {product.description && (
            <p className="text-sm border-b border-[#2a2c32] pb-4 text-gray-500 pt-4">{product.description}</p>
          )}
          <div className="flex primary-font items-center gap-2 pt-4">
            {product.discountPercent && (
              <span className="relative bg-[#ffd700] text-[#444] text-[13px] font-semibold px-2 py-1 rounded-sm mr-1 overflow-visible">
                -{product.discountPercent}%
                <span className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-t-transparent border-b-transparent border-l-[#ffd700]" />
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
          <button className="group w-full flex gap-3 py-4 mt-8 rounded-[25px] justify-center items-center bg-[#21252c] hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300"
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
              <FiShoppingCart />
            </motion.div>
            <span className="text-[#838896] primary-font group-hover:text-white text-[13px] font-medium">
              ADD TO CART
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductCard;
