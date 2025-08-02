import { useEffect, useState } from "react";
import { shippingRates, calculateShipping } from "@/utils/shipping";
import { toast } from "react-toastify";

export function useShipping() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    if (selectedCountry && shippingRates[selectedCountry]) {
      const cityList = Object.keys(shippingRates[selectedCountry]);
      setCities(cityList);
      setSelectedCity(cityList.length > 0 ? cityList[0] : '');
    } else {
      setCities([]);
      setSelectedCity('');
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedCity && shippingRates[selectedCountry]?.[selectedCity]) {
      const cityInfo = shippingRates[selectedCountry][selectedCity];
      setZipCode(cityInfo.postalCode);
      setShippingCost(cityInfo.cost);
    } else {
      setZipCode('');
      setShippingCost(null);
    }
  }, [selectedCity, selectedCountry]);

  const handleCalculateShipping = () => {
    const result = calculateShipping(selectedCountry, selectedCity, zipCode);

    if ('error' in result) {
      toast.error(result.error);
    } else {
      setShippingCost(result.cost);
      toast.success(`Shipping cost calculated: $${result.cost.toFixed(2)}`);
    }
  };

  return {
    selectedCountry,
    setSelectedCountry,
    selectedCity,
    setSelectedCity,
    zipCode,
    setZipCode,
    shippingCost,
    cities,
    handleCalculateShipping,
  };
}
