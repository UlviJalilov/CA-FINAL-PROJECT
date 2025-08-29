import React from 'react'
import Image from "next/image"
import Navbar from '../Navbar/Navbar'
import GalleryCrumb from './breadcrumb'


const GalleryBanner = () => {
    return (
        <div>
            <div>
                <div className="relative w-full h-[500px]">
                    <Image
                        src="https://aero-theme.myshopify.com/cdn/shop/files/slider1-aero2-1920x933_1920x846.progressive.jpg?v=1613507125"
                        alt="Register Banner Img"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        unoptimized={true}
                    />
                    <div className='absolute inset-0 flex justify-center flex-col gap-5 items-center'>
                        <h1 className='text-white text-center text-5xl font-medium primary-font'>Gallery</h1>
                        <GalleryCrumb />
                    </div>

                </div>
              <Navbar />
            </div>
        </div>
    )
}

export default GalleryBanner;
