"use client";

import { useState } from "react";

type FaqItem = {
    question: string;
    answer: string;
};

const faqData: FaqItem[] = [
    {
        question: "How do i signup?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate et laudantium esse adipisci consequatur modi possimus accusantium vero atque excepturi nobis in doloremque repudiandae soluta non minus dolore voluptatem enim reiciendis officia voluptates, fuga ullam? Voluptas reiciendis cumque molestiae unde numquam similique quas doloremque non, perferendis doloribus necessitatibus itaque dolorem quam officia atque perspiciatis dolore laudantium dolor voluptatem eligendi? Aliquam nulla unde voluptatum molestiae, eos fugit ullam, consequuntur, saepe voluptas quaerat deleniti. Repellendus magni sint temporibus, accusantium rem commodi.",
    },
    {
        question: "Do you offer refunds?",
        answer: "Yes, we offer refunds within 30 days of purchase.",
    },
    {
        question: "What are your shipping rates?",
        answer: "Shipping rates vary depending on your location and order size.",
    },
];

export default function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-20">
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className="w-full border border-gray-200 rounded mb-4 overflow-hidden"
                >
                    <button
                        onClick={() => toggleIndex(index)}
                        className="w-full flex justify-between items-center px-8 py-4 text-left text-red-600 text-base font-medium border-b border-gray-200 focus:outline-none"
                    >
                        {item.question}
                        <svg
                            className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <div
                        className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index
                                ? "px-8 pt-4 pb-6 max-h-[500px] opacity-100"
                                : "px-8 max-h-0 opacity-0"
                            }`}
                        style={{ willChange: "max-height, opacity" }}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>

    );
}
