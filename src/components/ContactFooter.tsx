"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import config from "@/data/config.json";
import { useLocale } from "@/context/LocaleContext";

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

  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    config.whatsapp.defaultMessage
  )}`;

  return (
    <>
      {/* Contact Section */}
      <section id="kontak" className="section" style={{ background: "var(--section-bg-2)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-badge">{t("contact_badge")}</span>
            <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
              {t("contact_title_prefix")} <span style={{ color: "var(--color-primary)" }}>{t("contact_title_highlight")}</span>
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: 1.7,
                fontSize: "clamp(0.9rem, 1.4vw, 1.025rem)",
              }}
            >
              {t("contact_subtitle")}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.75rem",
              alignItems: "stretch",
              marginBottom: "2rem",
            }}
            className="contact-grid"
          >
            {/* Left Column: Glass Futuristic Contact Command Hub */}
            <div
              className="glass-card"
              style={{
                padding: "1.75rem",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "var(--card-gradient)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              }}
            >
              <div>
                {/* Header Status Bar inside Card */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.25rem",
                    paddingBottom: "0.875rem",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "var(--color-primary)",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: "var(--font-mono, monospace)",
                    }}
                  >
                    <span className="live-pulse"></span> SYSTEM HQ &amp; CONTACT
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--color-text-subtle)",
                      fontWeight: 600,
                      fontFamily: "var(--font-mono, monospace)",
                    }}
                  >
                    FAST RESPONSE &lt; 15m
                  </span>
                </div>

                {/* 4 Interactive Contact Item Rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {[
                    {
                      icon: <MapPin size={18} color="var(--color-primary)" />,
                      label: t("contact_addr_label"),
                      value: config.company.address,
                      href: config.maps.googleMapsUrl,
                      target: "_blank",
                      id: "contact-address",
                    },
                    {
                      icon: <Phone size={18} color="var(--color-primary)" />,
                      label: t("contact_phone_label"),
                      value: config.company.phone,
                      href: waUrl,
                      target: "_blank",
                      id: "contact-phone",
                    },
                    {
                      icon: <Mail size={18} color="var(--color-primary)" />,
                      label: t("contact_email_label"),
                      value: config.company.email,
                      href: `mailto:${config.company.email}`,
                      target: "_self",
                      id: "contact-email",
                    },
                    {
                      icon: <Clock size={18} color="var(--color-primary)" />,
                      label: t("contact_hours_label"),
                      value: config.company.hours,
                      href: null,
                      target: "_self",
                      id: "contact-hours",
                    },
                  ].map((item) => {
                    const ContentWrapper = item.href ? "a" : "div";
                    const wrapperProps = item.href
                      ? {
                          href: item.href,
                          target: item.target,
                          rel: "noopener noreferrer",
                          style: { textDecoration: "none", color: "inherit" },
                        }
                      : {};

                    return (
                      <ContentWrapper key={item.id} id={item.id} {...wrapperProps}>
                        <div
                          style={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            padding: "0.875rem 1.15rem",
                            background: "var(--color-surface-2)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "12px",
                            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                            cursor: item.href ? "pointer" : "default",
                          }}
                          className="contact-item-row"
                        >
                          <div
                            style={{
                              width: "38px",
                              height: "38px",
                              borderRadius: "10px",
                              background: "var(--color-surface)",
                              border: "1px solid var(--color-border)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                            }}
                          >
                            {item.icon}
                          </div>
                          <div style={{ flexGrow: 1 }}>
                            <div
                              style={{
                                fontSize: "0.68rem",
                                color: "var(--color-text-faint)",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                marginBottom: "0.15rem",
                              }}
                            >
                              {item.label}
                            </div>
                            <div style={{ fontSize: "0.875rem", color: "var(--color-text)", fontWeight: 600 }}>
                              {item.value}
                            </div>
                          </div>
                          {item.href && (
                            <div style={{ color: "var(--color-text-subtle)", opacity: 0.6, fontSize: "0.75rem" }}>
                              ↗
                            </div>
                          )}
                        </div>
                      </ContentWrapper>
                    );
                  })}
                </div>
              </div>

              {/* Bottom WhatsApp Capsule CTA */}
              <a
                id="contact-wa-btn"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-capsule-wa"
                aria-label="Hubungi Sales KaryaSistem via WhatsApp"
                style={{
                  justifyContent: "center",
                  padding: "0.875rem 1.5rem",
                  fontSize: "0.925rem",
                  borderRadius: "9999px",
                  marginTop: "1.25rem",
                  width: "100%",
                }}
              >
                <MessageCircle size={18} />
                <span>{t("contact_sales_wa")}</span>
              </a>
            </div>

            {/* Right Column: Futuristic Map Viewport Card */}
            <div
              className="glass-card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                position: "relative",
                background: "var(--color-surface-2)",
                minHeight: "440px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Top Floating Header Banner on Map */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  right: "14px",
                  zIndex: 5,
                  padding: "0.6rem 1.15rem",
                  background: "var(--navbar-bg)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-text)", display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <MapPin size={15} color="var(--color-primary)" />
                  <span>PT. Karya Sistem Teknologi — HQ</span>
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#10B981", letterSpacing: "0.04em", fontFamily: "var(--font-mono, monospace)" }}>
                  ● SATELLITE HQ
                </span>
              </div>

              {/* Google Maps Embed */}
              <iframe
                id="google-maps-embed"
                src={config.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: "440px", flexGrow: 1 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor KaryaSistem"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />

              {/* Bottom Floating Glass Capsule Button */}
              <a
                id="open-maps-link"
                href={config.maps.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  bottom: "14px",
                  right: "14px",
                  zIndex: 5,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 1rem",
                  background: "var(--navbar-bg)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "9999px",
                  color: "var(--color-text)",
                  fontSize: "0.78rem",
                  textDecoration: "none",
                  fontWeight: 700,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease",
                }}
              >
                <ExternalLink size={13} />
                <span>{t("contact_open_maps")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Footer */}
      <footer
        style={{
          background: "var(--footer-bg)",
          borderTop: "1px solid var(--footer-border)",
          padding: "2.5rem 1.5rem 2rem",
          transition: "background 0.25s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
          }}
        >
          {/* Main Footer Row: Brand Logo, Navigation Links & Social Icons */}
          <div
            className="footer-main-row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/kst-dark.png`}
                alt="KaryaSistem Logo"
                width="81"
                height="34"
                loading="lazy"
                decoding="async"
                className="logo-img logo-dark-mode"
                style={{ width: "81px", height: "34px", objectFit: "contain", aspectRatio: "81 / 34" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/kst-light.png`}
                alt="KaryaSistem Logo"
                width="81"
                height="34"
                loading="lazy"
                decoding="async"
                className="logo-img logo-light-mode"
                style={{ width: "81px", height: "34px", objectFit: "contain", aspectRatio: "81 / 34" }}
              />
            </div>

            {/* Navigation Links */}
            <div className="footer-nav-links" style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
              {[
                { key: "nav_Layanan", href: "#layanan" },
                { key: "nav_Produk", href: "#produk" },
                { key: "nav_Klien", href: "#klien" },
                { key: "nav_Mitra", href: "#mitra" },
                { key: "nav_Kontak", href: "#kontak" },
              ].map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  style={{
                    fontSize: "0.825rem",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-muted)")}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>

            {/* Social Media Links (FB, TikTok, IG, LinkedIn) */}
            <div className="footer-social-links" style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.color = social.hoverColor;
                    el.style.borderColor = social.hoverColor;
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = `0 4px 12px ${social.hoverColor}33`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "var(--color-text-muted)";
                    el.style.borderColor = "var(--color-border)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Divider & Copyright */}
          <div
            className="footer-bottom-row"
            style={{
              borderTop: "1px solid var(--color-border-subtle)",
              paddingTop: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <div style={{ fontSize: "0.78rem", color: "var(--color-text-faint)" }}>
              © {new Date().getFullYear()} PT. Karya Sistem Teknologi. {t("footer_rights")}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--color-text-faint)" }}>
              Solusi & Integrasi IT Enterprise Indonesia
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-main-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 1.25rem !important;
          }
          .footer-nav-links {
            justify-content: center !important;
            flex-wrap: wrap !important;
            gap: 0.75rem 1.25rem !important;
          }
          .footer-social-links {
            justify-content: center !important;
          }
          .footer-bottom-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
