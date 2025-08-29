'use client';

import Image from 'next/image';
import { useState } from 'react';

const services = [
    {
        title: 'Packaging',
        icon: 'https://aero-theme.myshopify.com/cdn/shop/files/packaging_400x400_crop_center.png?v=1624722642',
    },
    {
        title: 'Delivery',
        icon: 'https://aero-theme.myshopify.com/cdn/shop/files/delivery_400x400_crop_center.png?v=1624722642',
    },
    {
        title: 'Support',
        icon: 'https://aero-theme.myshopify.com/cdn/shop/files/support_400x400_crop_center.png?v=1624722642',
    },
    {
        title: 'Storage',
        icon: 'https://aero-theme.myshopify.com/cdn/shop/files/storage_300x300_crop_center.png?v=1624722911',
    },
    {
        title: 'Manufacture',
        icon: 'https://aero-theme.myshopify.com/cdn/shop/files/manufacture_300x300_crop_center.png?v=1624722642',
    },
    {
        title: 'Showcase',
        icon: 'https://aero-theme.myshopify.com/cdn/shop/files/showcase_300x300_crop_center.png?v=1624723013',
    },
    {
        title: 'Deliver',
        icon: 'https://aero-theme.myshopify.com/cdn/shop/files/support1_300x300_crop_center.png?v=1624722911',
    },
];

type ServiceCardProps = {
    title: string;
    icon: string;
};

function ServiceCard({ title, icon }: ServiceCardProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <Image src={icon} alt={title} width={100} height={100} />
            <h3 className="text-xl font-semibold text-[#181b23]">{title}</h3>
            <p className="text-gray-600 text-sm max-w-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
        </div>
    );
}

export default function ServicesSection() {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full py-10 px-4 bg-white text-center">
            <div className="max-w-6xl mx-auto space-y-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {services.slice(0, 3).map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
                    {services.slice(3).map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>

                <div className="relative bg-black max-w-7xl mb-15 mt-15 mx-auto overflow-hidden rounded-md group cursor-pointer">
                    <Image
                        src="https://aero-theme.myshopify.com/cdn/shop/t/39/assets/videobox_1920x800.jpg?v=161833638474436904981725589098"
                        alt="Video Preview"
                        width={1920}
                        height={800}
                        className="w-full h-auto object-cover"
                        quality={100}
                    />
                    <button
                        onClick={() => setOpen(true)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
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
                </div>


                {open && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                        <div className="relative w-full max-w-4xl aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/Nzej0s6Ntzk?si=_PMo8xasG97q_EwI"
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
            </div>
        </section>
    );
}
