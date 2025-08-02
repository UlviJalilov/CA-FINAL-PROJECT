import React from "react";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";

interface Props {
  products: FeaturedProduct[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const FeaturedProductsTable = ({ products, onDelete, onEdit }: Props) => {
  return (
    <div className="bg-[#1e2026] rounded-xl p-6 shadow-lg flex justify-center">
      <table className="w-[1200px] text-sm text-gray-200 table-auto">
        <thead>
          <tr className="bg-[#2a2d34] text-left text-xs uppercase tracking-wider">
            <th className="px-4 py-3">Image</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Old Price</th>
            <th className="px-4 py-3">Discount</th>
            <th className="px-4 py-3 text-center">Rating</th>
            <th className="px-4 py-3 text-center">Featured?</th>
            <th className="px-4 py-3 text-center">Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="border-b border-[#2c2f36] hover:bg-[#2c1a1a] transition-colors duration-300"
            >
              <td className="px-4 py-4">
                <div className="w-[80px] h-[80px] relative rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </td>
              <td className="px-4 py-4 text-[13px]  font-semibold text-white">{product.title}</td>
              <td className="px-4 py-4 text-white font-medium">${product.price}</td>
              <td className="px-4 py-4 text-white font-medium">
                ${product.oldPrice ?? "-"}
              </td>
              <td className="px-4 py-4 text-white font-medium">
                {product.discountBtn || "-"}
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center justify-center gap-1 text-yellow-400 font-semibold">
                  {product.rating}
                  <IoIosStar className="text-yellow-500" />
                </div>
              </td>
              <td className="px-4 py-4 text-center">
                {product.isFeatured ? (
                  <span className="text-green-500 font-semibold">Yes</span>
                ) : (
                  <span className="text-gray-500 font-semibold">No</span>
                )}
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => onEdit(product._id!)}
                    className="bg-yellow-500 hover:bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold transition cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product._id!)}
                    className="bg-[#e51515] hover:bg-red-500 text-white px-3 py-1 rounded text-xs font-semibold transition cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  );
};

export default FeaturedProductsTable;
