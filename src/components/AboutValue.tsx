"use client";

import { ShieldCheck, Truck, HeartHandshake } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function AboutValue() {
  const { t } = useLocale();

  const values = [
    {
      id: "garansi-resmi",
      icon: <ShieldCheck size={28} strokeWidth={1.75} />,
      titleKey: "val_1_title",
      descKey: "val_1_desc",
      stat: "3 Tahun",
      statLabelKey: "val_1_stat_label",
      color: "#059669",
      features: ["val_1_f1", "val_1_f2", "val_1_f3"],
    },
    {
      id: "pengiriman-cepat",
      icon: <Truck size={28} strokeWidth={1.75} />,
      titleKey: "val_2_title",
      descKey: "val_2_desc",
      stat: "1-3 Hari",
      statLabelKey: "val_2_stat_label",
      color: "#1E87DA",
      features: ["val_2_f1", "val_2_f2", "val_2_f3"],
    },
    {
      id: "purnajual",
      icon: <HeartHandshake size={28} strokeWidth={1.75} />,
      titleKey: "val_3_title",
      descKey: "val_3_desc",
      stat: "24/7",
      statLabelKey: "val_3_stat_label",
      color: "#0284C7",
      features: ["val_3_f1", "val_3_f2", "val_3_f3"],
    },
  ];

  return (
    <section id="keunggulan" className="section" style={{ background: "var(--section-bg-1)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-badge">{t("value_badge")}</span>
          <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
            {t("value_title_prefix")} <span style={{ color: "var(--color-primary)" }}>{t("value_title_highlight")}</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "clamp(0.9rem, 1.4vw, 1.025rem)",
            }}
          >
            {t("value_subtitle")}
          </p>
        </div>

        {/* Value Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {values.map((value) => (
            <div
              key={value.id}
              id={`value-${value.id}`}
              className="glass-card"
              style={{
                borderRadius: "8px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Stat Highlight Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "6px",
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: value.color,
                  }}
                >
                  {value.icon}
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-text)" }}>
                    {value.stat}
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--color-text-faint)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t(value.statLabelKey)}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  margin: "0 0 0.75rem 0",
                }}
              >
                {t(value.titleKey)}
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  margin: "0 0 1.5rem 0",
                  flex: 1,
                }}
              >
                {t(value.descKey)}
              </p>

              {/* Feature Checklist */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  paddingTop: "1rem",
                }}
              >
                {value.features.map((featureKey) => (
                  <span
                    key={featureKey}
                    style={{
                      padding: "0.25rem 0.6rem",
                      background: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {t(featureKey)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

