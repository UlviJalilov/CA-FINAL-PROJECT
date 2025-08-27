"use client";
import { IoIosStarOutline } from "react-icons/io";
import ReviewModal from "../ReviewModal/ReviewModal";
import Image from "next/image"
import React, { useState, useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";


type Tab = {
    id: string;
    label: string;
};

interface ReviewData {
    firstName: string;
    lastName: string;
    image: string | null;
    stars: number;
    experience: string;
    createdAt?: string;

}

const tabs: Tab[] = [
    { id: "description", label: "DESCRIPTION" },
    { id: "reviews", label: "PRODUCT REVIEWS" },
    { id: "text", label: "TEXT TAB" },
    { id: "html", label: "HTML TAB" },
];

export default function TabComponent() {
    const [activeTab, setActiveTab] = useState<string>("description");
    const [reviewData, setReviewData] = useState<ReviewData[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/reviews")
            .then(res => res.json())
            .then(data => setReviewData(data))
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="container pt-12 mx-auto px-10">

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
                    <div className="flex flex-col gap-4">
                        {reviewData.length > 0 ? (
                            <>
                                {reviewData.map((review, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col sm:flex-row items-center gap-4 p-5 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                                    >

                                        <div className="w-18 h-18 rounded-full overflow-hidden border border-gray-300 shadow-sm">
                                            <Image
                                                src={review.image || "/placeholder.png"}
                                                alt="User"
                                                className="w-full h-full object-cover object-center"
                                                width={70}
                                                height={70}
                                                quality={100}
                                            />
                                        </div>


                                        <div className="flex-1">
                                            <p className="font-semibold text-lg text-gray-800">
                                                {review.firstName} {review.lastName}
                                            </p>
                                            <p className="text-yellow-400 text-lg mt-1">
                                                {"⭐".repeat(review.stars)}
                                            </p>
                                            <p className="mt-2 text-gray-700 leading-relaxed">
                                                {review.experience}
                                            </p>
                                            <p className="text-sm mt-1 flex items-center gap-2 text-gray-500">
                                                <MdOutlineDateRange size={16} />

                                                {review.createdAt ? new Date(review.createdAt).toLocaleString() : "No date"}
                                            </p>
                                        </div>
                                    </div>
                                ))}


                                <div className="flex items-center gap-2 justify-center mt-4">
                                    <ReviewModal
                                        setReviewData={(newReview) =>
                                            setReviewData((prev) => [...prev, newReview])
                                        }
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex text-[25px] text-[#EBBF20] items-center justify-center sm:justify-start">
                                    <IoIosStarOutline />
                                    <IoIosStarOutline />
                                    <IoIosStarOutline />
                                    <IoIosStarOutline />
                                    <IoIosStarOutline />
                                </div>

                                <div>
                                    <h2 className="pt-2 sm:pt-10 text-[#181b23] text-[17px] secondary-font font-medium text-center sm:text-left">
                                        Be the first to <span className="border-b">write a review</span>
                                    </h2>
                                </div>

                                <div className="flex items-center gap-2 justify-center">
                                    <ReviewModal
                                        setReviewData={(newReview) =>
                                            setReviewData((prev) => [...prev, newReview])
                                        }
                                    />
                                </div>
                            </div>
                        )}
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
