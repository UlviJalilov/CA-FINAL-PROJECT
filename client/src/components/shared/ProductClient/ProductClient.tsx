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
        <div className="container mx-auto py-25 grid grid-cols-1 px-10 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div>
              <Image
                src={mainImage}
                alt={product.title}
                width={600}
                height={600}
                className="w-full rounded-[20px] object-contain"
                quality={100}
                sizes="(max-width: 768px) 100vw, 600px"
                priority
                unoptimized
              />
            </div>


            <div className="w-full max-w-6xl mx-auto px-4">
              <Swiper spaceBetween={5} slidesPerView={4} loop={true}>
                {productsToShow.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div
                      className={`w-[130px] h-[130px] bg-[#f5f5f5] rounded-[20px] p-1 cursor-pointer transition-all duration-300 ${item.image === mainImage ? "border border-red-500" : ""
                        }`}
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


          <div>
            <h1 className="text-[14px] text-[#181b23] primary-font font-medium mb-6">
              {product.title}
            </h1>

            <div className="flex mb-8">
              {Array.from({ length: 5 }, (_, i) => (
                <FaRegStar size={14} key={i} className="text-[#FF9800] mr-1" />
              ))}
            </div>

            <div className="flex items-center gap-4 mb-1">
              <span className="text-[#e51515] font-semibold text-[15px]">
                €{product.price}
              </span>
              {product.oldPrice && (
                <span className="line-through text-[15px] text-[#5a6069]">
                  €{product.oldPrice}
                </span>
              )}
              {product.discountPercent && (
                <span className="text-[#FF9800] font-semibold">
                  -{product.discountPercent}%
                </span>
              )}
            </div>

            <p className="mb-2 text-[#5a6069] text-[13px] font-medium">
              Availability:{" "}
              <span className="text-[#e51515] pl-1">In Stock</span>
            </p>

            <p className="text-gray-700 mt-3 mb-6">{product.description}</p>

            <div className="flex items-center gap-5 mb-7 mt-10">
              <label
                htmlFor="quantity"
                className="text-sm font-medium text-gray-700"
              >
                Qty:
              </label>
              <div className="flex items-center border rounded-full px-3 py-1 shadow-sm">
                <button
                  onClick={decrement}
                  className="text-lg px-2 text-gray-500 hover:text-black"
                >
                  –
                </button>
                <span className="w-6 text-center select-none">{quantity}</span>
                <button
                  onClick={increment}
                  className="text-lg px-2 text-gray-500 hover:text-black"
                >
                  +
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-3 py-3 text-gray-700 hover:bg-[#e51515] hover:text-white bg-gray-200 transition-all duration-300 rounded-full ">
                  <FaHeart />
                </button>
                <button
                  onClick={handleAddToCart}

                  className="px-10 py-2 bg-gray-200 text-gray-700 hover:bg-[#e51515] hover:text-white font-medium rounded-[20px] primary-font hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300">

                  ADD TO CART
                </button>
              </div>
            </div>

            <Link href = "/checkout">
              <button className="w-full bg-[#e51515] primary-font text-white hover:text-gray-700 font-medium py-2.5 rounded-[30px] text-[16px] hover:bg-gray-200 mb-6">
                BUY IT NOW
              </button>
            </Link>

            <div className="borderounded-md text-center">
              <div className="flex items-center w-[510px] h-full gap-4 flex-wrap">
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
      </div>
    </>
  );
}
