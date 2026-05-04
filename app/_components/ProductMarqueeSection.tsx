import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { getAllProducts, categoryNames } from "@/lib/data/products/utils";

/** Pick the first product from each category — one representative per line. */
function getMarqueeProducts() {
  const seen = new Set<string>();
  return getAllProducts().filter((p) => {
    if (seen.has(p.category)) return false;
    seen.add(p.category);
    return true;
  });
}

export default function ProductMarqueeSection() {
  const products = getMarqueeProducts();

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center px-6 text-center lg:px-0">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-[#1A1A1A] mb-4">
            PRODUCT CATALOG
          </h2>

          <p className="max-w-2xl text-[#6B6B6B]">
            From precision soft starters and frequency inverters to industrial
            valves and actuators — world-class products from Motortronics,
            SHINKAWA Electric, RENLE, and Athena Group.
          </p>
        </div>

        {/* ── Marquee ────────────────────────────────────────────────────── */}
        <div className="relative w-full">
          {/* Fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-26 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-26 bg-linear-to-l from-white to-transparent" />

          <Marquee className="[--gap:2rem]" pauseOnHover speed={40}>
            {products.map((product) => (
              <Link
                href={`/products/${product.category}/${product.slug}`}
                key={product.slug}
                className="group flex w-80 shrink-0 flex-col"
              >
                <div className="flex flex-col overflow-hidden rounded-2xl bg-[#F5F5F5] border border-[#E0E0E0] group-hover:shadow-sm transition-all duration-200">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      alt={product.name}
                      src={product.image}
                      fill
                      //sizes="320px"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 py-4  bg-white border-t border-[#E0E0E0] rounded-t-2xl">
                    <h3 className="font-heading font-semibold text-[#1A1A1A] text-sm leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-[#6B6B6B] text-xs mt-0.5">
                      {categoryNames[product.category]}
                    </p>
                  </div>
                </div>

              </Link>
            ))}
          </Marquee>
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <div className="mx-auto mt-14 max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-6 text-[#6B6B6B] text-sm">
            70+ industrial products across 13 categories from world-leading manufacturers
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-heading tracking-wider text-sm rounded-sm hover:bg-[#1B6240]/90 transition-colors duration-200"
          >
            EXPLORE ALL PRODUCTS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
