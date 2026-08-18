"use client";

import { useLocale } from "@/context/LocaleContext";
import { CheckCircle2, ShieldCheck, Cpu, Target, ArrowRight } from "lucide-react";
import config from "@/data/config.json";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function About() {
  const { t } = useLocale();

  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    "Halo Karya Sistem, saya ingin berkonsultasi mengenai solusi dan integrasi teknologi untuk perusahaan kami."
  )}`;

  const pillars = [
    {
      icon: <Cpu size={22} color="var(--color-primary)" />,
      title: t("about_pillar_1_title") || "System Integrator & IT Provider",
      desc: t("about_pillar_1_desc") || "Solusi teknologi terpadu untuk meningkatkan efisiensi operasional, keamanan, dan keberlanjutan bisnis.",
      bgTint: "rgba(0, 113, 227, 0.08)",
    },
    {
      icon: <Target size={22} color="#0284C7" />,
      title: t("about_pillar_2_title") || "Layanan Terintegrasi End-to-End",
      desc: t("about_pillar_2_desc") || "Konsultasi, pengadaan teknologi, implementasi, integrasi sistem, hingga managed support berkelanjutan.",
      bgTint: "rgba(2, 132, 199, 0.08)",
    },
    {
      icon: <ShieldCheck size={22} color="#10B981" />,
      title: t("about_pillar_3_title") || "Vendor-Agnostic & Custom-Fit",
      desc: t("about_pillar_3_desc") || "Tidak terikat satu brand; solusi dipilih murni berbasis kebutuhan spesifik dan ROI jangka panjang Anda.",
      bgTint: "rgba(16, 185, 129, 0.08)",
    },
  ];

  return (
    <section id="about" className="section" style={{ background: "var(--section-bg-2)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-badge">{t("about_badge") || "Tentang Kami"}</span>
          <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
            About <span style={{ color: "var(--color-primary)" }}>Karya Sistem</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: 1.6,
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              fontWeight: 600,
            }}
          >
            Technology Solutions Built Around Your Business
          </p>
        </div>

        {/* Main 2-Column Corporate Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
            alignItems: "center",
            marginBottom: "3rem",
          }}
          className="about-grid"
        >
          {/* Left Column: Comprehensive Story & Value Statement */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "16px",
              padding: "2.25rem 2rem",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--color-primary)",
                }}
              />
              <span
                style={{
                  fontSize: "0.825rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                }}
              >
                PT Karya Sistem Teknologi
              </span>
            </div>

            <p
              style={{
                fontSize: "1.025rem",
                color: "var(--color-text)",
                lineHeight: 1.75,
                margin: 0,
                fontWeight: 500,
              }}
            >
              <strong>PT Karya Sistem Teknologi</strong> adalah <em>System Integrator</em> dan <em>IT Solution Provider</em> yang menyediakan solusi teknologi terintegrasi untuk membantu perusahaan meningkatkan efisiensi operasional, keamanan, dan keberlanjutan bisnis.
            </p>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Kami menggabungkan konsultasi, pengadaan teknologi, implementasi, integrasi, dan dukungan IT dalam satu layanan terintegrasi. Solusi kami mencakup infrastruktur IT, business applications, cybersecurity, IT procurement, serta managed IT services.
            </p>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Kami memahami bahwa setiap perusahaan memiliki kebutuhan, proses bisnis, dan tantangan teknologi yang berbeda. Karena itu, kami tidak terbatas pada satu produk atau platform tertentu. Kami membantu customer menentukan teknologi yang paling sesuai berdasarkan kebutuhan bisnis, kondisi infrastruktur, serta tujuan jangka panjang perusahaan.
            </p>

            <div style={{ paddingTop: "0.75rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("About Section CTA")}
                className="nav-capsule-wa"
                style={{
                  padding: "0.75rem 1.4rem",
                  fontSize: "0.9rem",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>Konsultasi Solusi Bisnis</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Structured Feature Highlight Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {pillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "14px",
                  padding: "1.5rem 1.6rem",
                  display: "flex",
                  gap: "1.1rem",
                  alignItems: "flex-start",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.3s ease",
                }}
                className="about-pillar-card"
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: pillar.bgTint,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.025rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      margin: "0 0 0.35rem 0",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
