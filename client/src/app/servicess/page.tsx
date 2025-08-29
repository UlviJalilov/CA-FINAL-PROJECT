import React from 'react'
import ServicesBanner from '@/components/shared/ServicesCrumb/banner'
import ServicesSection from '@/components/shared/ServicesSection/ServicesSection'

const page = () => {
  return (
    <div className='bg-white'>
      <ServicesBanner />
      <div>
        <div className="related-products-header px-20 py-8 pb-3">
          <h2 className="primary-font text-[#181b23] text-xl font-bold">
            Our Services
          </h2>
          <p className='text-[12px] leading-tight'>A separate template for services page. You can add multiple message box blocks, video blocks and services blocks. There can be service blocks for single, two, three and four members.</p>
        </div>
        <ServicesSection />
      </div>

    </div>
  )
}

export default page
