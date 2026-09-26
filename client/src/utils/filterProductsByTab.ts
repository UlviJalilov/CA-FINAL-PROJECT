import { FeaturedProduct } from "@/types/FeaturedProduct";


export const tabs = ["Wheels", "Sounds", "Featured",];

const wheelsIds = [
    "6aac29e7b18a9d966c7b87ad",
    "6aac38bcb18a9d966c7b8801",
    "6aac17d2b18a9d966c7b8792",
    "6aac35adb18a9d966c7b87ec",
    "6881477e0780e114897c0b79",
    "688142030780e114897c0b5a",
];

const soundsIds = [
    "6aaae10f567baf73a4beb447",
    "6aac3c8bb18a9d966c7b8811",
    "6aac2de5b18a9d966c7b87c0",
    "6aac3bb1b18a9d966c7b8808",
    "6aac300ab18a9d966c7b87d7",
    "6aac35adb18a9d966c7b87ec",
];

export function filterProductsByTab(
    products: FeaturedProduct[],
    activeTab: string
): FeaturedProduct[] {
    switch (activeTab.toLowerCase()) {
        case "featured":
            return products.filter((p) => p.isFeatured);
        case "wheels":
            return products
                .filter((p) => wheelsIds.includes(p._id))
                .sort((a, b) => wheelsIds.indexOf(a._id) - wheelsIds.indexOf(b._id));
        case "sounds":
            return products
                .filter((p) => soundsIds.includes(p._id))
                .sort((a, b) => soundsIds.indexOf(a._id) - soundsIds.indexOf(b._id));
        default:
            return products;
    }
}