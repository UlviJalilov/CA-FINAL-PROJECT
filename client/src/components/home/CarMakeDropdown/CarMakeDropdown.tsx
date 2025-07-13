"use client";
import { useState } from "react";
import { carData } from "@/data/carData";



type CarMakeDropdownProps = {
  onSelect: (make: string) => void;
};

const carMakes = ["Select Brand", ...Object.keys(carData)];


export default function CarMakeDropdown({ onSelect }: CarMakeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Select Brand");

  const handleSelect = (make: string) => {
    setSelected(make);
    setIsOpen(false);
    if (make !== "Select Brand") {
      onSelect(make);
    } else {
      onSelect(""); // Heç nə seçilməyibsə boş ötür
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
          {carMakes.map((make) => (
            <div
              key={make}
              onClick={() => handleSelect(make)}
              className={`px-4 py-2 hover:bg-[#e51515] hover:text-white cursor-pointer ${
                selected === make ? "bg-[#e51515] text-white" : ""
              }`}
            >
              {make}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
