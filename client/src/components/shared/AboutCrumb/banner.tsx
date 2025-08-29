import React from 'react'
import Image from "next/image"
import Navbar from '../Navbar/Navbar'
import AboutCrumb from './breadcrumb'

const AboutBanner = () => {
    return (
        <div>
            <div>
                <div className="relative w-full h-[500px]">
                    <Image
                        src="https://aero-theme.myshopify.com/cdn/shop/files/slider1-aero4-1920x943_1920x846.progressive.jpg?v=1613507330"
                        alt="Register Banner Img"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        unoptimized={true}
                    />
                    <div className='absolute inset-0 flex justify-center flex-col gap-5 items-center'>
                        <h1 className='text-white text-center text-5xl font-medium primary-font'>ABOUT US</h1>
                        <AboutCrumb />

                    </div>

                </div>
              <Navbar />
            </div>
        </div>
    )
}

export default AboutBanner
