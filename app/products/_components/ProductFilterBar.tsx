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
      <div className="relative z-10 flex flex-col px-7 pt-[26px] pb-5 shrink-0 border-b border-white/[0.08] gap-1.5">
        <div className="relative h-[38px] w-44">
          <Image
            src="/images/logo/logo_without_bg.png"
            alt="Athena Control"
            fill
            className="object-contain object-left"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <span className="font-heading text-[10px] font-medium tracking-[0.32em] uppercase text-white/40">— Industrial Catalog · 2026</span>
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



        {/* ── Search ── */}
        {onQueryChange && (
          <div className="mx-5 mt-[18px] mb-[14px] shrink-0">
            <div className="flex items-center gap-2.5 h-11 px-3 border border-white/[0.16] bg-white/[0.03] focus-within:border-white/60 focus-within:bg-white/[0.06] transition-colors">
              <Search className="w-3.5 h-3.5 text-white/40 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search products, models, specs…"
                className="flex-1 bg-transparent font-sans text-[13px] text-white/90 placeholder-white/40 outline-none leading-none"
              />
              {query && (
                <button onClick={() => onQueryChange("")} aria-label="Clear search" className="w-[18px] h-[18px] flex items-center justify-center shrink-0 text-white/40 hover:text-white transition-colors">
                  <X className="w-[11px] h-[11px]" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ── Status row ── */}
        <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-0 mx-5 py-3 border-t border-white/[0.08] border-b border-white/[0.08] shrink-0">
          <div className="flex flex-col gap-1.5">
            <span className="font-heading text-[9px] font-medium tracking-[0.32em] uppercase text-white/40">Catalog</span>
            <span className="font-mono text-[16px] font-medium text-white leading-none">
              {String(Object.values(categoryCounts).reduce((a, b) => a + b, 0)).padStart(3, "0")}
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-heading text-[9px] font-medium tracking-[0.32em] uppercase text-white/40">Active filters</span>
            <span className="font-mono text-[16px] font-medium text-white leading-none">
              {String(activeCount).padStart(2, "0")}
            </span>
          </div>
          <button
            type="button"
            onClick={clearFilters}
            disabled={!hasActiveFilters}
            className="font-heading text-[10px] font-medium tracking-[0.24em] uppercase text-white/60 hover:text-white disabled:text-white/[0.16] disabled:cursor-default transition-colors self-end pb-0.5"
          >
            Clear all
          </button>
        </div>

        {/* ── Scrollable filter sections ── */}
        <div className="flex-1 overflow-y-auto min-h-0 py-1.5 px-3">

          <FilterGroup label="Categories" count={allCategoryOpts.length} active={!!filters.category} isOpen={openSections.has("categories")} onToggle={() => toggleSection("categories")}>
            {allCategoryOpts.map((opt) => (
              <SubItem key={opt.key} label={opt.label} isActive={filters.category === opt.key} onClick={() => toggleFilter("category", opt.key)} count={categoryCounts[opt.key]} />
            ))}
          </FilterGroup>

          <FilterGroup label="Voltage" count={voltageOpts.length} active={!!filters.voltage} isOpen={openSections.has("voltage")} onToggle={() => toggleSection("voltage")}>
            {voltageOpts.map((opt) => (
              <SubItem key={opt.key} label={opt.label} isActive={filters.voltage === opt.key} onClick={() => toggleFilter("voltage", opt.key)} />
            ))}
          </FilterGroup>

          <FilterGroup label="Application" count={FILTER_GROUPS.find((g) => g.key === "application")!.options.length} active={!!filters.application} isOpen={openSections.has("application")} onToggle={() => toggleSection("application")}>
            {FILTER_GROUPS.find((g) => g.key === "application")!.options.map((opt) => (
              <SubItem key={opt.key} label={opt.label} isActive={filters.application === opt.key} onClick={() => toggleFilter("application", opt.key)} />
            ))}
          </FilterGroup>

          <FilterGroup label="Industry" count={FILTER_GROUPS.find((g) => g.key === "industry")!.options.length} active={!!filters.industry} isOpen={openSections.has("industry")} onToggle={() => toggleSection("industry")}>
            {FILTER_GROUPS.find((g) => g.key === "industry")!.options.map((opt) => (
              <SubItem key={opt.key} label={opt.label} isActive={filters.industry === opt.key} onClick={() => toggleFilter("industry", opt.key)} />
            ))}
          </FilterGroup>

        </div>

        {/* ── Sidebar footer ── */}
        <div className="shrink-0 flex justify-between items-center px-5 py-3 border-t border-white/[0.08] font-mono text-[10px] text-white/40 tracking-[0.04em]">
          <span>Athena Control · İzmir, TR</span>
          <span>v 2026.1</span>
        </div>
      </div>
      </div>{/* end two-column row */}
    </div>
  );
}

// ─── FilterGroup ───────────────────────────────────────────────────────────────
function FilterGroup({
  label, isOpen, onToggle, children, count, active,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  count?: number;
  active?: boolean;
}) {
  return (
    <div className="border-b border-white/[0.08] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-2 w-full px-2 py-4 text-left hover:bg-white/[0.04] transition-colors duration-200 cursor-pointer select-none"
      >
        <span className="flex-1 font-heading text-[13px] font-semibold tracking-[0.16em] uppercase text-white leading-none">
          {label}
        </span>
        {active && (
          <span className="font-mono text-[9px] font-semibold bg-white text-[#0A0A0A] px-[5px] py-[2px] leading-none">1</span>
        )}
        {count != null && (
          <span className="font-mono text-[10px] text-white/40 mr-1">{count}</span>
        )}
        <ChevronDown
          className={`w-3 h-3 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-white" : "text-white/40"}`}
        />
      </button>
      {isOpen && (
        <div className="flex flex-col gap-[1px] pb-3.5">{children}</div>
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
    <button
      type="button"
      onClick={onClick}
      className={`group flex items-center gap-3 h-8 px-4 w-full text-left transition-colors duration-150 ${
        isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
      }`}
    >
      <span className={`w-px h-3 shrink-0 transition-colors duration-200 ${isActive ? "bg-white" : "bg-transparent"}`} />
      <span className={`flex-1 font-sans text-[12.5px] transition-colors duration-200 ${
        isActive ? "text-white font-medium" : "text-white/60 group-hover:text-white/85"
      }`}>
        {label}
      </span>
      {count !== undefined && (
        <span className={`font-mono text-[10px] tabular-nums ${isActive ? "text-white/60" : "text-white/[0.16]"}`}>
          {String(count).padStart(2, "0")}
        </span>
      )}
    </button>
  );
}
