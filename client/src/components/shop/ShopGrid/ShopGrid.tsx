"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { FaHeart, FaSignal, FaEye, FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";
import ProductFilterBar from "../ProductFilterBar/ProductFilterBar";
import ShopSearchSidebar from "../ShopSearchSidebar/ShopSearchSidebar";
import LoadMoreButton from "@/components/shared/LoadMoreButton/LoadMoreButton";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton/ScrollToTopButton";
import ProductSidebar from "../SideBar/SideBar";
import SideColor from "../SideColor/SideColor";
import AvailabilityFilter from "../AvailabilityFilter/AvailabilityFilter";
import { formatPrice } from "@/utils/formatPrice";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";


const Dialog = dynamic(() => import("@mui/material/Dialog"), { ssr: false });

type Props = {
  products: FeaturedProduct[];
  carProducts?: (FeaturedProduct & {
    make?: string;
    carModel?: string;
    year?: string | number;
  })[];
  defaultView?: "grid" | "gridLarge" | "list" | "listLarge";
  from?: string;
  make?: string;
  model?: string;
  year?: string | number;
};

const modalVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, y: "100%", transition: { duration: 0.3, ease: easeIn } },
};

export default function ShopGrid({ products,
  carProducts = [],
  defaultView,
}: Props) {

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<FeaturedProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeView, setActiveView] = useState(defaultView || "grid");
  const [filteredProducts, setFilteredProducts] = useState<FeaturedProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<("inStock" | "outOfStock")[]>([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("query");
  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const year = searchParams.get("year");

  const isSearch = !!searchTerm || make || model || year;
  const [visibleFeaturedCount, setVisibleFeaturedCount] = useState(isSearch ? products.length : 13);
  const [visibleCarCount, setVisibleCarCount] = useState(isSearch ? carProducts.length : 0);

  const carCountInFiltered = useMemo(() => {
    return filteredProducts.filter(p =>
      carProducts.some(c => String(c._id) === String(p._id))
    ).length;
  }, [filteredProducts, carProducts]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const isSelected = prev.includes(category);

      if (category === "Cars") {
        if (!isSelected) {
          // Cars seçilirsə bütün maşınları göstər
          setVisibleCarCount(carProducts.length);
        } else {
          // Cars çıxarılanda sıfırla
          setVisibleCarCount(0);
        }
      }

      return isSelected
        ? prev.filter((c) => c !== category)
        : [...prev, category];
    });
  };

  useEffect(() => {
    const allProducts = [...products, ...carProducts];

    const filtered = allProducts.filter(product => {
      const isCar = carProducts.some(c => String(c._id) === String(product._id));

      const categoryMatch =
        selectedCategories.length === 0
          ? true
          : selectedCategories.some(category => {
            if (category === "Cars") return isCar;
            if (category === "Featured") return product.isFeatured;
            return product.category === category;
          });

     
      if (isCar && (selectedCategories.length === 0 || selectedCategories.includes("Cars"))) {
        return categoryMatch;
      }

      const availabilityMatch =
        selectedAvailability.length === 0
          ? true
          : (selectedAvailability.includes("inStock") && !!product.inStock) ||
          (selectedAvailability.includes("outOfStock") && !product.inStock);

      const price = product.price ?? 0;
      const priceMatch = price >= min && price <= max;

      return categoryMatch && availabilityMatch && priceMatch;
    });

    const featured = filtered.filter(p => products.some(prod => prod._id === p._id));
    const cars = filtered.filter(p => carProducts.some(c => c._id === p._id));

    setFilteredProducts([...featured, ...cars]);

    console.log("=== useEffect ===");
    console.log("carProducts:", carProducts);
    console.log("allProducts:", allProducts);
    console.log("selectedCategories:", selectedCategories);
    console.log("filtered (filteredProducts):", [...featured, ...cars]);
    if (isSearch && !selectedCategories.includes("Cars")) {
      setSelectedCategories(["Cars"]);
    }

    if (isSearch) {
      const featuredCount = filtered.filter(p => p.isFeatured).length;
      const carCount = filtered.filter(p =>
        carProducts.some(c => c._id === p._id)
      ).length;

      setVisibleFeaturedCount(prev =>
        prev > featuredCount ? prev : featuredCount
      );
      setVisibleCarCount(prev =>
        prev > carCount ? prev : carCount
      );
    }
  }, [
    products,
    carProducts,
    isSearch,
    selectedCategories,
    selectedAvailability,
    min,
    max,
    make,
    model,
    year,
  ]);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  const gridClasses: Record<string, string> = {
    grid: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    gridLarge: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
    list: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    listLarge: "grid-cols-1",
  };


  const handleAddToWishlist = (product: FeaturedProduct) => {
    const exists = wishlist.some((item) => item._id === product._id);
    if (exists) {
      removeFromWishlist(product._id);
      toast.success("Product removed from wishlist.", { style: { borderRadius: "15px", background: "#333", color: "#fff" } });
    } else {
      addToWishlist(product);
      toast.success("Product added to wishlist.", { style: { borderRadius: "15px", background: "#e51515", color: "#fff" } });
    }
  };

  const handleQuickViewClick = (product: FeaturedProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
    setQuantity(1);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleAddToCart = (product: FeaturedProduct) => {
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
    });
    toast.success("Congratulations! Your item has been added.", { style: { borderRadius: "15px", background: "#e51515", color: "#fff" } });
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("🧪 handleLoadMore triggered");
      console.log("Current visibleCarCount:", visibleCarCount);
      console.log("Current carCountInFiltered:", carCountInFiltered);

      setVisibleCarCount(prev => Math.min(prev + 6, carCountInFiltered));
      setLoading(false);
    }, 500);
  };

  const visibleProducts = [
    ...filteredProducts
      .filter(p => !carProducts.some(c => c._id === p._id))
      .slice(0, visibleFeaturedCount),

    ...filteredProducts
      .filter(p => carProducts.some(c => c._id === p._id))
      .slice(0, visibleCarCount),
  ];


  console.log("🪵 Selected Categories:", selectedCategories);
  console.log("🪵 Visible Products:", visibleProducts.length);


  return (
    <div className="container mx-auto bg-white px-4 sm:px-6 md:px-10 py-6 md:py-10 grid grid-cols-12 gap-6">

      <div className="col-span-12 md:col-span-3 bg-white p-4 rounded shadow">
        <ShopSearchSidebar />
        <ProductSidebar
          products={products}
          carProducts={carProducts}
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />

        <AvailabilityFilter
          products={products}
          selectedAvailability={selectedAvailability}
          setSelectedAvailability={setSelectedAvailability}
        />


        <div className="w-full p-2 max-w-sm">
          <h2 className="text-[22px] font-medium primary-font text-[#181b23] mt-3 mb-1">Price</h2>
          <div className="flex justify-between text-gray-600 text-sm font-medium">
            <span>{min.toFixed(2)}</span>
            <span>{max.toFixed(2)}</span>
          </div>


          <div className="relative mt-2">

            <div className="absolute top-1/2 h-[4px] w-full rounded bg-gray-200 -translate-y-1/2"></div>
            <div className="absolute top-1/2 h-[4px] w-full rounded bg-red-500 -translate-y-1/2"></div>


            <input
              type="range"
              min={0}
              max={1000}
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
              className="absolute w-full h-[4px] appearance-none bg-transparent pointer-events-auto
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-gray-400
            [&::-webkit-slider-thumb]:shadow
            [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-gray-400"
            />
            <input
              type="range"
              min={0}
              max={1000}
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="absolute w-full h-[4px] appearance-none bg-transparent pointer-events-auto
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-gray-400
            [&::-webkit-slider-thumb]:shadow
            [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-gray-400"
            />
          </div>
        </div>


        <SideColor />

        <div className="p-2">
          <h3 className="text-[22px] font-medium primary-font text-[#181b23] mt-3 mb-6">Size</h3>
          <div className="space-y-4">

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-[#ccc] rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> S (2)</span>
              </div>

            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-gray-400 rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> Small (1)</span>
              </div>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-gray-400 rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> M (6)</span>
              </div>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-gray-400 rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> L (6)</span>
              </div>
            </label>


          </div>
        </div>

        <div className="p-2">
          <h3 className="text-[22px] font-medium primary-font text-[#181b23] mt-3 mb-6">Type</h3>
          <div className="space-y-4">

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-[#ccc] rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> Chinese (0)</span>
              </div>

            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-gray-400 rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> Original (0)</span>
              </div>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-gray-400 rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide">Used (0)</span>
              </div>
            </label>



          </div>
        </div>

        <div className="p-2">
          <h3 className="text-[22px] font-medium primary-font text-[#181b23] mt-3 mb-6">More filters</h3>
          <div className="space-y-4">

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-[#ccc] rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> 2025 (0)</span>
              </div>

            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-gray-400 rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px]  tracking-wide">2024 (0)</span>
              </div>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-gray-400 rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px]  tracking-wide">BMW (0)</span>
              </div>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-gray-400 rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide">CLS (0)</span>
              </div>
            </label>



          </div>
        </div>

        <div className="p-2">
          <h3 className="text-[22px] font-medium primary-font text-[#181b23] mt-3 mb-6">Model</h3>
          <div className="space-y-4">

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-[#ccc] rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> ILX (3)</span>
              </div>

            </label>

          </div>
        </div>

        <div className="p-2">
          <h3 className="text-[22px] font-medium primary-font text-[#181b23] mt-3 mb-6">Make</h3>
          <div className="space-y-4">

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-[#ccc] rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> Toyota (0)</span>
              </div>

            </label>

          </div>
        </div>

        <div className="p-2">
          <h3 className="text-[22px] font-medium primary-font text-[#181b23] mt-3 mb-6">Year</h3>
          <div className="space-y-4">

            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 border-[#ccc] rounded" />
                <span className="text-[#6c6f7a] primary-font text-[14px] tracking-wide"> 2025 (0)</span>
              </div>

            </label>

          </div>
        </div>

        <div className="relative w-full h-[400px] mt-10 rounded-md overflow-hidden shadow">

          <Image
            src="https://aero-theme.myshopify.com/cdn/shop/files/collection_side.png?v=1624642204" // şəkil yolunu dəyiş
            alt="New Collection"
            className="w-full h-full object-cover"
            fill
          />

          <div className="absolute inset-0 bg-black/40" />


        </div>

        <div className="relative w-full h-[400px] mt-10 rounded-md overflow-hidden shadow">
          <Image
            src="https://aero-theme.myshopify.com/cdn/shop/files/collection_side.png?v=1624642204"
            alt="New Collection"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-md text-sm gap-4 sm:gap-0">
          <ProductFilterBar
            activeView={activeView}
            onViewChange={(view: string) => setActiveView(view as "grid" | "gridLarge" | "list" | "listLarge")}
          />
        </div>

        <div className={`grid ${gridClasses[activeView]} gap-4 sm:gap-6`}>


          <AnimatePresence>
            {visibleProducts.map((product) => (
              <motion.div
                key={product._id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-[20px] overflow-hidden border border-[#ccc] w-full
      ${activeView === "list"
                    ? "flex flex-col h-[320px] sm:h-[400px]"
                    : activeView === "listLarge"
                      ? "flex items-center flex-col sm:flex-row min-h-[260px] sm:min-h-[300px]"
                      : activeView === "gridLarge"
                        ? "flex flex-col"
                        : "flex flex-col h-auto"
                  }`}
              >
                {/* Actions */}
                <div className="actions text-[#363c45] absolute top-3 left-3 flex flex-col gap-2 sm:gap-3 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                  <FaHeart
                    onClick={() => handleAddToWishlist(product)}
                    size={20}
                    className="cursor-pointer hover:text-[#e51515] transition peer"
                  />
                  <Link href={`/product/${product.slug}`}>
                    <FaSignal
                      size={20}
                      className="hover:text-[#f29101] transition peer cursor-pointer"
                    />
                  </Link>
                  <FaEye
                    size={20}
                    className="cursor-pointer hover:text-[#0af] transition peer"
                    onClick={(e) => handleQuickViewClick(product, e)}
                  />
                </div>

                {/* Image */}
                <Link
                  href={`/product/${product.slug}`}
                  className={`relative block overflow-hidden ${activeView === "listLarge"
                    ? "w-full sm:w-[300px] h-[200px] sm:h-full"
                    : "w-full h-[200px] sm:h-[290px]"
                    }`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </Link>

                {/* Content */}
                <div className="featured-content p-3 flex flex-col flex-1">
                  <div className="stars border-b border-[#ccc] pb-2 sm:pb-4 flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaRegStar size={14} key={i} className="text-[#f29101]" />
                    ))}
                  </div>

                  <h2 className="text-[13px] sm:text-[14px] text-[#181b23] font-medium primary-font border-b border-[#ccc] pt-2 sm:pt-4 pb-2 sm:pb-4">
                    {product.title}
                  </h2>

                  <div className="flex primary-font items-center gap-2 pt-4">
                    {product.discountPercent && (
                      <span className="relative bg-[#ffd700] text-[#444] text-[13px] font-semibold px-2 py-1 rounded-sm mr-1 overflow-visible">
                        -{product.discountPercent}%
                        <span className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-t-transparent border-b-transparent border-l-[#ffd700]" />
                      </span>
                    )}
                    <span className="text-[#e51515] font-medium primary-font text-[14px] sm:text-[15px]">
                      {formatPrice(product.price)}
                    </span>
                    {typeof product.oldPrice === "number" && product.oldPrice > 0 && (
                      <span className="line-through text-gray-400 text-sm">
                        €{product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="group flex gap-2 sm:gap-3 w-full py-3 sm:py-4 mt-4 sm:mt-8 rounded-[25px] justify-center items-center bg-[#efefef] hover:bg-[#e51515] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 text-[#838896] hover:text-white"
                  >
                    <FiShoppingCart />
                    <span className="text-[11px] sm:text-[12px] primary-font font-medium">
                      ADD TO CART
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex justify-center mt-6">
            <LoadMoreButton
              total={carCountInFiltered}
              visibleCount={visibleCarCount}
              onLoadMore={handleLoadMore}
              loading={loading}
            />
          </div>

        </div>
      </div>

      <AnimatePresence>
        {open && selectedProduct && (
          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <motion.div className="!p-5 bg-[#fff] text-black relative rounded-lg" variants={modalVariants} initial="hidden" animate="visible" exit="exit">
              <button onClick={handleClose} className="absolute top-3 right-3 text-black hover:text-[#e51515]">
                <IoClose size={25} />
              </button>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="w-full md:w-1/2 relative h-[220px] sm:h-[300px] md:h-[400px] group rounded-lg overflow-hidden">
                  <Image src={selectedProduct.image} alt={selectedProduct.title} fill className="object-cover rounded-lg" />
                  {selectedProduct.hoverImage && (
                    <Image src={selectedProduct.hoverImage} alt={selectedProduct.title + " Hover"} fill className="object-cover rounded-lg absolute top-0 left-0 opacity-0 group-hover:opacity-100" />
                  )}
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left">
                  <h2 className="text-[20px] sm:text-[22px] md:text-[24px] text-[#181b23] primary-font font-medium mb-2">{selectedProduct.title}</h2>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    <span className="text-[#e51515] text-base sm:text-lg font-semibold">€{selectedProduct.price.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-10">
                    <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className="w-12 sm:w-16 text-center border border-gray-300 rounded h-8 sm:h-10" />
                    <button onClick={() => { handleAddToCart(selectedProduct); handleClose(); }} className="py-2 px-8 sm:px-12 bg-[#e51515] hover:bg-[#ff1f1f] transition text-white font-semibold h-8 sm:h-10 rounded">Add to Cart</button>
                  </div>

                  <p className="text-sm sm:text-base text-gray-400 mt-4 sm:mt-10">{selectedProduct.description}</p>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      <ScrollToTopButton />
    </div>
  );
}
