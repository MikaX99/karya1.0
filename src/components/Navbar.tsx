"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, Menu, X, Sun, Moon, Globe } from "lucide-react";
import config from "@/data/config.json";
import { useTheme } from "@/context/ThemeContext";
import { useLocale } from "@/context/LocaleContext";
import { trackWhatsAppClick } from "@/lib/analytics";
import { navLinks } from "@/data/navLinks";

export default function Navbar() {
  const { locale, toggleLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const lastScrollYRef = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const lockTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection with useRef to prevent thrashing on state/locale changes
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollYRef.current;

      if (currentScrollY < 40) {
        setVisible(true);
      } else {
        if (diff > 8) {
          // Scrolling down
          setVisible(false);
        } else if (diff < -8) {
          // Scrolling up
          setVisible(true);
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mousemove detection: when cursor is near top of screen (<= 75px), instantly reveal navbar
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 75) {
        setIsHovered(true);
      } else if (e.clientY > 100 && !headerRef.current?.contains(e.target as Node)) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Helper to temporarily lock navbar open when interacting with toggles
  const lockNavbarVisible = useCallback(() => {
    setIsLocked(true);
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      setIsLocked(false);
    }, 2500);
  }, []);

  const handleLanguageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    lockNavbarVisible();
    toggleLocale();
  };

  const handleThemeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    lockNavbarVisible();
    toggleTheme(e);
  };

  const isNavbarVisible = visible || isHovered || isLocked || mobileOpen;

  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    config.whatsapp.defaultMessage
  )}`;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId) || document.querySelector(href);
    if (!el) return;

    const targetPosition = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Invisible Top Hover Trigger Zone (when hidden, moving mouse to top triggers reveal) */}
      <div
        className="navbar-top-hover-trigger"
        onMouseEnter={() => setIsHovered(true)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "45px",
          zIndex: 49,
          pointerEvents: isNavbarVisible ? "none" : "auto",
        }}
      />

      {/* Top Ambient Vignette */}
      <div className="navbar-top-fade" style={{ opacity: isNavbarVisible ? 1 : 0 }} />

      <header
        id="navbar"
        ref={headerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          paddingTop: "0.5rem",
          background: "transparent",
          pointerEvents: isNavbarVisible ? "auto" : "none",
          transform: isNavbarVisible ? "translateY(0)" : "translateY(-100%)",
          opacity: isNavbarVisible ? 1 : 0,
          transition: "transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s ease",
          willChange: "transform, opacity",
        }}
      >
        <div className="container" style={{ padding: "0 1.5rem" }}>
          <nav
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              minHeight: "64px",
              pointerEvents: "auto",
              position: "relative",
              width: "100%",
            }}
          >
            {/* Column 1: Logo Image (Aligned Left) */}
            <div style={{ display: "flex", alignItems: "center", justifySelf: "start" }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-label="Karya Sistem Home"
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
                  alt="Karya Sistem Logo"
                  width="114"
                  height="48"
                  decoding="async"
                  fetchPriority="high"
                  className="logo-img logo-dark-mode"
                  style={{ width: "114px", height: "48px", objectFit: "contain", aspectRatio: "114 / 48" }}
                />
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/kst-light.png`}
                  alt="Karya Sistem Logo"
                  width="114"
                  height="48"
                  decoding="async"
                  fetchPriority="high"
                  className="logo-img logo-light-mode"
                  style={{ width: "114px", height: "48px", objectFit: "contain", aspectRatio: "114 / 48" }}
                />
              </a>
            </div>

            {/* Column 2: Desktop Floating Navigation Capsule (100% Dead-Centered Symmetrical) */}
            <div style={{ display: "flex", alignItems: "center", justifySelf: "center" }}>
              <nav
                className="nav-menu-capsule desktop-nav"
                aria-label="Main Navigation"
                style={{
                  zIndex: 1,
                }}
              >
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    id={`nav-${link.key.toLowerCase()}`}
                    onClick={() => handleNavClick(link.href)}
                    className="nav-menu-item"
                  >
                    {t(link.key)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Column 3: Utility & CTA Buttons (Aligned Right) */}
            <div style={{ display: "flex", alignItems: "center", justifySelf: "end", gap: "0.75rem" }}>
              {/* CAPSULE 1: Utility Capsule (Language Switcher + Darkmode Toggle) */}
              <div className="nav-capsule-utility">
                <button
                  id="lang-toggle"
                  type="button"
                  aria-label={`Switch to ${locale === "id" ? "English" : "Bahasa Indonesia"}`}
                  onClick={handleLanguageClick}
                  className="nav-capsule-item"
                  title={`Switch language (${locale.toUpperCase()})`}
                >
                  <Globe size={14} />
                  <span>{locale === "id" ? "EN" : "ID"}</span>
                </button>
                <div className="nav-capsule-divider" />
                <button
                  id="theme-toggle"
                  type="button"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  onClick={handleThemeClick}
                  className="nav-capsule-item nav-capsule-icon-only"
                  title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              </div>

              {/* CAPSULE 2: WhatsApp Chat Pill Capsule */}
              <a
                id="navbar-wa-cta"
                onClick={() => trackWhatsAppClick("Navbar Desktop")}
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
                type="button"
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

      {/* Mobile Frosted Glass Floating Drawer Menu */}
      {mobileOpen && (
        <div className="mobile-frosted-menu">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              id={`mobile-nav-${link.key.toLowerCase()}`}
              onClick={() => handleNavClick(link.href)}
              className="mobile-nav-item"
            >
              <span>{t(link.key)}</span>
              <span style={{ fontSize: "0.85rem", opacity: 0.5 }}>→</span>
            </button>
          ))}

          {/* Divider */}
          <div style={{ height: "1px", background: "var(--color-border)", opacity: 0.6, margin: "0.4rem 0" }} />

          {/* Mobile Language & Theme Controls Row */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <button
              id="mobile-lang-toggle"
              type="button"
              onClick={handleLanguageClick}
              style={{
                flex: 1,
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.45rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                borderRadius: "12px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                cursor: "pointer",
              }}
            >
              <Globe size={16} color="var(--color-primary)" />
              <span>{locale === "id" ? "English (EN)" : "Indonesia (ID)"}</span>
            </button>

            <button
              id="mobile-theme-toggle"
              type="button"
              onClick={handleThemeClick}
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          {/* WhatsApp Action Button */}
          <div style={{ marginTop: "0.25rem" }}>
            <a
              id="mobile-wa-cta"
              onClick={() => trackWhatsAppClick("Navbar Mobile")}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: "0.925rem",
                padding: "0.85rem",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(16, 185, 129, 0.28)",
              }}
            >
              <MessageCircle size={18} />
              <span>{t('navbar_wa_mobile')}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
