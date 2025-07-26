'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Nathanael Jaworski',
    image: 'https://aero-theme.myshopify.com/cdn/shop/files/testimor1-64x64_64x64.png?v=16135070333',
    text: `Mauris blandit, metus a venenatis lacinia, felis enim tincidunt est, condimentum vulputate orci augue eu metus. Fusce dictum, nisi et semper ultricies, felis tortor blandit odio, egestas consequat pur..`,
  },
  {
    id: 2,
    name: 'Rebecka Filson',
    image: 'https://aero-theme.myshopify.com/cdn/shop/files/testimor1-64x64_64x64.png?v=1613507033',
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
              <div className="flex flex-col items-center text-center w-[90%] sm:max-w-lg md:max-w-3xl">
                <Image
                  src={item.image}
                  width={65}
                  height={65}
                  alt={item.name}
                  quality={100}
                  className="rounded-full object-cover border-2 border-white mb-4"
                />
                <div className="text-3xl md:text-4xl text-red-500 mb-2">“</div>
                <p className="text-[#d2d2d2] text-sm md:text-[14px] leading-relaxed">
                  {item.text}
                </p>
                <div className="text-3xl md:text-4xl text-red-500 mt-2">”</div>
                <h4 className="text-sm md:text-[14px] primary-font uppercase text-white mt-3">
                  {item.name}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
