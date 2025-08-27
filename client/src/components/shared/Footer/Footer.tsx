"use client"

import Image from "next/image"
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link"



export default function Footer() {
  return (
    <footer
      className="bg-[#111217] border-t-2 border-[#e51515] w-full text-white text-sm"
      style={{
        minHeight: '540px',
        backgroundImage: 'url(https://aero-theme.myshopify.com/cdn/shop/files/bkg_footer_c0f71867-38e3-492b-995f-7d0269b97db1.jpg?v=1625767911)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 border-b py-25 border-[#1f2126]">


          <div className="md:col-span-2 flex flex-col gap-10 items-start justify-start">
            <div className="logo w-[70px]">
              <Image
                src="https://aero-theme.myshopify.com/cdn/shop/files/logo-aero1_c79eb9d5-3b65-4c27-ac70-8b4c0c3ec086.png?v=1613507407"
                alt="logo img"
                width={100}
                height={100}
                quality={100}
                priority={true}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#5a6069] leading-relaxed font-medium break-normal">
              We are a team of designers and developers who creates <br />
              high quality premium Shopify themes.
            </p>
            <ul className="space-y-2 text-[#5a6069]">
              <li className="flex justify-center gap-2 items-center">
                <IoLocation size={16} className="text-[#e51515]" />
                <strong className="text-white">
                  Address :</strong> <strong className="text-white">No 40 Baria Sreet 133/2, NewYork, USA.</strong>
              </li>
              <li className="flex justify-start gap-2 items-center">
                <IoMdPhonePortrait size={16} className="text-[#e51515]" />
                <strong className="text-white">Phone :</strong> <strong className="text-white">(012) 800 456 789</strong>
              </li>
              <li className="flex justify-start gap-2 items-center">
                <MdEmail size={16} className="text-[#e51515]" />
                <strong className="text-white">Email :</strong> <strong className="text-white">support@masstechnologist</strong>
              </li>
            </ul>
          </div>


          <div className="md:col-span-1 border-l pl-5 border-[#5a6069]">
            <h4 className="font-semibold primary-font mb-7">MAIN MENU</h4>
            <ul className="space-y-4 text-[#5a6069]">
              <li className="hover:text-[#e51515]">
                <Link href="/">
                  Home
                </Link>
              </li>

              <li className="hover:text-[#e51515]">
                <Link href="/shop">
                  Shop
                </Link>
              </li>

              <li className="hover:text-[#e51515]">
                <Link href="/featured">
                  Featured
                </Link>
              </li>

              <li className="hover:text-[#e51515]">
                <Link href="/layouts">
                  Layouts
                </Link>
              </li>

              <li className="hover:text-[#e51515]">
                <Link href="/pages">
                  Pages
                </Link>
              </li>
            </ul>
          </div>


          <div className="md:col-span-1 border-l pl-5 border-[#5a6069]">
            <h4 className="font-semibold primary-font mb-7">ABOUT US</h4>
            <ul className="space-y-4 text-[#5a6069]">
              <li className="hover:text-[#e51515]">
                <Link href="/contact">
                  Contact US
                </Link>
              </li>
              <li className="hover:text-[#e51515]">
                <Link href="/policy">
                  Refund Policy
                </Link>
              </li>
              <li className="hover:text-[#e51515]">
                <Link href="/policy">
                  Shipping Policy
                </Link>
              </li>
              <li className="hover:text-[#e51515]">
                <Link href="/policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="hover:text-[#e51515]">
                <Link href="/service">
                  Terms Of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 border-l pl-5 border-[#5a6069]">
            <h4 className="font-semibold primary-font mb-7">NEED HELP</h4>
            <ul className="space-y-4 text-[#5a6069]">
              <li className="hover:text-[#e51515]">
                <Link href="/search">
                  Search
                </Link>
              </li>
              <li className="hover:text-[#e51515]">
                <Link href="/about">
                  About Us
                </Link>
              </li>
              <li className="hover:text-[#e51515]">
                <Link href="/faqs">
                  FAQs
                </Link>
              </li>
              <li className="hover:text-[#e51515]">
                <Link href="blog">
                  Our Blog
                </Link>
              </li>
              <li className="hover:text-[#e51515]">
                <Link href="/services">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-15">
          <div className="flex flex-col md:flex-row items-center gap-15 text-center md:text-left">
            <p className="text-[#5a6069] text-[14px] font-medium">
              Copyright © 2024 <span className="text-[#e51515]">MassTechnologist.Com</span>. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-[#5a6069] text-base mt-4 md:mt-0">
              <div className="relative group">
                <a
                  href="https://www.facebook.com/shopify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition cursor-pointer"
                >
                  <FaFacebookF />
                </a>
                <span
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-2 py-1 
    text-white bg-red-600 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
    before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 
    before:border-4 before:border-transparent before:border-b-red-600"
                >
                  Aero - Car Accessories Shopify <br /> Theme OS 2.0 on Facebook
                </span>
              </div>

              <div className="relative group">
                <a
                  href="https://x.com/shopify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition cursor-pointer"
                >
                  <FaTwitter />
                </a>
                <span
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-2 py-1 
    text-white bg-red-600 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
    before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 
    before:border-4 before:border-transparent before:border-b-red-600"
                >
                  Aero - Car Accessories Shopify <br /> Theme OS 2.0 on Facebook
                </span>
              </div>

              <div className="relative group">
                <a
                  href="https://www.pinterest.com/shopify/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition cursor-pointer"
                >
                  <FaPinterestP />
                </a>
                <span
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-2 py-1 
    text-white bg-red-600 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
    before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 
    before:border-4 before:border-transparent before:border-b-red-600"
                >
                  Aero - Car Accessories Shopify <br /> Theme OS 2.0 on Facebook
                </span>
              </div>

              <div className="relative group">
                <a
                  href="https://www.instagram.com/shopify/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition cursor-pointer"
                >
                  <FaInstagram />
                </a>
                <span
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-2 py-1 
    text-white bg-red-600 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
    before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 
    before:border-4 before:border-transparent before:border-b-red-600"
                >
                  Aero - Car Accessories Shopify <br /> Theme OS 2.0 on Facebook
                </span>
              </div>

               <div className="relative group">
                <a
                  href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition cursor-pointer"
                >
                  <FaGooglePlusG />
                </a>
                <span
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-2 py-1 
    text-white bg-red-600 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap
    before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 
    before:border-4 before:border-transparent before:border-b-red-600"
                >
                  Aero - Car Accessories Shopify <br /> Theme OS 2.0 on Facebook
                </span>
              </div>

            </div>

          </div>

          <div className="overflow-hidden w-[300px] mt-4 md:mt-0">
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/payment.png?v=1613507059"
              alt="Payment Cards"
              width={300}
              height={300}
              className="w-full h-full object-contain"
              quality={100}
              priority={true}
            />
          </div>
        </div>


      </div>



    </footer>
  );
}
