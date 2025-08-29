import AboutBanner from '@/components/shared/AboutCrumb/banner'
import TeamSection from '@/components/shared/TeamSection/TeamSection'

const page = () => {
  return (
    <div className='bg-white'>
      <AboutBanner />

      <div>
        <div className="related-products-header px-20 py-15 pb-3">
         
            <h2 className="primary-font text-xl font-bold">
              OUR TEAM
            </h2>
         
          <p className='text-[12px] leading-tight'>A separate template for team/about us page. You can add multiple message box blocks, video blocks and team member blocks. There can be member blocks for single, two, three and four members.</p>
        </div>
        <TeamSection />
      </div>
    </div>
  )
}

export default page
