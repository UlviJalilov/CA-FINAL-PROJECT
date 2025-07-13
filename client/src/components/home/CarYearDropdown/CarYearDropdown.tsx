"use client";
import { useState } from "react";

type CarYearDropdownProps = {
  onSelect: (year: string) => void;
};

const years = ["Select Year", "2025", "2024", "2023", "2022", "2021" ];

export default function CarYearDropdown({ onSelect }: CarYearDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Select Year");

  const handleSelect = (year: string) => {
    setSelected(year);
    setIsOpen(false);
    if (year !== "Select Year") {
      onSelect(year);
    } else {
      onSelect("");
    }
  };

  return (
    <div className="relative w-50">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded cursor-pointer flex justify-between items-center"
      >
        <span>{selected}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute mt-1 max-h-60 w-full overflow-auto rounded border border-gray-300 bg-white shadow-lg z-10">
          {years.map((year) => (
            <div
              key={year}
              onClick={() => handleSelect(year)}
              className={`px-4 py-2 hover:bg-[#e51515] hover:text-white cursor-pointer ${
                selected === year ? "bg-[#e51515] text-white" : ""
              }`}
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
