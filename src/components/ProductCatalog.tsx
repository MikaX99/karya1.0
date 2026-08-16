"use client";

import { useState, useRef } from "react";
import productsData from "@/data/products.json";
import ProductCard from "./ProductCard";
import { useLocale } from "@/context/LocaleContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categoriesConfig = [
  { key: "cat_all", value: "Semua" },
  { key: "cat_server", value: "Server & Storage" },
  { key: "cat_network", value: "Networking" },
  { key: "cat_laptop", value: "Laptop & PC" },
  { key: "cat_license", value: "Lisensi Software" },
];

export default function ProductCatalog() {
  const { t } = useLocale();
  const [activeCategoryVal, setActiveCategoryVal] = useState("Semua");
  const tabTrackRef = useRef<HTMLDivElement>(null);

  const scrollTabsLeft = () => {
    if (tabTrackRef.current) {
      tabTrackRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollTabsRight = () => {
    if (tabTrackRef.current) {
      tabTrackRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const filtered =
    activeCategoryVal === "Semua"
      ? productsData
      : productsData.filter((p) => p.category === activeCategoryVal);

  return (
    <section id="produk" className="section" style={{ background: "var(--section-bg-2)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-badge">{t("catalog_badge")}</span>
          <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
            {t("catalog_title_prefix")} <span style={{ color: "var(--color-primary)" }}>{t("catalog_title_highlight")}</span>
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
            {t("catalog_subtitle")}
          </p>
        </div>

        {/* Futuristic Floating Capsule Segmented Bar */}
        <div className="futuristic-tab-container">
          <button
            onClick={scrollTabsLeft}
            className="futuristic-tab-arrow"
            aria-label="Scroll categories left"
          >
            <ChevronLeft size={16} />
          </button>

          <div ref={tabTrackRef} className="futuristic-tab-track">
            {categoriesConfig.map((cat) => (
              <button
                key={cat.key}
                id={`filter-${cat.value.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                className={`futuristic-tab-item ${activeCategoryVal === cat.value ? "active" : ""}`}
                onClick={() => setActiveCategoryVal(cat.value)}
                aria-pressed={activeCategoryVal === cat.value}
              >
                {t(cat.key)}
              </button>
            ))}
          </div>

          <button
            onClick={scrollTabsRight}
            className="futuristic-tab-arrow"
            aria-label="Scroll categories right"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Product Container (Flex Centered with Switch Animation) */}
        <div
          key={activeCategoryVal}
          className="catalog-grid-animated"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.25rem",
            marginTop: "2rem",
          }}
        >
          {filtered.map((product) => (
            <div
              key={product.id}
              style={{
                flex: "1 1 280px",
                maxWidth: "320px",
                width: "100%",
                display: "flex",
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem",
              color: "var(--color-text-faint)",
            }}
          >
            {t("catalog_empty")}
          </div>
        )}
      </div>
    </section>
  );
}

