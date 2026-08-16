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

const brandConfig = [
  { label: "Semua Brand", value: "Semua" },
  { label: "Dell", value: "Dell" },
  { label: "HPE", value: "HP" },
  { label: "Cisco", value: "Cisco" },
  { label: "Ubiquiti", value: "Ubiquiti" },
  { label: "MikroTik", value: "Mikrotik" },
  { label: "Fortinet", value: "Fortinet" },
  { label: "Sophos", value: "Sophos" },
  { label: "Sangfor", value: "Sangfor" },
  { label: "Lenovo", value: "Lenovo" },
  { label: "Microsoft", value: "Microsoft" },
  { label: "Kaspersky", value: "Kaspersky" },
  { label: "Synology", value: "Synology" },
];

export default function ProductCatalog() {
  const { t } = useLocale();
  const [activeCategoryVal, setActiveCategoryVal] = useState("Semua");
  const [activeBrandVal, setActiveBrandVal] = useState("Semua");
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

  // Products belonging to the selected category
  const categoryProducts =
    activeCategoryVal === "Semua"
      ? productsData
      : productsData.filter((p) => p.category === activeCategoryVal);

  // Dynamically derive brands available in the selected category
  const availableBrands = brandConfig.filter((b) => {
    if (b.value === "Semua") return true;
    return categoryProducts.some((p) =>
      p.brand.toLowerCase().includes(b.value.toLowerCase())
    );
  });

  const handleCategoryChange = (catValue: string) => {
    setActiveCategoryVal(catValue);

    // Reset activeBrandVal to "Semua" if selected brand is not present in the new category
    if (activeBrandVal !== "Semua") {
      const newCategoryProducts =
        catValue === "Semua"
          ? productsData
          : productsData.filter((p) => p.category === catValue);

      const isValidInNewCat = newCategoryProducts.some((p) =>
        p.brand.toLowerCase().includes(activeBrandVal.toLowerCase())
      );

      if (!isValidInNewCat) {
        setActiveBrandVal("Semua");
      }
    }
  };

  // Final filtered product list matching both category and brand
  const filtered = categoryProducts.filter((p) => {
    return (
      activeBrandVal === "Semua" ||
      p.brand.toLowerCase().includes(activeBrandVal.toLowerCase())
    );
  });

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
                onClick={() => handleCategoryChange(cat.value)}
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

        {/* Brand Filter Pills Bar (Dynamically adapts to available brands in category) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginTop: "1.15rem",
          }}
        >
          {availableBrands.map((b) => (
            <button
              key={b.value}
              id={`brand-filter-${b.value.toLowerCase()}`}
              onClick={() => setActiveBrandVal(b.value)}
              style={{
                background:
                  activeBrandVal === b.value
                    ? "var(--color-primary)"
                    : "var(--color-surface)",
                color:
                  activeBrandVal === b.value
                    ? "#ffffff"
                    : "var(--color-text-subtle)",
                border:
                  activeBrandVal === b.value
                    ? "1px solid var(--color-primary)"
                    : "1px solid var(--color-border)",
                borderRadius: "9999px",
                padding: "0.3rem 0.75rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow:
                  activeBrandVal === b.value
                    ? "0 4px 14px rgba(0, 113, 227, 0.25)"
                    : "none",
              }}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* Product Container (Flex Centered with Switch Animation) */}
        <div
          key={`${activeCategoryVal}-${activeBrandVal}`}
          className="catalog-grid-animated"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.25rem",
            marginTop: "1.75rem",
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

