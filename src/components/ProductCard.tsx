"use client";

import React from "react";
import { MessageCircle, Tag, Cpu } from "lucide-react";
import config from "@/data/config.json";
import { useLocale } from "@/context/LocaleContext";

interface Product {
  id: string;
  category: string;
  title: string;
  brand: string;
  specs: string;
  priceDisplay: string;
  image: string;
  badge: string;
  waTemplate: string;
}

// ============================================================
// OFFICIAL BRAND SVG LOGO ICONS
// ============================================================
function getBrandIcon(brand: string) {
  const b = brand.toLowerCase();

  // Sangfor (Tech Emblem S)
  if (b.includes("sangfor")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#E4002B">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-3h4v-2h-4V9.5h5V7.5H9v9h7v-2h-5z" />
      </svg>
    );
  }

  // Sophos (S Shield Security)
  if (b.includes("sophos")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#005A9C">
        <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4zm-1 14.5l-3.5-3.5 1.4-1.4 2.1 2.1 5.1-5.1 1.4 1.4-6.5 6.5z" />
      </svg>
    );
  }

  // Kaspersky (Shield 'K')
  if (b.includes("kaspersky")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#006D5B">
        <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm-1 6h2v3.5L16.5 8h2.5l-4 4.5 4.5 5.5h-2.7L13 13.2V18h-2V8z" />
      </svg>
    );
  }

  // Microsoft (4-Square Grid)
  if (b.includes("microsoft")) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <rect x="3" y="3" width="8.5" height="8.5" fill="#F25022" />
        <rect x="12.5" y="3" width="8.5" height="8.5" fill="#7FBA00" />
        <rect x="3" y="12.5" width="8.5" height="8.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="#FFB900" />
      </svg>
    );
  }

  // Cisco (Wave Bars)
  if (b.includes("cisco")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#049FD9">
        <path d="M4 14v4h2v-4H4zm4-4v8h2v-8H8zm4-4v12h2V6h-2zm4 4v8h2v-8h-2zm4 4v4h2v-4h-2z" />
      </svg>
    );
  }

  // Ubiquiti / UniFi (U Emblem)
  if (b.includes("ubiquiti") || b.includes("unifi")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#0559C9">
        <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 4a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6z" />
      </svg>
    );
  }

  // MikroTik (Router Waves)
  if (b.includes("mikrotik")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#FF6600">
        <path d="M2 7h20v10H2V7zm3 3v4h2v-4H5zm4 0v4h2v-4H9zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2z" />
      </svg>
    );
  }

  // Fortinet (Shield Castle)
  if (b.includes("fortinet") || b.includes("fortigate")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#EE3124">
        <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      </svg>
    );
  }

  // Dell (Circle D)
  if (b.includes("dell")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="#007DB8" strokeWidth="2.5" />
        <path d="M8 8h3.5c1.8 0 3 1 3 2.5s-1.2 2.5-3 2.5H8V8zm2 3.5h1.5c.6 0 1-.3 1-.8s-.4-.7-1-.7H10v1.5z" fill="#007DB8" />
      </svg>
    );
  }

  // HP / HPE (Green/Cyan Bars)
  if (b.includes("hp")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#0096D6">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="#0096D6" strokeWidth="2" />
        <path d="M7 8v8h2V8H7zm4 0v8h2V8h-2zm4 0v8h2V8h-2z" />
      </svg>
    );
  }

  // Synology (NAS Rack Grid)
  if (b.includes("synology")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#B5161B">
        <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="#B5161B" strokeWidth="2" />
        <line x1="3" y1="9" x2="21" y2="9" stroke="#B5161B" strokeWidth="1.5" />
        <line x1="3" y1="15" x2="21" y2="15" stroke="#B5161B" strokeWidth="1.5" />
        <circle cx="7" cy="6.5" r="1" />
        <circle cx="7" cy="12" r="1" />
        <circle cx="7" cy="17.5" r="1" />
      </svg>
    );
  }

  // Lenovo (Badge)
  if (b.includes("lenovo")) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24">
        <rect x="2" y="6" width="20" height="12" rx="2" fill="#E2231A" />
        <text x="12" y="15" fontSize="9" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">
          LENOVO
        </text>
      </svg>
    );
  }

  // Fallback CPU Icon
  return <Cpu size={26} color="var(--color-primary)" strokeWidth={1.75} />;
}

const brandDetails: Record<string, { color: string; label: string }> = {
  "Dell PowerEdge": { color: "#007DB8", label: "Dell PowerEdge" },
  "Dell": { color: "#007DB8", label: "Dell Enterprise" },
  "HP ProLiant": { color: "#0096D6", label: "HP ProLiant" },
  "HP EliteOne 870": { color: "#0096D6", label: "HP Enterprise" },
  "Synology": { color: "#B5161B", label: "Synology NAS" },
  "Cisco Catalyst": { color: "#049FD9", label: "Cisco Catalyst" },
  "Ubiquiti UniFi": { color: "#0559C9", label: "Ubiquiti UniFi" },
  "Mikrotik": { color: "#FF6600", label: "MikroTik" },
  "Fortinet FortiGate": { color: "#EE3124", label: "Fortinet FortiGate" },
  "Lenovo": { color: "#E2231A", label: "Lenovo Business" },
  "Microsoft": { color: "#00A4EF", label: "Microsoft Enterprise" },
  "Kaspersky": { color: "#006D5B", label: "Kaspersky Security" },
  "Sophos": { color: "#005A9C", label: "Sophos Security" },
  "Sangfor": { color: "#E4002B", label: "Sangfor Technologies" },
};

export default function ProductCard({ product }: { product: Product }) {
  const { t } = useLocale();

  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    product.waTemplate
  )}`;

  const brandInfo = brandDetails[product.brand] || {
    color: "var(--color-primary)",
    label: product.brand,
  };

  const brandIcon = getBrandIcon(product.brand);

  return (
    <div
      id={`product-${product.id}`}
      className="glass-card"
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Compact Header Bar */}
      <div
        style={{
          padding: "0.875rem 1rem",
          background: "var(--color-surface-2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--color-border)",
          flexShrink: 0,
        }}
      >
        {/* Brand Pill */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0, flexShrink: 1 }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
              flexShrink: 0,
            }}
          >
            {brandIcon}
          </div>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: brandInfo.color,
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {brandInfo.label}
          </span>
        </div>

        {/* Minimal Status Badge */}
        <span
          className="product-badge"
          style={{
            fontSize: "0.65rem",
            padding: "0.25rem 0.6rem",
            borderRadius: "9999px",
            lineHeight: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          {product.badge}
        </span>
      </div>

      {/* Product Body */}
      <div
        style={{
          padding: "0.875rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.35rem",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "var(--color-text)",
            margin: 0,
            lineHeight: 1.35,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.title}
        </h3>

        {/* Nested Spec Box */}
        <div
          style={{
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border-subtle)",
            borderRadius: "8px",
            padding: "0.45rem 0.65rem",
            margin: "0.25rem 0",
            flex: 1,
          }}
        >
          <p
            style={{
              fontSize: "0.725rem",
              color: "var(--color-text-subtle)",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {product.specs}
          </p>
        </div>

        {/* Minimal Footer CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            marginTop: "auto",
            paddingTop: "0.5rem",
            borderTop: "1px solid var(--color-border-subtle)",
          }}
        >
          <div
            style={{
              fontSize: "0.825rem",
              fontWeight: 700,
              color: "var(--color-text)",
            }}
          >
            {product.priceDisplay}
          </div>
          <a
            id={`wa-btn-${product.id}`}
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            aria-label={`Konsultasi WhatsApp untuk ${product.title}`}
            style={{
              padding: "0.38rem 0.75rem",
              fontSize: "0.75rem",
              borderRadius: "9999px",
              flexShrink: 0,
            }}
          >
            <MessageCircle size={12} />
            {t("product_quote_btn")}
          </a>
        </div>
      </div>
    </div>
  );
}

