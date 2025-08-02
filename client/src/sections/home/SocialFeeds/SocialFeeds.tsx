'use client'


import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';




export default function SocialFeeds() {
    return (
        <div>

            <div className="w-full flex justify-center px-4 mt-22 mb-15">
                <div className="w-full md:w-3/4 lg:w-2/3 border-2 border-[#21252c] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300 ">

                    <div className="absolute top-0 left-0 w-16 h-1 bg-yellow-500"></div>
                    <div className="absolute top-0 left-0 w-1 h-16 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-1 bg-yellow-500"></div>
                    <div className="absolute bottom-0 right-0 w-1 h-16 bg-yellow-500"></div>

                    <div className="flex items-center gap-3 justify-center text-yellow-400 tracking-widest font-bold uppercase primary-font mb-4">
                        <span className="text-2xl md:text-xl animate-pulse">
                            <FaInstagram />
                        </span>
                        <h1 className="text-xl text-white sm:text-2xl md:text-2xl text-center w-full">
                            # AERO ON INSTAGRAM
                        </h1>
                        <span className="text-2xl md:text-xl animate-pulse">
                            <FaInstagram />
                        </span>
                    </div>

                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-[#5a6069] text-[15px] md:text-base font-medium leading-relaxed">
                            How us how you are styling your Rare pieces on Instagram with the hashtag #Presiden.
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 mt-6 text-yellow-400 text-xl">
                        <FaFacebookF title="Facebook" className="hover:scale-110 transition cursor-pointer" />
                        <FaTwitter title="Twitter" className="hover:scale-110 transition cursor-pointer" />
                        <FaYoutube title="YouTube" className="hover:scale-110 transition cursor-pointer" />
                        <FaInstagram title="Instagram" className="hover:scale-110 transition cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <Swiper
                    slidesPerView={1} 
                    spaceBetween={0}
                    autoplay={true}
                    loop={true}
                    pagination={false}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper justify-center items-center flex"
                    breakpoints={{
                        640: {
                            slidesPerView: 2, 
                        },
                        768: {
                            slidesPerView: 3, 
                        },
                        1024: {
                            slidesPerView: 4, 
                        },
                        1280: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {[
                        "https://aero-theme.myshopify.com/cdn/shop/files/lights.png?v=1725587910",
                        "https://aero-theme.myshopify.com/cdn/shop/files/15986.jpg?v=1744762351",
                        "https://aero-theme.myshopify.com/cdn/shop/files/2147963020.jpg?v=1744762351",
                        "https://aero-theme.myshopify.com/cdn/shop/files/2148194066.jpg?v=1744762351",
                        "https://aero-theme.myshopify.com/cdn/shop/files/2147881282.jpg?v=1744762351",
                        "https://aero-theme.myshopify.com/cdn/shop/files/181.jpg?v=1744762351",
                        "https://aero-theme.myshopify.com/cdn/shop/files/12264.jpg?v=1744762352",
                    ].map((src, index) => (
                        <SwiperSlide
                            key={index}
                            className="border-b border-[#21252c] pb-20 flex justify-center"
                        >
                            <a
                                href="https://www.instagram.com/explore/search/keyword/?q=%23autoparts"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="insta-card block w-[250px] overflow-hidden mx-auto"
                            >
                                <Image
                                    src={src}
                                    alt={`social img ${index + 1}`}
                                    width={250}
                                    height={250}
                                    className="object-cover w-full h-full"
                                    quality={100}
                                    priority
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
