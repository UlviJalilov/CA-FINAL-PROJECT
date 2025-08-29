"use client";

import Image from "next/image";
import VideoSection from '@/components/shared/VideoSection/VideoSection'


export default function TeamSection() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 text-center space-y-12">
    
      <div>
        <h2 className="text-[30px] primary-font text-[#181b23] font-medium mb-4">President</h2>
        <Image
          src="https://aero-theme.myshopify.com/cdn/shop/files/1_500x500_crop_center.png?v=1624718465"
          alt="President"
          width={400}
          height={400}
          className="mx-auto"
        />
        <p className="mt-4 text-[22px] whitespace-nowrap primary-font text-[#181b23] max-w-md mx-auto">
         Our President leads the organization with vision and integrity.
        </p>
      </div>

      <div>
        <h2 className="text-[30px] text-[#181b23] font-medium primary-font mb-6">Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/2a_500x500_crop_center.png?v=1624718912"
              alt="Director 1"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="mt-3 text-[#181b23] text-[22px] font-medium primary-font">Director 1</h3>
            <p className="mt-2 text-gray-600 text-sm">
              He ensures that every department functions at its best.
            </p>
          </div>
          <div>
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/2b_500x500_crop_center.png?v=1624718912"
              alt="Director 2"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="mt-3 text-[#181b23] text-[22px] font-medium primary-font ">Director 2</h3>
            <p className="mt-2 text-gray-600 text-sm">
              She ensures that every department functions at its best.
            </p>
          </div>
        </div>
      </div>

    
      <div>
        <h2 className="text-[28px] text-[#181b23] font-medium primary-font  mb-6">Team Leads</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/3c_400x400_crop_center.png?v=1624719128"
              alt="Team Lead One"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="mt-3 font-medium">Team Lead One</h3>
          </div>
          <div>
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/3a_400x400_crop_center.png?v=1624719128"
              alt="Team Lead Two"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="mt-3 font-medium">Team Lead Two</h3>
          </div>
          <div>
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/3b_400x400_crop_center.png?v=1624719128"
              alt="Team Lead Three"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="mt-3 font-medium">Team Lead Three</h3>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-[28px] text-[#181b23] font-medium primary-font mb-8">Employee of the month</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/4c_300x300_crop_center.png?v=1624718425"
              alt="Employee One"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="mt-3 font-medium">One</h3>
          </div>
          <div>
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/4d_300x300_crop_center.png?v=1624718425"
              alt="Employee Two"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="mt-3 font-medium">Two</h3>
          </div>
          <div>
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/4b_300x300_crop_center.png?v=1624718425"
              alt="security"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="mt-3 font-medium">Three</h3>
          </div>
          <div>
            <Image
              src="https://aero-theme.myshopify.com/cdn/shop/files/4a_300x300_crop_center.png?v=1624718425"
              alt="Employee Four"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="mt-3 font-medium">Four</h3>
          </div>
        </div>
      </div>
      <VideoSection />
    </section>
  );
}




