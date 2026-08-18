"use client";

import { Smartphone, Mail, MessageCircle, MapPin } from "lucide-react";
import config from "@/data/config.json";
import { useLocale } from "@/context/LocaleContext";
import { trackWhatsAppClick } from "@/lib/analytics";
import { navLinks } from "@/data/navLinks";

const socialLinks = [
  {
    name: "Facebook",
    href: (config as any).social?.facebook || "https://facebook.com",
    hoverColor: "#1877F2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: (config as any).social?.tiktok || "https://tiktok.com",
    hoverColor: "#00F2FE",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.9a6.34 6.34 0 0 0-3.4.98 6.36 6.36 0 0 0-2.6 4.74 6.36 6.36 0 0 0 6.36 6.36c3.48 0 6.33-2.79 6.36-6.27V9.58a8.28 8.28 0 0 0 4.39 1.25V7.38a4.85 4.85 0 0 1-1.0-0.69z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: (config as any).social?.instagram || "https://instagram.com",
    hoverColor: "#E4405F",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: (config as any).social?.linkedin || "https://linkedin.com",
    hoverColor: "#0A66C2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export default function ContactFooter() {
  const { t } = useLocale();

  const defaultWaUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    "Halo Karya Sistem, saya ingin berkonsultasi mengenai kebutuhan IT perusahaan kami."
  )}`;

  return (
    <>
      {/* Contact & About Section (TasteSkill Golden Ratio Balanced) */}
      <section
        id="kontak"
        className="section"
        style={{
          background: "var(--section-bg-2)",
          paddingTop: "clamp(3.5rem, 5vw, 5rem)",
          paddingBottom: "clamp(3.5rem, 5vw, 5rem)",
        }}
      >
        <span id="about" style={{ display: "block" }} />
        <div className="container" style={{ maxWidth: "1140px" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
            <span
              className="section-badge"
              style={{
                fontSize: "0.775rem",
                padding: "0.35rem 0.95rem",
                marginBottom: "0.6rem",
              }}
            >
              {t("about_badge") || "Profil & Kontak Resmi"}
            </span>
            <h2
              className="text-section-title"
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2.15rem)",
                margin: "0 0 0.6rem 0",
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
              }}
            >
              {t("contact_title_prefix")}{" "}
              <span style={{ color: "var(--color-primary)" }}>{t("contact_title_highlight")}</span>
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.65,
                fontSize: "0.95rem",
              }}
            >
              {t("contact_subtitle")}
            </p>
          </div>

          {/* 2-Column Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 1fr",
              gap: "1.75rem",
              alignItems: "stretch",
              marginBottom: "2.5rem",
            }}
            className="contact-grid"
          >
            {/* Left Column: ABOUT KARYA SISTEM */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem 2.25rem",
                background: "var(--color-surface)",
                borderRadius: "16px",
                border: "1px solid var(--color-border)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.4rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--color-primary)",
                    }}
                  >
                    {t("about_card_badge")}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--color-text)",
                    margin: "0 0 0.25rem 0",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t("about_card_title")}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    margin: "0 0 1.15rem 0",
                    lineHeight: 1.4,
                  }}
                >
                  {t("about_card_tagline")}
                </p>

                {/* Body Paragraphs */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    <strong>{t("about_card_p1_lead")}</strong> {t("about_card_p1_text")}
                  </p>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {t("about_card_p2")}
                  </p>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {t("about_card_p3")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: HOTLINE & DIRECT CONTACT */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem 2.25rem",
                background: "var(--card-gradient)",
                borderRadius: "16px",
                border: "1px solid var(--color-border)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.4rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--color-primary)",
                    }}
                  >
                    {t("hotline_card_badge")}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--color-text)",
                    margin: "0 0 1.15rem 0",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t("hotline_card_title")}
                </h3>

                {/* Office Address Box */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.85rem",
                    marginBottom: "1.1rem",
                    padding: "0.95rem 1rem",
                    background: "var(--color-surface)",
                    borderRadius: "10px",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <MapPin size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.2rem" }}>
                      PT Karya Sistem Teknologi
                    </div>
                    <p
                      style={{
                        fontSize: "0.825rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {config.company.address}
                    </p>
                  </div>
                </div>

                {/* Contact Rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {/* Office / Phone */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      fontSize: "0.885rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    <Smartphone size={17} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <span style={{ fontWeight: 600, color: "var(--color-text)" }}>{t("hotline_label_wa")}{" "}</span>
                      <a
                        href={defaultWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--color-primary)",
                          textDecoration: "none",
                          fontWeight: 600,
                          marginLeft: "0.25rem",
                        }}
                      >
                        {config.company.phone}
                      </a>
                    </div>
                  </div>

                  {/* Support Email */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      fontSize: "0.885rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    <Mail size={17} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <span style={{ fontWeight: 600, color: "var(--color-text)" }}>{t("hotline_label_support")}{" "}</span>
                      <a
                        href={`mailto:${config.company.email}`}
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          fontWeight: 500,
                          marginLeft: "0.25rem",
                        }}
                      >
                        {config.company.email}
                      </a>
                    </div>
                  </div>

                  {/* Info Email */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      fontSize: "0.885rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    <Mail size={17} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <span style={{ fontWeight: 600, color: "var(--color-text)" }}>{t("hotline_label_info")}{" "}</span>
                      <a
                        href="mailto:info@karyasistem.com"
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          fontWeight: 500,
                          marginLeft: "0.25rem",
                        }}
                      >
                        info@karyasistem.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <div style={{ marginTop: "1.4rem" }}>
                <a
                  id="contact-wa-btn"
                  onClick={() => trackWhatsAppClick("Contact Footer Hotline")}
                  href={defaultWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-capsule-wa"
                  aria-label="Hubungi Sales Karya Sistem via WhatsApp"
                  style={{
                    justifyContent: "center",
                    padding: "0.8rem 1.5rem",
                    fontSize: "0.9rem",
                    borderRadius: "10px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 700,
                  }}
                >
                  <MessageCircle size={18} />
                  <span>{t("contact_cta_wa") || "Konsultasi Solusi via WhatsApp"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Premium Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--color-border)",
          background: "var(--color-bg)",
          padding: "2.75rem 0 2rem",
        }}
      >
        <div className="container" style={{ maxWidth: "1140px", padding: "0 1.5rem" }}>
          {/* Main Footer Row (Logo | Nav Links | Social Icons) */}
          <div className="footer-minimal-main">
            {/* Left: Logo */}
            <div className="footer-minimal-logo">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
                aria-label="Karya Sistem Home"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/kst-dark.png`}
                  alt="Karya Sistem Logo"
                  width="114"
                  height="44"
                  style={{ height: "38px", width: "auto", objectFit: "contain" }}
                  className="logo-dark-mode"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/kst-light.png`}
                  alt="Karya Sistem Logo"
                  width="114"
                  height="44"
                  style={{ height: "38px", width: "auto", objectFit: "contain" }}
                  className="logo-light-mode"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>

            {/* Center: Navigation Links */}
            <nav className="footer-minimal-nav" aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="footer-nav-link"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>

            {/* Right: Social Media Icons */}
            <div className="footer-minimal-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kunjungi ${social.name} Karya Sistem`}
                  className="social-icon-btn"
                  style={{ "--social-hover-color": social.hoverColor, width: "36px", height: "36px" } as React.CSSProperties}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Divider & Copyright Row */}
          <div className="footer-minimal-bottom">
            <div className="footer-copyright-text">
              &copy; {new Date().getFullYear()} PT Karya Sistem Teknologi. {t("footer_rights")}
            </div>
            <div className="footer-tagline-text">
              {t("footer_tagline")}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
