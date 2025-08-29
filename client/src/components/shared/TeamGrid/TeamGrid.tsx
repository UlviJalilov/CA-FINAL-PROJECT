'use client';

import Image from 'next/image';

const teamMembers = [
  { id: 1, name: 'Team Member 1', src: 'https://aero-theme.myshopify.com/cdn/shop/files/4c_1000x1000_crop_center.png?v=1624718425' },
  { id: 2, name: 'Team Member 2', src: 'https://aero-theme.myshopify.com/cdn/shop/files/4a_1000x1000_crop_center.png?v=1624718425' },
  { id: 3, name: 'Team Member 3', src: 'https://aero-theme.myshopify.com/cdn/shop/files/4d_1000x1000_crop_center.png?v=1624718425' },
  { id: 4, name: 'Team Member 4', src: 'https://aero-theme.myshopify.com/cdn/shop/files/4b_1000x1000_crop_center.png?v=1624718425' },
  { id: 5, name: 'Team Member 5', src: 'https://aero-theme.myshopify.com/cdn/shop/files/4_1000x1000_crop_center.png?v=1624717775' },
  { id: 6, name: 'Team Member 6', src: 'https://aero-theme.myshopify.com/cdn/shop/files/4d_1000x1000_crop_center.png?v=1624718425' },
  { id: 7, name: 'Team Member 7', src: 'https://aero-theme.myshopify.com/cdn/shop/files/3c_1000x1000_crop_center.png?v=1624719128' },
  { id: 7, name: 'Team Member 7', src: 'https://aero-theme.myshopify.com/cdn/shop/files/3b_1000x1000_crop_center.png?v=1624719128' },
];

export default function TeamGrid() {
  return (
    <section className="w-full  py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto mb-10 text-center space-y-12">
        <h2 className="text-3xl font-bold text-[#181b23]">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-50 h-50 relative">
              <Image
                src={member.src}
                alt={member.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
