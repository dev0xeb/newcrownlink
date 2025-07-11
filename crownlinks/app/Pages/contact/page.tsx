'use client'
import ContactHeroSection from "@/app/components/contact/ContactHeroSection";
import ContactFormSection from "@/app/components/contact/ContactFormSection";
import ContactMapSection from "@/app/components/contact/ContactMapSection";
import CallToActionSection from "@/app/components/About/CallToActionSection";
import Footer from "@/app/components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function ContactPage() {
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
      <ContactHeroSection />
      <ContactFormSection />
      <ContactMapSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}