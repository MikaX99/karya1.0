"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy-load below-the-fold sections for lighter initial JS bundle
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const ProductCatalog = dynamic(() => import("@/components/ProductCatalog"), { ssr: false });
const Partners = dynamic(() => import("@/components/Partners"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const AboutValue = dynamic(() => import("@/components/AboutValue"), { ssr: false });
const ContactFooter = dynamic(() => import("@/components/ContactFooter"), { ssr: false });
const FloatingWA = dynamic(() => import("@/components/FloatingWA"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Sticky Glassmorphism Navbar (with Dark/Light toggle) */}
      <Navbar />

      <main>
        {/* [1] Hero Section — always SSR for LCP */}
        <Hero />

        {/* [2] IT Services */}
        <Services />

        {/* [3] Product Catalog with Filter */}
        <ProductCatalog />

        {/* [4] Brand Partners Marquee */}
        <Partners />

        {/* [5] Client Area — klien yang pernah menggunakan jasa KaryaSistem */}
        <Clients />

        {/* [6] Value Propositions */}
        <AboutValue />

        {/* [7] Contact + Footer */}
        <ContactFooter />
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWA />
    </>
  );
}
