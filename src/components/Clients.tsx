"use client";

import { useState } from "react";
import clientsData from "@/data/clients.json";
import { Users, Building2, MapPin, RefreshCw, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const industryColors: Record<string, string> = {
  "Perbankan & Keuangan": "#1E87DA",
  "Pendidikan": "#0284C7",
  "Kesehatan": "#059669",
  "Logistik & Transportasi": "#D97706",
  "Pemerintahan": "#6366F1",
  "Manufaktur": "#DC2626",
  "Retail & E-Commerce": "#DB2777",
  "Properti & Konstruksi": "#0D9488",
};

const testimonials = clientsData.filter((c) => c.testimonial);

export default function Clients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prev = () =>
    setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActiveTestimonial((i) => (i + 1) % testimonials.length);

  const current = testimonials[activeTestimonial];

  return (
    <section id="klien" className="section" style={{ background: "var(--section-bg-2)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-badge">Client Area</span>
          <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
            Dipercaya oleh <span style={{ color: "var(--color-primary)" }}>Perusahaan Enterprise</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "clamp(0.9rem, 1.4vw, 1.025rem)",
            }}
          >
            KaryaSistem menjadi mitra integrasi teknologi bagi berbagai sektor industri di seluruh Indonesia.
          </p>
        </div>

        {/* Corporate Stats Grid with Subtle Dividers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
            padding: "1.5rem",
            background: "var(--card-alt-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
          }}
        >
          {[
            { icon: <Users size={18} color="var(--color-primary)" />, number: "500+", label: "Klien Enterprise" },
            { icon: <Building2 size={18} color="var(--color-primary)" />, number: "12+", label: "Sektor Industri" },
            { icon: <MapPin size={18} color="var(--color-primary)" />, number: "34", label: "Kota di Indonesia" },
            { icon: <RefreshCw size={18} color="var(--color-primary)" />, number: "87%", label: "Tingkat Repeat Order" },
          ].map((stat, idx, arr) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "0.5rem",
                borderRight: idx < arr.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.4rem" }}>
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--color-text-subtle)",
                  fontWeight: 500,
                  marginTop: "0.2rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logo Grid (Corporate Cards) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {clientsData.map((client) => {
            const color = industryColors[client.industry] || "#1E87DA";
            return (
              <div key={client.id} className="client-logo-card">
                {/* Abbreviation Logo Badge */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "6px",
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: "0.95rem", fontWeight: 800, color: color }}>
                    {client.abbr}
                  </span>
                </div>

                {/* Info */}
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: "0.25rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {client.name}
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.15rem 0.5rem",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {client.industry}
                  </span>
                </div>

                {/* Since */}
                <div style={{ fontSize: "0.7rem", color: "var(--color-text-faint)" }}>
                  Klien sejak {client.since}
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Testimonial Showcase */}
        {testimonials.length > 0 && (
          <div
            style={{
              padding: "2rem 2.25rem",
              background: "var(--card-gradient)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", flexWrap: "wrap" }}>
              <Quote size={28} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: "4px" }} />

              <div style={{ flex: 1, minWidth: "220px" }}>
                <p
                  style={{
                    fontSize: "clamp(0.925rem, 1.4vw, 1.05rem)",
                    color: "var(--color-text)",
                    lineHeight: 1.7,
                    margin: "0 0 1rem 0",
                  }}
                >
                  &ldquo;{current.testimonial}&rdquo;
                </p>

                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text)" }}>
                    {current.name}
                  </div>
                  {current.contact && (
                    <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                      {current.contact}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Slider Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--color-border-subtle)",
              }}
            >
              <div style={{ display: "flex", gap: "0.4rem" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    style={{
                      width: i === activeTestimonial ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      background:
                        i === activeTestimonial ? "var(--color-primary)" : "var(--color-border)",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="btn-theme"
                  style={{ width: "32px", height: "32px" }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="btn-theme"
                  style={{ width: "32px", height: "32px" }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
