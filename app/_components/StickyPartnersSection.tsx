"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    id: "motortronics",
    name: "Motortronics",
    description:
      "The global leader in soft starter technology for AC induction motors. Athena Control distributes the full VMX series — low and medium voltage — across Turkish industry.",
    logo: "/images/brands/motortronics.png",
    href: "/products/soft-starters/low-voltage",
  },
  {
    id: "shinkawa",
    name: "SHINKAWA Electric",
    description:
      "Japanese pioneer in vibration monitoring for rotating machinery. SHINKAWA's precision instrumentation enables predictive maintenance before failure occurs.",
    logo: "/images/brands/shinkawa.png",
    href: "/brands",
  },
  {
    id: "renle",
    name: "RENLE",
    description:
      "Shanghai RENLE delivers advanced power electronics — variable frequency drives, soft starters, and static var generators — now available across Turkey through Athena Control.",
    logo: "/images/brands/renle-logo.webp",
    href: "/products/renle",
  },
  {
    id: "athena-group",
    name: "Athena Group",
    description:
      "A global fluid control leader and sister company. Athena Group's high-performance industrial valves — gate, globe, ball, butterfly, and control — serve critical infrastructure worldwide.",
    logo: "/images/brands/athena-group.png",
    href: "https://www.athenavalve.com",
    external: true,
  },
];

function useScrollAnimation() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

function SectionHeader() {
  const [h2Ref, h2InView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="font-heading text-xs tracking-[0.3em] text-[#1B6240] uppercase mb-4">Global Partners</p>
      <h2
        ref={h2Ref as React.RefObject<HTMLHeadingElement>}
        className={`font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-[#0F1A12] transition-all duration-700 ease-out ${
          h2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        WORLD-CLASS BRANDS.<br />LOCAL EXPERTISE.
      </h2>
      <p
        ref={pRef as React.RefObject<HTMLParagraphElement>}
        className={`text-[#6B7D73] mt-5 leading-relaxed transition-all duration-700 ease-out delay-200 ${
          pInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Athena Control is the official Turkish distributor for Motortronics, SHINKAWA Electric,
        and RENLE — and operates alongside Athena Group, a global leader in fluid control.
      </p>
    </div>
  );
}

function CardInner({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl px-20 py-20 md:px-20 md:py-40 partner-card-animated">
      {/* Content — two column: text left, logo right */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_240px] items-center gap-10 md:gap-16">
        <div>
          <h3 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-white mb-5">
            {partner.name.toUpperCase()}
          </h3>
          <p className="text-white/55 text-base leading-relaxed">
            {partner.description}
          </p>
        </div>

        {/* Logo on white background */}
        <div className="flex items-center justify-center md:justify-end">
          <div className="bg-white rounded-xl px-8 py-6 flex items-center justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={200}
              height={90}
              className="object-contain max-h-20 w-auto"
              sizes="220px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function StickyPartnersSection() {
  return (
    <>
      <style>{`
        .partner-card-animated {
          background: linear-gradient(
            108deg,
            #000000 0%,
            #0a0a0a 30%,
            #1f1f1f 48%,
            #333333 50%,
            #1f1f1f 52%,
            #0a0a0a 70%,
            #000000 100%
          );
          background-size: 300% 100%;
          animation: card-shimmer 4s linear infinite;
        }
        @keyframes card-shimmer {
          0%   { background-position: 100% center; }
          100% { background-position: -100% center; }
        }
      `}</style>
    <section className="bg-white py-24">
      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <SectionHeader />

            <div className="w-full">
              {partners.map((partner, index) =>
                partner.external ? (
                  <a
                    key={partner.id}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block sticky mb-6"
                    style={{ top: "100px", zIndex: 10 + index }}
                  >
                    <CardInner partner={partner} />
                  </a>
                ) : (
                  <Link
                    key={partner.id}
                    href={partner.href}
                    className="group block sticky mb-6"
                    style={{ top: "100px", zIndex: 10 + index }}
                  >
                    <CardInner partner={partner} />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
