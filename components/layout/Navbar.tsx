"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Menu, X, Phone, Mail, ExternalLink } from "lucide-react";
import { navLinks, productDropdown, type MegaMenuColumn } from "@/lib/data/navigation/navigation";
import { contactInfo } from "@/lib/data/brands/athenacontrol";

// ── Normalise a column into display-ready categories ─────────────────────────
type DisplayGroup = {
  subLabel?: string;
  items: { label: string; href: string; external?: boolean }[];
};
type DisplayCategory = {
  key: string;
  label: string;
  href: string;
  groups: DisplayGroup[];
};

function getDisplayCategories(col: MegaMenuColumn): DisplayCategory[] {
  const isSubGroupsAsCats =
    col.sections.length === 1 && (col.sections[0].subGroups?.length ?? 0) >= 4;

  if (isSubGroupsAsCats) {
    return col.sections[0].subGroups!.map((group) => ({
      key: `${col.brand}::${group.group}`,
      label: group.group,
      href: group.href ?? col.sections[0].href,
      groups: [{ items: group.items }],
    }));
  }

  return col.sections.map((section) => ({
    key: `${col.brand}::${section.subtitle ?? section.href}`,
    label: section.subtitle ?? "",
    href: section.href,
    groups: section.subGroups
      ? section.subGroups.map((g) => ({ subLabel: g.group, items: g.items }))
      : [{ items: section.items }],
  }));
}

export default function Navbar() {
  const [scrolled, setScrolled]                 = useState(false);
  const [mobileOpen, setMobileOpen]             = useState(false);
  const [dropdownOpen, setDropdownOpen]         = useState(false);
  const [expandedCompany, setExpandedCompany]   = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [productsOpen, setProductsOpen]         = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 20);
    setMobileOpen(false);
    setDropdownOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!dropdownOpen) {
      setExpandedCompany(null);
      setExpandedCategory(null);
    }
  }, [dropdownOpen]);

  const toggleCompany = (brand: string) => {
    if (expandedCompany === brand) {
      setExpandedCompany(null);
    } else {
      setExpandedCompany(brand);
      setExpandedCategory(null);
    }
  };

  const toggleCategory = (key: string) => {
    setExpandedCategory((prev) => (prev === key ? null : key));
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isTransparent =
    (pathname === "/" || pathname === "/contact" || pathname === "/gallery" || pathname === "/brands") &&
    !scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Top contact bar ── */}
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

      {/* ── Main navbar ── */}
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

                    {/* ── 3-level accordion dropdown ── */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scaleY: 0.97 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: -8, scaleY: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformOrigin: "top center" }}
                          className="absolute top-full left-0 z-50 w-[300px] pt-2"
                        >
                          <div className="bg-white border border-[#E0E0E0] shadow-[0_8px_32px_rgba(0,0,0,0.10)] rounded-sm overflow-hidden">

                            <div className="max-h-[70vh] overflow-y-auto py-1">
                              {productDropdown.columns.map((col) => {
                                const isOpen = expandedCompany === col.brand;
                                const cats = getDisplayCategories(col);

                                return (
                                  <div key={col.brand}>

                                    {/* ── L1: Company — link + chevron toggle ── */}
                                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#F5F5F5] transition-colors duration-150 group">
                                      <Link
                                        href={col.href}
                                        onClick={() => setDropdownOpen(true)}
                                        className="flex-1 min-w-0"
                                      >
                                        <span className="font-heading text-[15px] uppercase tracking-[0.12em] text-[#1A1A1A] leading-none">
                                          {col.brand}
                                        </span>
                                      </Link>
                                      <button
                                        type="button"
                                        onClick={() => toggleCompany(col.brand)}
                                        className="p-1.5 shrink-0 rounded-sm text-[#1A1A1A]/30 hover:text-[#1A1A1A] hover:bg-[#E0E0E0] transition-all duration-150 cursor-pointer"
                                      >
                                        <ChevronDown
                                          className={`w-4 h-4 transition-transform duration-200 ${
                                            isOpen ? "rotate-180" : ""
                                          }`}
                                        />
                                      </button>
                                    </div>

                                    {/* ── L1 expanded → categories ── */}
                                    <AnimatePresence>
                                      {isOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                          className="overflow-hidden"
                                        >
                                          <div className="bg-[#F9F9F9] py-1">
                                            {cats.map((cat) => {
                                              const catOpen = expandedCategory === cat.key;

                                              return (
                                                <div key={cat.key}>

                                                  {/* ── L2: Category — link + chevron toggle ── */}
                                                  <div className="flex items-center gap-2 pl-8 pr-4 py-2 hover:bg-[#EFEFEF] transition-colors duration-150 group/cat">
                                                    <Link
                                                      href={cat.href}
                                                      onClick={() => setDropdownOpen(false)}
                                                      className="flex-1 font-heading text-[13px] uppercase tracking-[0.1em] text-[#6B6B6B] group-hover/cat:text-[#1A1A1A] transition-colors duration-150"
                                                    >
                                                      {cat.label}
                                                    </Link>
                                                    <button
                                                      type="button"
                                                      onClick={() => toggleCategory(cat.key)}
                                                      className="p-1 shrink-0 text-[#1A1A1A]/20 hover:text-[#1A1A1A]/50 transition-colors"
                                                    >
                                                      <ChevronDown
                                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                                          catOpen ? "rotate-180" : ""
                                                        }`}
                                                      />
                                                    </button>
                                                  </div>

                                                  {/* ── L2 expanded → products ── */}
                                                  <AnimatePresence>
                                                    {catOpen && (
                                                      <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                                        className="overflow-hidden"
                                                      >
                                                        <div className="bg-white py-1">
                                                          {cat.groups.map((group, gi) => (
                                                            <div key={gi}>
                                                              {group.subLabel && (
                                                                <span className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#1A1A1A]/30 block px-12 pt-1.5 pb-0.5">
                                                                  {group.subLabel}
                                                                </span>
                                                              )}
                                                              {group.items.map((item) =>
                                                                item.external ? (
                                                                  <a
                                                                    key={item.href}
                                                                    href={item.href}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    onClick={() => setDropdownOpen(false)}
                                                                    className="flex items-center gap-1 px-12 py-[5px] font-sans text-[13px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-100"
                                                                  >
                                                                    {item.label}
                                                                    <ExternalLink className="w-2.5 h-2.5 opacity-40 ml-0.5 shrink-0" />
                                                                  </a>
                                                                ) : (
                                                                  <Link
                                                                    key={item.href}
                                                                    href={item.href}
                                                                    onClick={() => setDropdownOpen(false)}
                                                                    className="block px-12 py-[5px] font-sans text-[13px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-100"
                                                                  >
                                                                    {item.label}
                                                                  </Link>
                                                                )
                                                              )}
                                                            </div>
                                                          ))}
                                                        </div>
                                                      </motion.div>
                                                    )}
                                                  </AnimatePresence>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Footer */}
                            <div className="px-5 py-3 border-t border-[#E0E0E0]">
                              <Link
                                href="/products"
                                onClick={() => setDropdownOpen(false)}
                                className="group inline-flex items-center gap-1.5 font-heading text-[11px] tracking-[0.25em] uppercase text-[#6B6B6B] hover:text-[#1B6240] transition-colors duration-200"
                              >
                                All Products
                                <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
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
