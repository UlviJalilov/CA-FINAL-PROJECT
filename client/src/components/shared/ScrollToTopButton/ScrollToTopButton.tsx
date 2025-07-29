"use client";
import { FaChevronUp } from "react-icons/fa";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import { scrollToTop } from "@/utils/scrollToTop";

export default function ScrollToTopButton() {
  const isVisible = useScrollVisibility();

  return (
    <button
      onClick={() => scrollToTop(1200)}
      className={`fixed bottom-10 right-6 z-50 bg-[#e51515] text-white p-5 rounded-full shadow-[0_2px_10px_rgba(229,21,21,0.3)] hover:shadow-[0_4px_20px_rgba(229,21,21,0.6)] transition-all duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <FaChevronUp />
    </button>
  );
}
