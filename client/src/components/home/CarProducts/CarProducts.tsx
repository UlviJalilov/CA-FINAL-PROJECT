"use client";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";

interface Product {
  _id: string;
  image: string;
  title: string;
  price: number;
  rating?: number;
  description?: string;
}

export function CarProducts({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [isHover, setIsHover] = useState(false);


  const handleAddToCart = () => {
    console.log("Adding product to cart:", product);
    addToCart({
      id: product._id,
      title: product.title,
      image: product.image,
      price: product.price,
    });
  };

  const renderStars = () => {
    const stars = [];
    const rating = product.rating ?? 0;
    const fullStars = Math.floor(rating);
    const maxStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStar key={`full-${i}`} className="text-[#f29101] w-5 h-5" />);
    }
    for (let i = fullStars; i < maxStars; i++) {
      stars.push(<IoStarOutline key={`empty-${i}`} className="text-[#f29101] w-5 h-5" />);
    }
    return stars;
  };

  return (
    <div className="border-2 border-[#21252c]  rounded-[20px] max-w-[400px] w-full overflow-hidden group text-white flex flex-col">

      <div
        className="relative w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[250px] overflow-hidden group"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >

        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            x: isHover ? [0, -5, 5, -3, 3, 0] : 0,
          }}
          transition={{
            duration: isHover ? 0.8 : 1,
            ease: "easeInOut",
            repeat: isHover ? Infinity : 0,
          }}
          className="w-full h-full"
        >
          <Image
            src={product.image}
            alt={product.title}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </motion.div>


        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[25deg] sweep-auto"></div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHover ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center text-white text-3xl pointer-events-none"
        >
          <FiShoppingCart className="drop-shadow-lg" />
        </motion.div>


        <style jsx>{`
        .sweep-auto {
          animation: sweep 2s ease-in-out infinite;
          animation-delay: 2s;
        }
        @keyframes sweep {
          0% {
            left: -75%;
          }
          20% {
            left: 125%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>
      </div>


      <div className="p-5 flex gap-5 flex-col flex-grow justify-between">
        <div className="mb-3">
          <div className="flex justify-center mb-2">{renderStars()}</div>

          <motion.h3
            className="text-center text-[15px] font-semibold text-[#838896] leading-snug border-b border-[#2a2c32] pb-3 cursor-pointer"
            whileHover={{
              color: "#d4af37", 
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            {product.title}
          </motion.h3>

          {product.description && (
            <motion.p
              className="mt-3 text-center text-gray-500 text-sm line-clamp-3 border-b border-[#2a2c32] pb-3"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {product.description}
            </motion.p>
          )}

          <motion.p
            className="mt-4 text-center text-[#e51515] font-medium text-xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ${product.price.toFixed(2)}
          </motion.p>
        </div>

        <button
          className="mt-6 bg-[#21252c] w-full hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] text-[#838896] hover:text-white py-3 rounded-[25px] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
          aria-label={`Add ${product.title} to cart`}
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
          ADD TO CART
        </button>
      </div>

    </div>

  );
}
