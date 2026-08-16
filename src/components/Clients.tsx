"use client";

import { useState, useEffect, useRef } from "react";
import clientsData from "@/data/clients.json";
import {
  CheckCircle2,
  ShieldCheck,
  Building2,
  RefreshCw,
  Quote,
  ChevronLeft,
  ChevronRight,
  Crown,
  Award,
  Star,
  Layers,
  Calendar,
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const industryColors: Record<string, string> = {
  "Holding & Investment": "#1E87DA",
  "Pendidikan & Pelatihan": "#0284C7",
  "Food & Beverage (F&B)": "#D97706",
  "Pemerintahan & Hukum": "#6366F1",
  "Perdagangan Internasional": "#059669",
  "Distribusi & Logistik": "#1E87DA",
  "Industri Herbal & Farmasi": "#10B981",
  "Teknologi & Rekayasa": "#0284C7",
  "Maritim & Logistik Laut": "#0D9488",
  "Konstruksi & Properti": "#DC2626",
  "Teknologi & Digital": "#8B5CF6",
  "Energi & Pertambangan": "#D97706",
  "Ekspor Impor & Manufaktur": "#DB2777",
  "Energi & Kelistrikan": "#10B981",
};

const featuredMeta: Record<
  string,
  { badge: string; badgeColor: string; badgeBg: string; icon: any }
> = {
  "client-07": {
    badge: "Strategic Partner",
    badgeColor: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    icon: <Crown size={15} color="#10B981" />,
  },
  "client-04": {
    badge: "Government & Legal",
    badgeColor: "#818cf8",
    badgeBg: "rgba(99, 102, 241, 0.12)",
    icon: <Award size={15} color="#818cf8" />,
  },
  "client-01": {
    badge: "Enterprise Holding",
    badgeColor: "#38bdf8",
    badgeBg: "rgba(30, 135, 218, 0.12)",
    icon: <Star size={15} color="#38bdf8" />,
  },
};

const testimonials = clientsData.filter((c) => c.testimonial);

// Rolling Bento marquee order (starts with PLN, Dilmil, ALVA GROUP)
const bentoOrderIds = [
  "client-07", // PLN
  "client-04", // Dilmil
  "client-01", // ALVA GROUP
  "client-02", // IRA
  "client-03", // NKG
  "client-05", // DIG
  "client-06", // GAS
  "client-14", // GIHC (PT Glow Industri Herbal Care)
  "client-08", // KAI
  "client-09", // LKI
  "client-10", // MWR
  "client-11", // NXG
  "client-12", // PSG
  "client-13", // SGI
];

const orderedAllClients = bentoOrderIds
  .map((id) => clientsData.find((c) => c.id === id))
  .filter(Boolean) as typeof clientsData;

// Duplicated array for seamless infinite marquee loop
const rollingClients = [...orderedAllClients, ...orderedAllClients];

// Directory Grid order (5-column layout with PLN, Militer/Dilmil, ALVA placed in center slots 2, 3, 4)
const directoryOrderIds = [
  "client-02", // 1. IRA (Col 1)
  "client-07", // 2. PLN (Col 2 - Center Left)
  "client-04", // 3. Dilmil / Militer (Col 3 - EXACT CENTER)
  "client-01", // 4. ALVA GROUP (Col 4 - Center Right)
  "client-05", // 5. DIG (Col 5)
  "client-06", // 6. GAS
  "client-08", // 7. KAI
  "client-09", // 8. LKI
  "client-10", // 9. MWR
  "client-11", // 10. NXG
  "client-03", // 11. NKG
  "client-14", // 12. GIHC (PT Glow Industri Herbal Care)
  "client-12", // 13. PSG
  "client-13", // 14. SGI
];

const directoryClients = directoryOrderIds
  .map((id) => clientsData.find((c) => c.id === id))
  .filter(Boolean) as typeof clientsData;

export default function Clients() {
  const { t } = useLocale();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrollingActive, setIsScrollingActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isUserInteractingRef = useRef(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDraggingRef.current = true;
    setIsMouseDown(true);
    isUserInteractingRef.current = true;
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
    setIsMouseDown(false);
    setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 2500);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // Touch Swipe Handlers (Mobile)
  const handleTouchStart = () => {
    isUserInteractingRef.current = true;
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 2500);
  };

  // Button Arrow Navigation
  const slideLeft = () => {
    if (sliderRef.current) {
      isUserInteractingRef.current = true;
      sliderRef.current.scrollBy({ left: -380, behavior: "smooth" });
      setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 2500);
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      isUserInteractingRef.current = true;
      sliderRef.current.scrollBy({ left: 380, behavior: "smooth" });
      setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 2500);
    }
  };

  // Idle Auto-scroll Effect
  useEffect(() => {
    let animFrame: number;
    const autoScroll = () => {
      if (
        sliderRef.current &&
        !isUserInteractingRef.current &&
        !isDraggingRef.current &&
        isScrollingActive
      ) {
        sliderRef.current.scrollLeft += 0.65;
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 2
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animFrame = requestAnimationFrame(autoScroll);
    };

    animFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animFrame);
  }, [isScrollingActive]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScrollingActive(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const prev = () =>
    setActiveTestimonial(
      (i) => (i - 1 + testimonials.length) % testimonials.length
    );
  const next = () =>
    setActiveTestimonial((i) => (i + 1) % testimonials.length);

  const current = testimonials[activeTestimonial];

  return (
    <section
      id="klien"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--section-bg-2)" }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-badge">{t("clients_badge")}</span>
          <h2
            className="text-section-title"
            style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}
          >
            {t("clients_title_prefix")}{" "}
            <span style={{ color: "var(--color-primary)" }}>
              {t("clients_title_highlight")}
            </span>
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
            {t("clients_subtitle")}
          </p>
        </div>

        {/* Corporate Stats Grid with Subtle Dividers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
            padding: "1.5rem",
            background: "var(--card-alt-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
          }}
        >
          {[
            {
              icon: <CheckCircle2 size={18} color="var(--color-primary)" />,
              number: "150+",
              label: t("client_stat_1"),
            },
            {
              icon: <ShieldCheck size={18} color="var(--color-primary)" />,
              number: "99.8%",
              label: t("client_stat_2"),
            },
            {
              icon: <Building2 size={18} color="var(--color-primary)" />,
              number: "12+",
              label: t("client_stat_3"),
            },
            {
              icon: <RefreshCw size={18} color="var(--color-primary)" />,
              number: "87%",
              label: t("client_stat_4"),
            },
          ].map((stat, idx, arr) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "0.5rem",
                borderRight:
                  idx < arr.length - 1
                    ? "1px solid var(--color-border-subtle)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "0.4rem",
                }}
              >
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--color-text-subtle)",
                  fontWeight: 500,
                  marginTop: "0.2rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* BENTO GRID - SLIDABLE & DRAGGABLE FEATURED CLIENTS */}
        <div style={{ marginBottom: "2.5rem" }}>
          {/* Controls & Indicator Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginBottom: "0.875rem",
              padding: "0 0.25rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={slideLeft}
                aria-label="Slide Left"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={slideRight}
                aria-label="Slide Right"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Draggable & Touch-swipeable Slider Wrapper */}
          <div
            ref={sliderRef}
            className={`bento-marquee-wrapper ${isMouseDown ? "dragging" : ""}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="bento-marquee-track">
              {rollingClients.map((client: any, idx: number) => {
                const meta = featuredMeta[client.id] || {
                  badge: client.industry,
                  badgeColor: "var(--color-primary)",
                  badgeBg: "rgba(30, 135, 218, 0.12)",
                  icon: <Building2 size={14} />,
                };
                const industryColor =
                  industryColors[client.industry] || "#1E87DA";

                return (
                  <div
                    key={`${client.id}-${idx}`}
                    style={{
                      width: "360px",
                      minWidth: "320px",
                      flexShrink: 0,
                      background: "var(--card-gradient)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      transition:
                        "transform 0.25s ease, border-color 0.25s ease",
                    }}
                    className="bento-featured-card"
                  >
                    {/* Top Highlight Badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          padding: "0.3rem 0.65rem",
                          background: meta.badgeBg,
                          border: `1px solid ${meta.badgeColor}40`,
                          borderRadius: "20px",
                          fontSize: "0.725rem",
                          fontWeight: 700,
                          color: meta.badgeColor,
                        }}
                      >
                        {meta.icon}
                        {meta.badge}
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--color-text-subtle)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <Calendar size={12} /> {t("client_since")}{" "}
                        {client.since}
                      </span>
                    </div>

                    {/* Logo + Title Header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "76px",
                          height: "76px",
                          borderRadius: "10px",
                          background: "#ffffff",
                          border: "1px solid var(--color-border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          overflow: "hidden",
                          padding: "6px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        }}
                      >
                        {client.logo ? (
                          <img
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${client.logo}`}
                            alt={client.name}
                            width="56"
                            height="56"
                            loading="lazy"
                            decoding="async"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <span
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: 800,
                              color: industryColor,
                            }}
                          >
                            {client.abbr}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3
                          style={{
                            fontSize: "1.025rem",
                            fontWeight: 800,
                            color: "var(--color-text)",
                            margin: "0 0 0.35rem 0",
                            lineHeight: 1.3,
                          }}
                        >
                          {client.name}
                        </h3>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "0.15rem 0.5rem",
                            background: "var(--color-surface-2)",
                            border: "1px solid var(--color-border)",
                            borderRadius: "4px",
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: "var(--color-text-muted)",
                          }}
                        >
                          {client.industry}
                        </span>
                      </div>
                    </div>

                    {/* Products Delivered */}
                    {client.products && client.products.length > 0 && (
                      <div
                        style={{
                          paddingTop: "0.875rem",
                          borderTop: "1px solid var(--color-border-subtle)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: "var(--color-text-subtle)",
                            marginBottom: "0.35rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                          }}
                        >
                          <Layers size={12} color="var(--color-primary)" />{" "}
                          Solusi Terimplementasi:
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.35rem",
                          }}
                        >
                          {client.products.map((prod: string) => (
                            <span
                              key={prod}
                              style={{
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                background: "var(--color-surface-1)",
                                border: "1px solid var(--color-border)",
                                borderRadius: "4px",
                                padding: "0.15rem 0.45rem",
                                color: "var(--color-text)",
                              }}
                            >
                              {prod}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 5-COLUMN DIRECTORY GRID WITH PLN, DILMIL, ALVA IN CENTER SLOTS 2, 3, 4 */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Building2 size={16} /> All Corporate Clients Directory
          </div>

          <div className="clients-directory-grid">
            {directoryClients.map((client) => {
              const color = industryColors[client.industry] || "#1E87DA";
              const isCenterTop = [
                "client-07",
                "client-04",
                "client-01",
              ].includes(client.id);

              return (
                <div
                  key={client.id}
                  className={`client-logo-card ${
                    isCenterTop ? "client-card-highlight" : ""
                  }`}
                >
                  {/* Logo Image or Abbreviation Badge */}
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: isCenterTop
                        ? "2px solid var(--color-primary)"
                        : "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      overflow: "hidden",
                      padding: "6px",
                      boxShadow: isCenterTop
                        ? "0 4px 12px rgba(30, 135, 218, 0.18)"
                        : "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    {(client as any).logo ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${(client as any).logo}`}
                        alt={client.name}
                        width="56"
                        height="56"
                        loading="lazy"
                        decoding="async"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <span
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 800,
                          color: color,
                        }}
                      >
                        {client.abbr}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        marginBottom: "0.25rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {client.name}
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.15rem 0.5rem",
                        background: "var(--color-surface-2)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "4px",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {client.industry}
                    </span>
                  </div>

                  {/* Since */}
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--color-text-faint)",
                    }}
                  >
                    {t("client_since")} {client.since}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate Testimonial Showcase */}
        {testimonials.length > 0 && (
          <div
            style={{
              padding: "2rem 2.25rem",
              background: "var(--card-gradient)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.25rem",
                flexWrap: "wrap",
              }}
            >
              <Quote
                size={28}
                color="var(--color-primary)"
                style={{ flexShrink: 0, marginTop: "4px" }}
              />

              <div style={{ flex: 1, minWidth: "220px" }}>
                <p
                  style={{
                    fontSize: "clamp(0.925rem, 1.4vw, 1.05rem)",
                    color: "var(--color-text)",
                    lineHeight: 1.7,
                    margin: "0 0 1rem 0",
                  }}
                >
                  &ldquo;{current.testimonial}&rdquo;
                </p>

                <div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {current.name}
                  </div>
                  {current.contact && (
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {current.contact}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Slider Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--color-border-subtle)",
              }}
            >
              <div style={{ display: "flex", gap: "0.4rem" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    style={{
                      width: i === activeTestimonial ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      background:
                        i === activeTestimonial
                          ? "var(--color-primary)"
                          : "var(--color-border)",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="btn-theme"
                  style={{ width: "32px", height: "32px" }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="btn-theme"
                  style={{ width: "32px", height: "32px" }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
