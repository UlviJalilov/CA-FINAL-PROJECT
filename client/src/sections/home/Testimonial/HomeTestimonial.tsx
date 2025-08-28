'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Sinclair',
    image: 'https://images.unsplash.com/photo-1605304493823-d31f9896a418?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    text: `Mauris blandit, metus a venenatis lacinia, felis enim tincidunt est, condimentum vulputate orci augue eu metus. Fusce dictum, nisi et semper ultricies, felis tortor blandit odio, egestas consequat pur..`,
  },
  {
    id: 2,
    name: 'Isabella Monroe',
    image: 'https://images.unsplash.com/photo-1605661538864-acf18427564c?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: `This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue magna. Pellentesque felis lorem, pulvinar sed eros n..`,
  },
];

const TestimonialSlider = () => {
  return (
    <section
      className="w-full py-10 md:py-16 min-h-[400px] md:h-[560px] bg-no-repeat bg-center bg-cover relative text-white"
      style={{
        backgroundImage:
          "url('https://aero-theme.myshopify.com/cdn/shop/files/bkg_testtimor.jpg')",
      }}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full  h-full mySwiper mx-auto text-center"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full flex justify-center items-center">
              <div className="h-full flex justify-center items-center">
                <div className="flex items-center justify-center gap-4 px-4 sm:px-8 w-full max-w-5xl">

                 
                  <span className="text-[100px] text-[#e51515] font-serif italic leading-none select-none">
                    “
                  </span>

               
                  <div className="flex flex-col items-center text-center max-w-3xl">
                    <Image
                      src={item.image}
                      width={70}
                      height={70}
                      alt={item.name}
                      quality={100}
                      className="rounded-full object-cover border-2 border-white mb-10"
                    />
                    <p className="text-[#d2d2d2] text-sm md:text-[14px] leading-relaxed">
                      {item.text}
                    </p>
                    <h4 className="text-sm md:text-[14px] tracking-wider primary-font uppercase text-white mt-10">
                      {item.name}
                    </h4>
                  </div>

                
                  <span className="text-[100px] text-[#e51515] font-serif italic leading-none select-none scale-x-[-1]">
                    “
                  </span>

                </div>
              </div>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
