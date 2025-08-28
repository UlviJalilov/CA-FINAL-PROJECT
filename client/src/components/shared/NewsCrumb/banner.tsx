"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import NewsCrumb from "./breadcrumb";

interface NewsBannerProps {
    title?: string;
}

export default function NewsBanner({ title = "NEWS" }: NewsBannerProps) {
    return (
        <div>
            <div className="relative w-full h-[500px]">
                <Image
                    src="https://aero-theme.myshopify.com/cdn/shop/files/slider2-aero4-1920x943.jpg?v=1613507330"
                    alt="Register Banner Img"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    unoptimized={true}
                />
                <div className="absolute inset-0 flex justify-center flex-col gap-5 items-center">
                    <h1 className="text-white text-center text-5xl font-medium primary-font uppercase">
                        {title}
                    </h1>
                    <NewsCrumb title={title !== "NEWS" ? title : undefined} />
                </div>
            </div>

            <Navbar />
        </div>
    );
}
