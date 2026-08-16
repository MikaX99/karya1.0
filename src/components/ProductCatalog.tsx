"use client";

import { useState } from "react";
import productsData from "@/data/products.json";
import ProductCard from "./ProductCard";

const ALL = "Semua";
const categories = [ALL, "Server & Storage", "Networking", "Laptop & PC", "Lisensi Software"];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const filtered =
    activeCategory === ALL
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <section id="produk" className="section" style={{ background: "var(--section-bg-2)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-badge">Katalog Perangkat</span>
          <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
            Perangkat & Hardware <span style={{ color: "var(--color-primary)" }}>Enterprise</span>
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
            Penyediaan server, jaringan, laptop bisnis, dan lisensi software bergaransi resmi vendor.
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
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
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
          Menampilkan <span style={{ color: "var(--color-text)", fontWeight: 600 }}>{filtered.length}</span> item
          {activeCategory !== ALL && (
            <span> dalam kategori <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>{activeCategory}</span></span>
          )}
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
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
            Tidak ada produk dalam kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}
