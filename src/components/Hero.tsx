"use client";

import { MessageCircle, ChevronDown } from "lucide-react";
import config from "@/data/config.json";
import { useLocale } from "@/context/LocaleContext";

export default function Hero() {
  const { t } = useLocale();

  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    config.whatsapp.defaultMessage
  )}`;

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
        alignItems: "center",
        background: "var(--hero-bg)",
        paddingTop: "90px",
        paddingBottom: "3rem",
        borderBottom: "1px solid var(--color-border)",
        overflow: "hidden",
        transition: "background 0.25s ease",
      }}
    >
      <div className="container" style={{ padding: "0 1.5rem" }}>
        <div
          className="hero-split-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "3.5rem",
            alignItems: "center",
            minHeight: "70vh",
          }}
        >
          {/* Left Column: Minimal High-Taste Content */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Monospace Uppercase Category Tag */}
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "var(--color-text-subtle)",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-mono, monospace)",
              }}
            >
              SOLUSI & INTEGRASI IT ENTERPRISE
            </div>

            {/* Main Bold Headline */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.2vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "var(--color-text)",
                margin: "0 0 1.25rem 0",
              }}
            >
              {t("hero_title_prefix")}{" "}
              <span style={{ color: "var(--color-primary)" }}>{t("hero_title_highlight")}</span>{" "}
              {t("hero_title_suffix")}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.075rem)",
                color: "var(--color-text-muted)",
                maxWidth: "540px",
                lineHeight: 1.7,
                margin: "0 0 2.25rem 0",
                fontWeight: 400,
              }}
            >
              <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>KaryaSistem</strong> {t("hero_desc")}
            </p>

            {/* Action Pills */}
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <a
                id="hero-wa-cta"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  borderRadius: "9999px",
                  padding: "0.85rem 1.75rem",
                  fontWeight: 700,
                  fontSize: "0.925rem",
                }}
              >
                <MessageCircle size={18} />
                {t("cta_primary")}
              </a>
              <button
                id="hero-scroll-services"
                onClick={handleScrollServices}
                className="btn-secondary"
                style={{
                  borderRadius: "9999px",
                  padding: "0.85rem 1.75rem",
                  fontWeight: 600,
                  fontSize: "0.925rem",
                }}
              >
                {t("cta_secondary")}
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Monospace Technical Metadata Ticker Bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem 2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--color-border)",
                fontSize: "0.75rem",
                fontWeight: 600,
                fontFamily: "var(--font-mono, monospace)",
                color: "var(--color-text-subtle)",
                letterSpacing: "0.06em",
              }}
            >
              <div>SERVER: <span style={{ color: "var(--color-text)" }}>DELL & HPE</span></div>
              <div>NETWORK: <span style={{ color: "var(--color-text)" }}>CISCO</span></div>
              <div>LAPTOP: <span style={{ color: "var(--color-text)" }}>LENOVO</span></div>
              <div>GARANSI: <span style={{ color: "#30D158" }}>RESMI 100%</span></div>
            </div>
          </div>

          {/* Right Column: Taste Concentric Rotating Spiral Typography Art */}
          <div
            className="hero-art-container"
            style={{
              height: "100%",
              minHeight: "420px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "1.5rem",
              overflow: "hidden",
              padding: "2rem",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="hero-spiral-wrapper" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 500 500" className="hero-spiral-svg" style={{ width: "100%", maxHeight: "420px" }}>
                <path id="circle-1" d="M 250, 250 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="none" />
                <path id="circle-2" d="M 250, 250 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" fill="none" />
                <path id="circle-3" d="M 250, 250 m -170, 0 a 170,170 0 1,1 340,0 a 340,170 0 1,1 -340,0" fill="none" />
                <path id="circle-4" d="M 250, 250 m -220, 0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0" fill="none" />

                <text className="spiral-track track-1">
                  <textPath href="#circle-1" startOffset="0%">
                    KARYASISTEM IT SOLUTIONS • HARDWARE • SOFTWARE •
                  </textPath>
                </text>
                <text className="spiral-track track-2">
                  <textPath href="#circle-2" startOffset="0%">
                    ENTERPRISE IT INTEGRATION • DELL • CISCO • LENOVO • HP • MICROSOFT •
                  </textPath>
                </text>
                <text className="spiral-track track-3">
                  <textPath href="#circle-3" startOffset="0%">
                    PENGADAAN SERVER & JARINGAN TERPERCAYA • GARANSI RESMI INDONESIA •
                  </textPath>
                </text>
                <text className="spiral-track track-4">
                  <textPath href="#circle-4" startOffset="0%">
                    KARYASISTEM CORPORATE PROVIDER • DISTRIBUTOR RESMI PERANGKAT IT •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-art-container {
            min-height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
