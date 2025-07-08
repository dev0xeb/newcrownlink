'use client'
import { useState } from "react";
import AboutHero from "../components/About/AboutHeroSection";
import AboutImage from "../components/About/AboutImageSection";
import AboutIntro from "../components/About/AboutIntroSection";
import AboutStats from "../components/About/AboutStatsSection";
import AboutMission from "../components/About/AcoutMissionSection";
import AboutCTA from "../components/About/CallToActionSection";
import TestimonialsSection from "../components/About/Testimonials";
import WhyChooseUs from "../components/About/WhyChooseUsSection";
import Footer from "../components/Footer";
import ImageBanner from "../components/home/ImageBanner";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
  const handleRemoveItem = (id: number | string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  const handleClearCart = () => setCartItems([]);

  return (
    <main>
      <Navbar
        cartItems={cartItems}
        subtotal={subtotal}
        handleRemoveItem={handleRemoveItem}
        handleClearCart={handleClearCart}
      />
      <AboutHero />
      <AboutIntro/>
      <ImageBanner />
      <AboutMission />
      <AboutStats />
      <WhyChooseUs />
      <TestimonialsSection />
      <AboutCTA />
      <Footer/>
    </main>
  );
}