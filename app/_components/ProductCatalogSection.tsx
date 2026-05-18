"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getAllProducts, brandNames, categoryNames } from "@/lib/data/products/utils";
import type { ProductCategory } from "@/lib/data/products/types";

const FEATURED_SLUGS = [
  "vmx-synergy-plus",
  "mvc4",
  "rnb-1000",
  "rnhv-series",
  "zark-series",
  "vm-5-series",
  "cast-steel-floating-ball-valve",
  "cast-steel-trunnion-ball-valve",
  "spring-return-fork-type-pneumatic-actuator",
];

export default function ProductCatalogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const allProducts = getAllProducts();
  const bySlug = new Map(allProducts.map((p) => [p.slug, p]));
  const pinned  = FEATURED_SLUGS.map((s) => bySlug.get(s)).filter(Boolean) as typeof allProducts;
  const extras  = allProducts.filter((p) => p.keyProduct && !pinned.includes(p));
  const cards   = [...pinned, ...extras].slice(0, 9);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-24 overflow-hidden">

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 mb-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <h2 className="font-display text-[clamp(3.2rem,7vw,7rem)] leading-[0.86] text-[#1A1A1A] m-0">
            ENGINEERED<br />
            <span className="text-[#1A1A1A]/[0.12]">FOR INDUSTRY</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5 lg:items-end lg:text-right">
          <p className="text-[13.5px] leading-[1.65] text-[#6B6B6B] max-w-[300px]">
            70+ industrial products across five global brands — from soft starters
            and drives to vibration sensors, valves, and actuators.
          </p>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-10 h-10 flex items-center justify-center border border-[#E0E0E0] text-[#6B6B6B] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-10 h-10 flex items-center justify-center border border-[#E0E0E0] text-[#6B6B6B] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors duration-200 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <Link
              href="/products"
              className="flex items-center gap-2 h-10 px-5 bg-[#1A1A1A] text-white font-heading text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-black transition-colors duration-200"
            >
              All Products
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Cards row ────────────────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pl-8 ml-4 pb-1"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        } as React.CSSProperties}
      >
        {cards.map((product, i) => {
          const href       = `/products/${product.category}/${product.slug}`;
          const catLabel   = categoryNames[product.category as ProductCategory] ?? product.category;
          const brandLabel = brandNames[product.brand];
          const imgPadding = product.brand === "motortronics" ? "p-9" : "p-[-5]";

          return (
            <Link
              key={product.slug}
              href={href}
              className="group flex-shrink-0 w-[260px]"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Image tile */}
              <div className="relative aspect-square bg-white overflow-hidden mb-4 border border-[#E0E0E0] group-hover:border-[#1A1A1A] transition-colors duration-300">
                <span className="absolute top-3 left-3.5 z-10 font-mono text-[10px] text-[#1A1A1A]/20 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {product.image && (
                  <div className={`absolute inset-0 flex items-center justify-center ${imgPadding} group-hover:-translate-y-1.5 transition-transform duration-500 ease-out`}>
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="300px"
                      />
                    </div>
                  </div>
                )}
              </div>

              <p className="font-heading text-[9px] font-medium tracking-[0.32em] uppercase text-[#9A9A9A] mb-1.5">
                {catLabel}
              </p>
              <h3 className="font-sans text-[14px] font-semibold text-[#1A1A1A] leading-snug mb-1">
                {product.name}
              </h3>
              <p className="font-heading text-[10px] tracking-[0.16em] uppercase text-[#6B6B6B]">
                {brandLabel}
              </p>
            </Link>
          );
        })}

        {/* Terminal "view all" card */}
        <Link
          href="/products"
          className="group flex-shrink-0 w-[260px]"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="relative aspect-square border border-[#E0E0E0] group-hover:border-[#1A1A1A] transition-colors duration-300 flex flex-col items-center justify-center gap-4 mb-4">
            <span
              className="font-display leading-none text-[#1A1A1A]/[0.07] group-hover:text-[#1A1A1A]/[0.12] transition-colors duration-300 select-none"
              style={{ fontSize: "clamp(60px, 6vw, 80px)" }}
            >
              70+
            </span>
            <span className="flex items-center gap-1.5 font-heading text-[11px] tracking-[0.22em] uppercase text-[#6B6B6B] group-hover:text-[#1A1A1A] transition-colors duration-200">
              View catalog
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <p className="font-heading text-[9px] font-medium tracking-[0.32em] uppercase text-[#9A9A9A] mb-1.5">
            Full catalog
          </p>
          <h3 className="font-sans text-[14px] font-semibold text-[#6B6B6B] leading-snug mb-1 group-hover:text-[#1A1A1A] transition-colors duration-200">
            Browse All Products
          </h3>
          <p className="font-heading text-[10px] tracking-[0.16em] uppercase text-[#9A9A9A]">
            5 Brands · 13 Categories
          </p>
        </Link>

        <div className="flex-shrink-0 w-8" aria-hidden />
      </div>

    </section>
  );
}
