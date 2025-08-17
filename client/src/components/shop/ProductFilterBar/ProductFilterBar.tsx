"use client";

import { useState } from "react";
import { FaTh, FaThLarge, FaThList } from "react-icons/fa";

export default function ProductFilterBar() {
  const [activeView, setActiveView] = useState("grid");

  return (
    <div className="w-full flex items-center justify-between border border-[#ccc] rounded-md py-3 mb-6 text-sm">
     
      <div className="flex items-center gap-4">
        <button
          onClick={() => setActiveView("grid")}
          className={`p-1 ${activeView === "grid" ? "text-black" : "text-gray-400"}`}
        >
          <FaTh size={18} />
        </button>
        <button
          onClick={() => setActiveView("grid-large")}
          className={`p-1 ${activeView === "grid-large" ? "text-black" : "text-gray-400"}`}
        >
          <FaThLarge size={18} />
        </button>
        <button
          onClick={() => setActiveView("list")}
          className={`p-1 ${activeView === "list" ? "text-black" : "text-gray-400"}`}
        >
          <FaThList size={18} />
        </button>
      </div>

    
      <span className="text-gray-600">
        Showing <span className="font-medium">1 to 12</span> of{" "}
        <span className="font-medium">37</span> items
      </span>

     
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Sort by:</span>
        <select className="border border-[#ccc] rounded-md px-3 py-1 text-sm outline-none cursor-pointer">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
  );
}
