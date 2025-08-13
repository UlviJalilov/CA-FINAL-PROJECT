"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `flex items-center gap-3 px-6 py-3 whitespace-nowrap rounded-xl transition duration-300 shadow-lg shadow-[#7f63f4]/70 ${pathname === path
      ? "bg-[#7f63f4] text-[#0f0c1c] font-semibold"
      : "bg-[#161f5e] hover:bg-[#7f63f4] hover:text-[#0f0c1c]"
    }`;

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#0a0f1f] via-[#050a16] to-[#000000] text-gray-200 font-sans">
      <aside className="w-64 bg-gradient-to-b from-[#0d111a] via-[#0a0e18] to-[#05080f] p-6 flex flex-col justify-between shadow-2xl shadow-black/70 border-r border-[#1a234a]/40 rounded-tr-xl rounded-br-xl backdrop-blur-md bg-opacity-80">
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#FFD700] to-[#A78BFA] bg-clip-text text-transparent mb-14 tracking-wide uppercase drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">
            Car Admin Panel
          </h2>
          <nav className="flex flex-col space-y-5 text-base">
            <Link href="/admin/dashboard" className={linkClasses("/admin/dashboard")}>
              <FaChartBar size={20} className="text-[#4FD1C5]" />
              Dashboard
            </Link>

            <Link href="/" className={linkClasses("/")}>
              <IoHome size={20} className="text-[#4FD1C5]" />
              Return To Home
            </Link>

            <Link href="/admin/featured" className={linkClasses("/admin/featured")}>
              <span className="text-lg">📦</span> Featured Products
            </Link>

            <Link href="/admin/car-products" className={linkClasses("/admin/car-products")}>
              <span className="text-lg">🚗</span> Car Products
            </Link>

            <Link href="/admin/orders" className={linkClasses("/admin/orders")}>
              <span className="text-lg">📑</span> Orders
            </Link>
          </nav>
        </div>

        <div className="text-xs text-gray-400 pt-12 border-t border-gray-600/30 mt-16 select-none">
          <p className="pt-5 tracking-widest font-semibold">© 2025 | Car Admin Panel</p>
        </div>
      </aside>

      <main className="flex-1 p-12 bg-gradient-to-tr from-[#05080f] via-[#0a0e18] to-[#0d111a] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FFD700]/60 scrollbar-track-transparent rounded-tl-xl rounded-bl-xl shadow-inner">
        {children}
      </main>
    </div>

  );
}
