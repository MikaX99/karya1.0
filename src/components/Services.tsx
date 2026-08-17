"use client";

import { useState } from "react";
import { Network, Code2, ShieldAlert, ShoppingBag, CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Services() {
  const { t } = useLocale();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const services = [
    {
      id: "network-infrastructure",
      icon: <Network size={22} strokeWidth={1.75} />,
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
      color: "#0071E3",
      bgTint: "rgba(0, 113, 227, 0.08)",
    },
    {
      id: "web-application",
      icon: <Code2 size={22} strokeWidth={1.75} />,
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
      bgTint: "rgba(2, 132, 199, 0.08)",
    },
    {
      id: "disaster-recovery",
      icon: <ShieldAlert size={22} strokeWidth={1.75} />,
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
      bgTint: "rgba(5, 150, 105, 0.08)",
    },
    {
      id: "procurement",
      icon: <ShoppingBag size={22} strokeWidth={1.75} />,
      titleKey: "service_proc_title",
      descKey: "service_proc_desc",
      highlights: [
        "service_proc_h1",
        "service_proc_h2",
        "service_proc_h3",
        "service_proc_h4",
      ],
      color: "#D97706",
      bgTint: "rgba(217, 119, 6, 0.08)",
    },
  ];

  return (
    <section id="layanan" className="section" style={{ background: "var(--section-bg-1)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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

        {/* Dynamic Compact Grid matching reference screenshot without wasted white space */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.1rem",
            alignItems: "stretch",
          }}
        >
          {services.map((service) => {
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  borderRadius: "14px",
                  padding: "1.4rem 1.3rem",
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--color-surface)",
                  border: isHovered ? `1px solid ${service.color}` : "1px solid var(--color-border)",
                  boxShadow: isHovered
                    ? `0 14px 32px ${service.bgTint.replace('0.08', '0.18')}, 0 2px 8px rgba(0,0,0,0.04)`
                    : "0 2px 6px rgba(0,0,0,0.02)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Soft Tint Rounded Icon Container */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "11px",
                    background: service.bgTint,
                    border: `1px solid ${service.bgTint.replace('0.08', '0.18')}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    color: service.color,
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    margin: "0 0 0.5rem 0",
                    lineHeight: 1.3,
                  }}
                >
                  {t(service.titleKey)}
                </h3>

                {/* Description - Tight fit */}
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.55,
                    margin: "0 0 1rem 0",
                  }}
                >
                  {t(service.descKey)}
                </p>

                {/* Highlights Checklist with Top Divider Line */}
                <div
                  style={{
                    marginTop: "auto",
                    borderTop: "1px solid var(--color-border-subtle)",
                    paddingTop: "0.9rem",
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.45rem",
                    }}
                  >
                    {service.highlights.map((hKey) => (
                      <li
                        key={hKey}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          fontSize: "0.81rem",
                          color: "var(--color-text)",
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


