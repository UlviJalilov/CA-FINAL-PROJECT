"use client";

import { FiLoader } from "react-icons/fi";
import { motion } from "framer-motion";

interface LoadMoreButtonProps {
  total: number;
  visibleCount: number;
  setVisibleCount: (fn: (prev: number) => number) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  step?: number;
}

export default function LoadMoreButton({
  total,
  visibleCount,
  setVisibleCount,
  loading,
  setLoading,
  step = 6,
}: LoadMoreButtonProps) {
  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + step, total));
      setLoading(false);
    }, 800); 
  };

  if (visibleCount >= total) return null;

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="px-6 py-3 flex items-center gap-2 rounded-[25px] text-[12px] font-medium uppercase primary-font bg-[#efefef] hover:bg-[#e51515] text-[#6c6f7a] hover:text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? (
        <motion.div
          className="flex items-center gap-2"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <FiLoader className="text-[16px]" />
          Loading...
        </motion.div>
      ) : (
        "Load More Products"
      )}
    </button>
  );
}
