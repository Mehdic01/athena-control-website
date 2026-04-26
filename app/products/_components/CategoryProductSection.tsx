"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product, ProductCategory } from "@/lib/data/products/types";
import FadeIn from "@/components/shared/FadeIn";
import { ProductParallaxCard } from "@/app/products/_components/ProductParallaxCard";
import { motion } from "framer-motion";

// ─── Brand → background image mapping ─────────────────────────────────────────
const BRAND_BG: Record<string, string> = {
  motortronics: "/images/products/motortronics_products_block_bg.png",
  renle:        "/images/products/renle_products_block_bg.png",
  shinkawa:     "/images/products/shinkawa_products_block_bg.png",
};

// ─── Category → owning brand ───────────────────────────────────────────────────
const CATEGORY_BRAND: Record<string, string> = {
  "soft-starter":                             "motortronics",
  "frequency-inverter":                       "renle",
  "vibration-sensors":                        "shinkawa",
  "condition-monitor":                        "shinkawa",
};

const SUBCATEGORY_LABEL: Record<string, string> = {
  "low-voltage":    "Low Voltage",
  "medium-voltage": "Medium Voltage",
  "high-voltage":   "High Voltage",
  "sensors-for-pump-motor-turbine-compressor": "Sensors for Pump/Motor/Turbine/Compressor",
};

// ─── Props ─────────────────────────────────────────────────────────────────────
interface CategoryProductSectionProps {
  categoryKey: ProductCategory;
  products: Product[];
  subcategories: string[];
  hasSubcategories: boolean;
  id?: string;
  /** When false: renders only the grid with the brand bg — no header text. */
  showHeader?: boolean;
  categoryName?: string;
  categoryDescription?: string;
  brandLabel?: string;
  /** When true: subcategory headers render as large numbered chapter headings. */
  prominentSubcategories?: boolean;
}

// ─── Component ─────────────────────────────────────────────────────────────────
export function CategoryProductSection({
  categoryKey,
  products,
  subcategories,
  hasSubcategories,
  id,
  showHeader = true,
  categoryName,
  categoryDescription,
  brandLabel,
  prominentSubcategories = false,
}: CategoryProductSectionProps) {
  const brand        = CATEGORY_BRAND[categoryKey] ?? "motortronics";
  const bgImage      = BRAND_BG[brand];

  return (
    <section id={id} className="bg-white pt-8 lg:pb-16 overflow-hidden">

      {/* ── Product grid ── */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          showHeader ? "pt-14 pb-12" : prominentSubcategories ? "pt-0 pb-16" : "py-16"
        }`}
      >
        {hasSubcategories ? (
          <div className={prominentSubcategories ? "space-y-0" : "space-y-14"}>
            {subcategories.map((sub, idx) => {
              const subProducts = products.filter((p) => p.subcategory === sub);
              return (
                <div key={sub} id={sub} className={prominentSubcategories ? "scroll-mt-24" : undefined}>
                  {prominentSubcategories ? (
                    /* ── Large chapter-style header ── */
                    <FadeIn>
                      <div className=" pt-10 pb-10">
                        <div className="flex items-baseline gap-6">

                          <div>
                            <h2 className="font-display text-[clamp(2.2rem,4vw,4rem)] text-[#1A1A1A] leading-none">
                              {(SUBCATEGORY_LABEL[sub] ?? sub).toUpperCase()}
                              {categoryName && categoryKey !== "vibration-sensors" && (
                                <span className="text-[#1A1A1A]"> {categoryName.toUpperCase()}</span>
                              )}
                            </h2>
                            <p className="font-heading text-[#6B6B6B] text-[11px] tracking-[0.28em] uppercase mt-2">
                              {subProducts.length} Product{subProducts.length !== 1 ? "s" : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ) : (
                    /* ── Compact label ── */
                    <FadeIn>
                      <p className="font-heading font-semibold text-xs uppercase tracking-[0.3em] text-[#1B6240]/70 mb-6 flex items-center gap-3">
                        <span className="inline-block w-8 h-px bg-[#1B6240]/30" />
                        {SUBCATEGORY_LABEL[sub] ?? sub}
                      </p>
                    </FadeIn>
                  )}
                  <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    {subProducts.map((product, i) => (
                      <FadeIn key={product.slug} delay={i * 0.06}>
                        <ProductParallaxCard product={product} />
                      </FadeIn>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {products.map((product, i) => (
              <FadeIn key={product.slug} delay={i * 0.06}>
                <ProductParallaxCard product={product} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>

    </section>
  );
}
