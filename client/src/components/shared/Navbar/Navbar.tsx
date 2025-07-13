"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useUIStore } from "@/store/useUIStore";
export default function Navbar() {

  const [searchValue, setSearchValue] = useState("");
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
            height={90}
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 h-full">
          <nav className="flex justify-center items-center h-full w-full">
            <ul className="flex gap-1 text-[13px] font-medium h-full">
              <li className="h-full">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-1 h-full w-full bg-[#e51515] clip-diagonal px-7"
                >
                  HOME <IoIosArrowDown size={12} />
                </Link>
              </li>
              {["shop", "featured", "layouts", "pages"].map((item) => (
                <li key={item} className="flex items-center group h-full">
                  <Link
                    href={`/${item}`}
                    className="flex items-center justify-center gap-1 h-full w-full px-7 clip-diagonal transition-all duration-300"
                  >
                    {item.toUpperCase()} <IoIosArrowDown size={12} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* RIGHT ICONS (DESKTOP) */}
        <div className="hidden md:flex h-full">
          <div className="flex justify-center items-center gap-5 h-full">
            {/* Search */}
            <div className="relative h-full flex items-center">
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
            <div className="relative">
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
                        <li className="hover:text-[#e51515] cursor-pointer">Sign In</li>
                        <li className="hover:text-[#e51515] cursor-pointer">Register</li>
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
            <div className="relative">
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
                      <ul className="space-y-3 text-[13px] pt-1 text-gray-500">
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
            <div className="relative">
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
