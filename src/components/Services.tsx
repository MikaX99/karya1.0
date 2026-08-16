"use client";

import { Network, Code2, ShieldAlert, ShoppingBag, CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Services() {
  const { t } = useLocale();

  const services = [
    {
      id: "network-infrastructure",
      icon: <Network size={24} strokeWidth={1.75} />,
      titleKey: "service_net_title",
      descKey: "service_net_desc",
      highlights: [
        "service_net_h1",
        "service_net_h2",
        "service_net_h3",
        "service_net_h4",
        "service_net_h5",
        "service_net_h6",
      ],
      color: "#1E87DA",
    },
    {
      id: "web-application",
      icon: <Code2 size={24} strokeWidth={1.75} />,
      titleKey: "service_web_title",
      descKey: "service_web_desc",
      highlights: [
        "service_web_h1",
        "service_web_h2",
        "service_web_h3",
        "service_web_h4",
        "service_web_h5",
      ],
      color: "#0284C7",
    },
    {
      id: "disaster-recovery",
      icon: <ShieldAlert size={24} strokeWidth={1.75} />,
      titleKey: "service_dr_title",
      descKey: "service_dr_desc",
      highlights: [
        "service_dr_h1",
        "service_dr_h2",
        "service_dr_h3",
        "service_dr_h4",
        "service_dr_h5",
      ],
      color: "#059669",
    },
    {
      id: "procurement",
      icon: <ShoppingBag size={24} strokeWidth={1.75} />,
      titleKey: "service_proc_title",
      descKey: "service_proc_desc",
      highlights: [
        "service_proc_h1",
        "service_proc_h2",
        "service_proc_h3",
        "service_proc_h4",
      ],
      color: "#D97706",
    },
  ];

  return (
    <section id="layanan" className="section" style={{ background: "var(--section-bg-1)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-badge">{t("services_badge")}</span>
          <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
            {t("services_title_prefix")} <span style={{ color: "var(--color-primary)" }}>{t("services_title_highlight")}</span>
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
            {t("services_subtitle")}
          </p>
        </div>

        {/* Corporate Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="glass-card"
              style={{
                borderRadius: "8px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Icon Container */}
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
                  marginBottom: "1.25rem",
                  color: service.color,
                  flexShrink: 0,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  margin: "0 0 0.625rem 0",
                }}
              >
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  margin: "0 0 1.25rem 0",
                }}
              >
                {t(service.descKey)}
              </p>

              {/* Highlights Checklist */}
              <ul
                style={{
                  listStyle: "none",
                  margin: "auto 0 0 0",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  paddingTop: "1rem",
                }}
              >
                {service.highlights.map((hKey) => (
                  <li
                    key={hKey}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "0.78rem",
                      color: "var(--color-text-muted)",
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      color={service.color}
                      style={{ marginTop: "2px", flexShrink: 0 }}
                    />
                    <span>{t(hKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


