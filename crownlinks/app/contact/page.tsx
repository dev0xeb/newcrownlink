// app/contact/page.tsx
import ContactHeroSection from "@/app/components/contact/ContactHeroSection";
import ContactFormSection from "@/app/components/contact/ContactFormSection";
import ContactMapSection from "@/app/components/contact/ContactMapSection";
import CallToActionSection from "@/app/components/About/CallToActionSection";
import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <main>
        <Navbar />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactMapSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}