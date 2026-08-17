"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";
import { ChevronDown, Layers, Rocket, Activity } from "lucide-react";

export default function AboutValue() {
  const { t } = useLocale();
  const [activeFolderIndex, setActiveFolderIndex] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    // Scroll-driven trigger only applies on Mobile screens (<768px)
    const handleScroll = () => {
      if (manualOverride) return;
      if (typeof window !== "undefined" && window.innerWidth >= 768) return;

      const folder1 = document.getElementById("value-smart-deployment");
      const folder2 = document.getElementById("value-realtime-monitoring");

      const focusPoint = window.innerHeight * 0.50; // Focus zone: center of mobile screen (50%)

      // 1. If Card #3 top has reached/crossed the focus zone -> Open Card #3
      if (folder2) {
        const r2 = folder2.getBoundingClientRect();
        if (r2.top <= focusPoint) {
          setActiveFolderIndex(2);
          return;
        }
      }

      // 2. If Card #2 top has reached/crossed the focus zone -> Open Card #2
      if (folder1) {
        const r1 = folder1.getBoundingClientRect();
        if (r1.top <= focusPoint) {
          setActiveFolderIndex(1);
          return;
        }
      }

      // 3. Default to Card #1 open when viewing upper section / Card #1
      setActiveFolderIndex(0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [manualOverride]);

  const handleMouseEnter = (idx: number) => {
    // Desktop hover trigger (>=768px)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setActiveFolderIndex(idx);
    }
  };

  const handleFolderClick = (idx: number) => {
    setActiveFolderIndex(idx);
    setManualOverride(true);
    setTimeout(() => {
      setManualOverride(false);
    }, 4000);
  };

  const folders = [
    {
      id: "easy-integrations",
      index: "01",
      titleKey: "val_1_title",
      taglineKey: "val_1_tagline",
      descKey: "val_1_desc",
      statKey: "val_1_stat",
      statLabelKey: "val_1_stat_label",
      icon: <Layers size={18} />,
      tabs: ["Easy Integrations", "Seamless Systems"],
      categoryLabel: "Integrasi & Support 24/7",
    },
    {
      id: "smart-deployment",
      index: "02",
      titleKey: "val_2_title",
      taglineKey: "val_2_tagline",
      descKey: "val_2_desc",
      statKey: "val_2_stat",
      statLabelKey: "val_2_stat_label",
      icon: <Rocket size={18} />,
      tabs: ["Smart Deployment", "Zero-Friction Growth"],
      categoryLabel: "Implementasi & Skalabilitas",
    },
    {
      id: "realtime-monitoring",
      index: "03",
      titleKey: "val_3_title",
      taglineKey: "val_3_tagline",
      descKey: "val_3_desc",
      statKey: "val_3_stat",
      statLabelKey: "val_3_stat_label",
      icon: <Activity size={18} />,
      tabs: ["Realtime Monitoring", "Continuous Optimization"],
      categoryLabel: "Visibilitas & Analitik Performa",
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

        {/* Stacked Folder Tabs Container matching Site Primary Theme */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {folders.map((folder, idx) => {
            const isActive = activeFolderIndex === idx;

            return (
              <div
                key={folder.id}
                onMouseEnter={() => handleMouseEnter(idx)}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: isActive ? "var(--color-surface-2)" : "var(--color-surface)",
                  border: isActive ? "1px solid var(--color-primary)" : "1px solid var(--color-border)",
                  boxShadow: isActive ? "0 8px 30px rgba(0, 113, 227, 0.12)" : "0 2px 8px rgba(0,0,0,0.03)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Folder Header Bar */}
                <div
                  onClick={() => handleFolderClick(idx)}
                  style={{
                    padding: "0.875rem 1.25rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    userSelect: "none",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    background: isActive ? "var(--color-primary)" : "var(--color-surface-2)",
                    color: isActive ? "#ffffff" : "var(--color-text)",
                    transition: "all 0.25s ease",
                  }}
                >
                  {/* Left Tabs Pills */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        opacity: isActive ? 0.9 : 0.6,
                        marginRight: "0.2rem",
                      }}
                    >
                      {folder.index}
                    </span>
                    {folder.tabs.map((tabLabel, tIdx) => (
                      <div
                        key={tIdx}
                        style={{
                          background:
                            tIdx === 0
                              ? isActive
                                ? "rgba(255, 255, 255, 0.22)"
                                : "var(--color-surface)"
                              : "transparent",
                          color: isActive ? "#ffffff" : "var(--color-text)",
                          padding: "0.32rem 0.75rem",
                          borderRadius: "20px 20px 6px 6px",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.01em",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          border: tIdx === 0 && !isActive ? "1px solid var(--color-border)" : "none",
                        }}
                      >
                        {tIdx === 0 && folder.icon}
                        <span>{tIdx === 0 ? t(folder.titleKey) : tabLabel}</span>
                      </div>
                    ))}
                  </div>

                  {/* Right Folder Category & Chevron */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        opacity: isActive ? 0.9 : 0.7,
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
                        background: isActive ? "rgba(255, 255, 255, 0.25)" : "var(--color-surface)",
                        border: isActive ? "none" : "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.3s ease",
                        transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown size={15} color={isActive ? "#ffffff" : "var(--color-text)"} />
                    </div>
                  </div>
                </div>

                {/* Expanded Folder Content Body */}
                {isActive && (
                  <div
                    style={{
                      padding: "1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                      background: "var(--color-surface)",
                      color: "var(--color-text)",
                      animation: "fadeIn 0.3s ease-in-out",
                    }}
                  >
                    {/* Tagline & Stat */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: "var(--color-primary)",
                        }}
                      >
                        {t(folder.taglineKey)}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "9999px",
                          background: "var(--color-surface-2)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--color-primary)" }}>
                          {t(folder.statKey)}
                        </span>
                        <span style={{ fontSize: "0.72rem", color: "var(--color-text-subtle)", fontWeight: 600 }}>
                          {t(folder.statLabelKey)}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        margin: 0,
                      }}
                    >
                      {t(folder.titleKey)}
                    </h3>

                    {/* Original Description */}
                    <p
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.925rem",
                        lineHeight: 1.7,
                        margin: 0,
                        maxWidth: "840px",
                      }}
                    >
                      {t(folder.descKey)}
                    </p>
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


