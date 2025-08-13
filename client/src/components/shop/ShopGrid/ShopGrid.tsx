import React from "react";
import Image from "next/image";
import { FeaturedProduct } from "@/types/FeaturedProduct";


type Props = {
  products: FeaturedProduct[];
};

export default function ShopGrid({ products }: Props) {
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-12 gap-6">
  
      <div className="col-span-3 bg-white p-4 rounded shadow">
   
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Filter By Year, Make, Model</h3>
       
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Categories</h3>
    
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Availability</h3>
        
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Price</h3>
         
        </div>
      </div>

    
      <div className="col-span-9 grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-40 flex items-center justify-center mb-4">
              <Image
                src={product.image}
                alt={product.title}
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </div>
            <h4 className="text-sm font-medium mb-1">{product.title}</h4>
            <p className="text-red-600 font-semibold mb-2">${product.price}</p>
            <button className="w-full py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
