"use client";
import { useState } from "react";

type CarModelDropdownProps = {
    models: string[];
    onSelect: (model: string) => void;
};

export default function CarModelDropdown({
    models,
    onSelect,
}: CarModelDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string>("Select Model");

    const handleSelect = (model: string) => {
        setSelected(model);
        setIsOpen(false);
        if (model !== "Select Model") {
            onSelect(model);
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
                    {["Select Model", ...models].map((model) => (
                        <div
                            key={model}
                            onClick={() => handleSelect(model)}
                            className={`px-4 py-2 hover:bg-red-600 hover:text-white cursor-pointer ${selected === model ? "bg-red-600 text-white" : ""
                                }`}
                        >
                            {model}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
