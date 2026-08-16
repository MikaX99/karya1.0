"use client";

import { useState } from "react";
import productsData from "@/data/products.json";
import ProductCard from "./ProductCard";
import { useLocale } from "@/context/LocaleContext";

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

        {/* Filter Tabs (Corporate Sharp) */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {categoriesConfig.map((cat) => (
            <button
              key={cat.key}
              id={`filter-${cat.value.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              className={`filter-tab ${activeCategoryVal === cat.value ? "active" : ""}`}
              onClick={() => setActiveCategoryVal(cat.value)}
              aria-pressed={activeCategoryVal === cat.value}
            >
              {t(cat.key)}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontSize: "0.8rem",
            color: "var(--color-text-faint)",
          }}
        >
          {t("catalog_showing")}{" "}
          <span style={{ color: "var(--color-text)", fontWeight: 600 }}>{filtered.length}</span>{" "}
          {t("catalog_item")}
          {activeCategoryVal !== "Semua" && (
            <span>{" "}{t("catalog_in_cat")}{" "}
              <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                {t(categoriesConfig.find((c) => c.value === activeCategoryVal)?.key || "")}
              </span>
            </span>
          )}
        </div>

        {/* Product Container (Flex Centered) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.25rem",
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

