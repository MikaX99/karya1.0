"use client";

import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Layers, Rocket, Activity, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutValue() {
  const { t } = useLocale();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      id: "easy-integrations",
      index: "01",
      titleKey: "val_1_title",
      taglineKey: "val_1_tagline",
      descKey: "val_1_desc",
      statKey: "val_1_stat",
      statLabelKey: "val_1_stat_label",
      icon: <Layers size={22} />,
      bullets: [
        "End-to-End Technology Integration",
        "Seamless Infrastructure Compatibility",
        "24/7 Dedicated Technical SLA Support",
        "Enterprise System Synchronization",
      ],
    },
    {
      id: "smart-deployment",
      index: "02",
      titleKey: "val_2_title",
      taglineKey: "val_2_tagline",
      descKey: "val_2_desc",
      statKey: "val_2_stat",
      statLabelKey: "val_2_stat_label",
      icon: <Rocket size={22} />,
      bullets: [
        "Zero-Friction System Deployment",
        "Pre-Configured Hardware Staging",
        "Rapid Onboarding & Technical Setup",
        "Enterprise Scalability Assurance",
      ],
    },
    {
      id: "realtime-monitoring",
      index: "03",
      titleKey: "val_3_title",
      taglineKey: "val_3_tagline",
      descKey: "val_3_desc",
      statKey: "val_3_stat",
      statLabelKey: "val_3_stat_label",
      icon: <Activity size={22} />,
      bullets: [
        "Real-time Performance Analytics",
        "Automated Threat & Load Detection",
        "Continuous System Optimization",
        "Comprehensive SLA Audit Reports",
      ],
    },
  ];

  return (
    <section id="keunggulan" className="section" style={{ background: "var(--section-bg-1)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-badge">{t("value_badge")}</span>
          <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
            {t("value_title_prefix")} <span style={{ color: "var(--color-primary)" }}>{t("value_title_highlight")}</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "clamp(0.9rem, 1.4vw, 1.025rem)",
            }}
          >
            {t("value_subtitle")}
          </p>
        </div>

        {/* Immersive 3-Column Architectural Cards Grid */}
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {values.map((val, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={val.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: "var(--color-surface)",
                  borderRadius: "18px",
                  padding: "2rem 1.75rem",
                  border: isHovered ? "1px solid var(--color-primary)" : "1px solid var(--color-border)",
                  boxShadow: isHovered
                    ? "0 20px 48px rgba(0, 113, 227, 0.14), 0 4px 12px rgba(0,0,0,0.04)"
                    : "0 2px 10px rgba(0,0,0,0.02)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top Header Row: Icon Badge & Monospaced Index Tag */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: isHovered ? "var(--color-primary)" : "rgba(0, 113, 227, 0.08)",
                      color: isHovered ? "#ffffff" : "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(0, 113, 227, 0.15)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {val.icon}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "6px",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, fontFamily: "monospace", color: "var(--color-primary)" }}>
                      INDEX // {val.index}
                    </span>
                  </div>
                </div>

                {/* Content Block: Title & Tagline & Description */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--color-primary)",
                    }}
                  >
                    {t(val.taglineKey)}
                  </span>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--color-text)", margin: 0, lineHeight: 1.3 }}>
                    {t(val.titleKey)}
                  </h3>
                  <p style={{ fontSize: "0.925rem", color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0 }}>
                    {t(val.descKey)}
                  </p>
                </div>

                {/* Feature Checkmarks List (Matching Reference Screenshot) */}
                <div
                  style={{
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--color-border-subtle)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                  }}
                >
                  {val.bullets.map((bulletText, bIdx) => (
                    <div key={bIdx} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <CheckCircle2 size={16} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--color-text)", lineHeight: 1.4 }}>
                        {bulletText}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Card Stat Badge Footer */}
                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px dashed var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-primary)" }}>
                      {t(val.statKey)}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)", fontWeight: 600 }}>
                      {t(val.statLabelKey)}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isHovered ? "var(--color-primary)" : "var(--color-surface-2)",
                      color: isHovered ? "#ffffff" : "var(--color-text-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      transform: isHovered ? "translateX(2px)" : "none",
                    }}
                  >
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


