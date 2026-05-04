"use client";

import Link from "next/link";
import Image from "next/image";
import TextMarque from "@/components/shared/text-marque";

const categories = [
  {
    name: "Soft Starters",
    slug: "soft-starter",
    count: "5 Products",
    brand: "Motortronics",
    logo: "/images/brands/motortronics-logo.png",
  },
  {
    name: "Frequency Inverters",
    slug: "frequency-inverter",
    count: "6 Products",
    brand: "RENLE",
    logo: "/images/brands/renle-logo.png",
  },
  {
    name: "Vibration Sensors",
    slug: "vibration-sensors",
    count: "6 Series",
    brand: "SHINKAWA Electric",
    logo: "/images/brands/shinkawa-logo.png",
  },
  {
    name: "Condition Monitors",
    slug: "condition-monitor",
    count: "4 Series",
    brand: "SHINKAWA Electric",
    logo: "/images/brands/shinkawa-logo.png",
  },
] as const;

export default function CategoryShowcase() {
  return (
    <div className="bg-white w-full">

      {/* Badge — contained */}
      <div className="pt-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">

          </div>
        </div>
      </div>

      {/* Marquee — full bleed, no container */}
      <div className="overflow-hidden mb-8">
        <TextMarque
          delay={300}
          baseVelocity={-2}
          clasname="font-display leading-none text-[#1A1A1A]"
        >
          FOUR CATEGORIES ·
        </TextMarque>
        <TextMarque
          delay={300}
          baseVelocity={2}
          clasname="font-display leading-none text-[#1A1A1A]"
        >
          THREE WORLD-CLASS MANUFACTURERS ·
        </TextMarque>
        <TextMarque
          delay={300}
          baseVelocity={-2}
          clasname="font-display leading-none text-black/65"
        >
          ONE DISTRIBUTOR ·
        </TextMarque>
      </div>

      {/* Stats box — contained */}
      <div className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">


          <div className="flex flex-col sm:flex-row border border-[#E0E0E0] rounded-2xl overflow-hidden bg-white">
            {categories.map((cat, index) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="flex-1 relative group cursor-pointer overflow-hidden"
              >
                {/* Right border divider between items */}
                {index !== categories.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-6 bottom-6 w-px bg-[#E0E0E0]" />
                )}
                {index !== 0 && (
                  <div className="block sm:hidden absolute left-6 right-6 top-0 h-px bg-[#E0E0E0]" />
                )}

                {/* Dark fill on hover */}
                <div className="absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                <div className="relative px-8 py-8">
                  {/* Inner wrapper — defines the slot height */}
                  <div className="relative overflow-hidden" style={{ height: "88px" }}>

                    {/* Default state — slides UP out on hover */}
                    <div className="w-full translate-y-0 opacity-100 group-hover:-translate-y-10 group-hover:opacity-0 transition-all duration-300 ease-out">
                      <p className="font-heading text-[#6B6B6B] text-[10px] uppercase tracking-widest font-semibold mb-2">
                        {cat.count}
                      </p>
                      <p className="font-display text-[clamp(1.1rem,2vw,1.5rem)] leading-tight text-[#1A1A1A] mb-2">
                        {cat.name.toUpperCase()}
                      </p>
                      <p className="font-heading text-[#1A1A1A]/30 text-[10px] uppercase tracking-wider">
                        {cat.brand}
                      </p>
                    </div>

                    {/* Hover state — slides UP into view */}
                    <div className="absolute left-0 w-full top-[88px] opacity-0 group-hover:top-[8px] group-hover:opacity-100 transition-all duration-300 ease-out">
                      <p className="font-heading text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-2">
                        {cat.count}
                      </p>
                      <p className="font-display text-[clamp(1.1rem,2vw,1.5rem)] leading-tight text-white mb-3">
                        {cat.name.toUpperCase()}
                      </p>
                      <Image
                        src={cat.logo}
                        alt={cat.brand}
                        width={100}
                        height={28}
                        className="object-contain object-left h-5 w-auto brightness-0 invert opacity-60"
                      />
                    </div>

                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
