"use client";

import { useState, useEffect } from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

// Represents cumulative authorized product lines + distribution reach over the years
const growthData = [
  { year: "2018", value: 18 },
  { year: "2019", value: 34 },
  { year: "2020", value: 52 },
  { year: "2021", value: 78 },
  { year: "2022", value: 110 },
  { year: "2023", value: 155 },
  { year: "2024", value: 210 },
];

const stats = [
  { value: "4",   label: "Our Global Partners" },
  { value: "70+", label: "Total Products" },
  { value: "12+", label: "Industries Served in Turkey" },
  { value: "200+", label: "Installations & Projects" },
];

export default function FeaturedSectionStats() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="w-full bg-white border-b border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-0">

        {/* Headline block */}
        <h3 className="font-heading text-lg sm:text-xl lg:text-4xl font-bold text-[#1A1A1A] mb-16 max-w-4xl">
          Trusted across Turkish industry for precision flow control, motor control, and protection by Athena Control.{" "}
          <span className="text-[#6B6B6B] text-sm sm:text-base lg:text-[length:inherit]">
            As official distributor for Athena Group, Motortronics, SHINKAWA Electric, and RENLE, Athena
            Control delivers industrial solutions including manual and control valves, soft starters/variable frequency drives, vibration monitoring systems, and power quality
            solutions engineered for the demands of modern industry.
          </span>
        </h3>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl lg:text-5xl text-[#1A1A1A]">{stat.value}</p>
              <p className="font-heading text-sm text-[#6B6B6B] tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Area Chart — project/installation growth trend */}
      <div className="w-full h-48 mt-8 mb-16">
        {mounted && <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={growthData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#1A1A1A" stopOpacity={0.12} />
                <stop offset="95%" stopColor="#1A1A1A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E0E0E0",
                borderRadius: "2px",
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "12px",
                color: "#1A1A1A",
              }}
              labelStyle={{ color: "#6B6B6B", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}
              formatter={(value) => [`${value} installations`, ""]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#1A1A1A"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorGreen)"
            />
          </AreaChart>
        </ResponsiveContainer>}
      </div>
    </section>
  );
}
