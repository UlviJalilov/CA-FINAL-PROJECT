"use client";

import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useRef } from "react";
import { useUIStore } from "@/store/useUIStore";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { homeMenuItems, shopColumns, layoutColumns, pagesMenuItems } from "@/data/MenuItems";
import { useFeaturedProducts } from "@/hooks/useFeaturedProducts";
import { FeaturedProduct } from "@/types/FeaturedProduct";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname();

  const isHome = pathname === "/";


  const { data: featuredProducts = [] } = useFeaturedProducts();

  const firstFourFeatured = featuredProducts.slice(0, 4);

  const router = useRouter();

  const handleSearch = () => {
    if (searchValue.trim()) {
      router.push(`/search?title=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const {
    searchOpen,
    gridMenuOpen,
    worldMenuOpen,
    cartMenuOpen,
    toggleSearch,
    toggleGridMenu,
    toggleWorldMenu,
    toggleCartMenu,
    closeAll,
  } = useUIStore();

  const searchRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const worldRef = useRef<HTMLDivElement | null>(null);
  const cartRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(
    [searchRef, gridRef, worldRef, cartRef],
    closeAll,
    searchOpen || gridMenuOpen || worldMenuOpen || cartMenuOpen
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileToggle = () => {
    if (mobileOpen) {
      closeAll();
      setMobileOpen(false);
    } else {
      setMobileOpen(true);
    }
  };


  return (
    <div className="bg-[#22232b] text-[#fff] z-[999] primary-font border-b-[2px] border-[#e51515] h-[88px] relative">
      <div className="container flex justify-between items-center px-4 mx-auto h-full">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Image
            className="object-cover"
            src="https://aero-theme.myshopify.com/cdn/shop/files/logo-aero1.png?v=1613506944"
            alt="brand_logo"
            width={70}
            height={70}
            quality={100}
            priority={true}
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 h-full">
          <nav className="flex justify-center items-center h-full w-full">
            <ul className="flex gap-1 text-[13px] font-medium h-full">

              {/*Home Dropdown*/}
              <li className="h-full relative group">
                <Link
                  href="/"
                  className={`flex items-center justify-center gap-1 h-full w-full transition-transform duration-300 ease-in-out hover:translate-x-2 px-7 ${isHome ? "bg-[#e51515] clip-diagonal" : ""
                    }`}
                >
                  HOME <IoIosArrowDown size={12} />
                </Link>

                <div className="absolute top-full left-0 w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <ul className="flex flex-col py-10 text-center text-black text-[13px] font-semibold">
                    {homeMenuItems.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 hover:text-[#e51515] text-[#292929] transition-transform duration-300 ease-in-out hover:translate-x-2 text-[14px] cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/*Shop Dropdown*/}
              <li className="h-full relative group">
                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-1 hover:bg-[#e51515] clip-diagonal h-full w-full px-7 cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-2"
                >
                  SHOP <IoIosArrowDown size={12} />
                </Link>

                <div className="absolute top-full left-1/2 px-4 w-[800px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 + scale-95 group-hover:scale-100 transform ease-out -translate-x-1/4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-10 text-[14px] text-[#292929] font-medium">
                    {shopColumns.map((column, index) => (
                      <div key={index} className="flex flex-col text-left">
                        <h4 className="mb-8 text-[15px] text-[#292929] text-center font-medium">
                          {column.title}
                        </h4>
                        <ul className="flex text-center flex-col space-y-4">
                          {column.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="hover:text-[#e51515] text-[#292929] cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-2"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li className="h-full relative group">
                <Link
                  href="/featured"
                  className="flex items-center justify-center gap-1 hover:bg-[#e51515] clip-diagonal h-full w-full px-7 cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-2"
                >
                  FEATURED <IoIosArrowDown size={12} />
                </Link>

                <div className="absolute top-full left-1/2 px-4 w-[800px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 -translate-x-1/3 ">
                  <div className="grid grid-cols-4 gap-6 px-10 py-10 text-[14px] text-[#292929] font-medium">
                    {firstFourFeatured.map((product: FeaturedProduct) => (
                      <div key={product._id} className="text-center cursor-pointer">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={200}
                          height={200}
                          className="mx-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90"
                        />
                        <p className="mt-2 hover:text-[#e51515]">{product.title}</p>
                        <p className="text-[#e51515] mt-2">{product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li className="h-full relative group">
                <Link
                  href="/layouts"
                  className="flex items-center justify-center gap-1 hover:bg-[#e51515] clip-diagonal h-full w-full px-7 cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-2"
                >
                  LAYOUTS <IoIosArrowDown size={12} />
                </Link>

                <div className="absolute top-full left-0 w-[500px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-10 text-[14px] text-[#292929] font-medium justify-items-center">
                    {layoutColumns.map((column, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        <h4 className="mb-8 text-[15px] text-[#292929] font-medium">
                          {column.title}
                        </h4>
                        <ul className="flex flex-col items-center space-y-4">
                          {column.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="hover:text-[#e51515] text-[#292929] cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-2"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

              </li>

              <li className="h-full relative group">
                <Link
                  href="#"
                  className="flex items-center justify-center gap-1 h-full w-full transition-transform duration-300 ease-in-out hover:translate-x-2 px-7"
                >
                  PAGES <IoIosArrowDown size={12} />
                </Link>

                <div className="absolute top-full left-0 w-52 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <ul className="flex flex-col py-10 text-center text-black text-[13px] font-semibold">
                    {pagesMenuItems.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 hover:text-[#e51515] text-[#292929] transition-transform duration-300 ease-in-out hover:translate-x-2 text-[14px] cursor-pointer"
                        onClick={() => {
                          console.log("Navigating to:", item.href);
                          router.push(item.href);
                        }}
                      >
                        {item.label}
                      </li>

                    ))}

                  </ul>

                </div>
              </li>



            </ul>
          </nav>
        </div>

        {/* RIGHT ICONS (DESKTOP) */}
        <div className="hidden md:flex h-full">
          <div className="flex justify-center items-center gap-5 h-full">
            {/* Search */}
            <div className="relative h-full flex items-center " ref={searchRef}>
              <div
                className={`absolute right-7 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out overflow-hidden ${searchOpen ? "w-[300px] opacity-100" : "w-0 opacity-0"
                  }`}
              >
                <input
                  type="text"
                  placeholder="Search entire store here..."
                  className="w-full bg-white h-10 pl-3 text-sm text-[#222] outline-none border-l-2 border-[#e51515]"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
              </div>

              <button
                onClick={toggleSearch}
                className="text-white hover:text-[#e51515] transition-colors duration-300"
              >
                <FaSearch size={20} />
              </button>
            </div>

            {/* Grid */}
            <div className="relative" ref={gridRef}>
              <button
                onClick={toggleGridMenu}
                className="flex items-center text-white hover:text-[#e51515] transition-colors duration-300"
              >
                <BsGrid3X3Gap size={20} />
              </button>

              {gridMenuOpen && (
                <div className="absolute right-0 mt-3 w-70 bg-white text-[#222] rounded shadow-lg z-50">
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>
                  <div className="p-10 text-sm secondary-font">
                    <div className="mb-3">
                      <p className="text-xs primary-font font-medium mb-2 text-[#22232b]">
                        MY ACCOUNT <IoIosArrowDown className="inline ml-1" size={10} />
                      </p>
                      <ul className="space-y-3 text-[13px] pl-5 pt-3 text-gray-500">
                        <li className="hover:text-[#e51515] cursor-pointer">
                          <Link className="block w-full h-full" href="/login">
                            {" "}
                            Sign In
                          </Link>
                        </li>
                        <li className="hover:text-[#e51515] cursor-pointer">
                          <Link className="block w-full h-full" href="/register">
                            Register
                          </Link>
                        </li>
                        <li className="hover:text-[#e51515] cursor-pointer">Wish List</li>
                        <li className="hover:text-[#e51515] cursor-pointer">Cart</li>
                      </ul>
                    </div>
                    <hr className="my-3 border-gray-200" />
                    <div>
                      <p className="text-xs primary-font font-medium mb-2 text-[#22232b]">
                        CURRENCY: USD
                      </p>
                      <ul className="space-y-3 text-[12px] pl-5 pt-3 text-gray-500">
                        {["USD", "EUR", "GBP", "PKR", "CAD", "JPY"].map((curr) => (
                          <li
                            key={curr}
                            className={`cursor-pointer ${curr === "USD" ? "text-[#e51515] font-semibold" : "hover:text-[#e51515]"
                              }`}
                          >
                            {curr}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* World */}
            <div className="relative" ref={worldRef}>
              <button
                onClick={toggleWorldMenu}
                className="flex items-center text-white hover:text-[#e51515] transition-colors duration-300"
              >
                <GiWorld size={20} />
              </button>

              {worldMenuOpen && (
                <div className="absolute right-0 mt-3 w-70 bg-white text-[#222] rounded shadow-lg z-50">
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>
                  <div className="p-10 text-sm secondary-font">
                    <div className="mb-3">
                      <p className="text-xs primary-font font-medium mb-2 text-[#22232b]">
                        Language: <span className="pl-2">English</span>
                      </p>
                      <ul className="space-y-3 text-[13px] text-gray-500">
                        <li className="hover:text-[#e51515] cursor-pointer">English</li>
                        <li className="hover:text-[#e51515] cursor-pointer">Français</li>
                      </ul>
                    </div>
                    <hr className="my-3 border-gray-200" />
                    <div>
                      <p className="text-xs primary-font font-medium mb-2 text-[#22232b]">
                        Market: <span className="pl-2"> United States (USD $)</span>
                      </p>
                      <ul className="space-y-3 text-[12px] pt-2 text-gray-500">
                        {["France (USD $)", "United Kingdom (USD $)", "United States (USD $)"].map(
                          (curr) => (
                            <li
                              key={curr}
                              className={`cursor-pointer ${curr === "USD" ? "text-[#e51515] font-semibold" : "hover:text-[#e51515]"
                                }`}
                            >
                              {curr}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={toggleCartMenu}
                className="flex items-center text-white hover:text-[#e51515] transition-colors duration-300"
              >
                <RiShoppingBagLine size={20} />
              </button>

              {cartMenuOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded shadow-lg z-50">
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>
                  <div className="p-5 text-sm flex justify-center items-center secondary-font">
                    <p className="text-xs primary-font text-[#444] font-medium text-center">
                      Your Shopping Cart is Empty !
                    </p>
                  </div>
                  <hr className="my-3 border-gray-200" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="md:hidden">
          <button onClick={handleMobileToggle} className="text-white focus:outline-none">
            {mobileOpen ? <IoClose size={28} /> : <RxHamburgerMenu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#22232b] z-[999] w-full absolute top-[88px] left-0 transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[600px] py-4 overflow-visible" : "max-h-0 py-0 overflow-hidden"
          }`}
      >
        <ul className="flex flex-col text-center gap-4 text-[13px] font-medium relative">
          <li>
            <Link href="/" className="block w-full py-2 bg-[#e51515] clip-diagonal">
              HOME
            </Link>
          </li>
          {["shop", "featured", "layouts", "pages"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item}`}
                className="block w-full py-2 clip-diagonal hover:bg-[#e51515] transition-all duration-300"
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}

          {/* MOBILE ICONS WITH DROPDOWN */}
          <li className="flex justify-center gap-6 mt-4 relative z-[1000]">
            {/* Search */}
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="text-white hover:text-[#e51515]"
                aria-label="Toggle Search"
              >
                <FaSearch size={20} />
              </button>
              {searchOpen && (
                <div className="absolute top-full left-5/3 -translate-x-1/2 mt-2 w-[80vw] max-w-[320px] bg-white text-[#222] rounded shadow-lg p-3 z-[1100]">
                  <input
                    type="text"
                    placeholder="Search entire store here..."
                    className="w-full h-10 px-3 text-sm outline-none border border-[#e51515]"
                  />
                </div>
              )}
            </div>

            {/* Grid */}
            <div className="relative">
              <button
                onClick={toggleGridMenu}
                className="text-white hover:text-[#e51515]"
                aria-label="Toggle Grid"
              >
                <BsGrid3X3Gap size={20} />
              </button>
              {gridMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[368px] bg-white text-[#222] rounded shadow-lg p-5 z-[1100] text-left text-sm">
                  <p className="font-semibold mb-2">MY ACCOUNT</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="hover:text-[#e51515] cursor-pointer">Sign In</li>
                    <li className="hover:text-[#e51515] cursor-pointer">Register</li>
                    <li className="hover:text-[#e51515] cursor-pointer">Wish List</li>
                    <li className="hover:text-[#e51515] cursor-pointer">Cart</li>
                  </ul>
                  <hr className="my-3" />
                  <p className="font-semibold mb-2">CURRENCY: USD</p>
                  <ul className="space-y-2 text-gray-600 text-xs">
                    {["USD", "EUR", "GBP", "PKR", "CAD", "JPY"].map((curr) => (
                      <li
                        key={curr}
                        className={`cursor-pointer ${curr === "USD" ? "text-[#e51515] font-semibold" : "hover:text-[#e51515]"
                          }`}
                      >
                        {curr}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* World */}
            <div className="relative">
              <button
                onClick={toggleWorldMenu}
                className="text-white hover:text-[#e51515]"
                aria-label="Toggle World"
              >
                <GiWorld size={20} />
              </button>
              {worldMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[368px] bg-white text-[#222] rounded shadow-lg p-5 z-[1100] text-left text-sm">
                  <p className="font-semibold mb-2">Language</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="hover:text-[#e51515] cursor-pointer">English</li>
                    <li className="hover:text-[#e51515] cursor-pointer">Français</li>
                  </ul>
                  <hr className="my-3" />
                  <p className="font-semibold mb-2">Market</p>
                  <ul className="space-y-2 text-gray-600 text-xs">
                    {["France (USD $)", "United Kingdom (USD $)", "United States (USD $)"].map(
                      (curr) => (
                        <li
                          key={curr}
                          className={`cursor-pointer ${curr === "USD" ? "text-[#e51515] font-semibold" : "hover:text-[#e51515]"
                            }`}
                        >
                          {curr}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Cart */}
            <div className="relative">
              <button
                onClick={toggleCartMenu}
                className="text-white hover:text-[#e51515]"
                aria-label="Toggle Cart"
              >
                <RiShoppingBagLine size={20} />
              </button>
              {cartMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[368px] bg-white rounded shadow-lg p-5 z-[1100] text-sm">
                  <p className="text-center text-[#444] font-medium">Your Shopping Cart is Empty!</p>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
