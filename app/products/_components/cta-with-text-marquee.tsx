"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import { categoryNames } from "@/lib/data/products/utils";

// Derived programmatically from the data layer — never hardcoded
const marqueeItems = Object.values(categoryNames);

// ─── HorizontalMarquee ───────────────────────────────────────────────────────

interface HorizontalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function HorizontalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 40,
}: HorizontalMarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

// ─── CTAWithVerticalMarquee ───────────────────────────────────────────────────

export default function CTAWithVerticalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Dynamic opacity: items closest to horizontal center are fully opaque, edges fade
  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item-horizontal");
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        const maxDistance = containerRect.width / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(frame);
  }, []);

  const scrollToFilter = () => {
    document
      .getElementById("product-filter-bar")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black/95 text-white flex items-center justify-center px-6 py-12 overflow-hidden">
      <div className="w-full animate-fade-in-up">
        <div className="flex flex-col gap-12 lg:gap-16">

          {/* Top Content — centered */}
          <div className="space-y-8 max-w-3xl mx-auto text-center px-6">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white animate-fade-in-up [animation-delay:200ms]">
              EXPLORE THE FULL CATALOG
            </h2>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              Motor control, vibration monitoring, and variable-speed drives —
              all sourced from world-leading manufacturers and distributed
              exclusively across Turkey by Athena Control.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
              <Link
                href="/contact"
                className="group relative px-6 py-3 bg-[#1B6240] text-white rounded-md font-heading text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-[#1B6240]/90 hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">Contact Us About a Product</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
              <button
                onClick={scrollToFilter}
                className="group relative px-6 py-3 bg-white/5 text-white/60 rounded-md font-heading text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg border border-white/10 hover:border-white/20 hover:text-white"
              >
                <span className="relative z-10">Filter by Your Needs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </button>
            </div>
          </div>

          {/* Bottom Marquee — full width, horizontal */}
          <div
            ref={marqueeRef}
            className="relative w-full animate-fade-in-up [animation-delay:800ms]"
          >
            <div className="relative">
              <HorizontalMarquee speed={30}>
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight px-12 marquee-item-horizontal whitespace-nowrap text-white"
                  >
                    {item}
                  </div>
                ))}
              </HorizontalMarquee>

              {/* Left vignette */}
              <div className="pointer-events-none absolute top-0 left-0 bottom-0 bg-black/95" />

              {/* Right vignette */}
              <div className="pointer-events-none absolute top-0 right-0 bottom-0  bg-black/95" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
