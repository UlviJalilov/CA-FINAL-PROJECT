"use client";

import { CgMenuGridO } from "react-icons/cg";
import { TfiLayoutGrid4, TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TbChartGridDots } from "react-icons/tb";
import { useState, useEffect } from "react";

interface Props {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function ProductFilterBar({ activeView, onViewChange }: Props) {
  const [active, setActive] = useState(activeView);

  useEffect(() => {
    setActive(activeView);
  }, [activeView]);

  const handleClick = (view: string) => {
    setActive(view);
    onViewChange(view);
  };

  return (
    <div className="w-full flex items-center px-4 mb-2 justify-between border border-[#ccc] rounded-md py-3  text-sm">

      <div className="flex items-center justify-end gap-4">
        <div className="relative group">
          <CgMenuGridO
            size={22}
            onClick={() => handleClick("grid")}
            className={`cursor-pointer ${active === "grid" ? "text-black" : "text-[#ccc]"}`}
          />
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-[#e51515] text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            3
            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#e51515]"></span>
          </span>
        </div>
        <div className="relative group">
          <TfiLayoutGrid4
            size={22}
            onClick={() => handleClick("gridLarge")}
            className={`cursor-pointer ${active === "gridLarge" ? "text-black" : "text-[#ccc]"}`}
          />
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-[#e51515] text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            4
            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#e51515]"></span>
          </span>
        </div>
        <div className="relative group">
          <TfiLayoutGrid4Alt
            size={22}
            onClick={() => handleClick("list")}
            className={`cursor-pointer ${active === "list" ? "text-black" : "text-[#ccc]"}`}
          />
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-[#e51515] text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            5
            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#e51515]"></span>
          </span>
        </div>
        <div className="relative group">
          <TbChartGridDots
            size={22}
            onClick={() => handleClick("listLarge")}
            className={`cursor-pointer ${active === "listLarge" ? "text-black" : "text-[#ccc]"}`}
          />
          <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-[#e51515] text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            List
            <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#e51515]"></span>
          </span>
        </div>



      </div>


      <span className="text-gray-600 tracking-wide secondary-font">
        Showing <span className="font-medium">1 to 12</span> of <span className="font-medium">37</span> items
      </span>


      <div className="flex items-center gap-2">
        <span className="text-gray-600 secondary-font tracking-wide ">Sort by:</span>
        <select className="border border-[#ddd] rounded-md px-3 py-1.5 text-sm outline-none cursor-pointer">
          <option className="featured">Featured</option>
          <option>Best Selling</option>
          <option>Alphabetically, A-Z</option>
          <option>Alphabetically, Z-A</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
          <option>Date, new to old</option>
          <option>Date, old to new</option>
        </select>
      </div>
    </div>
  );
}
