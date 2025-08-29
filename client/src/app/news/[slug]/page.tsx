

import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/data/articles";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";
import NewsBanner from '@/components/shared/NewsCrumb/banner'

const pages = [
    { label: "Home 1", href: "/" },
    { label: "Home 2", href: "https://aero-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" },
    { label: "Home 3", href: "https://aero-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" },
    { label: "Home 4", href: "https://aero-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" },
    { label: "Home 5", href: "https://aero-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" },
    { label: "Home Fashion", href: "https://aero-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" },
    { label: "Home Fashion Light", href: "https://aero-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" },
    { label: "Home Jewellery Dark", href: "https://aero-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" },
    { label: "Home Jewellery Light", href: "https://aero-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" },
];

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) notFound();

    return (
        <div>
            <NewsBanner title={article.title} />

            <div className="bg-white py-10 sm:py-16 lg:py-20">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-28">

                    {/* MAIN CONTENT */}
                    <div className="lg:col-span-8 flex flex-col gap-11">

                        {/* ARTICLE */}
                        <div className="flex flex-col sm:flex-row gap-6 border-b border-gray-200 pb-10 sm:pb-20">
                            <div className="flex-shrink-0 w-full sm:w-[220px] md:w-[270px] h-[250px] sm:h-[300px] md:h-[330px] relative">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    quality={100}
                                    className="object-cover rounded"
                                />
                            </div>

                            <div className="flex flex-col justify-between mt-4 sm:mt-0">
                                <div>
                                    <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-medium tracking-widest primary-font border-b pb-3 sm:pb-4 border-gray-200 uppercase text-[#181b23]">
                                        {article.title}
                                    </h2>
                                    <p className="text-[10px] sm:text-[11px] primary-font border-b tracking-wide border-gray-200 pb-2 pt-3 sm:pt-4 text-[#6c6f7a]">
                                        {article.date} / BY: {article.author}
                                    </p>
                                    <p className="text-[#5a6069] w-full sm:w-[500px] md:w-[600px] leading-relaxed whitespace-pre-line text-[13px] font-medium mt-4 sm:mt-5">
                                        {article.content}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* COMMENT FORM */}
                        <div className="border-b border-gray-200 pb-10 sm:pb-20 mt-5">
                            <h3 className="text-[20px] sm:text-[22px] text-[#181b23] primary-font font-medium uppercase mb-6">
                                Leave a Comment
                            </h3>
                            <p className="text-sm text-gray-500 mb-8 sm:mb-10">
                                Your email address will not be published.
                            </p>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border outline-none border-gray-300 p-3 text-sm rounded-md focus:outline-none"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email address *
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none"
                                            placeholder="Email address"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={6}
                                        className="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="bg-black text-white tracking-wide text-sm primary-font font-medium px-6 py-3 rounded-md hover:bg-gray-800 transition"
                                    >
                                        Post Comment
                                    </button>
                                </div>

                                <p className="text-sm text-gray-500 mt-4">
                                    Please note, comments must be approved before they are published.
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <aside className="lg:col-span-4 flex ml-8  flex-col gap-8 mt-10 lg:mt-0">

                        {/* SEARCH */}
                        <div className="relative w-full sm:w-[280px]">
                            <input
                                type="text"
                                placeholder="Search all articles..."
                                className="w-full secondary-font border-b-2 border-[#e51515] rounded-none py-2 text-[18px] sm:text-[20px] focus:outline-none placeholder:text-gray-500"
                            />
                            <IoSearchSharp
                                size={22}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#181b23]"
                            />
                        </div>

                        {/* PAGES */}
                        <div>
                            <h3 className="font-medium text-[#181b23] primary-font mb-6 text-[20px] sm:text-[22px]">
                                Home
                            </h3>
                            <ul className="flex flex-col gap-4 sm:gap-5 text-gray-700 text-sm">
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

                        {/* RECENT ARTICLES */}
                        <div className="mt-5">
                            <h3 className="font-medium primary-font text-[20px] sm:text-[22px] text-[#181b23] mb-3 sm:mb-6">
                                Recent Articles
                            </h3>

                            {articles.slice(0, 3).map((item) => (
                                <div key={item.id} className="mb-3 sm:mb-2 border-t border-gray-100 pt-4 sm:pt-5">
                                    <h4 className="text-sm hover:text-[#e51515] font-semibold text-[#6c6f7a] leading-snug uppercase">
                                        {item.title}
                                    </h4>
                                    <p className="text-[10px] sm:text-[11px] mt-1 sm:mt-2 text-[#6c6f7a] uppercase tracking-wide">
                                        {item.date} by {item.author}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* TAGS */}
                        <div className="mt-4">
                            <h3 className="font-medium primary-font text-[20px] sm:text-[22px] text-[#181b23] mb-3 sm:mb-4">
                                Tags Cloud
                            </h3>
                            <div className="w-full sm:w-[280px] h-[200px] sm:h-[340px] rounded overflow-hidden relative">
                                <Image
                                    src="https://aero-theme.myshopify.com/cdn/shop/files/img1-top-aero4.jpg?v=1613507331"
                                    alt="Tags Cloud"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>

    );
}
