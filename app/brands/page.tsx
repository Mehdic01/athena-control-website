"use client";


import { motion} from "framer-motion";
import { brands, type Brand } from "@/lib/data/brands/brands";
import { WorldMap } from "@/app/brands/_components/map";
import { TestimonialCarousel } from "@/app/brands/_components/profile-card-testimonial-carousel";
import FadeIn from "@/components/shared/FadeIn";

/* ─── Athena Control HQ — İzmir, Turkey ─────────────────────────────── */
const HQ = { lat: 38.4192, lng: 27.1287 };

const PARTNER_DOTS = [
  {
    start: { ...HQ, label: "Us", labelOffsetX: 10, labelOffsetY: 3, logoSize: 18 },
    end: { lat: 27.9506, lng: -82.4572, logoSrc: "/images/logo/motortronics-logo.png", label: "Motortronics", logoSize: 24, labelOffsetX: -40, labelOffsetY: 10 },
  },
  {
    start: { ...HQ, logoSize: 18 },
    end: { lat: 35.6762, lng: 139.6503, logoSrc: "/images/logo/shinkawa-logo.png", label: "SHINKAWA Electric", logoSize: 23, labelOffsetX: -20, labelOffsetY: -10 },
  },
  {
    start: { ...HQ, logoSize: 18 },
    end: { lat: 39.9042, lng: 15.4074, logoSrc: "/images/logo/valentech-logo.webp", label: "ValenTech", logoSize: 23, labelOffsetX: -30, labelOffsetY: 40 },
  },
  {
    start: { ...HQ, logoSize: 18 },
    end: { lat: 41.9028, lng: 12.4964, logoSrc: "/images/logo/athena-valve-logo.png", label: "Athena Valve", logoSize: 30, labelOffsetY: -20, labelOffsetX: -30 },
  },
  {
    start: { ...HQ, logoSize: 18 },
    end: { lat: 31.2304, lng: 121.4737, logoSrc: "/images/logo/renle-logo.png", label: "RENLE", logoSize: 23, labelOffsetY: 45 },
  },
];

/* ─── Static metadata per brand ─────────────────────────────────────── */
const brandMeta: Record<
  string,
  {
    image?: string;
    productLinks: { label: string; href: string }[];
    country: string;
    imageScale?: number;
    
  }
> = {
  motortronics: {
    image: "/images/brands/motortronics_brand2.png",
    productLinks: [{ label: "Explore Soft Starters", href: "/products/soft-starter" }],
    country: "United States",
    imageScale: 0.72,
    
  },
  shinkawa: {
    image: "/images/brands/shinkawa_brand_page.png",
    productLinks: [
      { label: "Vibration Sensors", href: "/products/vibration-sensors" },
      { label: "Condition Monitors", href: "/products/condition-monitor" },
    ],
    country: "Japan",
   
  },
  renle: {
    image: "/images/brands/renle_brands_page.webp",
    productLinks: [{ label: "Explore Frequency Inverters", href: "/products/frequency-inverter" }],
    country: "China",
    imageScale: 0.72,
    
  },
  "athena-group": {
    productLinks: [],
    country: "Italy & Turkey",
    
  },
};


/* ─── Page ───────────────────────────────────────────────────────────── */
export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-40 overflow-hidden">
        {/* Word-by-word stagger heading */}
        <div className="text-center mb-0 px-6">
          <motion.p className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none text-white"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
           OUR GLOBAL PARTNERS
          </motion.p>
          {/* Description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto mt-6 text-white/60 text-[14px] leading-relaxed"
          >
            We collaborate with industry-leading partners worldwide to deliver top-tier solutions and services. Our carefully selected network ensures that we provide the best products and support to our customers across the globe.
          </motion.p>
        </div>
        {/* Map — slow fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.25, ease: "easeOut" }}
        >
          <WorldMap dots={PARTNER_DOTS} lineColor="#0ea5e9" />
        </motion.div>

      </section>

      {/* ── PARTNER BRAND PROFILES ───────────────────────────── */}
      <section className="bg-black/95 py-24 px-6">
        <FadeIn>
          <TestimonialCarousel />
        </FadeIn>
      </section>

    </main>
  );
}
