"use client";
import { useState } from "react";
import { carData } from "@/data/carData";

export function useSearchForm() {
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const handleMakeSelect = (make: string) => {
    setSelectedMake(make);
    setSelectedModel(""); // Yeni marka seçiləndə model sıfırlansın
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
  };

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
  };

  const handleSearch = () => {
    console.log("Selected Make:", selectedMake);
    console.log("Selected Model:", selectedModel);
    console.log("Selected Year:", selectedYear);
  };

  const models =
    selectedMake && carData[selectedMake] ? carData[selectedMake] : [];

  return {
    selectedMake,
    selectedModel,
    selectedYear,
    handleMakeSelect,
    handleModelSelect,
    handleYearSelect,
    handleSearch,
    models,
  };
}
