"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import OurProductCard from "../OurProductCard/OurProductCard";
import { filterProductsByTab, tabs } from "@/utils/filterProductsByTab";
import { useTabbedProducts } from "@/hooks/useTabbedProducts";

import { FaCar, FaCogs, FaGasPump } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";

const TabbedProductSlider = () => {
  const {
    products,
    loading,
    activeTab,
    prevTab,
    animating,
    handleTabClick,
  } = useTabbedProducts();

  const filteredProducts = useMemo(() => filterProductsByTab(products, activeTab), [products, activeTab]);

  if (loading) {
    return <div className="text-white text-center py-10">Loading products...</div>;
  }

  return (
    <div className="w-full container mx-auto px-10">
      <div className="w-full flex justify-center px-4 mt-25 mb-10">
        <div className="w-full md:w-3/4 lg:w-2/3 border-2 border-[#21252c] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 left-0 w-16 h-1 bg-yellow-400"></div>
          <div className="absolute top-0 left-0 w-1 h-16 bg-yellow-400"></div>
          <div className="absolute bottom-0 right-0 w-16 h-1 bg-yellow-400"></div>
          <div className="absolute bottom-0 right-0 w-1 h-16 bg-yellow-400"></div>

          <div className="flex items-center gap-3 justify-center text-white tracking-widest primary-font mb-4">
            <span className="text-yellow-400 text-xl rotate-12">
              <GiSteeringWheel />
            </span>
            <h1 className="text-xl tracking-wider uppercase primary-font font-bold text-white sm:text-2xl md:text-2xl text-center w-full">
              Our Products
            </h1>
            <span className="text-yellow-400 text-xl -rotate-12">
              <FaCar />
            </span>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#5a6069] text-[12px] md:text-[15px] font-medium leading-relaxed">
              Explore top-quality car parts and accessories designed for performance and style. Whether its wheels, engines, or interiors – we bring precision and power to your ride.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-6 text-yellow-400 text-xl">
            <FaCogs title="Performance" className="hover:scale-110 animate-pulse transition" />
            <FaGasPump title="Fuel System" className="hover:scale-110 animate-pulse transition" />
            <GiSteeringWheel title="Control" className="hover:scale-110 animate-pulse transition" />
            <FaCar title="Style" className="hover:scale-110 transition animate-pulse" />
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-12 justify-center flex-wrap items-center">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab;
          const isPrev = prevTab === tab;

          let className = `px-2 sm:px-4 rounded-full hover:text-yellow-400 primary-font uppercase transition font-medium `;
          if (isActive && !animating) className += "text-white animate-fadeIn";
          else if (isPrev && animating) className += "text-white animate-fadeOut";
          else className += "text-[#838896]";

          return (
            <div key={tab} className="flex items-center gap-2">
              <button onClick={() => handleTabClick(tab)} className={className}>
                {tab}
              </button>
              {index < tabs.length - 1 && (
                <span className="text-[#5a6069] text-xs sm:text-sm select-none">◆</span>
              )}
            </div>
          );
        })}
      </div>

      <div
        className={`transition-opacity duration-500 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
      >
        {filteredProducts.length > 0 ? (
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product._id}>
                <OurProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-gray-500">No products found for this tab.</div>
        )}
      </div>
    </div>
  );
};

export default TabbedProductSlider;
