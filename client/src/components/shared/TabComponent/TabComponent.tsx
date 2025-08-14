// components/TabComponent.tsx
"use client";
import { IoIosStarOutline } from "react-icons/io";
import { SlidersHorizontal } from "lucide-react"

import React, { useState } from "react";

type Tab = {
    id: string;
    label: string;
};

const tabs: Tab[] = [
    { id: "description", label: "DESCRIPTION" },
    { id: "reviews", label: "PRODUCT REVIEWS" },
    { id: "text", label: "TEXT TAB" },
    { id: "html", label: "HTML TAB" },
];

export default function TabComponent() {
    const [activeTab, setActiveTab] = useState<string>("description");

    return (
        <div className="container pt-12 mx-auto px-10">
            {/* Tabs headers */}
            <div className="flex gap-15 border-b border-gray-300 mb-10">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2 font-medium primary-font  text-sm tracking-wide ${activeTab === tab.id
                            ? "text-red-600 border-b-2 border-red-600"
                            : "text-gray-800 hover:text-red-600"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tabs content */}
            <div>
                {activeTab === "description" && (
                    <div className="text-[#5a6069] space-y-4">
                        <p>
                            <strong className="text-[14px]">Born to be worn.</strong>
                        </p>
                        <p className="text-[13px] secondary-font font-medium">
                            Clip on the worlds most wearable music player and take up to 240 songs with you anywhere. Choose from five colors including four new hues to make your musical fashion statement.
                        </p>
                        <p className="text-[14px]">
                            <strong>Random meets rhythm.</strong>
                        </p>
                        <p className="text-[13px] secondary-font font-medium">
                            With iTunes autofill, iPod shuffle can deliver a new musical
                            experience every time you sync. For more randomness, you can
                            shuffle songs during playback with the slide of a switch.
                        </p>
                        <p className="text-[14px]">
                            <strong>Everything is easy.</strong>
                        </p>
                        <p className="text-[13px] secondary-font font-medium">
                            Charge and sync with the included USB dock. Operate the iPod
                            shuffle controls with one hand. Enjoy up to 12 hours straight of
                            skip-free music playback.
                        </p>
                        <p className="text-[14px]">
                            <strong>Intel Core 2 Duo processor</strong>
                        </p>
                        <p className="text-[13px] secondary-font font-medium">
                            Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz,
                            the new MacBook is the fastest ever.
                        </p>

                        <p className="text-[14px]">
                            <strong>1GB memory, larger hard drives</strong>
                        </p>

                        <p className="text-[13px] secondary-font font-medium">
                            The new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect for running more of your favorite applications and storing growing media collections.
                        </p>

                        <p className="text-[14px]">
                            <strong>Sleek, 1.08-inch-thin design</strong>
                        </p>
                        <p className="text-[13px] secondary-font font-medium">
                            MacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally trips on the cord.
                        </p>

                        <p className="text-[14px]">
                            <strong>Built-in iSight camera</strong>
                        </p>

                        <p className="text-[13px] secondary-font font-medium">
                            Right out of the box, you can have a video chat with friends or family,2 record a video at your desk, or take fun pictures with Photo Booth
                        </p>

                    </div>
                )}

                {activeTab === "reviews" && (
                    <div className="flex items-center justify-between">
                        <div className="flex text-[25px] text-[#EBBF20] items-center">
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />

                        </div>
                        <div>
                            <h2 className="pt-10 text-[#181b23] text-[17px] secondary-font font-medium">Be the first to <span className="border-b">write a review</span></h2>
                        </div>
                        <div className="flex items-center gap-2  justify-center">
                            <button className="border border-[#ccc] h-[40px] secondary-font text-[17px] px-4 py-2">
                                Write a review
                            </button>
                            <button className="border border-[#ccc]  h-[40px] px-2 py-1">
                                <SlidersHorizontal size={20} />
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === "text" && (
                    <div className="flex justify-center items-center">
                        <p className="text-[#5a6069] text-[14px] font-medium">You can write any text to be displayed either here if you want it to show on all products or create a custom metafield for products where you can add text information specific for each product.</p>
                    </div>
                )}

                {activeTab === "html" && (
                    <div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse  border-gray-200 text-left">
                                <thead>
                                    <tr className="border-b-2 text-[#5a6069] text-[14px] font-semibold border-gray-200">
                                        <th className="py-3 px-4 ">Part</th>
                                        <th className="py-3 px-4 ">Size</th>
                                        <th className="py-3 px-4 ">Diameter</th>
                                        <th className="py-3 px-4 ">Width</th>
                                        <th className="py-3 px-4 ">Height</th>
                                        <th className="py-3 px-4 ">Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b text-[#5a6069] text-[13px] font-medium border-gray-200">
                                        <td className="py-3 px-4">Car Tire</td>
                                        <td className="py-3 px-4">17</td>
                                        <td className="py-3 px-4">215 mm</td>
                                        <td className="py-3 px-4">17</td>
                                        <td className="py-3 px-4">25</td>
                                        <td className="py-3 px-4">8 kg</td>
                                    </tr>
                                    <tr className="border-b text-[#5a6069] text-[13px] font-medium border-gray-200">
                                        <td className="py-3 px-4">Alloy Wheel</td>
                                        <td className="py-3 px-4">18</td>
                                        <td className="py-3 px-4">225 mm</td>
                                        <td className="py-3 px-4">18</td>
                                        <td className="py-3 px-4">24</td>
                                        <td className="py-3 px-4">7.5 kg</td>
                                    </tr>
                                    <tr className="border-b text-[#5a6069] text-[13px] font-medium border-gray-200">
                                        <td className="py-3 px-4">Brake Disc</td>
                                        <td className="py-3 px-4">12</td>
                                        <td className="py-3 px-4">280 mm</td>
                                        <td className="py-3 px-4">12</td>
                                        <td className="py-3 px-4">15</td>
                                        <td className="py-3 px-4">3 kg</td>
                                    </tr>
                                    <tr className="border-b text-[#5a6069] text-[13px] font-medium border-gray-200">
                                        <td className="py-3 px-4">Exhaust Pipe</td>
                                        <td className="py-3 px-4">Standard</td>
                                        <td className="py-3 px-4">200 mm</td>
                                        <td className="py-3 px-4">150 mm</td>
                                        <td className="py-3 px-4">40</td>
                                        <td className="py-3 px-4">5 kg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
