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

            <div className="bg-white py-20">
                <div className="max-w-[1200px] mx-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-28">


                    <div className="lg:col-span-8 flex flex-col gap-11">
                        <div className="flex gap-6 border-b border-gray-200 pb-20">
                            <div className="flex-shrink-0 w-[270px] h-[330px] relative">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    quality={100}
                                    className="object-cover rounded"
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <h2 className="text-[30px] font-medium tracking-widest primary-font border-b pb-4 border-gray-200 uppercase text-[#181b23]">
                                        {article.title}
                                    </h2>
                                    <p className="text-[11px] primary-font border-b tracking-wide border-gray-200 pb-2 pt-4 text-[#6c6f7a]">
                                        {article.date} / BY: {article.author}
                                    </p>
                                    <p className="text-[#5a6069] w-[600px] leading-relaxed whitespace-pre-line text-[13px] font-medium mt-5 ">
                                        {article.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <aside className="lg:col-span-4 flex ml-10 flex-col gap-8">

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search all articles..."
                                className="w-[250px] secondary-font border-b-1 border-[#e51515] rounded-none  py-2 text-[20px] focus:outline-none placeholder:text-gray-500"
                            />
                            <IoSearchSharp size={25} className="absolute right-14 top-1/2 transform -translate-y-1/2 text-[#181b23]" />
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


                        <div className="mt-5">
                            <h3 className="font-medium primary-font text-[22px] text-[#181b23] mb-3">Recent Articles</h3>

                            {articles.slice(0, 3).map((item) => (
                                <div key={item.id} className="mb-2 border-t border-gray-100 pt-5">
                                    <h4 className="text-sm hover:text-[#e51515] font-semibold text-[#6c6f7a] leading-snug uppercase">
                                        {item.title}
                                    </h4>
                                    <p className="text-[11px] mt-2 text-[#6c6f7a] uppercase tracking-wide">
                                        {item.date} by {item.author}
                                    </p>
                                </div>
                            ))}
                        </div>


                        <div className="mt-4">
                            <h3 className="font-medium primary-font text-[22px] text-[#181b23] mb-4">Tags Cloud</h3>
                            <div className="w-[280px] h-[340px] rounded overflow-hidden relative">
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
