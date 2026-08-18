"use client";

import { useState, useEffect, useRef } from "react";
import clientsData from "@/data/clients.json";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Layers,
  Building2,
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const testimonials = clientsData.filter((c) => c.testimonial);

// Order starts with major strategic clients
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

// Duplicated array for smooth infinite scrolling
const rollingClients = [...orderedAllClients, ...orderedAllClients];

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

  // Touch Swipe Handlers
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
      sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
      setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 2500);
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      isUserInteractingRef.current = true;
      sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
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
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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

        {/* Clean Corporate Stats Grid (Consistent with Main Design) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
            padding: "1.25rem 1.5rem",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
          }}
        >
          {[
            {
              number: "150+",
              label: t("client_stat_1"),
            },
            {
              number: "99.8%",
              label: t("client_stat_2"),
            },
            {
              number: "12+",
              label: t("client_stat_3"),
            },
            {
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
                  fontSize: "clamp(1.5rem, 2.5vw, 1.85rem)",
                  fontWeight: 800,
                  color: "var(--color-primary)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                  fontWeight: 500,
                  marginTop: "0.3rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Clean Slider Section */}
        <div style={{ marginBottom: "2.5rem" }}>
          {/* Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
              padding: "0 0.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--color-text-muted)",
              }}
            >
              <Building2 size={16} color="var(--color-primary)" />
              <span>Portofolio Klien Korporasi & Instansi</span>
            </div>

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

          {/* Draggable Slider Track */}
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
            <div className="bento-marquee-track" style={{ gap: "1rem" }}>
              {rollingClients.map((client: any, idx: number) => {
                return (
                  <div
                    key={`${client.id}-${idx}`}
                    style={{
                      width: "320px",
                      minWidth: "300px",
                      flexShrink: 0,
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "12px",
                      padding: "1.35rem 1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                      transition: "all 0.25s ease",
                    }}
                    className="client-clean-card"
                  >
                    {/* Header: Logo & Company Info */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.875rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "10px",
                          background: "#ffffff",
                          border: "1px solid var(--color-border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          overflow: "hidden",
                          padding: "6px",
                        }}
                      >
                        {client.logo ? (
                          <img
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${client.logo}`}
                            alt={client.name}
                            width="44"
                            height="44"
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
                              fontSize: "1.15rem",
                              fontWeight: 800,
                              color: "var(--color-primary)",
                            }}
                          >
                            {client.abbr}
                          </span>
                        )}
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            color: "var(--color-text)",
                            margin: "0 0 0.25rem 0",
                            lineHeight: 1.35,
                            whiteSpace: "normal",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                          title={client.name}
                        >
                          {client.name}
                        </h3>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--color-text-muted)",
                            fontWeight: 500,
                            display: "block",
                          }}
                        >
                          {client.industry}
                        </span>
                      </div>
                    </div>

                    {/* Solutions Implemented */}
                    {client.products && client.products.length > 0 && (
                      <div
                        style={{
                          paddingTop: "0.85rem",
                          borderTop: "1px solid var(--color-border-subtle)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: "var(--color-text-subtle)",
                            marginBottom: "0.4rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                          }}
                        >
                          <Layers size={11} color="var(--color-primary)" />
                          <span>Solusi Terpasang:</span>
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
                                fontWeight: 500,
                                background: "var(--color-surface-2)",
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

        {/* Corporate Testimonial Showcase */}
        {testimonials.length > 0 && (
          <div
            style={{
              padding: "2rem 2.25rem",
              background: "var(--card-gradient)",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
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
