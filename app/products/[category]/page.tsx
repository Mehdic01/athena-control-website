import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getAllProducts,
  getProductsByCategory,
  brandNames,
  categoryNames,
  categoryDescriptions,
} from "@/lib/data/products/utils";
import type { ProductCategory } from "@/lib/data/products/types";
import { CategoryProductSection } from "@/app/products/_components/CategoryProductSection";
import FadeIn from "@/components/shared/FadeIn";
import type { Metadata } from "next";

// ─── Brand → hero image ────────────────────────────────────────────────────────
const BRAND_HERO: Record<string, string> = {
  motortronics: "/images/products/motortronics_products_hero.png",
  renle:        "/images/products/renle_products_hero.png",
  shinkawa:     "/images/products/shinkawa_products_hero.png",
};

const SUBCATEGORY_LABEL: Record<string, string> = {
  "low-voltage":    "Low Voltage",
  "medium-voltage": "Medium Voltage",
  "high-voltage":   "High Voltage",
  "sensors-for-pump-motor-turbine-compressor": "Sensors for Pump/Motor/Turbine/Compressor",
  
};

// ──────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  const products = getAllProducts();
  const categories = [...new Set(products.map((p) => p.category))];
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const catName = categoryNames[category as ProductCategory];
  if (!catName) return {};
  return {
    title: `${catName} | Athena Control`,
    description: categoryDescriptions[category as ProductCategory],
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const catName = categoryNames[category as ProductCategory];
  if (!catName) notFound();

  const products = getProductsByCategory(category as ProductCategory).sort(
    (a, b) => (a.order ?? 99) - (b.order ?? 99)
  );

  if (!products.length) notFound();

  const brandSet = [...new Set(products.map((p) => p.brand))];
  const brandLabel = brandSet.map((b) => brandNames[b]).join(" · ");
  const heroImage = BRAND_HERO[brandSet[0]] ?? BRAND_HERO.motortronics;

  const subcategoryOrder = ["low-voltage", "medium-voltage", "high-voltage"];
  const subcategories = [
    ...new Set(
      products
        .map((p) => p.subcategory)
        .filter(Boolean)
        .sort((a, b) => subcategoryOrder.indexOf(a!) - subcategoryOrder.indexOf(b!))
    ),
  ] as string[];
  const hasSubcategories = subcategories.length >= 1;

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-end">

        {/* Brand photo — full bleed */}
        <Image
          src={heroImage}
          alt={catName}
          fill
          className="object-cover object-center"
          priority
        />

        {/* Layered overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        {/* Thin top rule — subtle framing detail */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

        {/* Content — anchored to bottom-left */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 pb-20 lg:pb-32">
          <FadeIn>
            <div className="max-w-3xl">

              {/* Brand label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-px bg-white/35 flex-shrink-0" />
                <p className="font-heading text-white/45 text-[11px] tracking-[0.4em] uppercase">
                  {brandLabel}
                </p>
              </div>

              {/* Category name */}
              <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-none text-white mb-6 lg:mb-8">
                {catName.toUpperCase()}
              </h1>

              {/* Description */}
              <p className="text-white/50 text-base lg:text-lg leading-relaxed max-w-lg mb-10 lg:mb-14">
                {categoryDescriptions[category as ProductCategory]}
              </p>

              {/* Subcategory anchor pills */}
              {hasSubcategories && (
                <div className="flex flex-wrap gap-3">
                  {subcategories.map((sub) => (
                    <a
                      key={sub}
                      href={`#${sub}`}
                      className="inline-flex items-center gap-2 border border-white/20 text-white/60 hover:text-white hover:border-white/50 font-heading text-[11px] tracking-[0.22em] uppercase px-5 py-3 transition-all duration-200"
                    >
                      {SUBCATEGORY_LABEL[sub] ?? sub}
                      <ArrowRight className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              )}

            </div>
          </FadeIn>
        </div>

        {/* Bottom edge rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>



      {/* ── Product grid ─────────────────────────────────────────────────────── */}
      <CategoryProductSection
        categoryKey={category as ProductCategory}
        products={products}
        subcategories={subcategories}
        hasSubcategories={hasSubcategories}
        showHeader={false}
        prominentSubcategories
        categoryName={catName}
      />

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-white mb-4">
              NEED A QUOTE?
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto font-sans">
              Contact our team for pricing, availability, and technical support across Turkey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] font-heading font-bold px-8 py-4 hover:bg-[#F5F5F5] transition-colors"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
