"use client";

import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { ChevronDown, ShieldCheck, Clock, Cpu, PackageCheck } from "lucide-react";

export default function AboutValue() {
  const { t } = useLocale();
  const [activeFolderIndex, setActiveFolderIndex] = useState(0);

  const folders = [
    {
      id: "official-warranty",
      themeColor: "#1D4ED8", // Royal Blue
      headerBg: "#1E40AF",
      tabBg: "#2563EB",
      textColor: "#FFFFFF",
      index: "01",
      tabs: ["Garansi Resmi 100%", "Distributor Principal"],
      categoryLabel: "Jaminan Original & Garansi Principal",
      descKey: "val_1_desc",
      icon: <ShieldCheck size={18} />,
      metrics: [
        { label: "STATUS", val: "100% ORIGINAL" },
        { label: "WARRANTY", val: "OFFICIAL SLA" },
        { label: "CERTIFICATE", val: "DISTRIBUTOR DIRECT" },
      ],
    },
    {
      id: "fast-response",
      themeColor: "#047857", // Emerald Green
      headerBg: "#065F46",
      tabBg: "#059669",
      textColor: "#FFFFFF",
      index: "02",
      tabs: ["Respon SLA < 15 Menit", "Technical Engineer"],
      categoryLabel: "Layanan Fast Response & Consulting",
      descKey: "val_2_desc",
      icon: <Clock size={18} />,
      metrics: [
        { label: "RESPONSE", val: "< 15 MINUTES" },
        { label: "CONSULTING", val: "FREE ARCHITECTURE" },
        { label: "ENGINEER", val: "CERTIFIED SALES" },
      ],
    },
    {
      id: "pre-staging",
      themeColor: "#6D28D9", // Deep Violet / Purple
      headerBg: "#5B21B6",
      tabBg: "#7C3AED",
      textColor: "#FFFFFF",
      index: "03",
      tabs: ["Pre-Deployment Staging", "Plug & Play Ready"],
      categoryLabel: "Pengujian & Konfigurasi Siap Pakai",
      descKey: "val_3_desc",
      icon: <Cpu size={18} />,
      metrics: [
        { label: "TESTING", val: "PRE-DISPATCH" },
        { label: "CONFIG", val: "IP / VLAN / OS" },
        { label: "QUALITY", val: "ZERO DOA GUARANTEE" },
      ],
    },
    {
      id: "stock-availability",
      themeColor: "#B91C1C", // Crimson Red
      headerBg: "#991B1B",
      tabBg: "#DC2626",
      textColor: "#FFFFFF",
      index: "04",
      tabs: ["Stok Enterprise Ready", "Pengiriman Nasional"],
      categoryLabel: "Pengadaan Cepat & Logistik Nasional",
      descKey: "val_4_desc",
      icon: <PackageCheck size={18} />,
      metrics: [
        { label: "HARDWARE", val: "DELL / HP / CISCO / FORTINET" },
        { label: "LOGISTICS", val: "EXPRESS NATIONWIDE" },
        { label: "INVOICING", val: "OFFICIAL B2B TAX" },
      ],
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
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "clamp(0.9rem, 1.4vw, 1.025rem)",
            }}
          >
            {t("value_subtitle")}
          </p>
        </div>

        {/* Swiss Architectural Stacked Folder Tabs Container */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          {folders.map((folder, idx) => {
            const isActive = activeFolderIndex === idx;

            return (
              <div
                key={folder.id}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: isActive ? "0 12px 32px rgba(0,0,0,0.18)" : "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Folder Top Tab Bar */}
                <div
                  onClick={() => setActiveFolderIndex(idx)}
                  style={{
                    background: folder.headerBg,
                    color: folder.textColor,
                    padding: "0.75rem 1.25rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    userSelect: "none",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {/* Left Tabs Pills */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                    {folder.tabs.map((tabLabel, tIdx) => (
                      <div
                        key={tIdx}
                        style={{
                          background: tIdx === 0 ? folder.tabBg : "rgba(255,255,255,0.15)",
                          color: "#FFFFFF",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "20px 20px 6px 6px",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.02em",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          boxShadow: tIdx === 0 ? "0 2px 8px rgba(0,0,0,0.2)" : "none",
                        }}
                      >
                        {tIdx === 0 && folder.icon}
                        <span>{tabLabel}</span>
                      </div>
                    ))}
                  </div>

                  {/* Right Folder Category & Toggle Arrow */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        opacity: 0.9,
                        fontFamily: "monospace, sans-serif",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {folder.categoryLabel}
                    </span>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.3s ease",
                        transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown size={15} />
                    </div>
                  </div>
                </div>

                {/* Expanded Folder Content Body */}
                {isActive && (
                  <div
                    style={{
                      background: folder.themeColor,
                      color: "#FFFFFF",
                      padding: "1.75rem 1.75rem 2rem 1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                      borderTop: "1px solid rgba(255,255,255,0.12)",
                      animation: "fadeIn 0.3s ease-in-out",
                    }}
                  >
                    {/* Description Text */}
                    <p
                      style={{
                        fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                        lineHeight: 1.65,
                        margin: 0,
                        fontWeight: 400,
                        opacity: 0.95,
                        maxWidth: "820px",
                        fontFamily: "var(--font-sans, system-ui, sans-serif)",
                      }}
                    >
                      {t(folder.descKey)}
                    </p>

                    {/* Architectural Spec Metrics Row */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1.5rem",
                        marginTop: "0.5rem",
                        paddingTop: "1rem",
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      {folder.metrics.map((m, mIdx) => (
                        <div key={mIdx} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                          <span
                            style={{
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              opacity: 0.7,
                              fontFamily: "monospace",
                              letterSpacing: "0.08em",
                            }}
                          >
                            {m.label}
                          </span>
                          <span
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: 800,
                              letterSpacing: "0.03em",
                            }}
                          >
                            {m.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


