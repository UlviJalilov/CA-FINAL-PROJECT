"use client";

import Image from "next/image";

interface CategoryItem {
    title: string;
    image: string;
}

interface Props {
    images: string[];
}

export default function CategorySection({ images }: Props) {
    const titles = [
        "Sounds",
        "Wheels",
        "Featured",
        "Jewelry",
        "Diamonds",
        "Fashion",
    ];

    const categories: CategoryItem[] = titles.map((title, index) => ({
        title,
        image: images[index] || "",
    }));

    return (
        <section className="py-20">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-cols-6">
                    {categories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-42 h-42 cursor-pointer rounded-full border-1 border-gray-200 flex items-center justify-center overflow-hidden bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-shadow duration-500 ease-in-out hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]">
                                {cat.image && (
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                                        priority
                                        unoptimized
                                    />
                                )}
                            </div>


                            <span className="mt-4 primary-font text-[20px] cursor-pointer text-[#181b23] hover:text-[#e51515] font-medium">{cat.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
