"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  HoverSliderImage,
} from "@/app/events/_components/animated-slideshow";
import FadeIn from "@/components/shared/FadeIn";
import Breadcrumb from "@/components/shared/Breadcrumb";

// ── Data ─────────────────────────────────────────────────────────────────────

const SLIDES = [
  {
    title: "WIN EURASIA 2024",
    imageUrl: "/images/gallery/win24_cover.jpg",
    anchorId: "win-eurasia-2024",
  },
  {
    title: "WIN EURASIA 2025",
    imageUrl: "/images/gallery/win25_cover.jpg",
    anchorId: "win-eurasia-2025",
  },
  {
    title: "ADIPEC 2025",
    imageUrl: "/images/gallery/adipec25_cover.jpg",
    anchorId: "adipec-2025",
  },
] as const;

const WIN24_PHOTOS = [
  "/images/gallery/win24/photo-1.jpg",
  "/images/gallery/win24/photo-3.jpg",
  "/images/gallery/win24/photo-5.jpg",
  "/images/gallery/win24/photo-7.jpg",
  "/images/gallery/win24/photo-9.jpg",
  "/images/gallery/win24/photo-10.jpg",
  "/images/gallery/win24/photo-13.jpg",
  "/images/gallery/win24/photo-14.jpg",
  "/images/gallery/win24/win-eurasia.webp",
];

const WIN25_PHOTOS = [
  "/images/gallery/win25/1.jpeg",
  "/images/gallery/win25/2.jpeg",
  "/images/gallery/win25/3.jpeg",
  "/images/gallery/win25/4.jpeg",
  "/images/gallery/win25/5.jpeg",
  "/images/gallery/win25/6.jpeg",
  "/images/gallery/win25/7.jpeg",
  "/images/gallery/win25/8.jpeg",
  "/images/gallery/win25/9.jpeg",
  "/images/gallery/win25/10.jpeg",
  "/images/gallery/win25/11.jpeg",
];

const ADIPEC25_PHOTOS = [
  "/images/gallery/adipec25/1.jpeg",
  "/images/gallery/adipec25/2.jpeg",
  "/images/gallery/adipec25/3.jpeg",
  "/images/gallery/adipec25/4.jpeg",
  "/images/gallery/adipec25/5.jpeg",
  "/images/gallery/adipec25/6.jpeg",
  "/images/gallery/adipec25/7.jpeg",
  "/images/gallery/adipec25/8.jpeg",
  "/images/gallery/adipec25/9.jpeg",
  "/images/gallery/adipec25/10.jpeg",
  "/images/gallery/adipec25/11.jpeg",
];

// ── Utilities ─────────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────────────────────

type LightboxState = { photos: string[]; index: number } | null;

// ── Gallery Grid ──────────────────────────────────────────────────────────────

/**
 * Uniform 3-column grid — all photos equal size, clean layout.
 */
function GalleryGrid({
  photos,
  onOpen,
}: {
  photos: string[];
  onOpen: (i: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {photos.map((src, i) => (
        <div
          key={src}
          className="relative overflow-hidden cursor-pointer group aspect-[4/3]"
          onClick={() => onOpen(i)}
        >
          <Image
            src={src}
            alt={`Event photo ${i + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 400px"
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <div className="scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 w-11 h-11 rounded-full border border-white/60 flex items-center justify-center">
              <ZoomIn className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(
    () =>
      setLightbox((p) =>
        p && p.index < p.photos.length - 1 ? { ...p, index: p.index + 1 } : p
      ),
    []
  );

  const goPrev = useCallback(
    () =>
      setLightbox((p) =>
        p && p.index > 0 ? { ...p, index: p.index - 1 } : p
      ),
    []
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, goNext, goPrev]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  return (
    <main>
      {/* ── Slideshow ────────────────────────────────────────────────────── */}
      <HoverSlider className="relative min-h-screen bg-[#1A1A1A] overflow-hidden flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-40 pb-24">

        {/* Background image */}
        <Image
          src="/images/gallery/gallery_hero_bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1A1A1A]/70" />

        <div className="relative max-w-7xl mx-auto w-full">
          <FadeIn>
            <p className="font-heading text-[40px] tracking-[0.4em] text-white/25 uppercase mb-10">
              / Events
            </p>
          </FadeIn>

          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 xl:gap-24">

            {/* Titles */}
            <div className="flex flex-col space-y-3 md:space-y-5">
              {SLIDES.map((slide, index) => (
                <FadeIn key={slide.title} delay={0.1 + index * 0.12}>
                  <TextStaggerHover
                    text={slide.title}
                    index={index}
                    className="block cursor-pointer font-display text-[clamp(2.8rem,5.5vw,6rem)] text-white uppercase leading-none select-none"
                    onClick={() => scrollTo(slide.anchorId)}
                  />
                </FadeIn>
              ))}
              <FadeIn delay={0.38}>
                <p className="font-heading text-[24px] tracking-[0.3em] text-white/20 uppercase pt-1">
                  Click to view gallery
                </p>
              </FadeIn>
            </div>

            {/* Image reveal */}
            <FadeIn
              delay={0.25}
              className="w-full lg:flex-2 lg:max-w-[400px] xl:max-w-[400px]"
            >
              <HoverSliderImageWrap className="w-full aspect-[8/10]">
                {SLIDES.map((slide, index) => (
                  <div key={slide.title} className="w-full h-full">
                    <HoverSliderImage
                      index={index}
                      imageUrl={slide.imageUrl}
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
            </FadeIn>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="font-heading text-[9px] tracking-[0.3em] text-white/20 uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>

      </HoverSlider>



      {/* ── WIN EURASIA 2024 ─────────────────────────────────────────────── */}
      <section
        id="win-eurasia-2024"
        className="py-20 bg-[#F4F4F4] scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <p className="font-heading text-[10px] tracking-[0.35em] text-[#6B6B6B] uppercase mb-3">
                  Event Gallery · Tüyap, İstanbul
                </p>
                <h2 className="font-display text-4xl sm:text-6xl text-[#0F1A12] leading-none">
                  WIN EURASIA 2024
                </h2>
              </div>
              <span className="font-heading text-[10px] tracking-[0.3em] text-[#6B6B6B]/50 uppercase shrink-0">
                {WIN24_PHOTOS.length}&nbsp;PHOTOS
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <GalleryGrid
              photos={WIN24_PHOTOS}
              onOpen={(i) => setLightbox({ photos: WIN24_PHOTOS, index: i })}
            />
          </FadeIn>
        </div>
      </section>

      {/* ── WIN EURASIA 2025 ─────────────────────────────────────────────── */}
      <section
        id="win-eurasia-2025"
        className="py-20 bg-white scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <p className="font-heading text-[10px] tracking-[0.35em] text-[#6B6B6B] uppercase mb-3">
                  Event Gallery · Tüyap, İstanbul
                </p>
                <h2 className="font-display text-4xl sm:text-6xl text-[#0F1A12] leading-none">
                  WIN EURASIA 2025
                </h2>
              </div>
              <span className="font-heading text-[10px] tracking-[0.3em] text-[#6B6B6B]/50 uppercase shrink-0">
                {WIN25_PHOTOS.length}&nbsp;PHOTOS
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <GalleryGrid
              photos={WIN25_PHOTOS}
              onOpen={(i) => setLightbox({ photos: WIN25_PHOTOS, index: i })}
            />
          </FadeIn>
        </div>
      </section>

      {/* ── ADIPEC 2025 ──────────────────────────────────────────────────── */}
      <section
        id="adipec-2025"
        className="py-20 bg-[#F4F4F4] scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <p className="font-heading text-[10px] tracking-[0.35em] text-[#6B6B6B] uppercase mb-3">
                  Event Gallery · Abu Dhabi, UAE
                </p>
                <h2 className="font-display text-4xl sm:text-6xl text-[#0F1A12] leading-none">
                  ADIPEC 2025
                </h2>
              </div>
              <span className="font-heading text-[10px] tracking-[0.3em] text-[#6B6B6B]/50 uppercase shrink-0">
                {ADIPEC25_PHOTOS.length}&nbsp;PHOTOS
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <GalleryGrid
              photos={ADIPEC25_PHOTOS}
              onOpen={(i) => setLightbox({ photos: ADIPEC25_PHOTOS, index: i })}
            />
          </FadeIn>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] md:aspect-[16/9] bg-[#0A0A0A] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightbox.index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={lightbox.photos[lightbox.index]}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom controls */}
              <div className="flex items-center justify-between mt-5 px-1">
                <button
                  onClick={goPrev}
                  disabled={lightbox.index === 0}
                  className="group flex items-center gap-2 font-heading text-[10px] tracking-[0.2em] text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-default transition-colors uppercase"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                  Prev
                </button>

                <span className="font-heading text-[10px] tracking-[0.35em] text-white/25 tabular-nums">
                  {lightbox.index + 1}&nbsp;/&nbsp;{lightbox.photos.length}
                </span>

                <button
                  onClick={goNext}
                  disabled={lightbox.index === lightbox.photos.length - 1}
                  className="group flex items-center gap-2 font-heading text-[10px] tracking-[0.2em] text-white/40 hover:text-white disabled:opacity-20 disabled:cursor-default transition-colors uppercase"
                >
                  Next
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 sm:-right-14 sm:top-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
