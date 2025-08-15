"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import RelatedCard from "../RelatedCard/RelatedCard";

type Props = {
    products: FeaturedProduct[];
};

export default function RelatedProductsSlider({ products }: Props) {
    if (!products?.length) {
        return <div className="text-center text-gray-500">No related products found.</div>;
    }

    return (
        <div className="container mx-auto px-10">
            <div className="related-products-header py-15 pb-3">
                <h2 className="primary-font">RELATED PRODUCTS</h2>
                <p>Order online and have your products delivered to your closest store for free</p>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product._id}>
                        <RelatedCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
