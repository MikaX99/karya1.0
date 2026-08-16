"use client";

import { MessageCircle, ChevronDown, ShieldCheck, Truck, Award } from "lucide-react";
import config from "@/data/config.json";

export default function Hero() {
  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    config.whatsapp.defaultMessage
  )}`;

  const handleScrollProducts = () => {
    const el = document.querySelector("#produk");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollServices = () => {
    const el = document.querySelector("#layanan");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "88vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--hero-bg)",
        paddingTop: "90px",
        paddingBottom: "4rem",
        borderBottom: "1px solid var(--color-border)",
        transition: "background 0.25s ease",
      }}
    >
      {/* Subtle texture grid background */}
      <div className="hero-grid" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* Main Container */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "2rem 1.5rem",
        }}
      >
        {/* Company Category Badge */}
        <div style={{ marginBottom: "1.25rem" }}>
          <span className="section-badge">IT System Integrator & Solutions Provider</span>
        </div>

        {/* Corporate Headline */}
        <h1
          className="text-hero"
          style={{
            margin: "0 0 1.25rem 0",
            maxWidth: "960px",
            marginLeft: "auto",
            marginRight: "auto",
            color: "var(--color-text)",
          }}
        >
          Solusi & Integrasi IT untuk{" "}
          <span style={{ color: "var(--color-primary)" }}>Operasional Bisnis</span> Anda
        </h1>

        {/* Business Subheadline */}
        <p
          style={{
            fontSize: "clamp(0.975rem, 1.6vw, 1.15rem)",
            color: "var(--color-text-muted)",
            maxWidth: "760px",
            margin: "0 auto 2.25rem",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>KaryaSistem</strong> membantu perusahaan membangun, mengelola, dan mengintegrasikan infrastruktur jaringan, perangkat enterprise, keamanan IT, serta aplikasi bisnis terpadu.
        </p>

        {/* Action Buttons (Clear Visual Hierarchy) */}
        <div
          className="hero-actions"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <a
            id="hero-wa-cta"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Konsultasi Gratis
          </a>
          <button
            id="hero-scroll-services"
            onClick={handleScrollServices}
            className="btn-secondary"
          >
            Lihat Layanan
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Corporate Trust Pointers (Clean Text List - No Pills) */}
        <div
          style={{
            display: "flex",
            gap: "clamp(1rem, 3vw, 2.5rem)",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "1rem 0",
            borderTop: "1px solid var(--color-border-subtle)",
            borderBottom: "1px solid var(--color-border-subtle)",
            marginBottom: "3rem",
            maxWidth: "840px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {[
            { icon: <ShieldCheck size={16} color="var(--color-primary)" />, text: "Garansi Resmi Vendor" },
            { icon: <Truck size={16} color="var(--color-primary)" />, text: "Pengiriman Seluruh Indonesia" },
            { icon: <Award size={16} color="var(--color-primary)" />, text: "Dukungan Purnajual Terjamin" },
          ].map((item) => (
            <div
              key={item.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                color: "var(--color-text-muted)",
                fontWeight: 500,
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Understated Corporate Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1.25rem",
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >
          {[
            { number: "10+", label: "Tahun Pengalaman" },
            { number: "36+", label: "Brand Vendor Partner" },
            { number: "99%", label: "Tingkat Kepuasan Klien" },
          ].map((stat, idx, arr) => (
            <div
              key={stat.label}
              className={idx < arr.length - 1 ? "stat-divider" : ""}
              style={{
                textAlign: "center",
                borderRight: idx < arr.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
                padding: "0.5rem 0.5rem",
              }}
            >
              <div className="stat-number">{stat.number}</div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-subtle)",
                  fontWeight: 500,
                  marginTop: "0.25rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
