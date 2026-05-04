"use client";

import type { ComponentProps, ReactNode } from "react";
import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Linkedin, ExternalLink, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { footerProductLinks, footerCompanyLinks } from "@/lib/data/navigation/navigation";
import { contactInfo } from "@/lib/data/brands/athenacontrol";

// ─── Animated container ───────────────────────────────────────────────────────

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Scroll-to-top button ─────────────────────────────────────────────────────

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1A1A1A] border-t border-white/10">

        {/* ── Main content ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:gap-16">

            {/* Left: Logo + contact + LinkedIn */}
            <AnimatedContainer className="space-y-7">
              <Link href="/">
                <Image
                  src="/images/logo/logo_without_bg.png"
                  alt="Athena Control"
                  width={150}
                  height={150}
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>

              {/* Contact rows */}
              <div className="space-y-3">
                <div className="flex gap-5">
                  <span className="font-heading text-[10px] tracking-[0.18em] text-white/40 uppercase w-14 shrink-0 pt-0.5">
                    ADDRESS
                  </span>
                  <span className="text-sm text-white/65 leading-relaxed whitespace-pre-line">
                    {contactInfo.address}
                  </span>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="font-heading text-[10px] tracking-[0.18em] text-white/40 uppercase w-14 shrink-0">
                    TEL
                  </span>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex gap-5 items-center">
                  <span className="font-heading text-[10px] tracking-[0.18em] text-white/40 uppercase w-14 shrink-0">
                    E-MAIL
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn button */}
              <a
                href={contactInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/25 px-3 py-1.5 text-sm text-white/60 hover:text-white hover:border-white/50 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </AnimatedContainer>

            {/* Right: Navigation columns */}
            <div className="grid  gap-32 md:grid-cols-2  lg:pl-64 xl:pl-72 pt-8">

              {/* Products */}
              <AnimatedContainer delay={0.2}>
                <h4 className="font-heading text-sm tracking-[0.2em] text-white uppercase mb-4">
                  Products
                </h4>
                <ul className="space-y-2.5">
                  {footerProductLinks.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </AnimatedContainer>

              {/* Company */}
              <AnimatedContainer delay={0.3}>
                <h4 className="font-heading text-sm tracking-[0.2em] text-white uppercase mb-4">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  {footerCompanyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AnimatedContainer>

            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} Athena Control. All rights reserved.
            </p>
          </div>
        </div>

      </footer>

      <ScrollToTop />
    </>
  );
}
