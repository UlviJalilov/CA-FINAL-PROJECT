"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `flex items-center gap-3 px-6 py-3 rounded-xl transition duration-300 shadow-lg shadow-[#7f63f4]/70 ${
      pathname === path
        ? "bg-[#7f63f4] text-[#0f0c1c] font-semibold"
        : "bg-[#161f5e] hover:bg-[#7f63f4] hover:text-[#0f0c1c]"
    }`;

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#05081a] via-[#0a0f2f] to-[#04061a] text-gray-300 font-sans">
      <aside className="w-64 bg-gradient-to-b from-[#0b1333] to-[#080b27] p-6 flex flex-col justify-between shadow-2xl shadow-[#1a234a]/80 border-r border-[#1a234a]/80 rounded-tr-xl rounded-br-xl">
        <div>
          <h2 className="text-3xl font-extrabold text-[#7f63f4] mb-14 tracking-wide uppercase drop-shadow-lg">
            Car Admin Panel
          </h2>
          <nav className="flex flex-col space-y-5 text-base">
            <Link href="/admin/dashboard" className={linkClasses("/admin/dashboard")}>
              <FaChartBar size={20} className="text-[#0af]" />
              Dashboard
            </Link>

            <Link href="/" className={linkClasses("/")}>
              <IoHome size={20} className="text-[#0af]" />
              Return To Home
            </Link>

            <Link href="/admin/featured" className={linkClasses("/admin/featured")}>
              📦 Featured Products
            </Link>

            <Link href="/admin/car-products" className={linkClasses("/admin/car-products")}>
              🚗 Car Products
            </Link>

            <Link href="/admin/orders" className={linkClasses("/admin/orders")}>
              📑 Orders
            </Link>
          </nav>
        </div>

        <div className="text-xs text-[#8a80ff] pt-12 border-t border-[#7f63f4]/40 mt-16 select-none">
          <p className="pt-5 tracking-widest font-semibold">© 2025 | Car Admin Panel</p>
        </div>
      </aside>

      <main className="flex-1 p-12 bg-gradient-to-tr from-[#04061a] via-[#0a0f2f] to-[#0b1333] overflow-y-auto scrollbar-thin scrollbar-thumb-[#7f63f4]/70 scrollbar-track-[#04061a] rounded-tl-xl rounded-bl-xl shadow-inner">
        {children}
      </main>
    </div>
  );
}
