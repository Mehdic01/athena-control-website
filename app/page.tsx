"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";
import RotatingEarth from "@/app/_components/RotatingEarth";
import FeaturedSectionStats from "@/app/_components/FeaturedSectionStats";
import IndustriesSection from "@/app/_components/IndustriesSection";
import { LogoCloud } from "@/app/_components/logo-cloud-2";
import FeatureShaderCards from "@/app/_components/feature-shader-cards";




// ─── Hero brand pins on the rotating earth ────────────────────────────────────

const heroBrandPins = [
  { name: "Motortronics",      value: "Soft Starters",          lng: -82,  lat: 28,  logo: "/images/logo/motortronics-logo.png",  website: "https://www.motortronics.com"       },
  { name: "SHINKAWA Electric", value: "Vibration Monitoring",   lng: 139,  lat: 36,  logo: "/images/logo/shinkawa-logo.png",       website: "https://www.shinkawa.co.jp/eng/"   },
  { name: "RENLE",             value: "Drives & Power Quality", lng: 121,  lat: 31,  logo: "/images/logo/renle-logo.png",          website: "https://www.renle.com"              },
  { name: "Athena Group",      value: "Industrial Valves",      lng: 12.5, lat: 41.9, logo: "/images/logo/athena-group-logo.png", website: "https://www.athenavalve.com/products.html" },
];

const athenaControlPin = {
  name: "Athena Control",
  value: "Official Turkish Distributor — İzmir",
  lng: 27.14,
  lat: 38.46,
  logo: "/images/logo/logo_without_bg.png",
  website: "https://athena-control.com",
};

// ─── Home Page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY       = useTransform(scrollYProgress, [0, 1],   [0, 60]);

  return (
    <div className="overflow-clip">

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO                                                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-[#0F1A12] overflow-hidden"
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/home/hero_background.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={{ filter: "blur(1.5px)", transform: "scale(1.03)" }}
          />
        </div>

        {/* Overlay stack */}
        <div className="absolute inset-0 bg-[#0F1A12]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A12]/70 via-transparent to-[#0F1A12]/20" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-20 pb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center w-full">

            {/* Left: text content */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-10 bg-white/40" />
                <span className="font-heading text-xs tracking-[0.35em] text-white/55 uppercase">
                  Official Turkish Distributor
                </span>
              </motion.div>

              {/* Headline */}
              <div className="mb-7">
                {(["TRUSTED", "INDUSTRIAL", "PARTNER"] as const).map((word, i) => (
                  <div key={word} className="overflow-hidden">
                    <motion.span
                      initial={{ opacity: 0, y: "100%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
                      className="block font-display leading-[0.88] text-[clamp(3.5rem,7vw,7rem)] text-white"
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </div>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-white/70  max-w-md mb-10 leading-relaxed"
              >
                Athena Control is the official Turkish distributor for Athena Group, Motortronics,
                SHINKAWA Electric, and RENLE — bringing you top-tier industrial solutions with unmatched service and support.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="flex flex-col sm:flex-row items-center gap-3"
              >
                <Link
                  href="/products"
                  className="group flex items-center gap-2 px-8 py-3.5 bg-white text-[#1B6240] font-heading font-bold tracking-wider text-sm rounded-sm hover:bg-[#F4F4F4] transition-all duration-200"
                >
                  EXPLORE PRODUCTS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-heading tracking-wider text-sm rounded-sm hover:border-white/60 hover:bg-white/5 transition-all duration-200"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </div>

            {/* Right: rotating earth */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="flex justify-center lg:justify-end overflow-hidden"
            >
              <RotatingEarth size={600} brandPins={heroBrandPins} athenaPin={athenaControlPin} />
            </motion.div>

          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-heading text-[10px] tracking-[0.3em] text-white/45 uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4 text-white/45" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* STATS                                                               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <FeaturedSectionStats />


      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* WHY ATHENA CONTROL                                                  */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <FadeIn>
        <div className="pt-16 pb-0 px-4 text-center max-w-4xl mx-auto">
          <p className="font-heading text-xs tracking-[0.3em] text-[#6B6B6B] uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-[#1A1A1A]">
            The Athena Control Advantage
          </h2>
        </div>
        <FeatureShaderCards />
      </FadeIn>



      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* OUR PARTNERS                                                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 px-4 place-content-center">
        <div className="relative mx-auto grid max-w-3xl">
          <h2 className="mb-10 text-center font-medium text-2xl text-black/50 tracking-tight md:text-4xl">
            Companies we{" "}
            <span className="font-semibold text-black">collaborate</span> with.
          </h2>
          <LogoCloud />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* INDUSTRIES WE SERVE                                                 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <FadeIn>
        <IndustriesSection />
      </FadeIn>

    </div>
  );
}
