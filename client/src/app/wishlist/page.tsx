"use client";

import React from "react";
import WishlistBanner from "@/components/shared/WishlistBanner/WishlistBanner";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";

const WishlistPage = () => {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div>
            <WishlistBanner />

            <div className="bg-white min-h-screen">
             <div className="container mx-auto px-10 py-25 ">
                   <table className="w-full min-w-[600px] border border-[#ccc]">
                    <thead>
                        <tr className="text-[#5a6069] text-[13px]">
                            <th className="p-3 border border-[#ccc]">Remove</th>
                            <th className="p-3 border border-[#ccc]">Image</th>
                            <th className="p-3 border border-[#ccc] text-center">Product Name</th>
                            <th className="p-3 border border-[#ccc] text-center">Unit Price</th>
                            <th className="p-3 border border-[#ccc] text-center">Add To Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map(item => (
                            <tr key={item._id} className="border border-[#ccc]  hover:bg-gray-50">
                                <td className="p-3  border border-[#ccc]">
                                    <button
                                        onClick={() => removeFromWishlist(item._id)}
                                        className="bg-[#181b23] text-white rounded-full mx-auto w-20 h-10 flex items-center justify-center hover:bg-[#e51515] transition"
                                        aria-label="Remove from wishlist"
                                    >
                                        ✕
                                    </button>
                                </td>
                                <td className="p-3  flex justify-center ">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={90}
                                        height={90}
                                        className="object-cover rounded"
                                    />
                                </td>
                                <td className="p-3 border border-[#ccc] primary-font text-center hover:text-[#e51515] font-semibold text-[12px] text-gray-800">
                                    {item.title}
                                </td>
                                <td className="p-3 border border-[#ccc] text-center text-[#e51515] font-bold text-sm">
                                    €{item.price.toFixed(2)}
                                </td>
                                <td className="p-3 border border-[#ccc] text-center">
                                    <button className="bg-[#181b23] text-white primary-font rounded-full px-6 py-3 font-semibold text-[12px] hover:bg-[#e51515] transition">
                                        ADD TO CART
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>


            </div>


        </div>
    );
};

export default WishlistPage;
