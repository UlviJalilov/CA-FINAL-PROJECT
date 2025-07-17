"use client"

import Image from "next/image"
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";



const FeaturedProductCard = () => {
    return (
        <div>
            <div className="featured-card border-1 rounded-[20px] group overflow-hidden">
                <div className="featured-img flex justify-center items-center relative ">
                    <Image
                        src="https://aero-theme.myshopify.com/cdn/shop/products/1-600x600_400x400_crop_center.jpg?v=1519628616"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                        alt="Default Image"
                    />
                    <Image
                        src="https://aero-theme.myshopify.com/cdn/shop/products/2-600x600_400x400_crop_center.jpg?v=1519628616"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        alt="Hover Image"
                    />
                </div>
                <div className="featured-content p-4">
                    <div className="stars border-b border-[#2a2c32] pb-4 flex items-center">
                        <FaRegStar className="text-yellow-500" />
                        <FaRegStar className="text-yellow-500" />
                        <FaRegStar className="text-yellow-500" />
                        <FaRegStar className="text-yellow-500" />
                        <FaRegStar className="text-yellow-500" />
                    </div>
                    <div className="content">
                        <h2 className="border-[#2a2c32] primary-font font-medium text-[13px] text-[#838896] border-b pb-4 pt-4">AOPO DESIGNS WOOLRICH KLETTERSACK</h2>
                        <p className="border-[#2a2c32] text-[14px] font-medium text-[#5a6069] border-b pb-4 pt-4">Born to be worn. Clip on the worlds most wearable music player and take up to 240 songs with you anywhere. Choose from five colors including four <br /> new hues to...</p>
                        <div className="prices pt-4">
                            <span className="text-[#e51515] font-medium text-[15px]">$128.40</span>
                        </div>

                        <Link className="flex gap-3 py-4 mt-8 rounded-[25px] hover:bg-[#e51515] justify-center items-center bg-[#21252c]" href="/">
                            <span><FiShoppingCart className="text-[#838896]" /></span>
                            <span className="text-[#838896] font-medium text-[13px] primary-font"> ADD TO CARD</span>
                        </Link>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default FeaturedProductCard
