"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  X, ArrowRight, Search, ChevronDown,
  ChevronLeft, ChevronRight, LayoutGrid, List,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getAllProducts,
  brandNames,
  categoryNames,
} from "@/lib/data/products/utils";
import type { ProductCategory } from "@/lib/data/products/types";
import { ProductParallaxCard } from "@/app/products/_components/ProductParallaxCard";

// ─── Types ─────────────────────────────────────────────────────────────────────
export type FilterState = {
  brand: string;
  category: string;
  voltage: string;
  application: string;
  industry: string;
};

// ─── Filter options ────────────────────────────────────────────────────────────
const BRAND_OPTIONS = [
  { key: "",               label: "All Brands" },
  { key: "motortronics",   label: "Motortronics" },
  { key: "renle",          label: "RENLE" },
  { key: "shinkawa",       label: "SHINKAWA Electric" },
  { key: "athena-valve",   label: "Athena Valve" },
  { key: "valentech",      label: "ValenTech" },
];

const CATEGORY_OPTIONS = [
  { key: "",                          label: "All Categories" },
  { key: "soft-starter",              label: "Soft Starters" },
  { key: "frequency-inverter",        label: "Frequency Inverters" },
  { key: "vibration-sensors",         label: "Vibration Sensors" },
  { key: "condition-monitor",         label: "Condition Monitors" },
  { key: "ball-valve",                label: "Ball Valves" },
  { key: "butterfly-valve",           label: "Butterfly Valves" },
  { key: "gate-valve",                label: "Gate Valves" },
  { key: "globe-valve",               label: "Globe Valves" },
  { key: "check-valve",               label: "Check Valves" },
  { key: "plug-valve",                label: "Plug Valves" },
  { key: "pneumatic-actuator",        label: "Pneumatic Actuators" },
  { key: "electric-actuator",         label: "Electric Actuators" },
  { key: "complete-actuator-equipment", label: "Complete Actuator Equipment" },
];

const VOLTAGE_OPTIONS = [
  { key: "",               label: "Any Voltage" },
  { key: "low-voltage",    label: "Low Voltage" },
  { key: "medium-voltage", label: "Medium Voltage" },
  { key: "high-voltage",   label: "High Voltage" },
];

// Category sort order — all categories listed so none fall back to -1
const CATEGORY_SORT: Record<string, number> = {
  "soft-starter": 0, "frequency-inverter": 1,
  "vibration-sensors": 2, "condition-monitor": 3,
  "ball-valve": 4, "butterfly-valve": 5,
  "gate-valve": 6, "globe-valve": 7,
  "check-valve": 8, "plug-valve": 9,
  "pneumatic-actuator": 10, "electric-actuator": 11,
  "complete-actuator-equipment": 12,
};
const SUBCATEGORY_SORT: Record<string, number> = {
  "low-voltage": 0, "medium-voltage": 1, "high-voltage": 2,
};

const ITEMS_PER_PAGE = 9;

// ─── Build a /products URL from a FilterState ──────────────────────────────────
function buildFilterUrl(f: FilterState): string {
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

  const [query, setQuery]             = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView]               = useState<"grid" | "list">("grid");
  const [sort, setSort]               = useState("featured");
  // Tracks whether the navbar is hidden (scrolled down) so the filter bar can shift up
  const [navHidden, setNavHidden]     = useState(false);

  useEffect(() => {
    setCurrentPage(1);
    setQuery("");
  }, [searchParams]);

  // Mirror the navbar scroll-direction logic so the filter bar can fill the gap
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 150) setNavHidden(true);
      else if (y < lastY)       setNavHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      setNavHidden(false);
    };
  }, []);

  const allProducts = useMemo(() => getAllProducts(), []);

  const activeCount      = Object.values(filters).filter((v) => v !== "").length;
  const hasActiveFilters = activeCount > 0;
  const clearFilters     = () => router.push("/products");

  const toggleFilter = (key: keyof FilterState, value: string) => {
    setQuery("");
    setCurrentPage(1);
    const toggled = filters[key] === value ? "" : value;
    const next = { ...filters, [key]: toggled };
    if (key === "category" && toggled !== "") next.brand = "";
    if (key === "brand"    && toggled !== "") next.category = "";
    router.push(buildFilterUrl(next));
  };

  const setFilter = (key: keyof FilterState, value: string) => {
    setQuery("");
    setCurrentPage(1);
    const next = { ...filters, [key]: value };
    if (key === "category" && value !== "") next.brand = "";
    if (key === "brand"    && value !== "") next.category = "";
    router.push(buildFilterUrl(next));
  };

  // Filtered + sorted products — grouped by category → subcategory → order
  const filteredProducts = useMemo(() => {
    let result = [...allProducts].sort((a, b) => {
      const catOrder = (CATEGORY_SORT[a.category] ?? 99) - (CATEGORY_SORT[b.category] ?? 99);
      if (catOrder !== 0) return catOrder;
      const subOrder = (SUBCATEGORY_SORT[a.subcategory ?? ""] ?? 99)
                     - (SUBCATEGORY_SORT[b.subcategory ?? ""] ?? 99);
      if (subOrder !== 0) return subOrder;
      return (a.order ?? 99) - (b.order ?? 99);
    });
    if (filters.brand)    result = result.filter(p => p.brand    === filters.brand);
    if (filters.category) result = result.filter(p => p.category === (filters.category as ProductCategory));
    if (filters.voltage)  result = result.filter(p => p.subcategory === filters.voltage);
    if (filters.application) {
      const kw = filters.application;
      result = result.filter(p => p.applications?.some(a => a.toLowerCase().includes(kw)));
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
    if (sort === "name")  arr.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "brand") arr.sort((a, b) => brandNames[a.brand].localeCompare(brandNames[b.brand]));
    return arr;
  }, [filteredProducts, sort]);

  // Live search — null means "no search active, show catalog"
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return allProducts.filter(p =>
      p.name.toLowerCase().includes(q) ||
      brandNames[p.brand].toLowerCase().includes(q) ||
      (categoryNames[p.category as ProductCategory] ?? "").toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
    );
  }, [query, allProducts]);

  const totalPages = Math.ceil(sortedFilteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedFilteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedFilteredProducts, currentPage]);

  const displayCount = searchResults !== null ? (searchResults?.length ?? 0) : sortedFilteredProducts.length;

  return (
    <main className="pt-20">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#E0E0E0]">
        <div className="max-w-[1280px] mx-auto px-8 pt-16 pb-14 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-x-12 gap-y-6">

          {/* Breadcrumbs — full row */}
          <div className="lg:col-span-2 flex items-center gap-2.5 font-heading text-[12px] font-medium tracking-[0.18em] uppercase text-[#6B6B6B] mb-6">
            <span>Athena Control</span>
            <span className="text-[#9A9A9A]">/</span>
            <span className="text-[#1A1A1A]">Products</span>
          </div>

          {/* Title */}
          <div>

            <h1 className="font-display text-[clamp(64px,9vw,144px)] leading-[0.86] text-[#1A1A1A] m-0">
              PRODUCTS <span className="text-[#9A9A9A]"> LIST</span>
            </h1>
          </div>

          {/* Lead paragraph — category names extrabold */}
          <p className="max-w-[360px] text-[16px] leading-[1.6] text-[#6B6B6B] m-0 lg:mb-1.5">
            <strong className="font-extrabold text-[#1A1A1A]">Soft starters</strong>,{" "}
            <strong className="font-extrabold text-[#1A1A1A]">frequency inverters</strong>,{" "}
            <strong className="font-extrabold text-[#1A1A1A]">vibration monitoring systems</strong>,{" "}
            <strong className="font-extrabold text-[#1A1A1A]">actuators</strong> and{" "}
            <strong className="font-extrabold text-[#1A1A1A]">industrial valves</strong> from
            our partner brands — engineered for manufacturing, oil &amp; gas, power, marine
            and water applications.
          </p>
        </div>
      </section>

      {/* ── Horizontal Filter Bar ────────────────────────────────────────────── */}
      <div
        className={`sticky z-40 bg-white/[0.92] backdrop-blur-[12px] border-b border-[#E0E0E0] transition-[top] duration-300 ease-out ${
          navHidden ? "top-0" : "top-20"
        }`}
      >
        {/* Filter controls row */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-3 px-5 lg:px-8 pt-[14px] pb-3">

          {/* Search */}
          <div className="relative flex items-center h-12">
            <span className="absolute -top-[9px] left-3 z-10 bg-white px-1.5 font-heading text-[9px] font-medium tracking-[0.32em] uppercase text-[#6B6B6B] pointer-events-none">
              Search
            </span>
            <div className="flex items-center gap-2.5 w-full h-12 px-4 bg-[#F5F5F5] border border-transparent focus-within:border-[#1A1A1A] focus-within:bg-white transition-colors duration-200">
              <Search className="w-4 h-4 text-[#9A9A9A] shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setCurrentPage(1); }}
                placeholder="Search products, brands, models…"
                className="flex-1 bg-transparent font-sans text-[14px] text-[#1A1A1A] placeholder:text-[#9A9A9A] outline-none min-w-0"
              />
              {query && (
                <button
                  onClick={() => { setQuery(""); setCurrentPage(1); }}
                  aria-label="Clear search"
                  className="w-5 h-5 flex items-center justify-center text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <FilterSelect label="Brand"    value={filters.brand}    options={BRAND_OPTIONS}    isActive={!!filters.brand}    onChange={(v) => setFilter("brand",    v)} />
          <FilterSelect label="Category" value={filters.category} options={CATEGORY_OPTIONS} isActive={!!filters.category} onChange={(v) => setFilter("category", v)} />
          <FilterSelect label="Voltage"  value={filters.voltage}  options={VOLTAGE_OPTIONS}  isActive={!!filters.voltage}  onChange={(v) => setFilter("voltage",  v)} />
        </div>

        {/* Results strip */}
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 pb-[14px] flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-[12px] text-[#6B6B6B]">
            Showing{" "}
            <strong className="text-[#1A1A1A] font-semibold">{displayCount}</strong>
            {" "}of{" "}
            <strong className="text-[#1A1A1A] font-semibold">{allProducts.length}</strong>
            {" "}products
            {activeCount > 0 && <> · {activeCount} active filter{activeCount > 1 ? "s" : ""}</>}
          </span>
          <div className="flex items-center gap-5">
            {/* Sort */}
            <div className="relative flex items-center gap-2">
              <span className="font-heading text-[10px] font-medium tracking-[0.32em] uppercase text-[#6B6B6B]">Sort</span>
              <select
                value={sort}
                onChange={(e) => { setSort(e.target.value); setCurrentPage(1); }}
                className="appearance-none bg-transparent border-0 font-heading text-[12px] font-medium tracking-[0.16em] uppercase text-[#1A1A1A] cursor-pointer pr-4 outline-none"
              >
                <option value="featured">Featured</option>
                <option value="name">Name (A → Z)</option>
                <option value="brand">Brand</option>
              </select>
              <ChevronDown className="w-3 h-3 text-[#4A4A4A] pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
            {/* View toggle */}
            <div className="flex border border-[#E0E0E0]">
              <button
                onClick={() => setView("grid")}
                title="Grid view"
                className={`w-8 h-8 flex items-center justify-center border-r border-[#E0E0E0] transition-colors cursor-pointer ${
                  view === "grid" ? "bg-[#1A1A1A] text-white" : "bg-white text-[#6B6B6B] hover:bg-[#F5F5F5] hover:text-[#1A1A1A]"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setView("list")}
                title="List view"
                className={`w-8 h-8 flex items-center justify-center transition-colors cursor-pointer ${
                  view === "list" ? "bg-[#1A1A1A] text-white" : "bg-white text-[#6B6B6B] hover:bg-[#F5F5F5] hover:text-[#1A1A1A]"
                }`}
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
            {/* Clear all */}
            <button
              onClick={clearFilters}
              disabled={!hasActiveFilters && !query}
              className="font-heading text-[11px] font-medium tracking-[0.24em] uppercase text-[#6B6B6B] hover:text-[#1A1A1A] border-b border-transparent hover:border-[#1A1A1A] transition-colors disabled:opacity-30 disabled:cursor-default cursor-pointer"
            >
              Clear all
            </button>
          </div>
        </div>
      </div>

      {/* ── Active filter chips ───────────────────────────────────────────────── */}
      {hasActiveFilters && (
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-4 flex items-center flex-wrap gap-2 border-b border-[#E0E0E0] bg-[#FAFAFA]">
          <span className="font-heading text-[10px] font-medium tracking-[0.32em] uppercase text-[#6B6B6B] mr-1">
            Filtered by
          </span>
          {filters.brand && (
            <FilterChip label={brandNames[filters.brand as keyof typeof brandNames]} onRemove={() => toggleFilter("brand", filters.brand)} />
          )}
          {filters.category && (
            <FilterChip label={categoryNames[filters.category as ProductCategory]} onRemove={() => toggleFilter("category", filters.category)} />
          )}
          {filters.voltage && (
            <FilterChip label={`Voltage · ${filters.voltage.replace("-voltage", "")}`} onRemove={() => toggleFilter("voltage", filters.voltage)} />
          )}
          {filters.application && (
            <FilterChip label={filters.application} onRemove={() => toggleFilter("application", filters.application)} />
          )}
          {filters.industry && (
            <FilterChip label={filters.industry} onRemove={() => toggleFilter("industry", filters.industry)} />
          )}
        </div>
      )}

      {/* ── Catalog ──────────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {searchResults !== null ? (
          <motion.section
            key="search"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            {searchResults.length === 0 ? (
              <EmptyState
                title="NO RESULTS"
                body={<>No products match &ldquo;{query}&rdquo;. Try a brand name, product type, or model number.</>}
                action={
                  <button onClick={() => setQuery("")} className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-heading text-[12px] font-semibold tracking-[0.18em] uppercase px-[22px] py-[13px] hover:bg-black transition-colors cursor-pointer">
                    Browse all products <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                }
              />
            ) : (
              <div className={`max-w-[1280px] mx-auto px-5 lg:px-8 pt-8 pb-6 ${view === "grid" ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-6" : ""}`}>
                {searchResults.map((product) => (
                  <ProductParallaxCard key={product.slug} product={product} view={view} />
                ))}
              </div>
            )}
          </motion.section>
        ) : (
          <motion.section
            key="catalog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {filteredProducts.length === 0 ? (
              <EmptyState
                title="NO PRODUCTS FOUND"
                body="Try adjusting or clearing the active filters."
                action={
                  <button onClick={clearFilters} className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-heading text-[12px] font-semibold tracking-[0.18em] uppercase px-[22px] py-[13px] hover:bg-black transition-colors cursor-pointer">
                    Clear filters <X className="w-3.5 h-3.5" />
                  </button>
                }
              />
            ) : (
              <>
                <motion.div
                  key={`page-${currentPage}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className={`max-w-[1280px] mx-auto px-5 lg:px-8 pt-8 pb-6 ${view === "grid" ? "grid sm:grid-cols-2 xl:grid-cols-3 gap-6" : ""}`}
                >
                  {paginatedProducts.map((product) => (
                    <ProductParallaxCard key={product.slug} product={product} view={view} />
                  ))}
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center py-8 pb-14">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                      className="w-10 h-10 flex items-center justify-center bg-white border border-[#E0E0E0] -mr-px text-[#4A4A4A] disabled:opacity-30 hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 flex items-center justify-center border -mr-px font-heading text-[14px] font-semibold tracking-wider transition-all cursor-pointer ${
                          page === currentPage
                            ? "bg-[#1A1A1A] text-white border-[#1A1A1A] z-10"
                            : "bg-white border-[#E0E0E0] text-[#4A4A4A] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                      className="w-10 h-10 flex items-center justify-center bg-white border border-[#E0E0E0] text-[#4A4A4A] disabled:opacity-30 hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-black text-white">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-8">
          <div>
            <div className="font-heading text-[11px] font-medium tracking-[0.32em] uppercase text-white/60 mb-[18px]">
              — Specification support
            </div>
            <h2 className="font-display text-[clamp(40px,5vw,64px)] leading-[0.92] text-white m-0 mb-4">
              CAN&apos;T FIND THE EXACT SPEC?
            </h2>
            <p className="text-[15px] leading-[1.55] text-white/60 max-w-[540px] m-0">
              Our application engineers size and configure soft starters, drives,
              vibration sensors and valves for your duty cycle. Send a datasheet or process
              conditions and we&apos;ll respond inside one business day.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 items-stretch">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 font-heading text-[12px] font-semibold tracking-[0.18em] uppercase px-[22px] py-[13px] bg-white text-[#1A1A1A] hover:bg-[#F4F4F4] transition-colors"
            >
              Request a quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

// ─── FilterSelect ─────────────────────────────────────────────────────────────
// Custom implementation so the list always opens downward regardless of viewport
// position. Trigger is visually identical to the previous native <select>.
function FilterSelect({
  label,
  value,
  options,
  isActive,
  onChange,
}: {
  label: string;
  value: string;
  options: { key: string; label: string }[];
  isActive: boolean;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref             = useRef<HTMLDivElement>(null);
  const currentLabel    = options.find((o) => o.key === value)?.label ?? options[0].label;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div ref={ref} className="relative h-12">
      {/* Floating label */}
      <span className="absolute -top-[9px] left-3 z-10 bg-white px-1.5 font-heading text-[9px] font-medium tracking-[0.32em] uppercase text-[#6B6B6B] pointer-events-none">
        {label}
      </span>

      {/* Trigger — matches the old native select visually */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        className={`w-full h-12 flex items-center border px-4 pr-10 font-heading text-[13px] font-medium tracking-[0.14em] uppercase cursor-pointer outline-none transition-colors duration-200 text-left ${
          isActive
            ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
            : "bg-white text-[#1A1A1A] border-[#E0E0E0] hover:border-[#1A1A1A]"
        }`}
      >
        <span className="truncate">{currentLabel}</span>
      </button>
      <ChevronDown
        className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none transition-transform duration-200 ${
          open ? "rotate-180" : ""
        } ${isActive ? "text-white/70" : "text-[#6B6B6B]"}`}
      />

      {/* Options list — always below the trigger */}
      {open && (
        <div className="absolute top-full left-0 right-0 z-[999] mt-px bg-white border border-[#E0E0E0] shadow-[0_4px_12px_rgba(0,0,0,0.08)] max-h-[280px] overflow-y-auto">
          {options.map((o) => (
            <button
              key={o.key}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => { onChange(o.key); setOpen(false); }}
              className={`w-full px-4 py-2.5 font-sans text-[13px] text-left cursor-pointer transition-colors duration-100 ${
                o.key === value
                  ? "bg-[#F5F5F5] text-[#1A1A1A] font-semibold"
                  : "text-[#4A4A4A] hover:bg-[#F5F5F5] hover:text-[#1A1A1A]"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── FilterChip ────────────────────────────────────────────────────────────────
function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      onClick={onRemove}
      className="inline-flex items-center gap-2 h-7 px-2.5 bg-[#1A1A1A] text-white font-heading text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-black transition-colors cursor-pointer"
    >
      {label}
      <X className="w-2.5 h-2.5" />
    </button>
  );
}

// ─── EmptyState ────────────────────────────────────────────────────────────────
function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: React.ReactNode;
  action: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center py-20 px-8">
      <div className="font-display text-[96px] leading-none text-[#1A1A1A] tracking-[-0.02em]">000</div>
      <div className="font-display text-[28px] tracking-[0.02em] text-[#1A1A1A] mb-3">{title}</div>
      <p className="text-[14px] text-[#6B6B6B] mb-8 max-w-xs leading-relaxed">{body}</p>
      {action}
    </div>
  );
}
