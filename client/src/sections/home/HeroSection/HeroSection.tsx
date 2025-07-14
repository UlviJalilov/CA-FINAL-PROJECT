"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative container mx-auto items-center w-full px-4  overflow-hidden">
           
            <h1 className="absolute pt-10 primary-font -top-10 left-1/2 -translate-x-1/2 text-[120px] font-medium text-[#1b1d22] opacity-90 select-none pointer-events-none uppercase leading-none">
                History
            </h1>

            <div className="absolute top-3 left-1/2 -translate-x-1/2 translate-y-6 text-center z-10">
                <p className="text-[30px] primary-font uppercase  text-[#fff]">
                   WELCOME TO
                </p>
                <h2 className="text-[15px] primary-font md:text-4xl font-bold uppercase text-white">
                    Aero Car Store
                </h2>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 mt-30 grid grid-cols-1 md:grid-cols-12 gap-15">

               
                <div className="md:col-span-6 flex justify-center items-center">
                    <div className="relative w-full max-w-[700px]">
                        <Image
                            src="https://aero-theme.myshopify.com/cdn/shop/files/img1.png?v=1613507033"
                            alt="Front Wheel"
                            width={700}
                            height={700}
                            className="relative object-cover z-10"
                            quality={100}
                        />
                    </div>
                </div>

                <div className="md:col-span-6 flex flex-col justify-center text-white space-y-6">


                    <div className="uppercase primary-font flex flex-col">
                        <span className="text-[23px] leading-[1.1]  text-[#838896]">Meet our</span>
                        <span className="text-[#e51515] leading-[1.1] text-[30px] font-medium">
                            Car Club Since 1892
                        </span>
                        <span className="uppercase text-[13px] tracking-widest leading-[1.1] text-[#5a6069]">custome and club</span>
                    </div>

                    <p className="text-[#5a6069] font-medium text-sm leading-relaxed max-w-[500px]">
                        Claritas est etiam processus dynamicus, qui sequitur mutationem <br /> consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc <br /> putamus parum claram, anteposuerit litterarum formas humanitatis per <br /> seacula quarta decima et quinta decima.
                    </p>

                    <p className="text-[#5a6069] leading-relaxed font-medium text-xs">
                        Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in <br /> futurum.
                    </p>

                    <p className="text-sm primary-font uppercase  mt-4">
                        John Doe - CEO Aero
                    </p>

                    <Image
                        src="https://aero-theme.myshopify.com/cdn/shop/files/img2.png?v=1613507033"
                        alt="Signature"
                        width={200}
                        height={32}
                        className="mt-4"
                    />
                </div>
            </div>
        </section>
    );
}
