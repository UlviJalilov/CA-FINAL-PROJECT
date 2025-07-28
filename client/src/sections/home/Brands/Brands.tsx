"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaEdit, FaGem, FaHeart } from "react-icons/fa";
import Image from 'next/image';
import { Navigation, Pagination, } from "swiper/modules";

import 'swiper/css';
import "swiper/css/navigation";


export default function Brands() {
    return (
        <>

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
                        <h1 className="text-xl text-white sm:text-2xl md:text-2xl">
                            LOGO BRANDS & CLIENTS
                        </h1>
                        <span className="text-2xl md:text-xl animate-pulse">
                            <FaStar />
                        </span>
                    </div>


                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-[#5a6069] text-[15px] md:text-base font-medium leading-relaxed">
                            Trusted by leading automotive brands and valued clients across the industry.
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 mt-6 text-yellow-400 text-xl">
                        <FaEdit title="Author's Pick" className="hover:scale-110 transition" />
                        <FaGem title="In-Depth" className="hover:scale-110 transition" />
                        <FaHeart title="Readers' Favorite" className="hover:scale-110 transition" />
                        <FaStar title="Editor's Choice" className="hover:scale-110 transition" />
                    </div>

                </div>
            </div>
            <div className="container mx-auto px-4">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        },
                    }}
                >
                    {[
                        'br-01', 'br-02', 'br-03', 'br-04', 'br-06'
                    ].map((brand, index) => (
                        <SwiperSlide key={index}>
                            <div className="brand flex justify-center items-center">
                                <div className="brand-img w-[130px] h-[100px] flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={`https://aero-theme.myshopify.com/cdn/shop/files/${brand}.png?v=1613507407`}
                                        alt={`Brand ${index + 1}`}
                                        width={130}
                                        height={100}
                                        quality={100}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}


                    <SwiperSlide>
                        <div className="brand flex justify-center items-center">
                            <div className="brand-img w-[130px] h-[100px] flex items-center justify-center overflow-hidden">
                                <Image
                                    src={`https://aero-theme.myshopify.com/cdn/shop/files/br-05.png?v=1613507407`}
                                    alt={"sdad"}
                                    width={130}
                                    height={100}
                                    quality={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand flex justify-center items-center">
                            <div className="brand-img w-[130px] h-[100px] flex items-center justify-center overflow-hidden">
                                <Image
                                    src={`https://aero-theme.myshopify.com/cdn/shop/files/br-01.png?v=1613507407`}
                                    alt={"sdad"}
                                    width={130}
                                    height={100}
                                    quality={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand flex justify-center items-center">
                            <div className="brand-img w-[130px] h-[100px] flex items-center justify-center overflow-hidden">
                                <Image
                                    src={`https://aero-theme.myshopify.com/cdn/shop/files/br-02.png?v=1613507407`}
                                    alt={"sdad"}
                                    width={130}
                                    height={100}
                                    quality={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand flex justify-center items-center">
                            <div className="brand-img w-[130px] h-[100px] flex items-center justify-center overflow-hidden">
                                <Image
                                    src={`https://aero-theme.myshopify.com/cdn/shop/files/br-03.png?v=1613507407`}
                                    alt={"sdad"}
                                    width={130}
                                    height={100}
                                    quality={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
}
