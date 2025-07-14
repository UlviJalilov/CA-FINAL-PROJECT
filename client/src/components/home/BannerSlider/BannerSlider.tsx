'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from 'framer-motion';


export default function BannerSlider() {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sliderImages = [
    "https://aero-theme.myshopify.com/cdn/shop/files/slider3-aero1-1920x846_1920x846.progressive.jpg?v=1613506944",
    "https://aero-theme.myshopify.com/cdn/shop/files/slider2-aero1-1920x846_1920x846.progressive.jpg?v=1613506944",
    "https://aero-theme.myshopify.com/cdn/shop/files/slider1-aero1-1920x846_1920x846.progressive.jpg?v=1613506944",
  ];

 const animationVariants = [
  {
    
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  {
   
    initial: { x: 100, scale: 1, opacity: 1 },
    animate: { x: 0, scale: 1, opacity: 1 },
  },

{
  initial: {
    x: -600,
    rotate: -25,
    skewX: 30,
    scale: 0.95,
    opacity: 0.3,
  },
  animate: {
    x: [-600, -400, -250, -100, -30, 0, -5, 0], 
    rotate: [-25, -15, -10, -5, -2, 0],
    skewX: [30, 20, 10, 5, 0],
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: [0.6, 0.01, 0, 0.95] as const 
    },
  },
}



];

  return (
    <div className="w-full overflow-hidden group relative">
      {isClient && (
        <Swiper
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {sliderImages.map((src, index) => {
            const { initial, animate,  } = animationVariants[index] || animationVariants[0];

            return (
              <SwiperSlide key={index}>
                <motion.div
                  key={activeIndex + '-' + index} 
                  initial={initial}
                  animate={animate}
                  
                  transition={{ duration: 5, ease: "easeInOut" }} 
                  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                >
                  <Image
                    src={src}
                    alt={`Slider Image ${index + 1}`}
                    fill
                    quality={100}
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
