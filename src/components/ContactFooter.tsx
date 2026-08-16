"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import config from "@/data/config.json";

export default function ContactFooter() {
  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    config.whatsapp.defaultMessage
  )}`;

  return (
    <>
      {/* Contact Section */}
      <section id="kontak" className="section" style={{ background: "var(--section-bg-2)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-badge">Hubungi Kami</span>
            <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
              Konsultasikan <span style={{ color: "var(--color-primary)" }}>Kebutuhan IT Anda</span>
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
              Tim teknis dan sales profesional kami siap membantu memberikan analisis dan penawaran terbaik untuk operasional perusahaan Anda.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
            className="contact-grid"
          >
            {/* Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  icon: <MapPin size={18} color="var(--color-primary)" />,
                  label: "Alamat Kantor",
                  value: config.company.address,
                  id: "contact-address",
                },
                {
                  icon: <Phone size={18} color="var(--color-primary)" />,
                  label: "Telepon / WhatsApp",
                  value: config.company.phone,
                  id: "contact-phone",
                },
                {
                  icon: <Mail size={18} color="var(--color-primary)" />,
                  label: "Email Resmi",
                  value: config.company.email,
                  id: "contact-email",
                },
                {
                  icon: <Clock size={18} color="var(--color-primary)" />,
                  label: "Jam Operasional",
                  value: config.company.hours,
                  id: "contact-hours",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    padding: "1.125rem 1.25rem",
                    background: "var(--card-alt-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "6px",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        color: "var(--color-text-faint)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "var(--color-text)", fontWeight: 600 }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}

              <a
                id="contact-wa-btn"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
                style={{
                  justifyContent: "center",
                  padding: "0.875rem",
                  fontSize: "0.925rem",
                  borderRadius: "6px",
                  marginTop: "0.25rem",
                }}
              >
                <MessageCircle size={18} />
                Hubungi Tim Sales via WhatsApp
              </a>
            </div>

            {/* Google Maps Embed */}
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                minHeight: "380px",
                position: "relative",
                background: "var(--color-surface-2)",
              }}
            >
              <iframe
                id="google-maps-embed"
                src={config.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor KaryaSistem"
              />
              <a
                id="open-maps-link"
                href={config.maps.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  bottom: "0.875rem",
                  right: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.4rem 0.75rem",
                  background: "var(--navbar-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "4px",
                  color: "var(--color-text-muted)",
                  fontSize: "0.725rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                <ExternalLink size={12} />
                Buka Google Maps
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
          padding: "2rem 1.5rem",
          transition: "background 0.25s ease",
        }}
      >
        <div
          className="container footer-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="./kst-dark.png"
              alt="Logo"
              className="logo-img logo-dark-mode"
              style={{ height: "34px" }}
            />
            <img
              src="./kst-light.png"
              alt="Logo"
              className="logo-img logo-light-mode"
              style={{ height: "34px" }}
            />
          </div>
          <div style={{ fontSize: "0.78rem", color: "var(--color-text-faint)", textAlign: "center" }}>
            © {new Date().getFullYear()} KaryaSistem. All rights reserved. System Integrator & Solusi IT Enterprise.
          </div>
          <div className="footer-links" style={{ display: "flex", gap: "1.25rem" }}>
            {["Layanan", "Produk", "Klien", "Mitra", "Kontak"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: "0.78rem",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-primary)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-muted)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
