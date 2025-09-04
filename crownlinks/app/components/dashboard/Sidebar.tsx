"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/my-courses", label: "My Courses" },
  { href: "/dashboard/assignments", label: "Assignments" },
  { href: "/dashboard/progress", label: "Progress" },
  { href: "/dashboard/settings", label: "Settings" },
  { href: "/", label: "Logout" },
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed z-50 md:z-30 top-0 left-0 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-out md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Dashboard sidebar"
      >
        <nav className="mt-16 md:mt-20 p-4 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-[#EAF2FE] text-[#1A6EDC]" : "text-gray-700 hover:bg-gray-50"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
