---
name: tasteskill
description: >
  Design taste, visual hierarchy, aesthetic excellence, typography, curated color palettes,
  glassmorphism, micro-interactions, responsive precision, and premium UI/UX standards.
  Use whenever designing, building, styling, polishing, or reviewing any user interface,
  web page, or component to ensure a world-class, premium, non-generic look and feel.
---

# 🎨 TasteSkill: Premium UI/UX & Aesthetic Standard

TasteSkill enforces exceptional visual taste, design hierarchy, and tactile micro-interactions across every user interface. It ensures products never look like generic MVPs, default templates, or uninspired mockups.

---

## 💎 The 6 Core Taste Principles

### 1. Curated, Tailored Color Tokens (Never Generic)
* **Never use raw primary colors** (`#ff0000`, pure `#0000ff`, basic `#00ff00`).
* Use tailored HSL tokens with harmonized tints and shades (e.g., Apple Signature Blue `#0071E3`, Emerald Accent `#10B981`, Slate Charcoal `#09090B`).
* Always provide dedicated Light and Dark mode tokens with appropriate contrast ratios ($\ge 4.5:1$ for body text, $\ge 7:1$ for headers).

### 2. Typographic Elegance & Hierarchy
* **Premium Typography**: Use refined Google Fonts (e.g., *Plus Jakarta Sans*, *Inter*, *Outfit*) instead of browser defaults.
* **Optical Tracking**:
  * Large Headlines (`h1`, `h2`): Apply subtle negative tracking (`letter-spacing: -0.025em` to `-0.035em`) with tight line-heights (`1.1` to `1.25`) for a bold, editorial feel.
  * Uppercase Badges / Tags: Apply positive tracking (`letter-spacing: 0.05em` to `0.08em`) with `text-transform: uppercase` and `font-weight: 700`.
  * Body Text: Comfortable line-height (`1.6` to `1.75`) with subtle contrast attenuation for secondary text.

### 3. Depth, Glassmorphism & Multi-Layer Elevation
* **Layered Translucency**:
  * Use `backdrop-filter: blur(24px) saturate(180%)` with translucent backgrounds (`rgba(255, 255, 255, 0.75)` in light mode, `rgba(18, 18, 22, 0.82)` in dark mode).
* **Hairline Inner Highlights**:
  * Instead of flat borders, use subtle borders with inner shadows:
    `border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15);`

### 4. Micro-Interactions & Physics
* **GPU-Accelerated Motion**: Animate only `transform` and `opacity` for smooth 60fps / 120fps motion.
* **Refined Bezier Curves**:
  * Prefer `cubic-bezier(0.16, 1, 0.3, 1)` (Apple Swift Ease-Out) over generic `ease` or `linear`.
* **Hover & Active States**:
  * Cards should elevate subtly on hover (`transform: translateY(-4px)` with softened shadow expansion).
  * Interactive buttons must have tactile active press states (`transform: scale(0.97)`).

### 5. Mobile Ergonomics & Zero-Clutter Layouts
* **Thumb-Zone Optimization**: Keep primary navigation and filter pills comfortably reachable.
* **Minimum Touch Target**: Interactive elements must have a minimum touch footprint of $44\times44\text{px}$.
* **Compact Stack Decks**: On mobile screens (`< 768px`), compress long repetitive lists into interactive category stack decks to eliminate thousands of pixels of mindless scrolling.

### 6. Zero Placeholders & Crisp Vector Polish
* Every icon badge must use soft background tints (`rgba(color, 0.08)`) with matching stroke colors.
* Images must have defined aspect ratios (`aspect-ratio`), smooth loading skeleton states, and crisp SVG iconography (Lucide / Heroicons).

---

## 🎯 Trigger Keywords
* `tasteskill`, `taste`, `make it look premium`, `percantik UI`, `estetika`, `polish UI`, `desain berkelas`, `modern UI`, `glassmorphism`.
