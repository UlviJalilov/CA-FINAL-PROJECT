import { FeaturedProduct } from "@/types/FeaturedProduct";


export const tabs = ["Wheels", "Sounds", "Featured", "Home Page"];


const homePageIds = [
    "688607dfdd321373a1d6e393",
    "688616e8dd321373a1d6e415",
    "6886206bdd321373a1d6e491",
    "68862638dd321373a1d6e4cb",
];

const wheelsIds = [
    "68814a530780e114897c0ba5",
    "68815ab80780e114897c0c40",
    "68815a230780e114897c0c2d",
    "688159370780e114897c0c09",
    "6881477e0780e114897c0b79",
    "688142030780e114897c0b5a",
];

const soundsIds = [
    "688616e8dd321373a1d6e415",
    "68815b890780e114897c0c57",
    "688157ad0780e114897c0bee",
    "688142030780e114897c0b5a",
    "688607dfdd321373a1d6e393",
    "68815a230780e114897c0c2d",
];

export function filterProductsByTab(
    products: FeaturedProduct[],
    activeTab: string
): FeaturedProduct[] {
    switch (activeTab.toLowerCase()) {
        case "featured":
            return products.filter((p) => p.isFeatured);
        case "home page":
            return products.filter((p) => homePageIds.includes(p._id));
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