"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BrandData } from "@/lib/data/brands/brands";

type PhotoItem = {
  key: string;
  brandId: string;
  brandName: string;
  src: string;
};

interface BrandShowcaseProps {
  brands: BrandData[];
}

export default function BrandShowcase({ brands }: BrandShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const allPhotos: PhotoItem[] = brands.flatMap((brand) =>
    brand.showcaseImages.map((src: string, ii: number) => ({
      key: `${brand.id}-${ii}`,
      brandId: brand.id,
      brandName: brand.name,
      src,
    }))
  );

  const col1 = allPhotos.filter((_, i) => i % 5 === 0);
  const col2 = allPhotos.filter((_, i) => i % 5 === 1);
  const col3 = allPhotos.filter((_, i) => i % 5 === 2);
  const col4 = allPhotos.filter((_, i) => i % 5 === 3);
  const col5 = allPhotos.filter((_, i) => i % 5 === 4);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mr-auto py-8 px-4 md:px-6 font-sans">
      {/* ── Left: photo grid ── */}
      <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((item) => (
            <PhotoCard
              key={item.key}
              item={item}
              className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[155px] md:h-[148px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 — offset down */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[40px] sm:mt-[48px] md:mt-[56px]">
          {col2.map((item) => (
            <PhotoCard
              key={item.key}
              item={item}
              className="w-[122px] h-[122px] sm:w-[145px] sm:h-[145px] md:w-[172px] md:h-[164px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 — offset down less */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[20px] sm:mt-[24px] md:mt-[28px]">
          {col3.map((item) => (
            <PhotoCard
              key={item.key}
              item={item}
              className="w-[200px] h-[200px] sm:w-[136px] sm:h-[136px] md:w-[200px] md:h-[200px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 4 — offset down more */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[60px] sm:mt-[72px] md:mt-[84px]">
          {col4.map((item) => (
            <PhotoCard
              key={item.key}
              item={item}
              className="w-[200px] h-[200px] sm:w-[136px] sm:h-[136px] md:w-[200px] md:h-[200px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 5 — offset down even more */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[80px] sm:mt-[96px] md:mt-[112px]">
          {col5.map((item) => (
            <PhotoCard
              key={item.key}
              item={item}
              className="w-[200px] h-[200px] sm:w-[136px] sm:h-[136px] md:w-[200px] md:h-[200px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: brand logo list ── */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-8 md:gap-10 flex-1 w-full min-w-[200px]">
        {brands.map((brand) => (
          <BrandRow
            key={brand.id}
            brand={brand}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card
───────────────────────────────────────── */

function PhotoCard({
  item,
  className,
  hoveredId,
  onHover,
}: {
  item: PhotoItem;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === item.brandId;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-opacity duration-400",
        isDimmed ? "opacity-40" : "opacity-100",
        className
      )}
      onMouseEnter={() => onHover(item.brandId)}
      onMouseLeave={() => onHover(null)}
    >
      <Image
        src={item.src}
        alt={item.brandName}
        fill
        quality={95}
        className="object-contain transition-[filter,transform] duration-500"
        style={{
          filter: isActive
            ? "grayscale(0) brightness(1)"
            : "grayscale(1) brightness(0.72)",
          transform: isActive ? "scale(1.05)" : "scale(1)",
        }}
        sizes="(max-width: 640px) 130px, (max-width: 768px) 172px, 200px"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Brand row
───────────────────────────────────────── */

function BrandRow({
  brand,
  hoveredId,
  onHover,
}: {
  brand: BrandData;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === brand.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-40" : "opacity-100"
      )}
      onMouseEnter={() => onHover(brand.id)}
      onMouseLeave={() => onHover(null)}
    >
      {brand.logo ? (
        <Image
          src={brand.logo}
          alt={brand.name}
          width={260}
          height={80}
          className="object-contain h-20 w-auto max-w-[240px] transition-[filter] duration-400"
          style={{
            filter: isActive
              ? "grayscale(0) brightness(1)"
              : "grayscale(1) brightness(0.55)",
          }}
        />
      ) : (
        <span
          className={cn(
            "text-base md:text-[18px] font-semibold leading-none tracking-tight font-heading transition-colors duration-300",
            isActive ? "text-[#0F1A12]" : "text-[#3A4E42]"
          )}
        >
          {brand.name}
        </span>
      )}

      {/* Category subtitle */}
      <p className="mt-2.5 text-[12px] font-heading font-medium uppercase tracking-[0.2em] text-[#6B7D73]">
        {brand.highlights.slice(0, 2).join(" · ")}
      </p>
    </div>
  );
}
