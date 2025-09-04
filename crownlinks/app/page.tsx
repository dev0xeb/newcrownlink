'use client'
import Navbar from '@/app/components/Navbar';
import WhyChooseUs from './components/About/WhyChooseUsSection';
import Hero from './components/home/Hero';
import AboutSection from './components/home/AboutSection';
import ImageBanner from './components/home/ImageBanner';
import CoursesSection from './components/home/CoursesSection';
import FeaturedCoursesSection from './components/home/FeaturedCoursesSection';
import FAQSection from './components/home/FAQSection';
import CtaSection from './components/home/CtaSection';
import Footer from './components/Footer';
import ImpactStatsSection from './components/home/ImpactStatsSection';
import Education from './components/home/Education';
import { useState } from 'react';

export default function Home() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
  const handleRemoveItem = (id: number | string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  const handleAddToCart = (course: any) => {
    if (cartItems.some(item => item.slug === course.slug)) {
      alert('Course has already been added to cart');
      return;
    }
    setCartItems([
      ...cartItems,
      {
        id: course.id || course.slug,
        slug: course.slug,
        image: course.courseImage || course.image || '',
        title: course.title,
        price: Number(course.currentPrice?.replace(/[^\d.]/g, '')) || course.price || 0,
        description: course.description || 'No description available.',
        quantity: 1,
      },
    ]);
  };
  const handleClearCart = () => setCartItems([]);
  return (
    <main className="overflow">
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <FeaturedCoursesSection onAddToCart={handleAddToCart} cartItems={cartItems} />
      <ImpactStatsSection />
      <AboutSection/>
      <FeaturedCoursesSection onAddToCart={handleAddToCart} cartItems={cartItems} />
      <Education />
      <ImageBanner/>
      <WhyChooseUs />
      <FAQSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

