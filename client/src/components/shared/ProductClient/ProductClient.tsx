"use client";

import { useState } from "react";
import Image from "next/image";
import { FaRegStar, FaHeart } from "react-icons/fa";
import DetailBanner from "../DetailBanner/DetailBanner";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFeaturedProducts } from "@/hooks/useFeaturedProducts";
import { useCart } from "@/context/CartContext";
import { toast } from 'react-hot-toast';
import Link from "next/link"
import TabComponent from "../TabComponent/TabComponent";
import RelatedProductsSlider from "../RelatedProductsSlider/RelatedProductsSlider";

import "swiper/css";

type Props = {
  product: FeaturedProduct;
};

export default function ProductClient({ product }: Props) {
  const { data: featuredProducts = [] } = useFeaturedProducts();
  const productsToShow = featuredProducts.slice(0, 7);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Adding product to cart:", product);
    addToCart({
      id: product._id,
      title: product.title,
      image: product.image,
      price: product.price,
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



  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <>
      <DetailBanner title={product.title} />
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-16 border-b border-[#ccc] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Main Image + Carousel */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="w-full max-w-full mx-auto rounded-[20px] overflow-hidden">
              <Image
                src={mainImage}
                alt={product.title}
                width={600}
                height={600}
                className="w-full object-contain rounded-[20px]"
                quality={100}
                sizes="(max-width: 768px) 100vw, 600px"
                priority
                unoptimized
              />
            </div>

            <div className="w-full max-w-[560px] mx-auto px-4 md:px-0">
              <Swiper
                spaceBetween={5}
                loop={true}
                slidesPerView={4}
                className="!overflow-hidden"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 4 }
                }}
              >
                {productsToShow.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div
                      className={`w-[130px] h-[130px] bg-[#f5f5f5] rounded-[20px] p-1 cursor-pointer transition-all duration-300 ${item.image === mainImage ? "border border-red-500" : ""}`}
                      onClick={() => handleImageClick(item.image)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={130}
                        height={130}
                        className="w-full h-full object-contain rounded-[16px] hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <h1 className="text-[16px] md:text-[18px] text-[#181b23] primary-font font-medium mb-6 md:mb-8 leading-tight">
              {product.title}
            </h1>

            <div className="flex mb-6 md:mb-8">
              {Array.from({ length: 5 }, (_, i) => (
                <FaRegStar size={16} key={i} className="text-[#FF9800] mr-1" />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-3 md:mb-4">
              <span className="text-[#e51515] font-semibold text-[16px] md:text-[18px]">
                €{product.price}
              </span>
              {product.oldPrice && (
                <span className="line-through text-[14px] md:text-[16px] text-[#5a6069]">
                  €{product.oldPrice}
                </span>
              )}
              {product.discountPercent && (
                <span className="text-[#FF9800] font-semibold text-[14px] md:text-[16px]">
                  -{product.discountPercent}%
                </span>
              )}
            </div>

            <p className="mb-3 text-[#5a6069] text-[14px] font-medium">
              Availability: <span className="text-[#e51515] pl-1">In Stock</span>
            </p>

            <p className="text-gray-700 mt-3 mb-8 text-[14px] md:text-[15px] leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 mb-8 mt-auto">
              <label
                htmlFor="quantity"
                className="text-sm font-medium text-gray-700 whitespace-nowrap"
              >
                Qty:
              </label>
              <div className="flex items-center border rounded-full px-3 py-1 shadow-sm">
                <button
                  onClick={decrement}
                  className="text-lg px-2 text-gray-500 hover:text-black select-none"
                  aria-label="Decrease quantity"
                >
                  –
                </button>
                <span className="w-8 text-center select-none">{quantity}</span>
                <button
                  onClick={increment}
                  className="text-lg px-2 text-gray-500 hover:text-black select-none"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button
                  aria-label="Add to favorites"
                  className="px-3 py-3 text-gray-700 hover:bg-[#e51515] hover:text-white bg-gray-200 transition-all duration-300 rounded-full"
                >
                  <FaHeart />
                </button>
                <button
                  onClick={handleAddToCart}
                  className="px-10 py-2 bg-gray-200 text-gray-700 hover:bg-[#e51515] hover:text-white font-medium rounded-[20px] primary-font hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 whitespace-nowrap"
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            <Link href="/checkout" passHref>
              <button className="w-full bg-[#e51515] primary-font text-white hover:text-gray-700 font-medium py-3 rounded-[30px] text-[16px] hover:bg-gray-200 mb-6 transition-colors duration-300">
                BUY IT NOW
              </button>
            </Link>

            <div className="text-center mt-auto">
              <div className="flex items-center justify-center w-full max-w-[510px] mx-auto gap-4 flex-wrap">
                <Image
                  src="https://aero-theme.myshopify.com/cdn/shop/files/trust-badge.png?v=1624807369"
                  alt="Stripe"
                  width={510}
                  height={100}
                  quality={100}
                  priority
                  unoptimized
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>


        <TabComponent />
        <RelatedProductsSlider products={featuredProducts} />
      </div>
    </>
  );
}
