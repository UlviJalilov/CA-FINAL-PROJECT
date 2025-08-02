"use client"

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariant = {
    animate: {
        y: [30, 0, 30],
        opacity: [0, 1, 0],
        transition: {
            duration: 4,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "loop" as const,
            times: [0, 0.1, 1],
        },
    },
    initial: {
        y: 0,
        opacity: 1,
    },
};

const Collections = () => {
    const [hoveredCards, setHoveredCards] = useState<boolean[]>([false, false, false]);

    const handleMouseEnter = (index: number) => {
        const newHover = [...hoveredCards];
        newHover[index] = true;
        setHoveredCards(newHover);
    };

    const handleMouseLeave = (index: number) => {
        const newHover = [...hoveredCards];
        newHover[index] = false;
        setHoveredCards(newHover);
    };

    const cards = [
        {
            img: "https://aero-theme.myshopify.com/cdn/shop/files/img1-top-aero1.jpg?v=1613507033",
            title: "New Collection",
            subtitle: "New Trending 2017 - 2018",
            sale: "Sale up to 20% off",
        },
        {
            img: "https://aero-theme.myshopify.com/cdn/shop/files/img2-top-aero1.jpg?v=1613507033",
            title: "Best Low Price",
            subtitle: "High Performance",
            sale: "Sale up to 10% off",
        },
        {
            img: "https://aero-theme.myshopify.com/cdn/shop/files/img3-top-aero1.jpg?v=1613507033",
            title: "Honda Motorcycles",
            subtitle: "Red Sale Ends April 30",
            sale: "Sale up to 40% off",
        },
    ];

    return (
        <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="collection-card group overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className="collection-img relative w-[380px] h-[204px]">
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover"
                                quality={100}
                            />
                            <motion.div
                                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4 z-10"
                                variants={textVariant}
                                animate={hoveredCards[index] ? "initial" : "animate"}
                                initial="initial"
                            >
                                <p className="text-lg uppercase primary-font font-medium tracking-widest">
                                    {card.title}
                                </p>

                                <h3 className="text-2xl primary-font uppercase font-medium text-yellow-400 mt-1">
                                    {card.subtitle}
                                </h3>

                                <p className="text-[13px] primary-font font-medium uppercase mt-3">
                                    {card.sale}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collections;
