"use client";

import { ShieldCheck, Truck, HeartHandshake, Star } from "lucide-react";

const values = [
  {
    id: "garansi-resmi",
    icon: <ShieldCheck size={28} strokeWidth={1.75} />,
    title: "Garansi Resmi Vendor",
    description: "Setiap perangkat yang kami sediakan dilengkapi dengan garansi resmi produsen. Proteksi penuh mencakup penggantian suku cadang dan dukungan teknis resmi.",
    stat: "3 Tahun",
    statLabel: "Garansi Rata-rata",
    color: "#059669",
    features: ["Garansi Spareparts", "On-site Service", "NBD Response"],
  },
  {
    id: "pengiriman-cepat",
    icon: <Truck size={28} strokeWidth={1.75} />,
    title: "Pengiriman Aman & Terjamin",
    description: "Pengiriman ke seluruh jaringan operasional bisnis di Indonesia menggunakan kemasan khusus standar perangkat elektronik dan asuransi penuh.",
    stat: "1-3 Hari",
    statLabel: "Estimasi Pengiriman",
    color: "#1E87DA",
    features: ["Standard Packaging IT", "Asuransi Pengiriman", "Tracking Terintegrasi"],
  },
  {
    id: "purnajual",
    icon: <HeartHandshake size={28} strokeWidth={1.75} />,
    title: "Dukungan Purnajual Terpercaya",
    description: "Komitmen purnajual berkelanjutan melalui tim teknisi berpengalaman untuk membantu instalasi, konfigurasi, serta pemeliharaan berkala sistem Anda.",
    stat: "24/7",
    statLabel: "Helpdesk Support",
    color: "#0284C7",
    features: ["Technical Support", "Preventive Maintenance", "Konsultasi IT"],
  },
];

export default function AboutValue() {
  return (
    <section id="keunggulan" className="section" style={{ background: "var(--section-bg-1)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-badge">Keunggulan</span>
          <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
            Mengapa Memilih <span style={{ color: "var(--color-primary)" }}>KaryaSistem</span>
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
            Mitra integrasi teknologi terpercaya berorientasi pada keberlanjutan dan keandalan sistem bisnis Anda.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {values.map((value) => (
            <div
              key={value.id}
              id={`value-${value.id}`}
              className="glass-card"
              style={{
                borderRadius: "8px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Stat Highlight Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
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
                    color: value.color,
                  }}
                >
                  {value.icon}
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-text)" }}>
                    {value.stat}
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--color-text-faint)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {value.statLabel}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  margin: "0 0 0.75rem 0",
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  margin: "0 0 1.5rem 0",
                  flex: 1,
                }}
              >
                {value.description}
              </p>

              {/* Feature Checklist */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  paddingTop: "1rem",
                }}
              >
                {value.features.map((feature) => (
                  <span
                    key={feature}
                    style={{
                      padding: "0.25rem 0.6rem",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
