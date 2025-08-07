"use client";

import React, { useEffect, useState, FormEvent } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { subscribeEmail } from "@/services/subscribe";
import { AnimatePresence, motion } from "framer-motion";


export default function NewsletterModal() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const hasSeenModal = localStorage.getItem("newsletterSeen");
        if (!hasSeenModal) {
            setOpen(true);
            localStorage.setItem("newsletterSeen", "true");
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        const result = await subscribeEmail(email.trim());

        setMessage(result.message);
        if (result.success) setEmail("");
        setLoading(false);
    };


    const modalMotion = {
        initial: { opacity: 0, y: -40, filter: "blur(6px)" },
        animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            y: 40,
            filter: "blur(6px)",
            transition: { duration: 0.4, ease: "easeIn" },
        },
    };

    return (
        <AnimatePresence>
            {open && (
                <Dialog
                    open={open}
                    onClose={handleClose}
                    fullWidth
                    maxWidth={false}
                    PaperProps={{
                        component: motion.div,
                        variants: modalMotion,
                        initial: "initial",
                        animate: "animate",
                        exit: "exit",

                        sx: {
                            maxWidth: 720,
                            width: "100%",
                            borderRadius: 3,
                            overflow: "hidden",
                            backgroundColor: "#050d18",
                        },
                    }}
                >
                    <DialogTitle className="bg-[#050d18] text-white">
                        <div className="flex items-center justify-between w-full relative">
                            <h1 className="text-lg primary-font hover:text-[#e51515] uppercase tracking-wider font-medium">
                                Subscribe to Our Newsletter
                            </h1>
                            <IconButton aria-label="close" onClick={handleClose}>
                                <IoClose className="text-white hover:text-[#e51515] text-xl" />
                            </IconButton>
                        </div>
                    </DialogTitle>

                    <DialogContent className="p-0 bg-[#050d18] mt-4 overflow-hidden">
                        <div className="flex flex-col gap-1 md:flex-row items-stretch h-full">
                            <div className="relative overflow-hidden w-full md:w-1/2 min-h-[300px] md:min-h-full">
                                <Image
                                    src="https://aero-theme.myshopify.com/cdn/shop/files/slider1-aero2-1920x933_1920x846.progressive.jpg?v=1613507125"
                                    alt="Newsletter"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-white">Join Our Newsletter</h2>
                                <p className="text-sm text-white">
                                    Subscribe and be the first to know about new arrivals, special offers, and the latest trends.
                                </p>

                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Your email address"
                                        className="flex-1 px-4 py-2 border text-white placeholder:text-white border-[#ccc] rounded-md text-sm focus:outline-none"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (message) setMessage("");
                                        }}
                                        disabled={loading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="px-6 py-2 bg-[#e51515] text-white rounded-md hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] duration-300 transition-all text-sm"
                                    >
                                        {loading ? "..." : "Subscribe"}
                                    </button>
                                </form>

                                {message && (
                                    <p className={`text-sm mt-1 ${message.includes("Thanks") ? "text-green-500" : "text-red-500"}`}>
                                        {message}
                                    </p>
                                )}

                                <p className="text-xs text-gray-400 mt-1">
                                    * Don’t worry, we don’t spam your inbox.
                                </p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    );
}
