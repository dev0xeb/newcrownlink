'use client'
import ContactHeroSection from "@/app/components/contact/ContactHeroSection";
import ContactFormSection from "@/app/components/contact/ContactFormSection";
import ContactMapSection from "@/app/components/contact/ContactMapSection";
import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import CtaSection from "../components/home/CtaSection";

export default function ContactPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
  const handleRemoveItem = (id: number | string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  const handleClearCart = () => setCartItems([]);
  return (
    <main>
        <Navbar />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactMapSection />
      <CtaSection/>
      <Footer />
    </main>
  );
}