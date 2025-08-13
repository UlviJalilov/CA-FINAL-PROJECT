import React from 'react'
import Image from "next/image"
import Navbar from '@/components/shared/Navbar/Navbar'
import ShopCrumb from '../ShopCrumb/ShopCrumb'


const ShopBanner = () => {
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
                        <h1 className='text-white text-center uppercase text-5xl font-medium primary-font'>Products</h1>
                        <ShopCrumb />
                    </div>

                </div>
              <Navbar />
            </div>
        </div>
    )
}

export default ShopBanner
