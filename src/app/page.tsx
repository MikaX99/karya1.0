import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProductCatalog from "@/components/ProductCatalog";
import Partners from "@/components/Partners";
import Clients from "@/components/Clients";
import AboutValue from "@/components/AboutValue";
import ContactFooter from "@/components/ContactFooter";
import FloatingWA from "@/components/FloatingWA";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <>
      {/* Scroll Reveal Observer */}
      <ScrollRevealProvider />

      {/* Sticky Glassmorphism Navbar (with Dark/Light toggle) */}
      <Navbar />

      <main>
        {/* [1] Hero Section */}
        <Hero />

        {/* [2] IT Services */}
        <Services />

        {/* [3] Product Catalog with Filter */}
        <ProductCatalog />

        {/* [4] Brand Partners Marquee */}
        <Partners />

        {/* [5] Client Area — klien yang pernah menggunakan jasa Karya Sistem */}
        <Clients />

        {/* [6] Value Propositions */}
        <AboutValue />

        {/* [7] About & Contact + Footer */}
        <ContactFooter />
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWA />
    </>
  );
}
