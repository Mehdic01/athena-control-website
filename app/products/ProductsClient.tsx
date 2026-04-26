"use client";
import { useState, useRef, useMemo, useEffect } from "react";
import { Search, X, ArrowRight, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getAllProducts,
  brandNames,
  categoryNames,
} from "@/lib/data/products/utils";
import type { ProductCategory } from "@/lib/data/products/types";
import { ProductParallaxCard } from "@/app/products/_components/ProductParallaxCard";
import { ProductFilterBar, FILTER_GROUPS } from "@/app/products/_components/ProductFilterBar";
import type { FilterState } from "@/app/products/_components/ProductFilterBar";
import CTAWithVerticalMarquee from "@/app/products/_components/cta-with-text-marquee";

const CATEGORIES: ProductCategory[] = [
  "soft-starter",
  "frequency-inverter",
  "vibration-sensors",
  "condition-monitor",
];

const ITEMS_PER_PAGE = 9;

// ─── Main client component ─────────────────────────────────────────────────────
export default function ProductsClient() {
  const [query, setQuery]               = useState("");
  const [filters, setFilters]           = useState<FilterState>({ brand: "", category: "", voltage: "", application: "", industry: "" });
  const [currentPage, setCurrentPage]   = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const sectionRef                      = useRef<HTMLDivElement>(null);

  const allProducts = useMemo(() => getAllProducts(), []);

  const activeCount = Object.values(filters).filter((v) => v !== "").length;

  const clearFilters = () => setFilters({ brand: "", category: "", voltage: "", application: "", industry: "" });

  const toggleFilter = (key: keyof FilterState, value: string) => {
    setQuery("");
    setFilters(prev => ({ ...prev, [key]: prev[key] === value ? "" : value }));
  };
  const hasActiveFilters = Object.values(filters).some(v => v !== "");

  // Auto-scroll to section when any filter is applied
  useEffect(() => {
    if (!hasActiveFilters) return;
    const timer = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(timer);
  }, [filters]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

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
    if (value.trim()) {
      setFilters({ brand: "", category: "", voltage: "", application: "", industry: "" });
      setCurrentPage(1);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
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

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  return (
    <main>
      {/* ── Filter Sidebar + Products ──────────────────────────────────────── */}
      <section ref={sectionRef} className="bg-white flex mt-24 items-start">

            {/* ── Sidebar (desktop only) ────────────────────────────────── */}
            <aside className="hidden lg:flex lg:flex-col w-64 xl:w-96 shrink-0 self-stretch bg-[#0D0D0D] border-r border-[#1A1A1A]">
              <div className="px-5 py-8">
                <ProductFilterBar
                  filters={filters}
                  toggleFilter={toggleFilter}
                  clearFilters={clearFilters}
                  hasActiveFilters={hasActiveFilters}
                  query={query}
                  onQueryChange={handleQueryChange}
                />
              </div>
            </aside>

            {/* ── Main content column ───────────────────────────────────── */}
            <div className="flex-1 min-w-0 px-6 sm:px-8 lg:px-10 py-10 lg:py-14">

              {/* Mobile filter toggle */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setMobileFiltersOpen((v) => !v)}
                  className="flex items-center gap-2.5 px-4 py-2.5 border border-[#E0E0E0] bg-white w-full"
                >
                  <SlidersHorizontal className="w-4 h-4 text-[#1A1A1A]" />
                  <span className="font-heading text-[11px] uppercase tracking-[0.3em] text-[#1A1A1A] flex-1 text-left">
                    {activeCount > 0 ? `Filters (${activeCount})` : "Filters"}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#6B6B6B] transition-transform duration-200 ${
                      mobileFiltersOpen ? "rotate-180" : ""
                    }`}
                  />
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
                        className="pt-4"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Search results or catalog ─────────────────────────── */}
              <AnimatePresence mode="wait">
                {searchResults !== null ? (

                  /* Search results */
                  <motion.div
                    key="search"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="mb-8 pb-6 border-b border-[#F4F4F4] flex items-end justify-between gap-4">
                      <div>
                        <p className="font-heading text-[#1B6240] text-[10px] uppercase tracking-[0.4em] mb-1">
                          Search Results
                        </p>
                        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-none text-[#1A1A1A]">
                          {searchResults.length > 0
                            ? `${searchResults.length} PRODUCT${searchResults.length === 1 ? "" : "S"} FOUND`
                            : "NO RESULTS"}
                        </h2>
                        <p className="text-[#1A1A1A]/40 text-sm mt-1 font-sans">
                          for &ldquo;<span className="text-[#1A1A1A] font-medium">{query}</span>&rdquo;
                        </p>
                      </div>
                      <button
                        onClick={() => setQuery("")}
                        className="shrink-0 flex items-center gap-2 font-heading text-[10px] tracking-widest uppercase text-[#6B6B6B] hover:text-[#1A1A1A] border border-[#E0E0E0] hover:border-[#1A1A1A]/20 px-4 py-2.5 transition-colors"
                      >
                        <X className="w-3 h-3" /> Clear search
                      </button>
                    </div>

                    {searchResults.length === 0 ? (
                      <div className="flex flex-col items-center text-center py-20">
                        <div className="w-12 h-12 rounded-full border-2 border-[#E0E0E0] flex items-center justify-center mb-5">
                          <Search className="w-5 h-5 text-[#1A1A1A]/20" />
                        </div>
                        <p className="font-heading font-bold text-[#1A1A1A] text-lg mb-2">
                          No products match &ldquo;{query}&rdquo;
                        </p>
                        <p className="text-[#1A1A1A]/40 text-sm mb-8 max-w-xs leading-relaxed">
                          Try a brand name (Motortronics, SHINKAWA, RENLE), product type, or model number.
                        </p>
                        <button
                          onClick={() => setQuery("")}
                          className="inline-flex items-center gap-2 bg-[#1B6240] text-white font-heading text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#1B6240]/90 transition-colors"
                        >
                          Browse all products <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {searchResults.map((product) => (
                          <ProductParallaxCard key={product.slug} product={product} />
                        ))}
                      </div>
                    )}
                  </motion.div>

                ) : (

                  /* Filtered / all catalog */
                  <motion.div
                    key="catalog"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {/* Heading */}
                    <div className="mb-8 pb-6 border-b border-[#F4F4F4]">
                      {hasActiveFilters ? (
                        <>
                          <p className="font-heading text-[#1B6240] text-[10px] uppercase tracking-[0.4em] mb-1">
                            Filtered Results
                          </p>
                          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-none text-[#1A1A1A]">
                            {filteredProducts.length > 0
                              ? `${filteredProducts.length} PRODUCTS FOUND`
                              : "NO PRODUCTS FOUND"}
                          </h2>
                        </>
                      ) : (
                        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-none text-[#1A1A1A]">
                          ALL PRODUCTS
                        </h2>
                      )}
                    </div>

                    {filteredProducts.length === 0 ? (
                      <div className="flex flex-col items-center text-center py-20">
                        <p className="font-heading font-bold text-[#1A1A1A] text-lg mb-2">
                          No products match these filters
                        </p>
                        <p className="text-[#1A1A1A]/40 text-sm mb-8 max-w-xs leading-relaxed">
                          Try adjusting or clearing the active filters.
                        </p>
                        <button
                          onClick={clearFilters}
                          className="inline-flex items-center gap-2 bg-[#1B6240] text-white font-heading text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#1B6240]/90 transition-colors"
                        >
                          Clear filters <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <>
                        {/* Product grid */}
                        <motion.div
                          key={`page-${currentPage}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.22 }}
                          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
                        >
                          {paginatedProducts.map((product) => (
                            <ProductParallaxCard key={product.slug} product={product} />
                          ))}
                        </motion.div>

                        {/* Bottom pagination */}
                        {totalPages > 1 && (
                          <div className="mt-10 flex items-center justify-center gap-1">
                            <button
                              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                              disabled={currentPage === 1}
                              aria-label="Previous page"
                              className="w-9 h-9 flex items-center justify-center border border-[#E0E0E0] text-[#6B6B6B] disabled:opacity-25 hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                              <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-9 h-9 font-heading text-[12px] tracking-[0.1em] border transition-colors ${
                                  page === currentPage
                                    ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                                    : "border-[#E0E0E0] text-[#6B6B6B] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                                }`}
                              >
                                {page}
                              </button>
                            ))}

                            <button
                              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                              disabled={currentPage === totalPages}
                              aria-label="Next page"
                              className="w-9 h-9 flex items-center justify-center border border-[#E0E0E0] text-[#6B6B6B] disabled:opacity-25 hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors"
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
            </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTAWithVerticalMarquee />
    </main>
  );
}
