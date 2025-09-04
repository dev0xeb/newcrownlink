"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import images from "@/app/assets/image";

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100"
            aria-label="Open sidebar"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/" className="flex items-center">
            <Image src={images.logo} alt="Crownlinks Academy Logo" width={140} height={28} className="object-contain" />
          </Link>
        </div>

        <div className="flex items-center gap-4" ref={menuRef}>
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="text-sm font-semibold text-gray-900">John Doe</span>
            <span className="text-xs text-gray-500">Student</span>
          </div>
          <button
            onClick={() => setOpen(v => !v)}
            className="relative inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 p-1 pr-2 hover:bg-gray-50"
            aria-haspopup="menu"
            aria-expanded={open}
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1A6EDC] text-white font-semibold">JD</span>
            <svg className={`h-4 w-4 text-gray-600 transition-transform ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.96a.75.75 0 111.08 1.04l-4.24 4.53a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          {open && (
            <div className="absolute right-4 top-14 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
              <div className="py-1">
                <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Dashboard</Link>
                <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</Link>
                <Link href="/" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Logout</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
