"use client";

import { FeaturedProduct } from "@/types/FeaturedProduct";

interface AvailabilityFilterProps {
  products: FeaturedProduct[];
  selectedAvailability: ("inStock" | "outOfStock")[];
  setSelectedAvailability: (val: ("inStock" | "outOfStock")[]) => void;
}

const AvailabilityFilter = ({
  products,
  selectedAvailability,
  setSelectedAvailability,
}: AvailabilityFilterProps) => {
  const inStockCount = products.filter(p => p.inStock).length;
  const outOfStockCount = products.filter(p => !p.inStock).length;

const handleAvailabilityChange = (status: "inStock" | "outOfStock") => {
  const newSelected =
    selectedAvailability.includes(status) ? [] : [status];
  setSelectedAvailability(newSelected);
};


  return (
    <div className="p-2">
      <h3 className="text-[22px] font-medium primary-font text-[#181b23] mt-3 mb-6">
        Availability
      </h3>
      <div className="space-y-4">
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="w-4 h-4 border-[#ccc] rounded"
              checked={selectedAvailability.includes("inStock")}
              onChange={() => handleAvailabilityChange("inStock")}
            />
            <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide">
              In stock ({inStockCount})
            </span>
          </div>
        </label>

        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="w-4 h-4 border-gray-400 rounded"
              checked={selectedAvailability.includes("outOfStock")}
              onChange={() => handleAvailabilityChange("outOfStock")}
            />
            <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide">
              Out of stock ({outOfStockCount})
            </span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default AvailabilityFilter;
