"use client";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";


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
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[280px] lg:h-[250px]">
        <Image
          src={product.image}
          alt={product.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>

      <div className="p-5 flex gap-5 flex-col flex-grow justify-between">
        <div className="mb-3">
          <div className="flex justify-center mb-2">{renderStars()}</div>

          <h3 className="text-center text-[15px] font-semibold text-[#838896] leading-snug border-b border-[#2a2c32] pb-3">
            {product.title}
          </h3>

          {product.description && (
            <p className="mt-3 text-center text-gray-500 text-sm line-clamp-3 border-b border-[#2a2c32] pb-3">
              {product.description}
            </p>
          )}

          <p className="mt-4 text-center text-[#e51515] font-medium text-xl">
            ${product.price.toFixed(2)}
          </p>
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
