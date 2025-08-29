import React from 'react'
import GalleryBanner from '@/components/shared/GalleryCrumb/banner'
import ScrollToTopButton from '@/components/shared/ScrollToTopButton/ScrollToTopButton'
import TeamGrid from '@/components/shared/TeamGrid/TeamGrid'

const page = () => {
    return (
        <div className='bg-white'>
            <GalleryBanner />
            <div>
                <div className="related-products-header px-20 py-8 pb-3">
                    <h2 className="primary-font text-[#181b23] uppercase text-xl font-bold">
                        Our Gallery
                    </h2>
                    <p className='text-[12px] leading-tight'>A responsive gallery page where you can add images with caption. Only one gallery at the moment.</p>
                </div>

                <TeamGrid />
            </div>
            <ScrollToTopButton />
        </div>
    )
}

export default page
