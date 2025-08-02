"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const textVariant = {
  animate: {
    scale: [1, 1.05, 1],
    rotate: [0, 1, -1, 0],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 5,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "loop" as const,
      times: [0, 0.5, 1],
    },
  },
  initial: {
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
};

const DriveHighlights = () => {
  const [hoveredCards, setHoveredCards] = useState<boolean[]>([false, false]);

  const handleMouseEnter = (index: number) => {
    const newHover = [...hoveredCards];
    newHover[index] = true;
    setHoveredCards(newHover);
  };

  const handleMouseLeave = (index: number) => {
    const newHover = [...hoveredCards];
    newHover[index] = false;
    setHoveredCards(newHover);
  };

  return (
    <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            label: "NEW ARRIVALS",
            title: "GOOD HELP & GUARD",
            img: "https://aero-theme.myshopify.com/cdn/shop/files/img1-bottom-aero1.jpg?v=1613507033",
          },
          {
            label: "BESTSELLER PRODUCTS",
            title: "TOP 10 VEHICLES OFF WEEK",
            img: "https://aero-theme.myshopify.com/cdn/shop/files/img2-bottom-aero1.jpg?v=1613507033",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative w-full h-[350px] overflow-hidden rounded-lg"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <Image
              src={item.img}
              fill
              quality={100}
              alt={item.title}
              className="object-cover"
              priority={true}
            />
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
              variants={textVariant}
              animate={hoveredCards[idx] ? "initial" : "animate"}
              initial="initial"
            >
              <p className="text-white font-medium primary-font text-sm md:text-[14px] uppercase tracking-wide">
                {item.label}
              </p>
              <h1 className="text-[#ffde00] text-xl md:text-3xl font-bold tracking-widest primary-font mt-2 mb-5">
                {item.title}
              </h1>
              <p className="text-white text-xs md:text-sm max-w-xl font-medium leading-relaxed">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros
              </p>
              <Link
                href="/collection"
                className="inline-flex mt-8 text-[12px] group items-center pl-6 pr-2 py-1 rounded-full bg-white text-[#333] font-semibold transition duration-300 hover:bg-[#e51515] hover:text-white"
              >
                VIEW COLLECTION
                <span className="ml-3 w-10 h-10 flex items-center justify-center bg-[#333] text-white rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <FaArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriveHighlights;
