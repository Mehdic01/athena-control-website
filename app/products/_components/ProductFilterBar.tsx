"use client";
import Image from "next/image";
import { useMemo } from "react";
import {
  X, Search,
  Waves, Settings2, Wind, Gauge, Fan, ArrowRight,
  Factory, Flame, Zap, Anchor, Droplets, FlaskConical,
  type LucideIcon,
} from "lucide-react";
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

// ─── Static maps ───────────────────────────────────────────────────────────────
const brandLogos: Record<string, string> = {
  motortronics:   "/images/logo/motortronics-logo.png",
  renle:          "/images/logo/renle-logo.png",
  shinkawa:       "/images/logo/shinkawa-logo.png",
  "athena-valve": "/images/logo/athena-valve-logo.png",
  valentech:      "/images/logo/valentech-logo.webp",
};

const applicationIcons: Record<string, LucideIcon> = {
  pump:       Waves,
  motor:      Settings2,
  turbine:    Wind,
  compressor: Gauge,
  fan:        Fan,
  conveyor:   ArrowRight,
};

const industryIcons: Record<string, LucideIcon> = {
  manufacturing: Factory,
  "oil-gas":     Flame,
  power:         Zap,
  marine:        Anchor,
  water:         Droplets,
  petrochem:     FlaskConical,
};

// ─── Section heading ───────────────────────────────────────────────────────────
function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-heading text-[10px] uppercase tracking-[0.45em] text-white/25 shrink-0 leading-none">
        {children}
      </span>
      <div className="flex-1 h-px bg-white/[0.07]" />
    </div>
  );
}

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

  const categoryCounts = useMemo(() => {
    const products = getAllProducts();
    return products.reduce<Record<string, number>>((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
  }, []);

  const voltageOpts      = FILTER_GROUPS.find((g) => g.key === "voltage")!.options;
  const activeVoltageIdx = voltageOpts.findIndex((v) => v.key === filters.voltage);

  // Fill track from first stop center → selected stop center.
  // Buttons are flex justify-between with w-7 dots; first center = 14px, last = container-14px.
  const fillWidth =
    activeVoltageIdx <= 0
      ? 0
      : activeVoltageIdx === 1
      ? "calc(50% - 14px)"
      : "calc(100% - 28px)";

  return (
    <div className={`space-y-7 ${className}`}>

      {/* ── Optional sidebar search ─────────────────────────────── */}
      {onQueryChange && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search products…"
            className="w-full pl-9 pr-8 py-2.5 bg-white/[0.05] border border-white/[0.1] font-sans text-xs text-white/80 placeholder-white/20 outline-none focus:border-white/20 transition-colors"
          />
          {query && (
            <button
              onClick={() => onQueryChange("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-white/25 hover:text-white/70 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      )}

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-[30px] leading-none text-white/90 tracking-wide">
            FILTERS
          </span>
          {activeCount > 0 && (
            <span className="font-heading text-[9px] leading-none text-[#1B6240] border border-[#1B6240]/50 px-1.5 py-0.5 tabular-nums">
              {activeCount}
            </span>
          )}
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 font-heading text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-white/60 transition-colors"
          >
            <X className="w-2 h-2" /> Clear
          </button>
        )}
      </div>

      {/* ── Brand — white floating logo cards ───────────────────── */}
      {/*
        Logos are designed for light backgrounds; placing them on pure-white
        cards floating in the dark sidebar creates a "display case" effect
        and keeps brand colours accurate.
      */}
      <div>
        <GroupLabel>Brand</GroupLabel>
        <div className="grid grid-cols-2 gap-1.5">
          {FILTER_GROUPS.find((g) => g.key === "brand")!.options.map((option) => {
            const isActive = filters.brand === option.key;
            const logoSrc  = brandLogos[option.key];
            return (
              <button
                key={option.key}
                onClick={() => toggleFilter("brand", option.key)}
                className={`relative h-12 overflow-hidden transition-all duration-150 ${
                  isActive
                    ? "bg-white ring-2 ring-[#1B6240] ring-offset-2 ring-offset-[#0D0D0D]"
                    : "bg-white/90 hover:bg-white"
                }`}
              >
                {logoSrc ? (
                  <Image
                    src={logoSrc}
                    alt={option.label}
                    fill
                    className="object-contain p-2.5"
                  />
                ) : (
                  <span className="font-heading text-[9px] uppercase tracking-wider text-[#6B6B6B]">
                    {option.label}
                  </span>
                )}
                {isActive && (
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#1B6240]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Categories — dark pill cloud with counts ─────────────── */}
      <div>
        <GroupLabel>Categories</GroupLabel>
        <div className="flex flex-wrap gap-1.5">
          {FILTER_GROUPS.find((g) => g.key === "category")!.options.map((option) => {
            const isActive = filters.category === option.key;
            const count    = categoryCounts[option.key] ?? 0;
            return (
              <button
                key={option.key}
                onClick={() => toggleFilter("category", option.key)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-heading text-[9.5px] uppercase tracking-[0.08em] leading-none transition-all duration-150 ${
                  isActive
                    ? "bg-white border-white text-[#0D0D0D]"
                    : "border-white/[0.12] text-white/35 hover:border-white/25 hover:text-white/65"
                }`}
              >
                {option.label}
                <span className={`font-sans text-[8.5px] leading-none ${
                  isActive ? "text-[#0D0D0D]/45" : "text-white/20"
                }`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Voltage — 3-stop dark rail ───────────────────────────── */}
      <div>
        <GroupLabel>Voltage</GroupLabel>
        <div className="relative mt-1 pb-7">
          {/* Base track */}
          <div className="absolute top-[14px] left-[14px] right-[14px] h-px bg-white/[0.12]" />
          {/* Active fill */}
          <div
            className="absolute top-[14px] left-[14px] h-px bg-white/55 transition-all duration-300 ease-out"
            style={{ width: fillWidth }}
          />
          {/* Three stops */}
          <div className="flex justify-between">
            {voltageOpts.map((opt, i) => {
              const isActive = filters.voltage === opt.key;
              const isPassed = activeVoltageIdx >= 0 && i < activeVoltageIdx;
              return (
                <button
                  key={opt.key}
                  onClick={() => toggleFilter("voltage", opt.key)}
                  className="flex flex-col items-center gap-2.5 group"
                >
                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    isActive
                      ? "bg-white border-white"
                      : isPassed
                      ? "bg-white/20 border-white/25"
                      : "bg-white/[0.05] border-white/[0.15] group-hover:border-white/30"
                  }`}>
                    {isActive && <div className="w-2.5 h-2.5 rounded-full bg-[#0D0D0D]" />}
                    {isPassed && <div className="w-1.5 h-1.5 rounded-full bg-white/50" />}
                  </div>
                  <span className={`font-heading text-[9px] uppercase tracking-[0.2em] leading-none transition-colors ${
                    isActive ? "text-white" : "text-white/30"
                  }`}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Application — dark icon chips ───────────────────────── */}
      <div>
        <GroupLabel>Application</GroupLabel>
        <div className="grid grid-cols-2 gap-1">
          {FILTER_GROUPS.find((g) => g.key === "application")!.options.map((option) => {
            const isActive = filters.application === option.key;
            const Icon     = applicationIcons[option.key];
            return (
              <button
                key={option.key}
                onClick={() => toggleFilter("application", option.key)}
                className={`flex items-center gap-2 px-2.5 py-2 border transition-all duration-150 ${
                  isActive
                    ? "bg-white/[0.09] border-white/25 text-white"
                    : "bg-white/[0.03] border-white/[0.08] text-white/35 hover:bg-white/[0.05] hover:border-white/15 hover:text-white/65"
                }`}
              >
                {Icon && (
                  <span className={`w-5 h-5 flex items-center justify-center shrink-0 rounded-sm ${
                    isActive ? "bg-white/15" : "bg-white/[0.07]"
                  }`}>
                    <Icon className="w-3 h-3" />
                  </span>
                )}
                <span className="font-heading text-[9px] uppercase tracking-[0.08em] leading-tight text-left">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Industry — pill cloud, green on active ───────────────── */}
      <div>
        <GroupLabel>Industry</GroupLabel>
        <div className="flex flex-wrap gap-1.5">
          {FILTER_GROUPS.find((g) => g.key === "industry")!.options.map((option) => {
            const isActive = filters.industry === option.key;
            const Icon     = industryIcons[option.key];
            return (
              <button
                key={option.key}
                onClick={() => toggleFilter("industry", option.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-heading text-[9.5px] uppercase tracking-[0.1em] transition-all duration-150 ${
                  isActive
                    ? "bg-[#1B6240] border-[#1B6240] text-white"
                    : "border-white/[0.1] text-white/30 hover:border-white/20 hover:text-white/60"
                }`}
              >
                {Icon && <Icon className="w-3 h-3 shrink-0" />}
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
