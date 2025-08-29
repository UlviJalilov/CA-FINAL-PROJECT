'use client';
import Image from "next/image";
import { useState } from 'react';

export default function VideoSection() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative w-full mb-15 mx-auto h-screen bg-black overflow-hidden">
            <Image
                src="https://aero-theme.myshopify.com/cdn/shop/files/slider2-aero4-1920x943.jpg?v=1613507330"
                alt="Racing Car"
                fill
                className="object-cover"
                quality={100}
            />

         
            <button
                onClick={() => setOpen(true)}
                className="absolute inset-0 flex items-center justify-center text-white z-20"
                aria-label="Play Video"
            >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition">
                    <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </button>


            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    <div className="relative w-full max-w-4xl aspect-video">
                        <iframe
                            src="https://www.youtube.com/embed/JSM-UtgmozU?si=GO-GSwReN8k5dFrT"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        ></iframe>
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-2 right-2 text-white text-2xl"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>

    );
}
