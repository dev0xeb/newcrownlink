'use client'
import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import icons from '../../assets/icons';

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
      <nav className="flex flex-wrap items-center bg-white py-2 w-full">
        <div className="flex items-center flex-shrink-0">
          <span className="font-semibold whitespace-nowrap">Course Categories</span>
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="md:hidden inline-flex items-center justify-center px-2 h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
              aria-label="Scroll left"
            >
              <Image src={icons.arrow_left} alt="Scroll left" width={24} height={24} />
            </button>
          )}
        </div>
        <div className="relative flex-1 min-w-0 flex items-center">
          {/* Absolute left arrow for lg and up */}
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:block absolute left-0 z-10 h-full px-2 bg-gradient-to-r from-white/90 to-transparent flex items-center justify-center lg:flex"
              aria-label="Scroll left"
              style={{ top: 0 }}
            >
              <Image src={icons.arrow_left} alt="Scroll left" width={24} height={24} />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex gap-[30px] overflow-x-auto scrollbar-hide ml-2 pr-8 w-full max-w-full min-w-0"
            style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch", msOverflowStyle: "none", scrollbarWidth: "none" }}
            tabIndex={0}
            aria-label="Course categories navigation"
          >
            {categories.map((cat, idx) => (
              <span key={idx} className="text-gray-500 whitespace-nowrap cursor-pointer hover:text-black transition-colors">
                {cat}
              </span>
            ))}
          </div>
          {/* Right arrow: always at end, absolute for lg+ */}
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 z-10 h-full px-2 bg-gradient-to-l from-white/90 to-transparent flex items-center justify-center"
              aria-label="Scroll right"
              style={{ top: 0 }}
            >
              <Image src={icons.arrow_right} alt="Scroll right" width={24} height={24} />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default CourseCategoryNav;