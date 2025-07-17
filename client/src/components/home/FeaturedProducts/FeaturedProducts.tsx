"use client"

import { FaStar } from "react-icons/fa";
import FeaturedProductCard from "../FeaturedProductCard/FeaturedProductCard";

const FeaturedProducts = () => {
    return (
        <div className="pt-25">
            <div>
                <div className="relative flex-col gap-6 flex items-center justify-center py-10">
                    <div className="section-banner border border-[#2a2c32] py-4 text-white justify-center flex items-center gap-4 text-[16px] font-bold tracking-widest uppercase w-fit">
                        <FaStar size={14} />
                        <h1 className="primary-font text-[20px]">Featured Products</h1>
                        <FaStar size={14} />
                    </div>
                    <div><p className="text-[#5a6069] text-[14px]">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p></div>
                </div>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    <FeaturedProductCard />
                </div>
            </div>

        </div>
    )
}

export default FeaturedProducts
