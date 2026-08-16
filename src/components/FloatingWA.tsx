"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import config from "@/data/config.json";

export default function FloatingWA() {
  const [tooltip, setTooltip] = useState(false);

  const waUrl = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    config.whatsapp.defaultMessage
  )}`;

  return (
    <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 1000 }}>
      {/* Corporate Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 0.625rem)",
            right: 0,
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "6px",
            padding: "0.75rem 1rem",
            minWidth: "200px",
            boxShadow: "var(--shadow-card-hover)",
          }}
        >
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: "0.2rem",
            }}
          >
            Konsultasi IT via WA
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", lineHeight: 1.4 }}>
            Tim sales siap membantu kebutuhan perusahaan Anda
          </div>
        </div>
      )}

      {/* Clean Button */}
      <a
        id="floating-wa-btn"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        aria-label="Chat WhatsApp KaryaSistem"
      >
        <MessageCircle size={24} strokeWidth={2} />
      </a>
    </div>
  );
}
