"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaSignal } from "react-icons/fa6";
import { FaEye, FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { toast } from 'react-hot-toast';


type Props = {
    product: FeaturedProduct;
};

const RelatedCard = ({ product }: Props) => {

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

    return (

        <div className="group rounded-[20px] w-full max-w-[320px] mx-auto overflow-hidden min-h-[540px] flex flex-col border border-[#ccc]">

            <div className="actions text-[#363c45] absolute top-5 left-5 flex flex-col gap-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">

                <div className="relative">
                    <FaHeart size={21} className="cursor-pointer hover:text-[#e51515] transition peer" />
                    <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#e51515] text-[12px] font-medium text-white px-2 py-[2px] rounded shadow-md whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-hover:translate-y-1 transition-all duration-300 z-20">
                        Add to Wishlist
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-0 h-0 border-y-[5px] border-r-[5px] border-y-transparent border-r-[#e51515]" />
                    </div>
                </div>


                <div className="relative">
                    <FaSignal size={21} className="cursor-pointer hover:text-[#f29101] transition peer" />
                    <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#e51515] text-[12px] font-medium text-white px-2 py-[2px] rounded shadow-md whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-hover:translate-y-1 transition-all duration-300 z-20">
                        View Details
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-0 h-0 border-y-[5px] border-r-[5px] border-y-transparent border-r-[#e51515]" />
                    </div>
                </div>


                <div className="relative">
                    <FaEye size={21} className="cursor-pointer hover:text-[#0af] transition peer" />
                    <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-[#e51515] text-[12px] font-medium text-white px-2 py-[2px] rounded shadow-md whitespace-nowrap opacity-0 peer-hover:opacity-100 peer-hover:translate-y-1 transition-all duration-300 z-20">
                        Quick View
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[5px] w-0 h-0 border-y-[5px] border-r-[5px] border-y-transparent border-r-[#e51515]" />
                    </div>
                </div>
            </div>


            <div className="featured-img group relative w-full h-[290px] flex justify-center items-center overflow-hidden rounded-t-[20px] ">
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
                        style={{ transformOrigin: 'left center' }}
                    />
                )}

                {product.discountBtn && (
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold z-10 shadow-md">
                        {product.discountBtn}
                    </span>
                )}
            </div>



            <div className="featured-content py-5 p-4">
                <div className="stars border-b border-[#ccc] pb-4 flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaRegStar key={i} className="text-[#f29101]" />
                    ))}
                </div>

                <h2 className="text-[12px] primary-font text-[#181b2] font-semibold border-b border-[#ccc] pt-4 pb-4">
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
                    className="group flex gap-3 w-full py-4 mt-8 rounded-[25px] justify-center items-center bg-[#efefef] hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300
             text-[#838896] hover:text-white"
                    onClick={handleAddToCart}
                >
                    <motion.div
                        className="animate-bounce" 
                    >
                        <FiShoppingCart />
                    </motion.div>

                    <span className="primary-font text-[12px] font-medium">
                        ADD TO CART
                    </span>
                </button>


            </div>
        </div>

    );
};

export default RelatedCard;
