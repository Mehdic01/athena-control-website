"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { navLinks, productCategoryLinks } from "@/lib/data/navigation/navigation";
import { contactInfo } from "@/lib/data/brands/athenacontrol";

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    const isProductsPage = pathname.startsWith("/products");
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (isProductsPage) {
        if (y > lastY && y > 150) setScrolledDown(true);
        else if (y < lastY)       setScrolledDown(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setScrolled(window.scrollY > 20);
    setScrolledDown(false);
    setMobileOpen(false);
    setDropdownOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isTransparent =
    (pathname === "/" || pathname === "/contact" || pathname === "/events" || pathname === "/brands") &&
    !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out${scrolledDown ? " -translate-y-full" : ""}`}>

      {/* ── Top contact bar ── */}
      <div className="bg-black">
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
        <div className="max-w-8xl  px-8 ml-24">
          <div className="flex items-center h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo_without_bg.png"
                alt="Athena Control"
                width={250}
                height={60}
                className="h-16 w-auto object-contain transition-all duration-500"
                style={isTransparent ? { filter: "brightness(0) invert(1)" } : undefined}
                priority
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-6 ml-auto">
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
                      className={`inline-flex items-center gap-1.5 font-heading text-[20px] tracking-[0.18em] uppercase px-4 py-2 transition-colors duration-200 ${
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

                    {/* ── Flat category dropdown ── */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scaleY: 0.97 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: -8, scaleY: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformOrigin: "top center" }}
                          className="absolute top-full left-0 z-50 w-[260px] pt-2"
                        >
                          <div className="bg-white border border-[#E0E0E0] shadow-[0_8px_32px_rgba(0,0,0,0.10)] rounded-sm overflow-hidden">

                            {/* Header */}
                            <Link
                              href="/products"
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center px-6 py-2 border-b border-[#E0E0E0] font-heading text-[18px]  font-extrabold text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors duration-150"
                            >
                              All Products
                            </Link>

                            {/* Category list */}
                            <div>
                              {productCategoryLinks.map((cat) => (
                                <Link
                                  key={cat.href}
                                  href={cat.href}
                                  onClick={() => setDropdownOpen(false)}
                                  className="block px-6 py-2.5 font-sans text-[14px] text-[#1A1A1A] hover:bg-[#F5F5F5] hover:text-[#1B6240] transition-colors duration-100"
                                >
                                  {cat.label}
                                </Link>
                              ))}
                            </div>

                            {/* Request Info / Quote */}
                            <Link
                              href="/contact"
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center px-5 py-3.5 border-t border-[#E0E0E0] font-sans text-[14px] text-[#1A1A1A]/60 hover:text-[#1B6240] hover:bg-[#F5F5F5] transition-colors duration-150"
                            >
                              Request Info / Quote
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-heading text-[20px] tracking-[0.18em] uppercase px-4 py-2 transition-colors duration-200 ${
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
                    <div className="pl-2 mt-1">
                      {productCategoryLinks.map((cat) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 font-sans text-sm text-[#1A1A1A]/60 border-b border-[#F0F0F0] last:border-b-0 hover:text-[#1B6240] hover:bg-[#F5F5F5] transition-colors"
                        >
                          {cat.label}
                        </Link>
                      ))}
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 font-sans text-sm text-[#1A1A1A]/50 border-t border-[#E0E0E0] mt-1 hover:text-[#1B6240] transition-colors"
                      >
                        Request Info / Quote
                      </Link>
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
