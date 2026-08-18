"use client";

import { useState } from "react";
import { Server, LayoutGrid, ShieldCheck, Headphones, CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Services() {
  const { t } = useLocale();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const services = [
    {
      id: "it-infrastructure-procurement",
      icon: <Server size={22} strokeWidth={1.75} />,
      titleKey: "service_infra_title",
      descKey: "service_infra_desc",
      highlights: [
        "service_infra_h1",
        "service_infra_h2",
        "service_infra_h3",
        "service_infra_h4",
        "service_infra_h5",
        "service_infra_h6",
        "service_infra_h7",
      ],
      color: "#0071E3",
      bgTint: "rgba(0, 113, 227, 0.08)",
    },
    {
      id: "business-application-digital",
      icon: <LayoutGrid size={22} strokeWidth={1.75} />,
      titleKey: "service_app_title",
      descKey: "service_app_desc",
      highlights: [
        "service_app_h1",
        "service_app_h2",
        "service_app_h3",
        "service_app_h4",
        "service_app_h5",
      ],
      color: "#0284C7",
      bgTint: "rgba(2, 132, 199, 0.08)",
    },
    {
      id: "cybersecurity",
      icon: <ShieldCheck size={22} strokeWidth={1.75} />,
      titleKey: "service_sec_title",
      descKey: "service_sec_desc",
      highlights: [
        "service_sec_h1",
        "service_sec_h2",
        "service_sec_h3",
        "service_sec_h4",
        "service_sec_h5",
        "service_sec_h6",
      ],
      color: "#6366F1",
      bgTint: "rgba(99, 102, 241, 0.08)",
    },
    {
      id: "managed-it-support",
      icon: <Headphones size={22} strokeWidth={1.75} />,
      titleKey: "service_mgmt_title",
      descKey: "service_mgmt_desc",
      highlights: [
        "service_mgmt_h1",
        "service_mgmt_h2",
        "service_mgmt_h3",
        "service_mgmt_h4",
        "service_mgmt_h5",
        "service_mgmt_h6",
      ],
      color: "#10B981",
      bgTint: "rgba(16, 185, 129, 0.08)",
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


