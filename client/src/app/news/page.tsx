"use client"

import React from 'react'
import NewsBanner from '@/components/shared/NewsCrumb/banner'
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import Link from 'next/link';
import { articles } from "@/data/articles";




const pages = [
    { label: "Home 1", href: "/" },
    { label: "Home 2", href: "#" },
    { label: "Home 3", href: "#" },
    { label: "Home 4", href: "#" },
    { label: "Home 5", href: "#" },
    { label: "Home Fashion", href: "#" },
    { label: "Home Fashion Light", href: "#" },
    { label: "Home Jewellery Dark", href: "#" },
    { label: "Home Jewellery Light", href: "#" },
];

const page = () => {
    return (
        <div>
            <NewsBanner />
            <div className="bg-white py-20 ">
                <div className="max-w-[1200px] mx-auto  py-8 grid grid-cols-1 lg:grid-cols-12 gap-20">

                    <div className="lg:col-span-8 flex flex-col gap-11">
                        {articles.map((article) => (
                            <div
                                key={article.id}
                                className="flex gap-6 border-b border-gray-200 pb-6 last:border-b-0"
                            >
                                <div className="flex-shrink-0 w-[200px] h-[250px] relative">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-[22px] primary-font border-b pb-4 border-gray-200 uppercase text-[#6c6f7a]">
                                            {article.title}
                                        </h2>
                                        <p className="text-[11px] primary-font border-b tracking-wide border-gray-200 pb-2 pt-2 text-[#6c6f7a] ">
                                            {article.date} / BY: {article.author}
                                        </p>
                                        <p className="text-[#5a6069] text-[13px] font-medium mt-3">{article.excerpt}</p>
                                    </div>
                                    <Link href={`/news/${article.slug}`}>
                                        <button className="mt-4 transition-all duration-300 ease-in-out hover:scale-105 primary-font tracking-widest w-[150px] flex justify-center items-center uppercase gap-2 bg-[#181b23] text-white px-4 py-3 text-[12px] rounded-[20px] hover:bg-[#e51515]">
                                            READ MORE <FaArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <aside className="lg:col-span-4 flex flex-col gap-8">

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search all articles..."
                                className="w-[250px] secondary-font border-b-1 border-[#e51515] rounded-none  py-2 text-[20px] focus:outline-none placeholder:text-gray-500"
                            />
                            <IoSearchSharp size={25} className="absolute right-28 tracking-wider top-1/2 transform -translate-y-1/2 text-[#181b23] " />
                        </div>


                        <div>
                            <h3 className="font-medium text-[#181b23] primary-font mb-6 text-[22px]">Home</h3>
                            <ul className="flex flex-col gap-5 text-gray-700 text-sm">
                                {pages.map((item, index) => (
                                    <li key={index} className="flex font-medium text-[#6c6f7a] items-center gap-3">
                                        <Link href={item.href} className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 border border-[#efefef] rounded-sm accent-red-500 pointer-events-none"
                                            />
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-12">
                            <h3 className="font-medium primary-font text-[22px] text-[#181b23] mb-6">Recent Articles</h3>

                            <div className="mb-6">
                                <h4 className="text-sm  hover:text-[#e51515] font-semibold text-[#6c6f7a] leading-snug uppercase">
                                    LADIPISCING ERAT LLENTESQUE PELLENTESQUE ETON
                                </h4>
                                <p className="text-[11px] mt-2 text-[#6c6f7a] uppercase tracking-wide">Aug 25, 2021 by Elomus-theme admin</p>
                            </div>

                            <div className="mb-6 border-t border-gray-100 pt-5">
                                <h4 className="text-sm hover:text-[#e51515] font-semibold text-[#6c6f7a] leading-snug uppercase">
                                    CLARITAS EST ETIAM PROCESSUS DYNAMICUS.
                                </h4>
                                <p className="text-[11px] mt-2 text-[#6c6f7a] uppercase tracking-wide">Feb 24, 2018 by Aero-theme admin</p>
                            </div>

                            <div className="mb-6 border-t border-gray-100 pt-5">
                                <h4 className="text-sm hover:text-[#e51515] font-semibold text-[#6c6f7a] leading-snug uppercase">
                                    CLARITAS EST ETIAM PROCESSUS DYNAMICUS.
                                </h4>
                                <p className="text-[11px] mt-2 text-[#6c6f7a] uppercase tracking-wide">Feb 24, 2018 by Aero-theme admin</p>
                            </div>
                        </div>


                        <div className="mt-12">
                            <h3 className="font-bold text-lg text-[#181b23] mb-6">Tags Cloud</h3>
                            <div className="w-[280px] h-[340px] rounded overflow-hidden relative">
                                <Image
                                    src="https://aero-theme.myshopify.com/cdn/shop/files/img2-top-aero4.jpg?v=1613507331"
                                    alt="Tags Cloud"
                                    fill
                                    className="object-cover"
                                    quality={100}
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    priority
                                />
                            </div>

                        </div>

                    </aside>
                </div>
            </div>
        </div>
    )
}

export default page
