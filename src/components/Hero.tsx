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
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2, position: "relative" }}>
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

          {/* Right Column: 25% Enlarged Ambient Background 18 Spiral Rings Artwork */}
          <div
            className="hero-art-container"
            style={{
              width: "100%",
              maxWidth: "740px",
              aspectRatio: "1 / 1",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              background: "transparent",
              border: "none",
              boxShadow: "none",
              padding: "0",
              overflow: "visible",
              transform: "scale(1.25)",
              transformOrigin: "center center",
              maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 98%)",
              WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 98%)",
              zIndex: 1,
            }}
          >
            <div
              className="hero-spiral-wrapper"
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 500 500"
                preserveAspectRatio="xMidYMid meet"
                className="hero-spiral-svg"
                style={{ width: "100%", height: "100%", aspectRatio: "1 / 1" }}
              >
                <path id="c-1" d="M 250, 250 m -16, 0 a 16,16 0 1,1 32,0 a 16,16 0 1,1 -32,0" fill="none" />
                <path id="c-2" d="M 250, 250 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" fill="none" />
                <path id="c-3" d="M 250, 250 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                <path id="c-4" d="M 250, 250 m -54, 0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0" fill="none" />
                <path id="c-5" d="M 250, 250 m -68, 0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0" fill="none" />
                <path id="c-6" d="M 250, 250 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" fill="none" />
                <path id="c-7" d="M 250, 250 m -96, 0 a 96,96 0 1,1 192,0 a 96,96 0 1,1 -192,0" fill="none" />
                <path id="c-8" d="M 250, 250 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" fill="none" />
                <path id="c-9" d="M 250, 250 m -124, 0 a 124,124 0 1,1 248,0 a 124,124 0 1,1 -248,0" fill="none" />
                <path id="c-10" d="M 250, 250 m -138, 0 a 138,138 0 1,1 276,0 a 138,138 0 1,1 -276,0" fill="none" />
                <path id="c-11" d="M 250, 250 m -152, 0 a 152,152 0 1,1 304,0 a 152,152 0 1,1 -304,0" fill="none" />
                <path id="c-12" d="M 250, 250 m -166, 0 a 166,166 0 1,1 332,0 a 166,166 0 1,1 -332,0" fill="none" />
                <path id="c-13" d="M 250, 250 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0" fill="none" />
                <path id="c-14" d="M 250, 250 m -194, 0 a 194,194 0 1,1 388,0 a 194,194 0 1,1 -388,0" fill="none" />
                <path id="c-15" d="M 250, 250 m -208, 0 a 208,208 0 1,1 416,0 a 208,208 0 1,1 -416,0" fill="none" />
                <path id="c-16" d="M 250, 250 m -222, 0 a 222,222 0 1,1 444,0 a 222,222 0 1,1 -444,0" fill="none" />
                <path id="c-17" d="M 250, 250 m -236, 0 a 236,236 0 1,1 472,0 a 236,236 0 1,1 -472,0" fill="none" />
                <path id="c-18" d="M 250, 250 m -248, 0 a 248,248 0 1,1 496,0 a 248,248 0 1,1 -496,0" fill="none" />

                {/* Escalating Text Density - Perfect Circle Paths */}
                <text className="spiral-track track-1"><textPath href="#c-1" startOffset="0%">KARYASISTEM IT • </textPath></text>
                <text className="spiral-track track-2"><textPath href="#c-2" startOffset="0%">DELL TECHNOLOGIES • HPE PROLIANT • </textPath></text>
                <text className="spiral-track track-3"><textPath href="#c-3" startOffset="0%">CISCO SYSTEMS • LENOVO ENTERPRISE • ASUS BIZ • </textPath></text>
                <text className="spiral-track track-4"><textPath href="#c-4" startOffset="0%">MICROSOFT • FORTINET • SANGFOR • MIKROTIK • APC SCHNEIDER • </textPath></text>
                <text className="spiral-track track-5"><textPath href="#c-5" startOffset="0%">PT PLN (PERSERO) • ALVA GROUP • INDONESIA RAYA ACADEMY • DILMIL II-08 JAKARTA • </textPath></text>
                <text className="spiral-track track-6"><textPath href="#c-6" startOffset="0%">HIKVISION • RUJIE REYEE • LOGITECH • EPSON • SERVER &amp; STORAGE SOLUTION • </textPath></text>
                <text className="spiral-track track-7"><textPath href="#c-7" startOffset="0%">PT DEMODAS INT • PT GLOBAL AGUNG • PT KARYA ABADI INDOTECH • PT LAYANAN KAPAL INDONESIA • </textPath></text>
                <text className="spiral-track track-8"><textPath href="#c-8" startOffset="0%">ENTERPRISE IT INTEGRATION • CLOUD &amp; VIRTUALIZATION • CYBERSECURITY &amp; FIREWALL PROTECTION • BACKUP DISASTER RECOVERY • </textPath></text>
                <text className="spiral-track track-9"><textPath href="#c-9" startOffset="0%">PT MERPATI WAHANA RAKSA • PT NEXTIVE GEMILANG • PT PETROKINDO SAPTA GEMILANG • PT SILICAG GLOBAL INT • NKG • </textPath></text>
                <text className="spiral-track track-10"><textPath href="#c-10" startOffset="0%">DISTRIBUTOR RESMI PERANGKAT IT • GARANSI RESMI INDONESIA • SERVIS &amp; DUKUNGAN TEKNIS KORPORAT 24/7 • IMPLEMENTASI JARINGAN PERUSAHAAN • </textPath></text>
                <text className="spiral-track track-11"><textPath href="#c-11" startOffset="0%">PARTNER KLIEN: PT PLN • ALVA GROUP • IRA • DILMIL JAKARTA • DIG • GAS • KAI • LKI • MWR • NXG • PSG • SGI • GIHC • NKG • </textPath></text>
                <text className="spiral-track track-12"><textPath href="#c-12" startOffset="0%">HIGH PERFORMANCE COMPUTING • DATA CENTER INFRASTRUCTURE • SWITCHING ROUTING • SAN &amp; NAS STORAGE • ENTERPRISE SOFTWARE LICENSING • </textPath></text>
                <text className="spiral-track track-13"><textPath href="#c-13" startOffset="0%">MITRA IT ENTERPRISE TERPERCAYA: DELL • HPE • CISCO • LENOVO • ASUS • MICROSOFT • FORTINET • SANGFOR • MIKROTIK • APC • HIKVISION • RUJIE • LOGITECH • EPSON • </textPath></text>
                <text className="spiral-track track-14"><textPath href="#c-14" startOffset="0%">SOLUSI INFRASTRUKTUR TEKNOLOGI INFORMASI • PENGADAAN HARDWARE &amp; SOFTWARE • PURNAJUAL RESMI • DUKUNGAN SISTEM KORPORAT TERINTEGRASI DAN TERPERCAYA • </textPath></text>
                <text className="spiral-track track-15"><textPath href="#c-15" startOffset="0%">PARTNER RESMI &amp; EKOSISTEM IT: PT PLN (PERSERO) • ALVA GROUP • INDONESIA RAYA ACADEMY • DILMIL II-08 JAKARTA • PT DEMODAS • PT GLOBAL AGUNG • PT KARYA ABADI INDOTECH • </textPath></text>
                <text className="spiral-track track-16"><textPath href="#c-16" startOffset="0%">KARYASISTEM CORPORATE IT INTEGRATOR • DELL POWEREDGE • HPE PROLIANT • CISCO CATALYST • LENOVO THINKSYSTEM • FORTIGATE FIREWALL • SANGFOR HCI • MIKROTIK ROUTERBOARD • </textPath></text>
                <text className="spiral-track track-17"><textPath href="#c-17" startOffset="0%">TEKNOLOGI INFORMASI TERPADU PERUSAHAAN &amp; INSTANSI PEMERINTAHAN • SERVIS ON-SITE &amp; PURNAJUAL GARANSI RESMI INDONESIA • IMPLEMENTASI CLOUD &amp; DATA CENTER NETWORK • </textPath></text>
                <text className="spiral-track track-18"><textPath href="#c-18" startOffset="0%">KARYASISTEM ENTERPRISE IT SOLUTIONS PROVIDER • PENGADAAN PERANGKAT SERVER JARINGAN LAPTOP LISENSI SOFTWARE TERLENGKAP DAN TERPERCAYA SEJAK 2020 DI SELURUH INDONESIA • </textPath></text>
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
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
