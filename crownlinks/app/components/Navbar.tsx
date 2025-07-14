'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import images from '../assets/image';
import icons from '../assets/icons';
import { navbarStyles as styles } from '../styles/navbar';
import CartDrawer from './CartDrawer';
import { useCart } from '../components/checkout/CartContext';

const Navbar = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();

  const courses = ['Web Development', 'Mobile Development', 'Data Science'];

  const CartIcon = ({ className = styles.cart.icon }) => (
    <Image
      src={icons.cart}
      alt="Shopping Cart"
      width={24}
      height={24}
      className={className}
    />
  );

  const isActive = (path: string) => {
    const normalizedPathname = pathname.replace(/\/$/, '');
    const normalizedPath = path.replace(/\/$/, '');
    
    if (normalizedPath === '') {
      return normalizedPathname === '' || normalizedPathname === '/home';
    }
    
    return normalizedPathname.startsWith(normalizedPath);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-20 py-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={images.logo}
                  alt="Crownlinks Academy Logo"
                  width={180}
                  height={36}
                  className="object-contain"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link 
                  href="/" 
                  className={`${styles.navLink} ${isActive('/') ? 'text-[#1A6EDC] font-semibold' : ''}`}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className={`${styles.navLink} ${isActive('/about') ? 'text-[#1A6EDC] font-semibold' : ''}`}
                >
                  About
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                    className={`flex items-center gap-1 ${styles.navLink} ${isActive('/courses') ? 'text-[#1A6EDC] font-semibold' : ''}`}
                  >
                    Courses
                    <Image
                      src={icons.dropdown}
                      alt="dropdown"
                      width={20}
                      height={20}
                      className={`object-contain transition-transform ${isCoursesDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isCoursesDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {courses.map((course) => (
                          <Link
                            key={course}
                            href={`/courses/${course.toLowerCase().replace(' ', '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {course}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Link 
                  href="/contact" 
                  className={`${styles.navLink} ${isActive('/contact') ? 'text-[#1A6EDC] font-semibold' : ''}`}
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <button onClick={() => setIsCartOpen(true)} className="flex items-center focus:outline-none">
                  <CartIcon />
                  {/* Mobile badge */}
                  <span className="bg-white text-[#1A6EDC] rounded-full px-2 py-0.5 text-xs font-bold shadow border border-[#1A6EDC] absolute -top-2 -right-2 block md:hidden">
                    {cart.length}
                  </span>
                  {/* Desktop counter */}
                  <span className={`${styles.cart.counter} hidden md:inline`}>
                    {cart.length}
                  </span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Link href="/login" className={styles.button.secondary}>Sign in</Link>
                <Link href="/signup" className={styles.button.primary}>Register</Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1A6EDC]"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Cart Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="flex flex-col h-[60vh] mx-auto mt-8 w-full max-w-md shadow-lg rounded-lg relative">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <Image
                src={images.logo}
                alt="Crownlinks Academy Logo"
                width={140}
                height={28}
                className="object-contain"
              />
              <button className="relative mr-4" onClick={() => { setIsMobileMenuOpen(false); setIsCartOpen(true); }}>
                <CartIcon className="w-6 h-6" />
                <span className="bg-[#1A6EDC] text-white rounded-full px-2 py-0.5 text-xs font-bold shadow border border-[#1A6EDC] absolute -top-2 -right-2">
                  {cart.length}
                </span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <div className="pt-4 pb-24 flex-1 flex flex-col justify-between">
              <div>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link 
                    href="/" 
                    className={`${styles.mobileNavLink} ${isActive('/') ? 'text-[#1A6EDC] font-semibold' : ''}`}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className={`${styles.mobileNavLink} ${isActive('/about') ? 'text-[#1A6EDC] font-semibold' : ''}`}
                  >
                    About
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${isActive('/courses') ? 'text-[#1A6EDC] font-semibold' : 'text-gray-700'} hover:text-[#1A6EDC] hover:bg-gray-50`}
                    >
                      Courses
                      <Image
                        src={icons.dropdown}
                        alt="dropdown"
                        width={20}
                        height={20}
                        className={`object-contain transition-transform ${isCoursesDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isCoursesDropdownOpen && (
                      <div className="pl-4 pb-2">
                        {courses.map((course) => (
                          <Link
                            key={course}
                            href={`/courses/${course.toLowerCase().replace(' ', '-')}`}
                            className={styles.mobileNavLink}
                          >
                            {course}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link 
                    href="/contact" 
                    className={`${styles.mobileNavLink} ${isActive('/contact') ? 'text-[#1A6EDC] font-semibold' : ''}`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full px-4 pb-4 flex justify-between gap-4">
                <Link href="/login" className={`${styles.button.secondary} w-1/2`}>Sign in</Link>
                <Link href="/signup" className={`${styles.button.primary} w-1/2`}>Register</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 