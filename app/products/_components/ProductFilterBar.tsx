"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { X, Search, ChevronDown } from "lucide-react";
import { getAllProducts } from "@/lib/data/products/utils";

// ─── Filter data ───────────────────────────────────────────────────────────────
export const FILTER_GROUPS: Array<{
  key: "brand" | "category" | "voltage" | "application" | "industry";
  label: string;
  options: Array<{ key: string; label: string }>;
}> = [
  {
    key: "brand",
    label: "Brand",
    options: [
      { key: "motortronics", label: "Motortronics" },
      { key: "renle",        label: "RENLE" },
      { key: "shinkawa",     label: "SHINKAWA Electric" },
      { key: "athena-valve", label: "Athena Valve" },
      { key: "valentech",    label: "ValenTech" },
    ],
  },
  {
    key: "category",
    label: "Categories",
    options: [
      { key: "soft-starter",                label: "Soft Starters" },
      { key: "frequency-inverter",          label: "Frequency Inverters" },
      { key: "vibration-sensors",           label: "Vibration Sensors" },
      { key: "condition-monitor",           label: "Condition Monitors" },
      { key: "ball-valve",                  label: "Ball Valves" },
      { key: "butterfly-valve",             label: "Butterfly Valves" },
      { key: "gate-valve",                  label: "Gate Valves" },
      { key: "globe-valve",                 label: "Globe Valves" },
      { key: "check-valve",                 label: "Check Valves" },
      { key: "plug-valve",                  label: "Plug Valves" },
      { key: "pneumatic-actuator",          label: "Pneumatic Actuators" },
      { key: "electric-actuator",           label: "Electric Actuators" },
      { key: "complete-actuator-equipment", label: "Complete Actuator Equipment" },
    ],
  },
  {
    key: "voltage",
    label: "Voltage",
    options: [
      { key: "low-voltage",    label: "Low" },
      { key: "medium-voltage", label: "Medium" },
      { key: "high-voltage",   label: "High" },
    ],
  },
  {
    key: "application",
    label: "Application",
    options: [
      { key: "pump",       label: "Pump Systems" },
      { key: "motor",      label: "Motor Protection" },
      { key: "turbine",    label: "Turbine Monitoring" },
      { key: "compressor", label: "Compressor Control" },
      { key: "fan",        label: "Fan & Blower" },
      { key: "conveyor",   label: "Conveyor Drive" },
    ],
  },
  {
    key: "industry",
    label: "Industry",
    options: [
      { key: "manufacturing", label: "Manufacturing" },
      { key: "oil-gas",       label: "Oil & Gas" },
      { key: "power",         label: "Power Generation" },
      { key: "marine",        label: "Marine" },
      { key: "water",         label: "Water Treatment" },
      { key: "petrochem",     label: "Petrochemical" },
    ],
  },
];

// ─── Types ─────────────────────────────────────────────────────────────────────
export type FilterState = {
  brand: string;
  category: string;
  voltage: string;
  application: string;
  industry: string;
};

// ─── Constants ─────────────────────────────────────────────────────────────────
const SPRING = "cubic-bezier(0.25, 1.1, 0.4, 1)";

// Square brand logos for the icon rail — rendered without CSS colour filters
// so the image always looks correct regardless of file background type.
const BRAND_LOGOS2: Record<string, string> = {
  motortronics:   "/images/logo/motortronics-logo2.png",
  renle:          "/images/logo/renle-logo2.png",
  shinkawa:       "/images/logo/shinkawa-logo2.png",
  "athena-valve": "/images/logo/athena-valve-logo2.png",
  valentech:      "/images/logo/valentech-logo2.png",
};

const BRANDS = FILTER_GROUPS.find((g) => g.key === "brand")!.options;

// ─── Props ─────────────────────────────────────────────────────────────────────
interface ProductFilterBarProps {
  filters: FilterState;
  toggleFilter: (key: keyof FilterState, value: string) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
  className?: string;
  query?: string;
  onQueryChange?: (value: string) => void;
}

// ─── Component ─────────────────────────────────────────────────────────────────
export function ProductFilterBar({
  filters,
  toggleFilter,
  clearFilters,
  hasActiveFilters,
  className = "",
  query = "",
  onQueryChange,
}: ProductFilterBarProps) {
  const activeCount = Object.values(filters).filter((v) => v !== "").length;

  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set(filters.category ? ["categories"] : [])
  );

  // When filters are synced externally (URL navigation), auto-open the relevant section
  const filtersCategory = filters.category;
  useEffect(() => {
    if (filtersCategory) {
      setOpenSections((prev) => {
        if (prev.has("categories")) return prev;
        return new Set([...prev, "categories"]);
      });
    }
  }, [filtersCategory]);

  const categoryCounts = useMemo(() => {
    const products = getAllProducts();
    return products.reduce<Record<string, number>>((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
  }, []);

  const toggleSection = (key: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const voltageOpts = FILTER_GROUPS.find((g) => g.key === "voltage")!.options;

  const allCategoryOpts = FILTER_GROUPS.find((g) => g.key === "category")!.options;

  return (
    <div
      className={`relative flex flex-col overflow-hidden bg-black ${className}`}
    >
      <div className="absolute inset-0 bg-black pointer-events-none" />

      {/* ═══════════════════════════════════════════════════════════
          LOGO HEADER — full-width, above both columns
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex items-center px-4 mt-6 pb-3 shrink-0 border-b border-white/10">
        <div className="relative h-18 w-60">
          <Image
            src="/images/logo/logo_without_bg.png"
            alt="Athena Control"
            fill
            className="object-cover object-left"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TWO-COLUMN ROW — left rail + right panel
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative flex flex-row flex-1 min-h-0 overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          LEFT ICON RAIL — brand logos only
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col items-center gap-1 py-5 px-12 border-r-1 border-white/20 w-22 pt-8 shrink-0">

               {/* ── All Products ── */}
        {(() => {
          const isAllActive = filters.brand === "";
          return (
            <Link
              href="/products"
              title="All Products"
              className={`flex items-center justify-center w-16 h-16 rounded-lg transition-all duration-300 ${
                isAllActive
                  ? "bg-white/[0.15] ring-2 ring-black"
                  : "hover:bg-white/[0.07]"
              }`}
              style={{ transitionTimingFunction: SPRING }}
            >
              <div className="relative w-14 h-14">
                <h1 className="font-heading text-[20px] uppercase text-white tracking-[0.3em] absolute inset-0 flex items-center justify-center">
                  ALL
                </h1>

              </div>
            </Link>
          );
        })()}

        {/* ── Divider ── */}
        <div className="w-6 h-0.5 bg-white/[0.12] my-1 shrink-0" />

        {/* ── Brand logo buttons ── */}
        <div className="flex flex-col gap-4 items-center w-full pt-4">
          {BRANDS.map((brand) => {
            const isActive = filters.brand === brand.key;
            const brandHref = isActive ? "/products" : `/products/brand/${brand.key}`;
            return (
              <Link
                key={brand.key}
                href={brandHref}
                title={brand.label}
                className={`group flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-white/[0.15] ring-2 ring-black"
                    : "hover:bg-white/[0.1]"
                }`}
                style={{ transitionTimingFunction: SPRING }}
              >
                <div className={`relative ${brand.key === "shinkawa" || brand.key === "renle" || brand.key === "athena-valve" ? "w-13 h-14" : "w-8 h-8"}`}>
                  <Image
                    src={BRAND_LOGOS2[brand.key]}
                    alt={brand.label}
                    fill
                    className={`object-contain transition-opacity duration-200 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-[0.7] group-hover:opacity-100"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Clear all filters */}
        {hasActiveFilters && (
          <div className="mt-auto">
            <button
              type="button"
              title="Clear all filters"
              onClick={clearFilters}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-white/20 hover:bg-white/[0.07] hover:text-white/60 transition-colors duration-300"
              style={{ transitionTimingFunction: SPRING }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════
          RIGHT DETAIL PANEL
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col flex-1 min-w-0">



        {/* ── Search — rounded dark pill matching reference ── */}
        {onQueryChange && (
          <div className="px-3 pt-12 pb-8 border-white/20 shrink-0">
            <div className="relative h-12 rounded-lg flex items-center bg-black border border-white/30=40 overflow-hidden">
              <div className="w-8 h-full flex items-center justify-center shrink-0">
                <Search className="w-4 h-4 text-white/30" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search products, brands, categories…"
                className="flex-1 bg-transparent font-sans text-[13px] text-white/80 placeholder-white/30 outline-none leading-none"
              />
              {query && (
                <button
                  onClick={() => onQueryChange("")}
                  aria-label="Clear search"
                  className="w-8 h-full flex items-center justify-center shrink-0 text-white/25 hover:text-white/70 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── Section meta-label ── */}
        <div className="flex items-center h-11 px-4 shrink-0">
          <span className="font-heading text-[20px] uppercase tracking-[0.4em] text-white/25 leading-none">
            Filter By
          </span>
        </div>

        {/* ── Scrollable filter sections ── */}
        <div className="flex-1 overflow-y-auto min-h-0 px-2 pb-4 space-y-0.5">

          {/* Categories — all 13 */}
          <FilterGroup
            label="Categories"
            isOpen={openSections.has("categories")}
            onToggle={() => toggleSection("categories")}
          >
            {allCategoryOpts.map((opt) => (
              <SubItem
                key={opt.key}
                label={opt.label}
                isActive={filters.category === opt.key}
                onClick={() => toggleFilter("category", opt.key)}
                count={categoryCounts[opt.key]}
              />
            ))}
          </FilterGroup>

          {/* Voltage */}
          <FilterGroup
            label="Voltage"
            isOpen={openSections.has("voltage")}
            onToggle={() => toggleSection("voltage")}
          >
            {voltageOpts.map((opt) => (
              <SubItem
                key={opt.key}
                label={opt.label}
                isActive={filters.voltage === opt.key}
                onClick={() => toggleFilter("voltage", opt.key)}
              />
            ))}
          </FilterGroup>

          {/* Application — no icons */}
          <FilterGroup
            label="Application"
            isOpen={openSections.has("application")}
            onToggle={() => toggleSection("application")}
          >
            {FILTER_GROUPS.find((g) => g.key === "application")!.options.map((opt) => (
              <SubItem
                key={opt.key}
                label={opt.label}
                isActive={filters.application === opt.key}
                onClick={() => toggleFilter("application", opt.key)}
              />
            ))}
          </FilterGroup>

          {/* Industry — no icons */}
          <FilterGroup
            label="Industry"
            isOpen={openSections.has("industry")}
            onToggle={() => toggleSection("industry")}
          >
            {FILTER_GROUPS.find((g) => g.key === "industry")!.options.map((opt) => (
              <SubItem
                key={opt.key}
                label={opt.label}
                isActive={filters.industry === opt.key}
                onClick={() => toggleFilter("industry", opt.key)}
              />
            ))}
          </FilterGroup>

        </div>
      </div>
      </div>{/* end two-column row */}
    </div>
  );
}

// ─── FilterGroup ───────────────────────────────────────────────────────────────
function FilterGroup({
  label, isOpen, onToggle, children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div
        role="button"
        onClick={onToggle}
        className={`flex items-center w-full h-10 px-3 py-6 rounded-lg cursor-pointer select-none transition-colors duration-200 ${
          isOpen ? "bg-white/[0.07]" : "hover:bg-white/[0.05]"
        }`}
        style={{ transitionTimingFunction: SPRING }}
      >
        <span className="flex-1 font-heading text-[24px] uppercase tracking-[0.15em] text-white leading-none">
          {label}
        </span>
        <ChevronDown
          className="w-4 h-4 text-white/25 shrink-0 transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transitionTimingFunction: SPRING,
          }}
        />
      </div>

      {isOpen && (
        <div className="flex flex-col gap-[1px] mb-1 mt-[1px]">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── SubItem ───────────────────────────────────────────────────────────────────
function SubItem({
  label, isActive, onClick, count,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count?: number;
}) {
  return (
    <div className="w-full pr-1 py-[1px]">
      <button
        onClick={onClick}
        className={`group flex items-center w-full h-9 justify-start text-left rounded-lg px-3 transition-colors duration-150 ${
          isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.05]"
        }`}
        style={{ transitionTimingFunction: SPRING }}
      >
        {isActive && (
          <div className="w-px h-4 bg-white/50 shrink-0 mr-2.5 -ml-1" />
        )}
        <span className={`flex-1 font-heading text-[12px] uppercase tracking-[0.08em] leading-none truncate transition-colors ${
          isActive ? "text-white" : "text-white/40 group-hover:text-white/65"
        }`}>
          {label}
        </span>
        {count !== undefined && (
          <span className={`font-sans text-[10px] tabular-nums shrink-0 ml-2 transition-colors ${
            isActive ? "text-white/60" : "text-white/20"
          }`}>
            {count}
          </span>
        )}
      </button>
    </div>
  );
}
