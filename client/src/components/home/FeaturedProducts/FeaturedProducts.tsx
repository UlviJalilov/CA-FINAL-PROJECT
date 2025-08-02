"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FeaturedProductCard from "@/components/home/FeaturedProductCard/FeaturedProductCard";
import { useFeaturedProducts } from "@/hooks/useFeaturedProducts";
import { FaStar ,FaBolt, FaGem, FaHeart } from "react-icons/fa";

const FeaturedSlider = () => {
  const { data: products, isLoading, isError } = useFeaturedProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !products) return <p>Something went wrong!</p>;


  const featuredProducts = products.filter((product) => product.isFeatured);

  return (
    <div className="container mx-auto py-20 px-8">

      <div className="w-full flex justify-center px-4 mt-15 mb-15">
        <div className="w-full md:w-3/4 lg:w-2/3 border-2 border-[#21252c] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300 ">
       
          <div className="absolute top-0 left-0 w-16 h-1 bg-yellow-500"></div>
          <div className="absolute top-0 left-0 w-1 h-16 bg-yellow-500"></div>
          <div className="absolute bottom-0 right-0 w-16 h-1 bg-yellow-500"></div>
          <div className="absolute bottom-0 right-0 w-1 h-16 bg-yellow-500"></div>

        
          <div className="flex items-center gap-3 justify-center text-yellow-400 tracking-widest font-bold uppercase primary-font mb-4">
            <span className="text-2xl md:text-xl animate-pulse">
              <FaStar />
            </span>
            <h1 className="text-xl text-white sm:text-2xl md:text-2xl text-center w-full">
              Featured Products
            </h1>
            <span className="text-2xl md:text-xl animate-pulse">
              <FaStar />
            </span>
          </div>

       
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#5a6069] text-[15px] md:text-base font-medium leading-relaxed">
              Discover our carefully selected featured products that combine quality and style to elevate your vehicle.
            </p>
          </div>

        
          <div className="flex justify-center gap-6 mt-6 text-yellow-400 text-xl">
            <FaBolt title="Power" className="hover:scale-110 transition" />
            <FaGem title="Quality" className="hover:scale-110 transition" />
            <FaHeart title="Favorite" className="hover:scale-110 transition" />
            <FaStar title="Featured" className="hover:scale-110 transition" />
          </div>
        </div>
      </div>


      <Swiper
        className="cursor-grab active:cursor-grabbing"
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        navigation
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <FeaturedProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedSlider;
