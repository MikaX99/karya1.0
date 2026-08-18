---
name: seo-master
description: >
  Technical SEO, Schema.org JSON-LD structured data for Google & AI search agents, OpenGraph
  social sharing cards, Core Web Vitals optimization, sitemap.xml, robots.txt, and semantic HTML hierarchy.
  Use when reviewing, auditing, optimizing, or implementing SEO, metadata, structured data, or search engine indexing.
---

# 📈 SEO-Master: Technical SEO & Search Engine Optimization

SEO-Master enforces enterprise-grade search engine optimization, AI search agent discoverability, and social sharing metadata across all web pages.

---

## 🚀 The 6 SEO Excellence Pillars

### 1. Schema.org Structured Data (JSON-LD)
* Implement comprehensive JSON-LD graphs in `<head>`:
  * `Organization` (Legal name, official address, logo, contact points, sameAs social links).
  * `WebSite` & `WebPage` (Search potential, canonical URL, language).
  * `Product` / `Offer` (Hardware models, brand, in-stock availability, warranties).
  * `LocalBusiness` / `PostalAddress` (Geographic coordinates, Cakung Jakarta address).
* Schema must strictly validate against Google Rich Results Test standards.

### 2. OpenGraph & Twitter Social Cards
* Ensure every page includes high-impact preview metadata:
  * `og:title`, `og:description`, `og:image` (1200x630px high-res banner).
  * `og:url` (Strict canonical URL), `og:type` (`website`).
  * `twitter:card` (`summary_large_image`), `twitter:image`.
* When links are shared on WhatsApp, LinkedIn, Twitter, or Slack, rich preview cards must render flawlessly.

### 3. Semantic HTML & Heading Hierarchy
* **Single `<h1>` Rule**: Exactly one descriptive `<h1>` tag per page containing primary target keywords.
* **Logical Hierarchy**: Strict progression from `<h1>` to `<h2>` to `<h3>`. Never skip heading levels for styling purposes.
* **Accessible Image Alt Texts**: Every `<img>` must have meaningful, keyword-relevant `alt` attributes (never generic `alt="image"`).

### 4. Canonical URLs & Trailing Slash Consistency
* Prevent duplicate content penalties:
  * Explicit `<link rel="canonical" href="..." />` on every page.
  * Ensure consistent trailing slash behavior across all internal navigation links.

### 5. AI Agent & LLM Discoverability (`llms.txt`)
* Maintain `public/llms.txt` and `public/robots.txt` so modern AI search engines (Perplexity, ChatGPT Search, Gemini Live) can accurately summarize company products, legal identity, and services.

### 6. Core Web Vitals & Crawl Budget
* **Zero Cumulative Layout Shift (CLS = 0)**: Pre-reserve dimensions (`width`, `height`, `aspect-ratio`) on all images, logos, and dynamic slots.
* **Fast Largest Contentful Paint (LCP < 1.2s)**: Preconnect to font domains, preload critical hero assets, and utilize non-blocking CSS.
* **Auto-generated Sitemap & Robots**: Keep `public/sitemap.xml` and `public/robots.txt` synchronized with current page routes.

---

## 🎯 Trigger Keywords
* `seo-master`, `seo`, `schema.org`, `json-ld`, `opengraph`, `sitemap`, `robots.txt`, `meta tags`, `google search`, `rich results`, `canonical`.
