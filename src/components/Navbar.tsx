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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header
        id="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          background: scrolled ? "var(--navbar-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--glass-border)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <div className="container" style={{ padding: "0 1.5rem" }}>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "70px",
            }}
          >
            {/* Logo Image & Unique Typography Brand */}
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
              }}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/kst-dark.png`}
                alt="KaryaSistem Logo"
                width="145"
                height="66"
                decoding="async"
                fetchPriority="high"
                className="logo-img logo-dark-mode"
                style={{ width: "auto", height: "52px", objectFit: "contain" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/kst-light.png`}
                alt="KaryaSistem Logo"
                width="145"
                height="66"
                decoding="async"
                fetchPriority="high"
                className="logo-img logo-light-mode"
                style={{ width: "auto", height: "52px", objectFit: "contain" }}
              />
            </a>

            {/* Desktop Nav Links */}
            <ul
              style={{
                display: "none",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: "0.25rem",
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    id={`nav-${link.key.toLowerCase()}`}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--color-text-muted)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      padding: "0.5rem 0.875rem",
                      borderRadius: "0.5rem",
                      transition: "all 0.2s ease",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--color-text)";
                      (e.target as HTMLElement).style.background = "var(--color-surface-2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--color-text-muted)";
                      (e.target as HTMLElement).style.background = "none";
                    }}
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right side: Language Switcher + Theme toggle + CTA + Hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {/* Language Switcher */}
              <button
                id="lang-toggle"
                aria-label={`Switch to ${locale === "id" ? "English" : "Bahasa Indonesia"}`}
                onClick={toggleLocale}
                className="btn-theme"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0 0.65rem",
                  width: "auto",
                  height: "38px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
                title={`Switch language (${locale.toUpperCase()})`}
              >
                <Globe size={15} />
                <span>{locale === "id" ? "EN" : "ID"}</span>
              </button>

              {/* Theme Toggle */}
              <button
                id="theme-toggle"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                onClick={toggleTheme}
                className="btn-theme"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              {/* Desktop WA CTA */}
              <a
                id="navbar-wa-cta"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
                style={{ display: "none" }}
              >
                <MessageCircle size={16} />
                {t('navbar_wa')}
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

