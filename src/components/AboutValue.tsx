"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";
import { ChevronDown, Layers, Rocket, Activity, FileText } from "lucide-react";

export default function AboutValue() {
  const { t } = useLocale();
  const [activeFolderIndex, setActiveFolderIndex] = useState(-1);
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setActiveFolderIndex(-1);
    }

    // Mobile scroll-driven trigger logic (<768px)
    const handleScroll = () => {
      if (manualOverride) return;
      if (typeof window !== "undefined" && window.innerWidth >= 768) return;

      const folder0 = document.getElementById("value-easy-integrations");
      const folder1 = document.getElementById("value-smart-deployment");
      const folder2 = document.getElementById("value-realtime-monitoring");

      const windowHeight = window.innerHeight;
      const focusPoint = windowHeight * 0.48; // 4.8 / 10 screen height

      if (folder2) {
        const r2 = folder2.getBoundingClientRect();
        if (r2.top <= focusPoint) {
          setActiveFolderIndex(2);
          return;
        }
      }

      if (folder1) {
        const r1 = folder1.getBoundingClientRect();
        if (r1.top <= focusPoint) {
          setActiveFolderIndex(1);
          return;
        }
      }

      setActiveFolderIndex(0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [manualOverride]);

  const handleMouseEnter = (idx: number) => {
    // Desktop hover trigger strictly on mouse over (>=768px)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setActiveFolderIndex(idx);
    }
  };

  const handleMouseLeaveContainer = () => {
    // Close all cards when mouse leaves the section on Desktop
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setActiveFolderIndex(-1);
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
      earPosition: "left", // Staggered ear tab on the LEFT
      refNo: "FILE REF: KS-SYS-01",
      stamp: "CLASSIFIED // INTEGRATION",
      index: "01",
      titleKey: "val_1_title",
      taglineKey: "val_1_tagline",
      descKey: "val_1_desc",
      statKey: "val_1_stat",
      statLabelKey: "val_1_stat_label",
      icon: <Layers size={17} />,
      tabs: ["Easy Integrations", "Seamless Systems"],
      categoryLabel: "Integrasi & Support 24/7",
    },
    {
      id: "smart-deployment",
      earPosition: "center", // Staggered ear tab in the CENTER
      refNo: "FILE REF: KS-SYS-02",
      stamp: "APPROVED // DEPLOYMENT",
      index: "02",
      titleKey: "val_2_title",
      taglineKey: "val_2_tagline",
      descKey: "val_2_desc",
      statKey: "val_2_stat",
      statLabelKey: "val_2_stat_label",
      icon: <Rocket size={17} />,
      tabs: ["Smart Deployment", "Zero-Friction Growth"],
      categoryLabel: "Implementasi & Skalabilitas",
    },
    {
      id: "realtime-monitoring",
      earPosition: "right", // Staggered ear tab on the RIGHT
      refNo: "FILE REF: KS-SYS-03",
      stamp: "VERIFIED // MONITORING",
      index: "03",
      titleKey: "val_3_title",
      taglineKey: "val_3_tagline",
      descKey: "val_3_desc",
      statKey: "val_3_stat",
      statLabelKey: "val_3_stat_label",
      icon: <Activity size={17} />,
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

        {/* Stacked Archival Physical File Folders Container */}
        <div
          onMouseLeave={handleMouseLeaveContainer}
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {folders.map((folder, idx) => {
            const isActive = activeFolderIndex === idx;

            return (
              <div
                key={folder.id}
                id={`value-${folder.id}`}
                onMouseEnter={() => handleMouseEnter(idx)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Physical Trapezoidal Sloped File Folder Ear Tab (Staggered Left, Center, Right) */}
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      folder.earPosition === "left"
                        ? "flex-start"
                        : folder.earPosition === "center"
                        ? "center"
                        : "flex-end",
                    paddingLeft: folder.earPosition === "left" ? "1.5rem" : "0",
                    paddingRight: folder.earPosition === "right" ? "1.5rem" : "0",
                    marginBottom: "-1px",
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  <div
                    onClick={() => handleFolderClick(idx)}
                    style={{
                      background: isActive ? "var(--color-primary)" : "var(--color-surface-2)",
                      color: isActive ? "#ffffff" : "var(--color-text)",
                      padding: "0.45rem 1.65rem 0.4rem 1.65rem",
                      fontSize: "0.825rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      userSelect: "none",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      border: isActive ? "1px solid var(--color-primary)" : "1px solid var(--color-border)",
                      borderBottom: "none",
                      boxShadow: isActive ? "0 -4px 14px rgba(0, 113, 227, 0.2)" : "0 -2px 6px rgba(0,0,0,0.03)",
                      clipPath: "polygon(0% 100%, 12px 0%, calc(100% - 12px) 0%, 100% 100%)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {folder.icon}
                    <span>{t(folder.titleKey)}</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.8, fontFamily: "monospace" }}>
                      [{folder.index}]
                    </span>
                  </div>
                </div>

                {/* Main Physical Archival Folder Card Body */}
                <div
                  style={{
                    borderRadius: folder.earPosition === "left" ? "0 16px 16px 16px" : folder.earPosition === "right" ? "16px 0 16px 16px" : "16px",
                    overflow: "hidden",
                    background: isActive ? "var(--color-surface-2)" : "var(--color-surface)",
                    border: isActive ? "1px solid var(--color-primary)" : "1px solid var(--color-border)",
                    boxShadow: isActive
                      ? "0 14px 36px rgba(0, 113, 227, 0.15), 0 2px 8px rgba(0,0,0,0.06)"
                      : "0 2px 10px rgba(0,0,0,0.03)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Folder Sub-Header Bar */}
                  <div
                    onClick={() => handleFolderClick(idx)}
                    style={{
                      padding: "0.85rem 1.25rem",
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
                      borderBottom: isActive ? "1px solid rgba(255,255,255,0.15)" : "none",
                    }}
                  >
                    {/* Left: Rivet Eyelet & Archival Ref */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: isActive ? "#ffffff" : "var(--color-surface)",
                          border: isActive ? "2px solid rgba(255,255,255,0.5)" : "2px solid var(--color-border)",
                          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2)",
                          flexShrink: 0,
                        }}
                      />

                      <span
                        style={{
                          fontFamily: "monospace, monospace",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          opacity: isActive ? 0.95 : 0.65,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {folder.refNo}
                      </span>
                    </div>

                    {/* Right: Archival Stamp & Chevron Indicator */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          opacity: isActive ? 0.9 : 0.6,
                          fontFamily: "monospace, sans-serif",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          background: isActive ? "rgba(0,0,0,0.18)" : "transparent",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                          border: isActive ? "1px solid rgba(255,255,255,0.2)" : "1px dashed var(--color-border)",
                        }}
                      >
                        {folder.stamp}
                      </span>

                      <div
                        style={{
                          width: "26px",
                          height: "26px",
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

                  {/* Expanded Content Body */}
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
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          <FileText size={15} />
                          <span>{t(folder.taglineKey)}</span>
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

                      {/* Original Title */}
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

                      {/* Original Description Text */}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


