import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data/products/types";

const brandLogos: Record<string, string> = {
  motortronics: "/images/logo/motortronics-logo.png",
  shinkawa: "/images/logo/shinkawa-logo.png",
  renle: "/images/logo/renle-logo.png",
  "athena-valve": "/images/logo/athena-valve-logo.png",
  valentech: "/images/logo/valentech-logo.webp",
};

interface ProductParallaxCardProps {
  product: Product;
  view?: "grid" | "list";
}

export function ProductParallaxCard({ product, view = "grid" }: ProductParallaxCardProps) {
  const href = `/products/${product.category}/${product.slug}`;
  const categoryLabel = [
    product.category !== "vibration-sensors" && product.subcategory
      ? product.subcategory.replace(/-/g, " ")
      : null,
    product.category.replace(/-/g, " "),
  ]
    .filter(Boolean)
    .join(" · ");

  const padding = product.brand === "motortronics" ? "p-10" : product.brand === "athena-valve" ? "p-8" : "p-6";

  if (view === "list") {
    return (
      <Link href={href} className="group grid grid-cols-[200px_1fr] border-b border-[#E6E6E6] hover:bg-[#FAFAFA] transition-colors duration-200">
        {/* Image — fixed 200px column */}
        <div className={`relative aspect-square bg-white border-r border-[#E6E6E6] overflow-hidden ${padding}`}>
          {product.image && (
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain object-center"
                sizes="200px"
              />
            </div>
          )}
        </div>

        {/* Info — fills remaining width */}
        <div className="flex flex-col justify-center px-8 py-6">
          <h3 className="font-sans text-lg font-bold text-[#1A1A1A] leading-snug mb-3">
            {product.name}
          </h3>
          <div className="border-t border-[#E6E6E6] mb-3" />
          <div className="flex items-center justify-between gap-2">
            <span className="font-heading text-[10.5px] uppercase tracking-[0.18em] text-[#6B6B6B] leading-none">
              {categoryLabel}
            </span>
            {brandLogos[product.brand] && (
              <div className="relative h-7 w-24 shrink-0">
                <Image
                  src={brandLogos[product.brand]}
                  alt={product.brand}
                  fill
                  className="object-contain object-right"
                />
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block">
      {/* Square image surface */}
      <div className={`relative w-full aspect-square bg-white border border-[#E0E0E0] group-hover:border-[#1B6240] group-hover:shadow-sm transition-all duration-300 overflow-hidden ${padding}`}>
        {product.image && (
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            />
          </div>
        )}
      </div>

      {/* Info rows */}
      <div className="w-full mt-3">
        <div className="py-2">
          <h3 className="font-sans text-base font-bold text-[#1A1A1A] leading-snug">
            {product.name}
          </h3>
        </div>
        <div className="border-t border-[#E0E0E0]" />
        <div className="py-2 flex items-center justify-between gap-2">
          <span className="font-sans text-[11px] uppercase tracking-widest text-[#6B6B6B] leading-none">
            {categoryLabel}
          </span>
          {brandLogos[product.brand] && (
            <div className="relative h-8 w-24 shrink-0">
              <Image
                src={brandLogos[product.brand]}
                alt={product.brand}
                fill
                className="object-contain object-right"
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
