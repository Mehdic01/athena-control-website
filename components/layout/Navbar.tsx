"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X, Phone, Mail } from "lucide-react";
import { navLinks, productDropdown } from "@/lib/data/navigation/navigation";
import { contactInfo } from "@/lib/data/brands/athenacontrol";

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubGroup, setActiveSubGroup] = useState<number | null>(null);
  const [productsOpen, setProductsOpen]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync scroll state immediately on route change — prevents stale transparent/solid flicker
  useEffect(() => {
    setScrolled(window.scrollY > 20);
    setMobileOpen(false);
    setDropdownOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Hero-transparent mode: home, contact, and products pages before first scroll (dark bg on all)
  const isTransparent = (pathname === "/" || pathname === "/contact" || pathname === "/gallery" || pathname === "/brands" ) && !scrolled;

  // Flatten product dropdown columns into a single categories array
  const allCategories = productDropdown.columns.flatMap((col) =>
    col.sections.map((section) => ({
      brand: col.brand,
      label: section.subtitle,
      href: section.href,
      external: section.external ?? false,
      items: section.items,
      subGroups: section.subGroups,
    }))
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top contact bar — slides away on scroll ── */}
      <div
        className={`bg-black overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-5 py-1.5">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-1.5 text-white/50 hover:text-white/90 text-xs font-sans tracking-wide transition-colors duration-200"
            >
              <Phone className="w-3 h-3" />
              {contactInfo.phone}
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 text-white/50 hover:text-white/90 text-xs font-sans tracking-wide transition-colors duration-200"
            >
              <Mail className="w-3 h-3" />
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navbar — `relative` so the mega menu anchors here ── */}
      <div
        className={`relative transition-all duration-400 ${
          isTransparent
            ? "bg-transparent border-transparent"
            
            : scrolled
              ? "bg-white shadow-sm border-b border-[#E0E0E0]"
              : "bg-white/90 backdrop-blur-sm border-b border-[#E0E0E0]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/athena-logo.png"
                alt="Athena Control"
                width={250}
                height={60}
                className="h-16 w-auto object-contain transition-all duration-500"
                style={isTransparent ? { filter: "brightness(0) invert(1)" } : undefined}
                priority
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-4"> 
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 font-heading text-[16px] tracking-[0.18em] uppercase px-4 py-2 transition-colors duration-200 ${
                        isActive(link.href)
                          ? isTransparent ? "text-white" : "text-[#1A1A1A]"
                          : isTransparent ? "text-white/70 hover:text-white" : "text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 z-50 pt-1"
                        >
                          <div className="bg-white  shadow-2xl w-[260px]">
                            {allCategories.map((cat, i) => (
                              <div
                                key={i}
                                className="relative"
                                onMouseEnter={() => { setActiveCategory(i); setActiveSubGroup(null); }}
                              >
                                {cat.external ? (
                                  <a
                                    href={cat.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-between py-3 transition-all border-l-[3px] ${
                                      activeCategory === i
                                        ? "bg-[#F5F5F5] text-[#1A1A1A] border-[#1A1A1A] pl-[13px] pr-4"
                                        : "text-[#1A1A1A]/60 hover:bg-[#F9F9F9] hover:text-[#1A1A1A] border-transparent pl-[13px] pr-4"
                                    }`}
                                  >
                                    <span className="font-heading text-[11.5px] tracking-[0.12em] uppercase font-semibold">
                                      {cat.label}
                                    </span>
                                  </a>
                                ) : (
                                  <Link
                                    href={cat.href}
                                    className={`flex items-center justify-between py-3 transition-all border-l-[3px] ${
                                      activeCategory === i
                                        ? "bg-[#F5F5F5] text-[#1A1A1A] border-[#1A1A1A] pl-[13px] pr-4"
                                        : "text-[#1A1A1A]/60 hover:bg-[#F9F9F9] hover:text-[#1A1A1A] border-transparent pl-[13px] pr-4"
                                    }`}
                                  >
                                    <span className="font-heading text-[11.5px] tracking-[0.12em] uppercase font-semibold">
                                      {cat.label}
                                    </span>
                                    {(cat.items.length > 0 || !!cat.subGroups?.length) && (
                                      <ChevronRight
                                        className={`w-3.5 h-3.5 flex-shrink-0 transition-opacity ${
                                          activeCategory === i ? "opacity-100" : "opacity-20"
                                        }`}
                                      />
                                    )}
                                  </Link>
                                )}

                                {activeCategory === i && (cat.subGroups?.length || cat.items.length > 0) && (
                                  <div className="absolute top-0 left-full z-50 bg-white shadow-2xl w-[240px]">
                                    <p className="font-heading text-[9px] tracking-[0.35em] uppercase text-[#6B6B6B] px-4 pt-3 pb-2 border-b border-[#F0F0F0]">
                                      {cat.label}
                                    </p>
                                    {cat.subGroups?.length ? (
                                      cat.subGroups[0].href ? (
                                        /* Multi-level mode: group names link to category pages, hover reveals products */
                                        <div className="py-1">
                                          {cat.subGroups.map((group, gi) => (
                                            <div
                                              key={group.group}
                                              className="relative"
                                              onMouseEnter={() => setActiveSubGroup(gi)}
                                            >
                                              <Link
                                                href={group.href!}
                                                className={`flex items-center justify-between px-4 py-2.5 text-[11.5px] font-heading tracking-[0.12em] uppercase transition-colors border-l-[3px] ${
                                                  activeSubGroup === gi
                                                    ? "bg-[#F5F5F5] text-[#1A1A1A] border-[#1A1A1A]"
                                                    : "text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F9F9F9] border-transparent"
                                                }`}
                                              >
                                                <span>{group.group}</span>
                                                <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-opacity ${activeSubGroup === gi ? "opacity-100" : "opacity-20"}`} />
                                              </Link>
                                              {activeSubGroup === gi && group.items.length > 0 && (
                                                <div className="absolute top-0 left-full z-50 bg-white shadow-2xl w-[280px] overflow-y-auto max-h-[70vh]">
                                                  <p className="font-heading text-[9px] tracking-[0.35em] uppercase text-[#6B6B6B] px-4 pt-3 pb-2 border-b border-[#F0F0F0]">
                                                    {group.group}
                                                  </p>
                                                  <div className="py-1">
                                                    {group.items.map((item) => (
                                                      <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="block px-4 py-2 text-[12px] font-sans text-[#1A1A1A]/55 hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors"
                                                      >
                                                        {item.label}
                                                      </Link>
                                                    ))}
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      ) : (
                                        /* Flat grouped mode: LV/MV headers for Soft Starters & Frequency Inverters */
                                        cat.subGroups.map((group) => (
                                          <div key={group.group}>
                                            <p className="font-heading text-[9px] tracking-[0.3em] uppercase text-[#1A1A1A]/35 px-4 pt-3 pb-1">
                                              {group.group}
                                            </p>
                                            {group.items.map((item) => (
                                              <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block px-4 py-1.5 text-[12px] font-sans text-[#1A1A1A]/55 hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors"
                                              >
                                                {item.label}
                                              </Link>
                                            ))}
                                          </div>
                                        ))
                                      )
                                    ) : (
                                      <div className="py-1">
                                        {cat.items.map((item) =>
                                          item.external ? (
                                            <a
                                              key={item.href}
                                              href={item.href}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-1 px-4 py-2 text-[12px] font-sans text-[#1A1A1A]/55 hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors"
                                            >
                                              {item.label}
                                              <span className="text-[9px] opacity-40">↗</span>
                                            </a>
                                          ) : (
                                            <Link
                                              key={item.href}
                                              href={item.href}
                                              className="block px-4 py-2 text-[12px] font-sans text-[#1A1A1A]/55 hover:text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors"
                                            >
                                              {item.label}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                            <div className="border-t border-[#E8E8E8] mt-0.5 px-4 py-2.5 flex justify-end">
                              <Link
                                href="/products"
                                className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A]/30 hover:text-[#1A1A1A] transition-colors"
                              >
                                View all →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-heading text-[16px] tracking-[0.18em] uppercase px-4 py-2 transition-colors duration-200 ${
                      isActive(link.href)
                        ? isTransparent ? "text-white" : "text-[#1A1A1A]"
                        : isTransparent ? "text-white/70 hover:text-white" : "text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className={
                  isTransparent
                    ? "px-5 py-2 border border-white/50 text-white font-heading text-[16px] font-bold tracking-wider rounded-sm hover:bg-white/10 transition-all duration-200"
                    : "px-5 py-2 bg-[#1B6240] text-white font-heading text-[16px] font-bold tracking-wider rounded-sm hover:bg-[#1B6240]/90 transition-colors"
                }
              >
                GET IN TOUCH
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isTransparent ? "text-white" : "text-[#1A1A1A]/70"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#E0E0E0] bg-white overflow-y-auto max-h-[80vh]"
          >
            <div className="px-4 py-6 space-y-1">
              {/* Contact info strip */}
              <div className="flex items-center gap-4 px-3 pb-4 border-b border-[#E0E0E0] mb-2">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-1.5 text-[#1A1A1A]/50 text-xs font-sans"
                >
                  <Phone className="w-3 h-3" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-1.5 text-[#1A1A1A]/50 text-xs font-sans"
                >
                  <Mail className="w-3 h-3" />
                  {contactInfo.email}
                </a>
              </div>

              {navLinks.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className={`flex-1 block px-3 py-2.5 font-heading text-base tracking-wide rounded-sm ${
                        isActive(link.href)
                          ? "text-[#1A1A1A] bg-[#F5F5F5]"
                          : "text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#F5F5F5]"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <button
                        onClick={() => setProductsOpen(!productsOpen)}
                        className="p-2 mr-1 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors"
                        aria-label="Toggle products menu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Expand product sub-links inline — collapsible */}
                  {link.hasDropdown && productsOpen && (
                    <div className="pl-4 mt-1 space-y-0.5">
                      {productDropdown.columns.map((col) => (
                        <div key={col.brand}>
                          <p className="px-3 pt-3 pb-1 text-xs font-heading tracking-widest uppercase text-[#6B6B6B]">
                            {col.brand}
                          </p>
                          {col.sections.map((section, sIdx) => (
                            <div key={sIdx}>
                              {section.subtitle && (
                                <p className="px-3 pt-2 pb-0.5 text-[10px] font-heading tracking-widest uppercase text-[#1A1A1A]/40">
                                  {section.subtitle}
                                </p>
                              )}
                              {section.items.map((item) =>
                                item.external ? (
                                  <a
                                    key={item.href}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 px-3 py-1.5 text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                                  >
                                    {item.label}
                                    <span className="text-[10px] opacity-50"> ↗</span>
                                  </a>
                                ) : (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-3 py-1.5 text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                )
                              )}
                              {section.subGroups?.map((group) => (
                                <div key={group.group}>
                                  <p className="px-3 pt-2 pb-0.5 text-[9px] font-heading tracking-widest uppercase text-[#1A1A1A]/30">
                                    {group.group}
                                  </p>
                                  {group.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="block px-3 py-1.5 text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-[#1B6240] text-white font-heading font-bold tracking-wider rounded-sm hover:bg-[#1B6240]/90 transition-colors"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
