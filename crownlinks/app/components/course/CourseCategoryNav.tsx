'use client'
import React, { useRef, useState, useEffect } from "react";

const categories = [
  "Teaching",
  "Management",
  "Health and Safety",
  "Accounting",
  "Business",
  "Accounting",
  "Social Care",
  "Adult Care",
  "Assessment"
];

const SCROLL_AMOUNT = 120;

const CourseCategoryNav: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <div className="max-w-9xl mx-[40px]">
      <nav className="relative flex items-center bg-white py-2">
        <span className="font-semibold mr-4 whitespace-nowrap">Course Categories</span>
        <div className="relative flex-1 flex items-center">
          {showLeft && (
            <button onClick={() => scroll("left")} className="absolute left-0 z-10 h-full px-2 bg-gradient-to-r from-white/90 to-transparent">
              <span className="text-xl">&#8592;</span>
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex gap-[30px] overflow-x-auto scrollbar-hide ml-2 pr-8 w-full"
            style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch", msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {categories.map((cat, idx) => (
              <span key={idx} className="text-gray-500 whitespace-nowrap cursor-pointer hover:text-black transition-colors">
                {cat}
              </span>
            ))}
          </div>
          {showRight && (
            <button onClick={() => scroll("right")} className="absolute right-0 z-10 h-full px-2 bg-gradient-to-l from-white/90 to-transparent">
              <span className="text-xl">&#8594;</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default CourseCategoryNav; 