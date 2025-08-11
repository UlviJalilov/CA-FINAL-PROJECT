import React from 'react'
import Image from "next/image"
import Navbar from '../Navbar/Navbar'
import FaqCrumb from './FaqCrumb'

const FaqBanner = () => {
    return (
        <div>
            <div>
                <div className="relative w-full h-[500px]">
                    <Image
                        src="https://aero-theme.myshopify.com/cdn/shop/t/39/assets/collection_top.jpg?v=117586586586651228491725589094"
                        alt="Register Banner Img"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        unoptimized={true}
                    />
                    <div className='absolute inset-0 flex justify-center flex-col gap-5 items-center'>
                        <h1 className='text-white text-center text-5xl font-medium primary-font'>FAQ</h1>
                       <FaqCrumb />

                    </div>

                </div>
              <Navbar />
            </div>
        </div>
    )
}

export default FaqBanner
