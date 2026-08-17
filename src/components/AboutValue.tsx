"use client";

import { useLocale } from "@/context/LocaleContext";

export default function AboutValue() {
  const { t } = useLocale();

  const values = [
    {
      id: "official-warranty",
      tag: "01 // GUARANTEED",
      dotColor: "#10B981",
      metric: "100%",
      titleKey: "val_1_title",
      taglineKey: "val_1_tagline",
      descKey: "val_1_desc",
    },
    {
      id: "fast-response",
      tag: "02 // FAST SLA",
      dotColor: "var(--color-primary)",
      metric: "< 15m",
      titleKey: "val_2_title",
      taglineKey: "val_2_tagline",
      descKey: "val_2_desc",
    },
    {
      id: "pre-staging",
      tag: "03 // PRE-CONFIG",
      dotColor: "#F59E0B",
      metric: "Staging",
      titleKey: "val_3_title",
      taglineKey: "val_3_tagline",
      descKey: "val_3_desc",
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

        {/* Ultra-Clean Minimalist Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {values.map((item) => (
            <div
              key={item.id}
              id={`value-${item.id}`}
              style={{
                borderRadius: "14px",
                padding: "2.25rem 2rem",
                display: "flex",
                flexDirection: "column",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Metric & Technical Tag Header */}
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
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    color: "var(--color-text)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {item.metric}
                </div>

                {/* Monospaced Technical Tag with Live Status Indicator Dot */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.3rem 0.65rem",
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: item.dotColor,
                      boxShadow: `0 0 8px ${item.dotColor}`,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      fontFamily: "monospace, monospace",
                      color: "var(--color-text-subtle)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Tagline Badge */}
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--color-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                {t(item.taglineKey)}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  margin: "0 0 0.75rem 0",
                  lineHeight: 1.3,
                }}
              >
                {t(item.titleKey)}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


