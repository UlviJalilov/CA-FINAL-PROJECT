import React from 'react'
import { useState } from 'react';
const SideColor = () => {

    const [selected, setSelected] = useState<string | null>(null);

    const colors = [
        { name: "Black", value: "black", class: "bg-black" },
        { name: "Blue", value: "blue", class: "bg-blue-600" },
        { name: "RedDark", value: "red-dark", class: "bg-red-800" },
        { name: "Green", value: "green", class: "bg-green-500" },
        { name: "Gray", value: "gray", class: "bg-gray-500" },
        { name: "Red", value: "red", class: "bg-red-500" },
        { name: "White", value: "white", class: "bg-white border border-gray-300" },
    ];

    return (
        <div className="w-full mt-2 p-2 max-w-sm">
            <h2 className="font-semibold primary-font text-[20px] text-[#181b23] mb-4">Color</h2>
            <div className="flex gap-3">
                {colors.map((color) => (
                    <button
                        key={color.value}
                        onClick={() => setSelected(color.value)}
                        className={`h-5 w-5 rounded-full cursor-pointer border-2 transition 
              ${color.class} 
              ${selected === color.value ? "ring-2 ring-black" : "border-transparent"}
            `}
                    />
                ))}
            </div>
        </div>
    )
}

export default SideColor
