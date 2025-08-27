import { FeaturedProduct } from "@/types/FeaturedProduct";

interface ProductSidebarProps {
    products: FeaturedProduct[];
    carProducts?: FeaturedProduct[];
    selectedCategories: string[];
    handleCategoryChange: (cat: string) => void;
}

const ProductSidebar = ({
    products,
    carProducts = [],
    selectedCategories,
    handleCategoryChange,
}: ProductSidebarProps) => {
   
    const categories = ["Cars", "Featured"];

    return (
        <div className="p-2 border-t mt-4 border-[#ccc]">
            <h3 className="text-[22px] font-medium primary-font text-[#181b23] mt-3 mb-6">Categories</h3>
            <div className="space-y-3">
                {categories.map((cat) => {
                    const count =
                        cat === "Cars"
                            ? carProducts.length
                            : cat === "Featured"
                                ? [...products, ...carProducts].filter(p => !!p.isFeatured).length
                                : products.filter(p => p.category === cat).length;

                    return (
                        <label
                            key={cat}
                            className="flex items-center justify-between cursor-pointer border-b border-gray-200 pb-2"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => handleCategoryChange(cat)}
                                    className="w-4 h-4 border-gray-400 rounded"
                                />
                                <span className="text-sm text-gray-700">{cat}</span>
                            </div>
                            <span className="text-xs text-gray-500">({count})</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductSidebar;
