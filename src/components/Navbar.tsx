"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Sun, Moon, Globe } from "lucide-react";
import config from "@/data/config.json";
import { useTheme } from "@/context/ThemeContext";
import { useLocale } from "@/context/LocaleContext";

const navLinks = [
  { key: "nav_Layanan", href: "#layanan" },
  { key: "nav_Produk", href: "#produk" },
  { key: "nav_Mitra", href: "#mitra" },
  { key: "nav_Klien", href: "#klien" },
  { key: "nav_Keunggulan", href: "#keunggulan" },
  { key: "nav_Kontak", href: "#kontak" },
];

export default function Navbar() {
  const { locale, toggleLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40) {
        setVisible(true);
      } else {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
          setVisible(false);
        } else if (lastScrollY > currentScrollY && lastScrollY - currentScrollY > 6) {
          setVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    config.whatsapp.defaultMessage
  )}`;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Ambient Vignette (Fades out scrolling content under navbar) */}
      <div className="navbar-top-fade" style={{ opacity: visible ? 1 : 0 }} />

      <header
        id="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          paddingTop: "0.5rem",
          background: "transparent",
          pointerEvents: "none",
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
          willChange: "transform, opacity",
        }}
      >
        <div className="container" style={{ padding: "0 1.5rem" }}>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "64px",
              pointerEvents: "auto",
              position: "relative",
              width: "100%",
            }}
          >
            {/* Logo Image (Aligned to Left Grid Edge) */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="KaryaSistem Home"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                textDecoration: "none",
                zIndex: 2,
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/kst-dark.png`}
                alt="KaryaSistem Logo"
                width="114"
                height="48"
                decoding="async"
                fetchPriority="high"
                className="logo-img logo-dark-mode"
                style={{ width: "114px", height: "48px", objectFit: "contain", aspectRatio: "114 / 48" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/kst-light.png`}
                alt="KaryaSistem Logo"
                width="114"
                height="48"
                decoding="async"
                fetchPriority="high"
                className="logo-img logo-light-mode"
                style={{ width: "114px", height: "48px", objectFit: "contain", aspectRatio: "114 / 48" }}
              />
            </a>

            {/* Desktop Floating Navigation Capsule (100% Centered) */}
            <nav
              className="nav-menu-capsule desktop-nav"
              aria-label="Main Navigation"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  id={`nav-${link.key.toLowerCase()}`}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-menu-item"
                >
                  {t(link.key)}
                </button>
              ))}
            </nav>

            {/* Right side: 2 Distinct Capsule Pills (Utility Capsule + WhatsApp Capsule) */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              {/* CAPSULE 1: Utility Capsule (Language Switcher + Darkmode Toggle) */}
              <div className="nav-capsule-utility">
                <button
                  id="lang-toggle"
                  aria-label={`Switch to ${locale === "id" ? "English" : "Bahasa Indonesia"}`}
                  onClick={toggleLocale}
                  className="nav-capsule-item"
                  title={`Switch language (${locale.toUpperCase()})`}
                >
                  <Globe size={14} />
                  <span>{locale === "id" ? "EN" : "ID"}</span>
                </button>
                <div className="nav-capsule-divider" />
                <button
                  id="theme-toggle"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  onClick={toggleTheme}
                  className="nav-capsule-item nav-capsule-icon-only"
                  title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              </div>

              {/* CAPSULE 2: WhatsApp Chat Pill Capsule */}
              <a
                id="navbar-wa-cta"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-capsule-wa nav-capsule-wa-desktop"
              >
                <MessageCircle size={16} />
                <span>{t('navbar_wa')}</span>
              </a>

              {/* Mobile hamburger */}
              <button
                id="mobile-menu-toggle"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.5rem",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--color-text)",
                  transition: "all 0.2s ease",
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 49,
            background: "var(--navbar-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            padding: "2rem 1.5rem",
            gap: "0.5rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              id={`mobile-nav-${link.key.toLowerCase()}`}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                color: "var(--color-text)",
                fontSize: "1.25rem",
                fontWeight: 600,
                cursor: "pointer",
                padding: "1rem",
                borderRadius: "0.75rem",
                textAlign: "left",
                transition: "all 0.2s ease",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "rgba(14,165,233,0.08)";
                (e.target as HTMLElement).style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "none";
                (e.target as HTMLElement).style.color = "var(--color-text)";
              }}
            >
              {t(link.key)}
            </button>
          ))}

          {/* Mobile Language Switcher */}
          <div style={{ marginTop: "0.75rem" }}>
            <button
              id="mobile-lang-toggle"
              onClick={toggleLocale}
              className="btn-theme"
              style={{
                width: "100%",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                borderRadius: "0.75rem",
              }}
            >
              <Globe size={18} />
              <span>Bahasa: {locale === "id" ? "English (EN)" : "Bahasa Indonesia (ID)"}</span>
            </button>
          </div>

          <div style={{ marginTop: "0.5rem" }}>
            <a
              id="mobile-wa-cta"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
              style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "1rem", borderRadius: "0.75rem" }}
            >
              <MessageCircle size={20} />
              {t('navbar_wa_mobile')}
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          #navbar-wa-cta { display: inline-flex !important; }
          #mobile-menu-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}

