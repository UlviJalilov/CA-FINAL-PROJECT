"use client";

import React, { useState, FormEvent } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { subscribeEmail } from "@/services/subscribe";

const NewsSubscription = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        const result = await subscribeEmail(email.trim());

        setMessage(result.message);
        if (result.success) setEmail("");
        setLoading(false);
    };

    return (
        <div>
            <div className="py-20">
                <div className="subs-content flex justify-center items-center flex-col gap-6">
                    <div className="title flex items-center flex-col justify-center">
                        <p className="text-[12px] text-[#e51515] pb-1">OUR NEWS</p>
                        <h1 className="primary-font tracking-wider font-medium text-[20px] text-white">
                            SIGN UP FOR LATEST NEWS
                        </h1>
                        <span className="text-[#5a6069] pt-2 text-[14px] font-medium">
                            Subscribe to our email list and stay up-to-date with all our awesome
                            releases and latest updates.
                        </span>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-6 relative">
                        <input
                            type="email"
                            placeholder="Enter your email address here..."
                            className="w-full focus:text-sm  py-4 px-5 placeholder:text-[13px] placeholder:font-medium rounded-full bg-[#1d1f24] text-white placeholder:text-[#5a6069] focus:outline-none"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (message) setMessage(""); 
                            }}

                            disabled={loading}
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        >
                            <MdOutlineKeyboardArrowRight size={20} className="text-white" />
                        </button>
                    </form>

                    {message && (
                        <p className={message.includes("Thanks") ? "message-success" : "message-error"}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsSubscription;
