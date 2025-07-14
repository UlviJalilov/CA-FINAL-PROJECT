"use client";
import { useSearchForm } from "@/hooks/useSearchForm";
import CarMakeDropdown from "../CarMakeDropdown/CarMakeDropdown";
import CarModelDropdown from "../CarModelDropdown/CarModelDropdown";
import CarYearDropdown from "../CarYearDropdown/CarYearDropdown";
import { useRouter } from "next/navigation";


const SearchForm = () => {
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
            `/search?make=${encodeURIComponent(selectedMake)}&model=${encodeURIComponent(selectedModel)}&year=${encodeURIComponent(selectedYear)}`
        );
    };

    return (
        <div className="py-30 secondary-font">
            <div className="flex bg-[#292929] rounded-[6px] mx-auto w-[460px] py-3 justify-center items-center">
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <div className="bg-[#e51515] rounded-[6px] px-4 py-2.5 w-full md:w-auto text-center">
                        <h2 className="text-[#fff] font-semibold text-[12px]">
                            SEARCH BY YEAR, MAKE, MODEL
                        </h2>
                    </div>
                    <div className="rounded-[6px] px-4 py-2.5 w-full md:w-auto text-center">
                        <h2 className="text-[#fff] font-semibold text-[12px]">
                            MAKE, MODEL, YEAR, TYPE
                        </h2>
                    </div>
                </div>
            </div>

            <div className="bg-[#292929] mt-5 flex justify-center mx-auto items-center w-full max-w-[900px]">
                <div className="bg-[#292929]  flex flex-col md:flex-row py-5 justify-center mx-auto items-center w-full max-w-[900px] gap-4">
                    <CarMakeDropdown onSelect={handleMakeSelect} />
                    <CarModelDropdown models={models} onSelect={handleModelSelect} />
                    <CarYearDropdown onSelect={handleYearSelect} />

                    <button
                        onClick={handleSearch}
                        className="bg-[#e51515] text-white px-4 py-2 w-[200px] rounded"
                    >
                        Search
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SearchForm;
