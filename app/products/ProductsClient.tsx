"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { X, ArrowRight, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight, LayoutGrid, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getAllProducts,
  brandNames,
  categoryNames,
} from "@/lib/data/products/utils";
import type { ProductCategory } from "@/lib/data/products/types";
import { ProductParallaxCard } from "@/app/products/_components/ProductParallaxCard";
import { ProductFilterBar } from "@/app/products/_components/ProductFilterBar";
import type { FilterState } from "@/app/products/_components/ProductFilterBar";

const CATEGORIES: ProductCategory[] = [
  "soft-starter",
  "frequency-inverter",
  "vibration-sensors",
  "condition-monitor",
];

const ITEMS_PER_PAGE = 9;

// ─── Build a /products URL from a FilterState ──────────────────────────────────
function buildFilterUrl(f: FilterState): string {
  // Brand-only filter → use clean path-based URL for SEO
  if (f.brand && !f.category && !f.voltage && !f.application && !f.industry) {
    return `/products/brand/${f.brand}`;
  }
  const qs = new URLSearchParams();
  if (f.brand)       qs.set("brand",       f.brand);
  if (f.category)    qs.set("category",    f.category);
  if (f.voltage)     qs.set("voltage",     f.voltage);
  if (f.application) qs.set("application", f.application);
  if (f.industry)    qs.set("industry",    f.industry);
  const s = qs.toString();
  return s ? `/products?${s}` : "/products";
}

// ─── Main client component ─────────────────────────────────────────────────────
export default function ProductsClient({ initialFilters }: { initialFilters?: FilterState }) {
  const searchParams = useSearchParams();
  const router       = useRouter();

  // Derive filter state from URL params; fall back to initialFilters (SSR seed from category page)
  const hasUrlParams =
    searchParams.has("brand") || searchParams.has("category") ||
    searchParams.has("voltage") || searchParams.has("application") || searchParams.has("industry");

  const filters: FilterState = hasUrlParams
    ? {
        brand:       searchParams.get("brand")       ?? "",
        category:    searchParams.get("category")    ?? "",
        voltage:     searchParams.get("voltage")     ?? "",
        application: searchParams.get("application") ?? "",
        industry:    searchParams.get("industry")    ?? "",
      }
    : (initialFilters ?? { brand: "", category: "", voltage: "", application: "", industry: "" });

  const [query, setQuery]               = useState("");
  const [currentPage, setCurrentPage]   = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("featured");

  // Reset page when URL/filters change externally (navbar navigation, back button)
  useEffect(() => {
    setCurrentPage(1);
    setQuery("");
  }, [searchParams]);

  const allProducts = useMemo(() => getAllProducts(), []);

  const activeCount = Object.values(filters).filter((v) => v !== "").length;

  const clearFilters = () => router.push("/products");

  const toggleFilter = (key: keyof FilterState, value: string) => {
    setQuery("");
    setCurrentPage(1);
    const toggled = filters[key] === value ? "" : value;
    const next = { ...filters, [key]: toggled };
    // category ↔ brand are linked: switching one resets the other
    if (key === "category" && toggled !== "") next.brand = "";
    if (key === "brand"    && toggled !== "") next.category = "";
    router.push(buildFilterUrl(next));
  };
  const hasActiveFilters = Object.values(filters).some(v => v !== "");

  // CatalogHeader derived state
  const catLabel = filters.category ? (categoryNames[filters.category as ProductCategory] ?? filters.category) : null;
  const brandLabel = filters.brand ? (brandNames[filters.brand as keyof typeof brandNames] ?? filters.brand) : null;
  const displayTitle = catLabel
    ? catLabel.toUpperCase()
    : brandLabel
    ? `${brandLabel.toUpperCase()} — PRODUCTS`
    : "ALL PRODUCTS";
  

  // Live search — null means "no search active, show catalog"
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        brandNames[p.brand].toLowerCase().includes(q) ||
        (categoryNames[p.category as ProductCategory] ?? "").toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    );
  }, [query, allProducts]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setCurrentPage(1);
  };

  // Filtered + sorted product list for the main catalog
  const filteredProducts = useMemo(() => {
    let result = [...allProducts].sort((a, b) => {
      const catOrder = CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category);
      if (catOrder !== 0) return catOrder;
      return (a.order ?? 99) - (b.order ?? 99);
    });
    if (filters.brand)    result = result.filter(p => p.brand    === filters.brand);
    if (filters.category) result = result.filter(p => p.category === (filters.category as ProductCategory));
    if (filters.voltage)  result = result.filter(p => p.subcategory === filters.voltage);
    if (filters.application) {
      const kw = filters.application;
      result = result.filter(p =>
        p.applications?.some(a => a.toLowerCase().includes(kw))
      );
    }
    if (filters.industry) {
      const industryKeywords: Record<string, string[]> = {
        manufacturing: ["manufactur", "industri", "production", "plant"],
        "oil-gas":     ["oil", "gas", "petroleum", "refin"],
        power:         ["power", "energy", "generat", "utility", "turbine"],
        marine:        ["marine", "ship", "offshore", "vessel"],
        water:         ["water", "wastewater", "treatment", "municipal"],
        petrochem:     ["petroch", "chemical", "process"],
      };
      const kws = industryKeywords[filters.industry] ?? [filters.industry];
      result = result.filter(p =>
        p.applications?.some(a => kws.some(kw => a.toLowerCase().includes(kw)))
      );
    }
    return result;
  }, [allProducts, filters]);

  const sortedFilteredProducts = useMemo(() => {
    const arr = [...filteredProducts];
    if (sort === "name") arr.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "brand") arr.sort((a, b) => brandNames[a.brand].localeCompare(brandNames[b.brand]));
    return arr;
  }, [filteredProducts, sort]);

  const totalPages = Math.ceil(sortedFilteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedFilteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedFilteredProducts, currentPage]);

  const displayCount = searchResults !== null ? (searchResults?.length ?? 0) : sortedFilteredProducts.length;

  return (
    <main>
      {/* ── Filter Sidebar + Products ──────────────────────── */}
      <section className="bg-white flex items-start min-h-screen">

        {/* ── Sidebar (desktop) ── */}
        <div className="hidden lg:block w-72 xl:w-[480px] bg-black shrink-0 border-r border-[#1A1A1A] self-stretch">
          <aside className="flex flex-col sticky top-0 h-screen z-[60]">
            <ProductFilterBar
              filters={filters}
              toggleFilter={toggleFilter}
              clearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
              query={query}
              onQueryChange={handleQueryChange}
              className="h-full"
            />
          </aside>
        </div>

        {/* ── Main content column ── */}
        <div className="flex-1 min-w-0 flex flex-col mt-20">

          {/* Mobile filter toggle */}
          <div className="lg:hidden px-6 py-4 border-b border-[#E6E6E6]">
            <button
              onClick={() => setMobileFiltersOpen((v) => !v)}
              className="flex items-center gap-2.5 px-4 py-2.5 border border-[#E0E0E0] bg-white w-full"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#1A1A1A]" />
              <span className="font-heading text-[11px] uppercase tracking-[0.3em] text-[#1A1A1A] flex-1 text-left">
                {activeCount > 0 ? `Filters (${activeCount})` : "Filters"}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#6B6B6B] transition-transform duration-200 ${mobileFiltersOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {mobileFiltersOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden border border-t-0 border-[#1A1A1A] bg-[#0D0D0D] px-4 pb-4"
                >
                  <ProductFilterBar
                    filters={filters}
                    toggleFilter={toggleFilter}
                    clearFilters={clearFilters}
                    hasActiveFilters={hasActiveFilters}
                    query={query}
                    onQueryChange={handleQueryChange}
                    className=""
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Catalog Header ── */}
          <header className="px-10 lg:px-16 pt-14 pb-9 border-b border-[#E6E6E6]">

            <div className="flex items-end justify-between gap-8">
              <div>

                <h1 className="font-display text-[clamp(56px,6vw,56px)] leading-[0.88] text-[#0A0A0A] m-0">
                  {displayTitle}
                </h1>
              </div>

            </div>
          </header>

          {/* ── Active chips ── */}
          {hasActiveFilters && (
            <div className="px-10 lg:px-16 py-[18px] flex items-center flex-wrap gap-2 border-b border-[#E6E6E6] bg-[#FAFAFA]">
              <span className="font-heading text-[10px] font-medium tracking-[0.32em] uppercase text-[#6B6B6B] mr-1">
                Filtered by
              </span>
              {filters.brand && (
                <button
                  onClick={() => toggleFilter("brand", filters.brand)}
                  className="inline-flex items-center gap-2 h-7 px-2.5 bg-[#0A0A0A] text-white font-heading text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-[#2A2A2A] transition-colors"
                >
                  {brandNames[filters.brand as keyof typeof brandNames]}
                  <X className="w-2.5 h-2.5" />
                </button>
              )}
              {filters.category && (
                <button
                  onClick={() => toggleFilter("category", filters.category)}
                  className="inline-flex items-center gap-2 h-7 px-2.5 bg-[#0A0A0A] text-white font-heading text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-[#2A2A2A] transition-colors"
                >
                  {categoryNames[filters.category as ProductCategory]}
                  <X className="w-2.5 h-2.5" />
                </button>
              )}
              {filters.voltage && (
                <button
                  onClick={() => toggleFilter("voltage", filters.voltage)}
                  className="inline-flex items-center gap-2 h-7 px-2.5 bg-[#0A0A0A] text-white font-heading text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-[#2A2A2A] transition-colors"
                >
                  Voltage · {filters.voltage.replace("-voltage", "")}
                  <X className="w-2.5 h-2.5" />
                </button>
              )}
              {filters.application && (
                <button
                  onClick={() => toggleFilter("application", filters.application)}
                  className="inline-flex items-center gap-2 h-7 px-2.5 bg-[#0A0A0A] text-white font-heading text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-[#2A2A2A] transition-colors"
                >
                  {filters.application}
                  <X className="w-2.5 h-2.5" />
                </button>
              )}
              {filters.industry && (
                <button
                  onClick={() => toggleFilter("industry", filters.industry)}
                  className="inline-flex items-center gap-2 h-7 px-2.5 bg-[#0A0A0A] text-white font-heading text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-[#2A2A2A] transition-colors"
                >
                  {filters.industry}
                  <X className="w-2.5 h-2.5" />
                </button>
              )}
              <button
                onClick={clearFilters}
                className="ml-auto font-heading text-[10px] font-medium tracking-[0.24em] uppercase text-[#6B6B6B] hover:text-[#0A0A0A] border-b border-transparent hover:border-[#0A0A0A] transition-colors"
              >
                Clear all
              </button>
            </div>
          )}

          {/* ── Toolbar ── */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-10 lg:px-16 py-[18px] border-b border-[#E6E6E6] bg-white/90 backdrop-blur-[10px]">
            <div className="flex items-baseline gap-2.5 font-mono text-[12px] text-[#6B6B6B]">
              <strong className="text-[#0A0A0A] font-semibold">{String(displayCount).padStart(2, "0")}</strong>
              <span>products</span>
              <span className="text-[#9A9A9A]">·</span>
              <span>page {currentPage} / {Math.max(1, totalPages)}</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative flex items-center gap-2">
                <span className="font-heading text-[10px] font-medium tracking-[0.32em] uppercase text-[#6B6B6B]">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => { setSort(e.target.value); setCurrentPage(1); }}
                  className="appearance-none bg-transparent border-0 font-heading text-[12px] font-medium tracking-[0.16em] uppercase text-[#0A0A0A] cursor-pointer pr-4 outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name (A → Z)</option>
                  <option value="brand">Brand</option>
                </select>
                <ChevronDown className="w-3 h-3 text-[#4A4A4A] pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div className="flex border border-[#E6E6E6]">
                <button
                  onClick={() => setView("grid")}
                  title="Grid view"
                  className={`w-8 h-8 flex items-center justify-center border-r border-[#E6E6E6] transition-colors ${view === "grid" ? "bg-[#0A0A0A] text-white" : "bg-white text-[#6B6B6B] hover:text-[#0A0A0A]"}`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setView("list")}
                  title="List view"
                  className={`w-8 h-8 flex items-center justify-center transition-colors ${view === "list" ? "bg-[#0A0A0A] text-white" : "bg-white text-[#6B6B6B] hover:text-[#0A0A0A]"}`}
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* ── Search results or catalog ── */}
          <AnimatePresence mode="wait">
            {searchResults !== null ? (
              <motion.div
                key="search"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="flex-1"
              >
                {searchResults.length === 0 ? (
                  <div className="flex flex-col items-center text-center py-20 px-10 lg:px-16">
                    <div className="font-display text-[96px] leading-none text-[#0A0A0A] tracking-[-0.02em]">000</div>
                    <div className="font-display text-[28px] tracking-[0.02em] text-[#0A0A0A] mb-3">NO RESULTS</div>
                    <p className="text-[14px] text-[#6B6B6B] mb-8 max-w-xs leading-relaxed">
                      No products match &ldquo;{query}&rdquo;. Try a brand name, product type, or model number.
                    </p>
                    <button
                      onClick={() => setQuery("")}
                      className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-heading text-[12px] font-semibold tracking-[0.18em] uppercase px-[22px] py-[13px] hover:bg-[#2A2A2A] transition-colors"
                    >
                      Browse all products <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className={`px-10 lg:px-16 pt-8 pb-6 ${view === "grid" ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-7" : ""}`}>
                    {searchResults.map((product) => (
                      <ProductParallaxCard key={product.slug} product={product} view={view} />
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="catalog"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex-1"
              >
                {filteredProducts.length === 0 ? (
                  <div className="flex flex-col items-center text-center py-20 px-10 lg:px-16">
                    <div className="font-display text-[96px] leading-none text-[#0A0A0A] tracking-[-0.02em]">000</div>
                    <div className="font-display text-[28px] tracking-[0.02em] text-[#0A0A0A] mb-3">NO PRODUCTS FOUND</div>
                    <p className="text-[14px] text-[#6B6B6B] mb-8 max-w-xs leading-relaxed">
                      Try adjusting or clearing the active filters.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-heading text-[12px] font-semibold tracking-[0.18em] uppercase px-[22px] py-[13px] hover:bg-[#2A2A2A] transition-colors"
                    >
                      Clear filters <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <motion.div
                      key={`page-${currentPage}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22 }}
                      className={`px-10 lg:px-16 pt-8 pb-6 ${view === "grid" ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-7" : ""}`}
                    >
                      {paginatedProducts.map((product) => (
                        <ProductParallaxCard key={product.slug} product={product} view={view} />
                      ))}
                    </motion.div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center gap-0 px-10 lg:px-16 py-8 pb-14">
                        <button
                          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          aria-label="Previous page"
                          className="w-10 h-10 flex items-center justify-center bg-white border border-[#E6E6E6] -mr-px text-[#4A4A4A] disabled:opacity-30 hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 flex items-center justify-center border -mr-px font-mono text-[12px] transition-all ${
                              page === currentPage
                                ? "bg-[#0A0A0A] text-white border-[#0A0A0A] z-10 font-semibold"
                                : "bg-white border-[#E6E6E6] text-[#4A4A4A] hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
                            }`}
                          >
                            {String(page).padStart(2, "0")}
                          </button>
                        ))}
                        <button
                          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          aria-label="Next page"
                          className="w-10 h-10 flex items-center justify-center bg-white border border-[#E6E6E6] text-[#4A4A4A] disabled:opacity-30 hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── CTA section ── */}
          <section className="bg-[#0A0A0A] text-white mt-auto">
            <div className="px-10 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-8">
              <div>
                <div className="font-heading text-[11px] font-medium tracking-[0.32em] uppercase text-white/60 mb-[18px]">
                  — Specification support
                </div>
                <h2 className="font-display text-[clamp(40px,5vw,64px)] leading-[0.92] text-white m-0 mb-4">
                  CAN&apos;T FIND THE EXACT SPEC?
                </h2>
                <p className="text-[15px] leading-[1.55] text-white/60 max-w-[540px] m-0">
                  Our application engineers in İzmir size and configure soft starters, drives,
                  vibration sensors and valves for your duty cycle. Send a datasheet or process
                  conditions and we&apos;ll respond inside one business day.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 items-stretch">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 font-heading text-[12px] font-semibold tracking-[0.18em] uppercase px-[22px] py-[13px] bg-white text-[#0A0A0A] hover:bg-[#F4F4F4] transition-colors"
                >
                  Request a quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-heading text-[12px] font-semibold tracking-[0.18em] uppercase px-[21px] py-3 text-white border border-white/40 hover:border-white hover:bg-white/[0.04] transition-colors"
                >
                  Talk to an engineer
                </Link>
              </div>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}
