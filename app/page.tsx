import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="glow-line" />
        <ServicesSection />
        <AboutSection />
        <ClientsSection />
        <div className="glow-line" />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
