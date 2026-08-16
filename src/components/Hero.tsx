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
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
            minHeight: "75vh",
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
              SOLUSI &amp; INTEGRASI IT ENTERPRISE
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
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "1rem" }}>
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
          </div>

          {/* Right Column: Borderless & Dense Concentric Spiral Typography Art */}
          <div
            className="hero-art-container"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "520px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background: "transparent",
              border: "none",
              boxShadow: "none",
              padding: "0",
              overflow: "hidden",
              maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 95%)",
              WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 95%)",
            }}
          >
            <div className="hero-spiral-wrapper" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 500 500" className="hero-spiral-svg" style={{ width: "100%", maxHeight: "580px" }}>
                <path id="circle-1" d="M 250, 250 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                <path id="circle-2" d="M 250, 250 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
                <path id="circle-3" d="M 250, 250 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" fill="none" />
                <path id="circle-4" d="M 250, 250 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0" fill="none" />
                <path id="circle-5" d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0" fill="none" />
                <path id="circle-6" d="M 250, 250 m -238, 0 a 238,238 0 1,1 476,0 a 238,238 0 1,1 -476,0" fill="none" />

                <text className="spiral-track track-1">
                  <textPath href="#circle-1" startOffset="0%">
                    KARYASISTEM IT SOLUTIONS • HARDWARE &amp; SOFTWARE • SYSTEM INTEGRATION •
                  </textPath>
                </text>
                <text className="spiral-track track-2">
                  <textPath href="#circle-2" startOffset="0%">
                    HIGH PERFORMANCE SERVERS • DELL POWEREDGE • HPE PROLIANT • CISCO NETWORKING • LENOVO THINKSYSTEM • MICROSOFT LICENSING •
                  </textPath>
                </text>
                <text className="spiral-track track-3">
                  <textPath href="#circle-3" startOffset="0%">
                    DISTRIBUTOR RESMI PERANGKAT IT ENTERPRISE • GARANSI RESMI INDONESIA • CLOUD INTEGRATION • CYBERSECURITY &amp; FIREWALL PROTECTION • BACKUP STORAGE SOLUTIONS •
                  </textPath>
                </text>
                <text className="spiral-track track-4">
                  <textPath href="#circle-4" startOffset="0%">
                    SOLUSI INFRASTRUKTUR TEKNOLOGI INFORMASI • SERVIS &amp; DUKUNGAN TEKNIS ENTERPRISE • VIRTUALIZATION &amp; DATA CENTER • PENGADAAN JARINGAN PERUSAHAAN TERINTEGRASI •
                  </textPath>
                </text>
                <text className="spiral-track track-5">
                  <textPath href="#circle-5" startOffset="0%">
                    KARYASISTEM CORPORATE IT PROVIDER • IT INFRASTRUCTURE ARCHITECTURE • SWITCHING &amp; ROUTING • SAN &amp; NAS STORAGE • ENTERPRISE SOFTWARE SOLUTIONS • IMPLEMENTASI INFRASTRUKTUR IT TERPERCAYA •
                  </textPath>
                </text>
                <text className="spiral-track track-6">
                  <textPath href="#circle-6" startOffset="0%">
                    MITRA STRATEGIS PENGADAAN IT INSTANSI &amp; BISNIS • KEAMANAN SIBER ENTERPRISE • PENYEDIA LAPTOP &amp; SERVER KORPORAT • GARANSI PURNAJUAL RESMI SELURUH INDONESIA • KARYASISTEM IT INTEGRATION PROVIDER •
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
            min-height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
