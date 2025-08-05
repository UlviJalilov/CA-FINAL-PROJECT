export type ShippingData = {
    [country: string]: {
        [city: string]: {
            postalCode: string;
            cost: number;
        };
    };
};

export const shippingRates: ShippingData = {
    Azerbaijan: {
        Sumgait: { postalCode: "5000", cost: 12 },
        Ismayilli: { postalCode: "3100", cost: 15 },
        Baku: { postalCode: "1000", cost: 10 },
        Shamakhi: { postalCode: "5600", cost: 13 },
    },
    Turkey: {
        Istanbul: { postalCode: "34000", cost: 18 },
        Ankara: { postalCode: "06000", cost: 20 },
        Izmir: { postalCode: "35000", cost: 19 },
    },
    "United States": {
        "New York": { postalCode: "10001", cost: 26 },
        California: { postalCode: "90001", cost: 28 },
        Texas: { postalCode: "73301", cost: 25 },
    },
    Almaniya: {
        Berlin: { postalCode: "10115", cost: 22 },
        Hamburg: { postalCode: "20095", cost: 23 },
        Munich: { postalCode: "80331", cost: 24 },
    },
    Russia: {
        Moscow: { postalCode: "101000", cost: 20 },
        "Saint Petersburg": { postalCode: "190000", cost: 21 },
        Kazan: { postalCode: "420000", cost: 22 },
    },
    Uzbekistan: {
        Tashkent: { postalCode: "100000", cost: 16 },
        Samarkand: { postalCode: "140100", cost: 17 },
        Bukhara: { postalCode: "200100", cost: 18 },
    },

    China: {
        Beijing: { postalCode: "100000", cost: 20 },
        Shanghai: { postalCode: "200000", cost: 22 },
        Guangzhou: { postalCode: "510000", cost: 25 },
        Shenzhen: { postalCode: "518000", cost: 24 },
        Chengdu: { postalCode: "610000", cost: 23 },
        HonqKonq: { postalCode: "999077", cost: 23 },
    },
};


export const calculateShipping = (
    country: string,
    city: string,
    zipCode: string,
    rates: ShippingData = shippingRates
): { cost: number } | { error: string } => {
    if (!country || !city || !zipCode) {
        return { error: "Please fill all shipping fields." };
    }

    const countryData = rates[country];
    const cityData = countryData?.[city];

    if (!cityData) {
        return { error: "Selected city not available in our shipping zones." };
    }

    if (cityData.postalCode !== zipCode.trim()) {
        return { error: `Postal code for ${city} should be ${cityData.postalCode}` };
    }

    return { cost: cityData.cost };
};
