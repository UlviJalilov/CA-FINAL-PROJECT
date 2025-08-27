"use client";
import { useSearchForm } from "@/hooks/useSearchForm";
import CarMakeDropdown from "@/components/home/CarMakeDropdown/CarMakeDropdown";
import CarModelDropdown from "@/components/home/CarModelDropdown/CarModelDropdown";
import CarYearDropdown from "@/components/home/CarYearDropdown/CarYearDropdown";
import { useRouter } from "next/navigation";




const ShopSearchSidebar = () => {
  const {
    handleMakeSelect,
    handleModelSelect,
    handleYearSelect,
    selectedMake,
    selectedModel,
    selectedYear,
    models,
  } = useSearchForm();

  const router = useRouter();

const handleSearch = () => {
  router.push(
    `/search?make=${encodeURIComponent(selectedMake)}&model=${encodeURIComponent(
      selectedModel
    )}&year=${encodeURIComponent(selectedYear)}&from=shop`
  );
};
  return (
    <div className=" p-2 rounded-md w-full">
      <h3 className="text-[22px] font-medium primary-font mb-6 text-[#181b23]">
        Filter By Year, Make, <br /> Model
      </h3>

      <div className="flex flex-col gap-3">
        <CarMakeDropdown onSelect={handleMakeSelect} />
        <CarModelDropdown models={models} onSelect={handleModelSelect} />
        <CarYearDropdown onSelect={handleYearSelect} />

        <button
          onClick={handleSearch}
          className="bg-[#e51515] secondary-font hover:bg-red-700 text-white py-2 w-50 rounded-md font-semibold transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ShopSearchSidebar;
