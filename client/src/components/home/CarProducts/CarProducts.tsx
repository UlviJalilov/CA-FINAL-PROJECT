"use client"

import Image from "next/image"
interface Product {
    image: string;
    title: string;
    price: number;
}

export function CarProducts({ product }: { product: Product }) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col w-full max-w-xs mx-auto">
            <div className="relative  w-full h-48 md:h-56">
                <Image
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow justify-between">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <h3 className="text-center text-gray-800 text-base font-semibold">
                        {product.title}
                    </h3>
                    <p className="text-center text-red-600 font-bold text-lg">
                        ${Number(product.price).toFixed(2)}
                    </p>
                </div>

                <button
                    className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-2 rounded-lg font-semibold text-sm hover:from-red-600 hover:to-red-800 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8h13.2L17 13M7 13h10"
                        />
                    </svg>
                    ADD TO CART
                </button>
            </div>
        </div>

    );
}
