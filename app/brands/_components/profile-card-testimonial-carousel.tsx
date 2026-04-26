"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { tr } from "framer-motion/client";

interface BrandProfile {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  websiteLabel?: string;
}

const profiles: BrandProfile[] = [
    {
    name: "Athena Valve",
    title: "Official Distributor — Industrial Valves",
    description:
      "Athena Valve specializes in high-quality industrial valves for various applications, ensuring reliable performance and durability. Their products are trusted by industries worldwide for efficient fluid control and management.",
    imageUrl: "/images/brands/athena-valve-bg1.png",
    linkedinUrl: "https://www.linkedin.com/company/athena-engineering-srl/",
    websiteUrl: "https://www.athenavalve.com",
    websiteLabel: "athenavalve.com",
  },
  {
    name: "SHINKAWA Electric",
    title: "Official Distributor — Vibration Monitoring Systems",
    description:
      "Pioneer in industrial vibration monitoring for motors, pumps, compressors, and turbines. SHINKAWA's precision instrumentation — from the CV/CA velocity and acceleration sensors to the advanced VM-series condition monitors — prevents catastrophic equipment failure through real-time condition monitoring trusted by heavy industry worldwide.",
    imageUrl: "/images/brands/shinkawa-brand-page.jpg",
    linkedinUrl: "#",
    websiteUrl: "https://www.shinkawa.co.jp/eng/",
    websiteLabel: "shinkawa.co.jp",
  },
  {
    name: "Motortronics",
    title: "Official Distributor — LV & MV Soft Starters",
    description:
      "Global leader in soft starter technology for AC induction motors. The VMX series covers low-voltage applications from 7A to 1400A with intelligent motor protection, while the MVC 4 extends the range into medium-voltage installations. Trusted across pumps, compressors, conveyors, and fans in demanding industrial environments worldwide.",
    imageUrl: "/images/brands/motortronics-brand-page.jpg",
    imagePosition: "left center",
    linkedinUrl: "#",
    websiteUrl: "https://www.motortronics.com",
    websiteLabel: "motortronics.com",
  },
  
  {
  name: "RENLE",
    title: "Official Distributor — Variable Frequency Drives",
    description:
      "Shanghai RENLE Science and Technology delivers advanced power electronics solutions including variable frequency drives, soft starters, and static var generators trusted by industrial operators worldwide. RENLE's innovative products optimize energy efficiency, enhance process control, and improve power quality across manufacturing, water treatment, HVAC, and more.",
    imageUrl: "/images/brands/renle-brand-page.jpg",
    linkedinUrl: "#",
    websiteUrl: "https://www.renle.com",
    websiteLabel: "renle.com",
  },
    {
    name: "ValenTech",
    title: "Official Distributor — Pneumatic & Electric Actuators",
    description:
      "ValenTech offers a comprehensive range of pneumatic and electric actuators designed for precise control in industrial applications. Their innovative solutions enhance automation and efficiency across various sectors globally.",
    imageUrl: "/images/brands/valen-tech-brand-page2.png",
    linkedinUrl: "#",
    websiteUrl: "https://www.valentech.com",
    websiteLabel: "valentech.com",

  },  
];

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % profiles.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + profiles.length) % profiles.length
    );

  const current = profiles[currentIndex];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className="hidden md:flex relative items-center">
        {/* Avatar */}
        <div className="w-[470px] h-[470px] rounded-3xl overflow-hidden bg-neutral-800 flex-shrink-0 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={current.imageUrl}
                alt={current.name}
                fill
                className="object-cover"
                style={{ objectPosition: current.imagePosition ?? "center" }}
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className="bg-[#1A1A1A] rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {current.name}
                </h2>

                <p className="text-sm font-medium text-gray-400">
                  {current.title}
                </p>
              </div>

              <p className="text-white text-base leading-relaxed mb-8">
                {current.description}
              </p>

              <div className="flex items-center space-x-4">
                {current.linkedinUrl && (
                  <Link
                    href={current.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200 hover:scale-105 cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-900" />
                  </Link>
                )}
                {current.websiteUrl && (
                  <a
                    href={current.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-sm mx-auto text-center bg-transparent">
        {/* Avatar */}
        <div className="w-full aspect-square bg-[#262626] rounded-3xl overflow-hidden mb-6 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={current.imageUrl}
                alt={current.name}
                fill
                className="object-cover"
                style={{ objectPosition: current.imagePosition ?? "center" }}
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className="px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-xl font-bold text-white mb-2">
                {current.name}
              </h2>

              <p className="text-sm font-medium text-gray-300 mb-4">
                {current.title}
              </p>

              <p className="text-white text-sm leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="flex justify-center items-center space-x-4">
                {current.linkedinUrl && (
                  <Link
                    href={current.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200 cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-900" />
                  </Link>
                )}
                {current.websiteUrl && (
                  <a
                    href={current.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-center items-center gap-6 mt-8">
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label="Previous"
          className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-neutral-700 shadow-md flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-gray-50" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {profiles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                i === currentIndex ? "bg-white" : "bg-gray-600"
              )}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-neutral-700 shadow-md flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-gray-50" />
        </button>
      </div>
    </div>
  );
}
