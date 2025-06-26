'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import images from '../assets/image';
import icons from '../assets/icons';
import { navbarStyles as styles } from '../styles/navbar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
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
    // Remove trailing slashes and normalize paths
    const normalizedPathname = pathname.replace(/\/$/, '');
    const normalizedPath = path.replace(/\/$/, '');
    
    if (normalizedPath === '') {
      // For home page, check if we're at root or /home
      return normalizedPathname === '' || normalizedPathname === '/home';
    }
    
    return normalizedPathname.startsWith(normalizedPath);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-20 py-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
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

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Link href="/cart" className="flex items-center">
                <CartIcon />
                <span className={styles.cart.counter}>0</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/login" className={styles.button.secondary}>Sign in</Link>
              <Link href="/signup" className={styles.button.primary}>Register</Link>
            </div>
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white z-10 shadow-lg">
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
            <div className="pt-4 pb-3 border-t border-gray-200 mt-4">
              <div className="flex flex-col space-y-3 px-3">
                <Link href="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-[#1A6EDC]">
                  <CartIcon className="w-6 h-6" />
                  <span className="text-base font-medium">Cart (0)</span>
                </Link>
                <Link href="/login" className={styles.button.secondary}>Login</Link>
                <Link href="/signup" className={styles.button.primary}>Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 