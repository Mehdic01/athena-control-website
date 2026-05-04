# Athena Control — CLAUDE.md

Project documentation for AI-assisted development. Keep this file updated when making architectural or design decisions.

---

## Project Overview

**Athena Control** is the official distributor for Motortronics (soft starters), SHINKAWA Electric (vibration sensors and condition monitor), RENLE (Frequency Inverter), and Athena Valve (industrial valves — 6 categories) and ValenTech (actuators — 3 categories). Sister company of Athena Group. Based in Bayraklı, İzmir, Turkey.

**Website purpose:** B2B corporate marketing and product catalog. Targets industrial engineers and procurement teams in Turkey. 

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Forms | React Hook Form + Zod |
| Components | Shadcn/Radix UI |
| Icons | Lucide React |
| Fonts | Bebas Neue · Rajdhani · Space Grotesk (Google Fonts) |

---

## Directory Structure

```
app/
  layout.tsx              — Root layout (fonts, Navbar, Footer)
  page.tsx                — Home page
  globals.css             — Global styles + Tailwind theme variables
  _components/            — Home page specific components (co-located with app/page.tsx)
    FeaturedSectionStats.tsx / IndustriesSection.tsx / RotatingEarth.tsx
    StickyPartnersSection.tsx / feature-shader-cards.tsx / logo-cloud-2.tsx
  about/
    page.tsx              — About us page
    _components/          — avatar.tsx, team-showcase.tsx
  brands/
    page.tsx              — Partner brands page (all brands from lib/data/brands/brands.ts)
    _components/          — map.tsx, profile-card-testimonial-carousel.tsx
  products/
    page.tsx              — Full product catalog (all products, grouped by category)
    ProductsClient.tsx    — "use client" wrapper for the products catalog page
    _components/          — ProductFilterBar.tsx, ProductParallaxCard.tsx, CategoryShowcase.tsx,
                            CategoryProductSection.tsx, ProductSectionNav.tsx,
                            cta-with-text-marquee.tsx, grid-feature-cards.tsx
    [category]/
      page.tsx            — Category listing (SSG, all products in that category)
      [slug]/
        page.tsx          — Product detail (SSG, single product)
  gallery/
    page.tsx              — Photo gallery with lightbox
    _components/          — animated-slideshow.tsx
  contact/
    page.tsx              — Contact form
    _components/          — scroll-faqaccordion.tsx
  api/contact/route.ts    — Contact form API handler
  robots.ts / sitemap.ts  — SEO

components/               — Global only: layout, shadcn primitives, shared utilities
  layout/
    Navbar.tsx            — Fixed top nav with dropdown (data-driven from navigation/navigation.ts)
    Footer.tsx            — Dark-background footer (data-driven from brands/brands.ts + navigation/navigation.ts)
  shared/
    FadeIn.tsx            — "use client" scroll-triggered fade+slide wrapper
    Breadcrumb.tsx        — Reusable breadcrumb component
    text-marque.tsx / text-rotate.tsx / interactive-accordion.tsx
  ui/                     — Shadcn primitives only (flat, CLI-safe — never add subdirectories)
    button.tsx / badge.tsx / input.tsx / label.tsx / separator.tsx / textarea.tsx / carousel.tsx

lib/
  data/
    brands/
      brands.ts           — All partner brands (Brand interface + brands array)
      athenacontrol.ts    — Athena Control company data (CompanyStat, values, industries, contactInfo)
      index.ts            — Re-exports from this directory
    gallery/
      gallery.ts          — Gallery image list (GalleryImage interface)
    navigation/
      navigation.ts       — navLinks, productDropdown, footerProductLinks, footerCompanyLinks
    products/
      types.ts            — Unified Product type + Brand/ProductCategory unions
      index.ts            — Re-exports from motortronics/, renle/, shinkawa/, athena-valve/, valentech/
      utils.ts            — getAllProducts(), allProductRecords, brandNames, categoryNames, categoryDescriptions
      motortronics/
        soft-starters/
          low-voltage/
            index.ts      — lvProducts record, lvProductCards, FileText re-export
            vmx-synergy-plus.ts / vmx-synergy.ts / vmx-agility.ts / vmx-pfe.ts
          medium-voltage/
            index.ts      — placeholder (MvcProduct data still inline in mvc4/page.tsx)
      renle/
        frequency-inverter/
          low-voltage/
            index.ts      — lvInverterProducts record, lvInverterCards
            rnb-1000.ts / rnb-2000.ts / rnb-3000.ts / rnb-5000.ts / rnb-6000.ts
          high-voltage/
            index.ts      — hvInverterProducts record, hvInverterCards
            rnhv-series.ts
      shinkawa/
        vibration-monitoring-systems/
          sensor-for-pump-motor-turbine-compressor/
            index.ts      — vibrationSensorProducts record, vibrationSensorCards
            cv-series.ts / ca-series.ts / ms-series.ts / zark-series.ts / fk-series.ts / wk-wkn-series.ts
        condition-monitor/
          index.ts        — conditionMonitorProducts record, conditionMonitorCards
          vm-5-series.ts / vm-7-series.ts / vm-21-series.ts / vm-25-series.ts
      athena-valve/
        index.ts          — Re-exports all valve categories
        ball-valve/
          index.ts        — ballValveProducts record
          [slug].ts × N
        butterfly-valve/
          index.ts        — butterflyValveProducts record
          [slug].ts × N
        gate-valve/
          index.ts        — gateValveProducts record
          [slug].ts × N
        globe-valve/
          index.ts        — globeValveProducts record
          [slug].ts × N
        check-valve/
          index.ts        — checkValveProducts record (6 products)
          axial-flow-check-valve.ts / normal-swing-check-valve.ts / dual-plate-check-valve.ts
          y-type-check-valve.ts / pressure-seal-swing-check-valve.ts / lift-type-check-valve.ts
        plug-valve/
          index.ts        — plugValveProducts record (3 products)
          pressure-balance-plug-valve.ts / plug-valve.ts / orbital-plug-valve.ts
      valentech/
        index.ts          — Re-exports all actuator categories
        pneumatic-actuator/
          index.ts        — pneumaticActuatorProducts record (5 products)
          spring-return-fork-type-pneumatic-actuator.ts / double-acting-fork-type-pneumatic-actuator.ts
          linear-pneumatic-actuator.ts / rack-and-pinion-pneumatic-actuator.ts
          fast-ultra-fast-acting-pneumatic-actuator.ts
        electric-actuator/
          index.ts        — electricActuatorProducts record (4 products)
          multi-turn-electric-actuator.ts / compact-module-electric-actuator.ts
          partially-rotary-electric-actuator.ts / angular-travel-electric-actuator.ts
        complete-actuator-equipment/
          index.ts        — completeActuatorEquipmentProducts record (6 products)
          ball-valve-with-pneumatic-actuator.ts / butterfly-valve-with-pneumatic-actuator.ts
          gate-valve-with-pneumatic-actuator.ts / ball-valve-with-electric-actuator.ts
          gate-valve-with-electric-actuator.ts / butterfly-valve-with-electric-actuator.ts

public/images/
  logo/       — athena-logo.png (color), athena-logo-white.png (footer)
  products/
    soft-starters/               — vmx-synergy-plus.png, vmx-synergy.png, vmx-agility.png, vmx-pfe.png, mvc-4.png
    ball-valves/                 — [slug].png per product
    butterfly-valves/            — [slug].png per product
    gate-valves/                 — [slug].png per product
    globe-valves/                — [slug].png per product
    check-valves/                — [slug].png per product
    plug-valves/                 — [slug].png per product
    pneumatic-actuator/          — [slug].png per product
    electric-actuator/           — [slug].png per product
    complete-actuator-equipment/ — [slug].png per product
  brands/     — motortronics.png, athena-group.png, shinkawa.png, renle-logo.webp
  gallery/    — photo-1.jpg ... photo-14.jpg, win-eurasia.webp
  hero/       — banner02.jpg, banner03.jpg, banner04.jpg
```

---

## Data Architecture

### Principle: lib/data/ is the single source of truth

All content that is rendered in multiple places (brands, navigation, product specs, company info) lives in `lib/data/`. Pages and components **import** data — they do not define it inline.

> **RULE — Never write data in `app/`:** No hardcoded data objects, arrays, records, or constants belong in `app/`. If a page needs a lookup table, label map, image list, or any other content, that data must live in `lib/data/` (add a new file or extend an existing interface) and be imported into the page. `app/` is for layout, routing, and rendering logic only. If a required property does not exist on a data type yet, add it to the relevant interface in `lib/data/` rather than working around it in the page.

### Product data sourcing

All product data is sourced from the **official manufacturer websites** and adapted for display on Athena Control's site. Athena Control is the official Turkish distributor — data is not invented; it must match the manufacturer's published specifications.

| Brand | Official website to source from |
|---|---|
| Motortronics | `motortronics.com` — VMX and MVC product pages |
| SHINKAWA Electric | `shinkawa.co.jp` — vibration sensor and condition monitor pages |
| RENLE | `renle.com` — RNB and RNHV frequency inverter pages |
| Athena Valve | `athenavalve.com` — ball, butterfly, gate, globe, check, and plug valve pages |
| ValenTech | `valen-tech.com` — pneumatic actuator, electric actuator, and complete actuator equipment pages |

**When filling a product data file:**
- Pull specs, feature descriptions, and option names directly from the manufacturer's product detail page
- Adapt copy for the B2B Turkish distributor context (English is fine; keep technical accuracy)
- Do not fabricate spec values — if a value is unknown, leave the field as an empty string or omit optional fields
- Images should come from the manufacturer's media or be requested separately; never hotlink from external sites

> **IMPORTANT — Data accuracy:** The current product data files contain placeholder, incomplete, or inaccurate content. Before building or extending any product page, verify the data against the official manufacturer website and correct it to be **an exact match**. Spec values, feature names, option titles, and descriptions must all be verified. Treat every existing data file as a draft until it has been audited against the source.

### lib/data/brands/brands.ts

```ts
export interface Brand {
  id: string;
  name: string;
  fullName?: string;
  role: "Official Turkish Distributor" | "Sister Company";
  website: string;
  logo: string;       // path to /public/images/brands/xxx.png — empty string = no logo yet
  description: string;
  highlights: string[];
  icon: ElementType;  // Lucide icon component stored by reference
  showcaseImages: string[]; // up to 3 product image paths for the brand showcase on /products — empty for non-distributor brands
}
export const brands: Brand[] = [ /* all brands */ ];
```

**Logo fallback pattern**: `{brand.logo ? <Image src={brand.logo} ... /> : <span>{brand.name}</span>}` — RENLE currently has `logo: ""` until `renle.png` is added to `public/images/brands/`.

### lib/data/products/types.ts

A single unified `Product` type is used for all brands and categories. No separate types per product category.

```ts
export type Brand = "motortronics" | "renle" | "shinkawa" | "athena-valve" | "valentech";
export type ProductCategory =
  | "soft-starter" | "frequency-inverter" | "vibration-sensors" | "condition-monitor"
  | "ball-valve" | "butterfly-valve" | "gate-valve" | "globe-valve" | "check-valve" | "plug-valve"
  | "pneumatic-actuator" | "electric-actuator" | "complete-actuator-equipment";

export type Spec      = { label: string; value: string };
export type SpecGroup = { title: string; specs: Spec[] };
export type Feature   = { title: string; description: string };
export type Document  = { name: string; type: "catalog" | "datasheet" | "manual" | "brochure" | "case study" | "software" | "firmware"; url: string };
export type ProductImage = { src: string; alt: string };

export type Product = {
  slug, name, brand, category, subcategory?,
  shortDescription, overview: string[], features: Feature[], applications: string[],
  quickSpecs?: Spec[], specGroups?: SpecGroup[],
  image, gallery?: ProductImage[],
  documents?: Document[], manufacturerUrl?,
  featured?: boolean, order?: number,
};

// Groups multiple Products under a series (e.g., RNB series, VM series)
export type ProductSeries = {
  slug, name, brand, category, subcategory?, description, image?,
  products: Product[],
};
```

**Key design decisions:**
- `quickSpecs` replaces the old hardcoded category-specific fields (voltage, power, current, etc.) — any product can have any specs
- No `ElementType` icon references — icons are a frontend concern, not data
- No UI-coupled fields (slogans, tagline, featureImage, overviewTitle, etc.) — the data layer is presentation-agnostic
- `overview` is a string array (paragraphs), `features` is title+description pairs

### Adding a new product

All products use the unified `Product` type regardless of brand or category:

1. Create a file in the appropriate brand/category directory (e.g., `lib/data/products/motortronics/soft-starters/low-voltage/vmx-<name>.ts`) exporting a `Product` object
2. Import and add to the category `index.ts` record (e.g., `lvProducts`)
3. Add the category record to `allProductRecords` in `utils.ts` — also update `brandNames`, `categoryNames`, `categoryDescriptions` in the same file for any new brand or category
4. Sitemap auto-generates from `getAllProducts()` — no manual sitemap update needed

### Frontend Product Page Strategy

Now that all products share a single `Product` type, the frontend uses one template for everything:

**One template, all products:** A single `ProductDetailPage` component renders any product regardless of brand. The layout follows the data shape:
1. **Hero** — product image, name, brand logo, `shortDescription`, `quickSpecs`
2. **Overview** — renders the `overview` string array as paragraphs
3. **Features** — renders `features` array as title + description items
4. **Specifications** — renders `specGroups` as tables (conditionally shown only if specGroups exists)
5. **Documents** — download links from `documents` array (conditional)
6. **CTA** — "Request a Quote" button + "View on manufacturer site" link using `manufacturerUrl`

**Brand differentiation is cosmetic, not structural:** All products use the same page layout. Brand-specific touches (e.g., a subtle brand color accent or brand logo badge) are derived from the `brand` field — never create separate page templates per brand.

**Listing pages also use one template:** Product listing/grid pages render `Product[]` using a single `ProductCard` component. The card shows: image, name, brand badge, `shortDescription`, and `quickSpecs`.

**Data drives everything:** Components never contain hardcoded product content. All text, specs, and features come from the data files. Components are purely presentational shells that receive `Product` data as props.

**Icons and visual embellishments are frontend-only:** The data layer has no icon references. If a feature item needs an icon, the component assigns icons based on convention or index — not from data.

### lib/data/navigation/navigation.ts

The `productDropdown` export uses a `sections` array, enabling multiple grouped sections in the navbar dropdown:

```ts
export const productDropdown = {
  sections: [
    { label: "Soft Starters", items: [...] },
    { label: "RENLE Products", items: [...] },
  ]
};
```

---

## Design System

### Color Palette

| Value | Role |
|---|---|
| `#FFFFFF` | White — primary background |
| `#F5F5F5` | Light grey — subtle surface alternative |
| `#E0E0E0` | Mid grey — borders and dividers |
| `#6B6B6B` | Dark grey — secondary/muted text |
| `#1A1A1A` | Near-black — primary text and headings |
| `#000000` | Pure black — used sparingly for contrast |
| `#1B6240` | Brand green — buttons, links, active states, hover accents, icons where emphasis is needed |

**Rules:**
- `#1B6240` is used **exclusively on interactive elements** — buttons, links, active states, hover accents. It never appears as a background color, text color, or decorative element.
- No tinted surfaces of any kind (no green-grey, no `#F6F9F7`, no rgba green backgrounds).
- No green text except on links and active/hover states.
- Cards: white background, `#E0E0E0` border — green appears only on hover.
- CTA dark sections use `#1A1A1A` or `#000000`, not green.
- Badges/tags: `#F5F5F5` bg, `#1A1A1A` text — no colored badges.
- Section headers: `#1A1A1A` title, `#6B6B6B` description.
- Opacity variants are derived (e.g. `text-[#1A1A1A]/60` for muted text, `text-white/70` in dark contexts) — these are not additional palette colors.
- No gradients except the hero background image overlay.
- No shadows except a single `shadow-sm` on cards on hover.
- The site is light-only. No dark mode.

### Typography

| Role | Font | Tailwind class | Used for |
|---|---|---|---|
| Display | Bebas Neue | `font-display` | Hero headings, section display titles only |
| Heading | Barlow Condensed | `font-heading` | Sub-headings, labels, nav, badges, tags, uppercase UI text |
| Body | IBM Plex Sans | `font-sans` (default) | All body text, descriptions, specs, form fields |

> **Note:** CLAUDE.md previously listed Rajdhani and Space Grotesk — the actual fonts loaded in `layout.tsx` are Barlow Condensed and IBM Plex Sans. Do not change the fonts.

### Component Rules

**Buttons:**
- Primary: `bg-[#1B6240] text-white` — hover `bg-[#1B6240]/90`
- Secondary / outline: `border border-[#1B6240] text-[#1B6240]` — hover `bg-[#F5F5F5]`
- On dark (`bg-[#1A1A1A]`) sections: Primary is `bg-white text-[#1A1A1A]` — hover `bg-[#F5F5F5]`

**Cards:** `bg-white border border-[#E0E0E0] rounded-xl` — hover `border-[#1B6240] shadow-sm`

**Section headers:** Small Barlow Condensed label (`text-[#6B6B6B] uppercase tracking-widest text-xs`) above a Bebas Neue title (`text-[#1A1A1A]`), with an IBM Plex Sans description (`text-[#6B6B6B]`) below.

**Borders:** Always `border-[#E0E0E0]` on light backgrounds. Never `rgba` green borders.

### Logo Usage
- **Navbar (transparent/hero state):** `/images/logo/athena-logo.png` with `filter: "brightness(0) invert(1)"` CSS filter — renders white without a separate file
- **Navbar (scrolled/solid state):** same file, no filter — full color
- **Footer & dark contexts:** `/images/logo/athena-logo-white.png` at `h-10 w-auto`

---

## Key Patterns

### Images (next/image)
All images use `next/image` with:
- `sizes` prop for responsive loading
- `priority` only on above-the-fold images (hero, navbar logo)
- `fill` + `object-cover` for full-bleed backgrounds
- `object-contain` for product/brand logos

### FadeIn Component
`components/shared/FadeIn.tsx` is a `"use client"` scroll-triggered fade+slide wrapper. Use it on all major sections instead of inline `useInView` logic:

```tsx
<FadeIn delay={0.2}>
  <SomeSection />
</FadeIn>
```

### Breadcrumb Placement
Breadcrumbs are placed **after** the page hero section, in a `bg-[#F5F5F5]` bar with `border-b border-[#E0E0E0]`. They should never appear between the navbar and the hero.

### Animations
- `FadeIn` wrapper component (scroll-triggered via `useInView`) used on all major sections
- Framer Motion `motion.div` for hero entrance animations
- Stagger delays: `delay={i * 0.1}` pattern
- Hero word entrance: `overflow-hidden` parent + `y: "100%" → 0` child for clipped reveal

### Contact Form
`/api/contact/route.ts` validates and logs submissions. Email sending via Resend is stubbed out — configure `RESEND_API_KEY` env var and uncomment the send logic to activate.

---

## Partner Brands

| Brand | Relationship | Products | Logo file |
|---|---|---|---|
| Motortronics | Official Turkish Distributor | VMX soft starters (LV: 4 models), MVC 4 (MV) | `motortronics.png` |
| SHINKAWA Electric | Official Turkish Distributor | Vibration sensors (6 series), Condition monitors (4 series) | `shinkawa.png` |
| RENLE | Official Turkish Distributor | Frequency inverters (LV: 5 models, HV: RNHV series) | `renle-logo.webp` |
| Athena Valve | Sister Company (Athena Group) | Ball, butterfly, gate, globe, check, plug valves | `athena-group.png` |
| ValenTech | Sister Company (Athena Group) | Pneumatic actuators (5), Electric actuators (4), Complete actuator equipment (6) | _(no logo file yet)_ |

---

## SEO
- Metadata defined in `app/layout.tsx` (global) and per-page `export const metadata`
- `app/sitemap.ts` auto-generates all routes; product URLs are `/products/[category]/[slug]` (no brand segment)
- `app/robots.ts` allows all crawlers, blocks `/api/`
- Domain: `https://athena-control.com`

---

## Development Notes

- **Tailwind v4**: Uses `@import "tailwindcss"` (not `@tailwind base/components/utilities`). Theme variables are defined in `globals.css` `:root` block.
- **Static generation**: Product pages use `generateStaticParams` from `getAllProducts()` in `lib/data/products/utils.ts` — add new products to the relevant category index file and they are automatically included.
- **Data imports**: All data modules are organized into subdirectories under `lib/data/`. Import from the subdirectory file directly (e.g., `@/lib/data/brands/brands`) or via the index re-export where available.
- **External links**: Motortronics accessories and Athena Group product pages link externally (`target="_blank"`).
- **No dark mode**: The site is intentionally light-only. Do not add a `dark:` theme toggle.
- **"use client" boundary**: Pages with Framer Motion or `useState` need `"use client"`. Pages that only need FadeIn can use the FadeIn component directly (it handles its own client boundary). Use `generateMetadata` (server) in a separate `layout.tsx` alongside client pages when SEO metadata is needed.
- **Icons are frontend-only**: Product data files have no icon references. Icons are assigned by components based on convention or index. Brand data (`brands.ts`) still uses `ElementType` icon references.
- **Component location rule**: Feature-specific components live co-located with their route in `app/<route>/_components/`. The `_` prefix opts the folder out of Next.js routing. Truly shared components (used in 2+ routes) go in `components/shared/`. Layout goes in `components/layout/`. Shadcn primitives go in `components/ui/` (flat, never add subdirectories — the shadcn CLI always deposits to that root).
- **Component cleanup rule**: When refactoring or replacing a component, always search the entire project for anything that was only used by that component and remove it. No orphaned code.
- **Color discipline**: `#1B6240` (green) appears only on interactive elements — buttons, links, `hover:` states, `active:` states, `focus:` rings/borders, and icons used for emphasis. Never use green as a background, text color, or decorative accent. When in doubt, use `#1A1A1A` or `#6B6B6B` instead.
