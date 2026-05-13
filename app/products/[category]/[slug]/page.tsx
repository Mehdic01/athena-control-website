import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Download,
  FileText,
  BookOpen,
  Wrench,
} from "lucide-react";
import { FeatureCardWithIcon, AnimatedContainer } from "@/app/products/_components/grid-feature-cards";
import {
  getAllProducts,
  getProduct,
  brandNames,
  categoryNames,
} from "@/lib/data/products/utils";
import type { Brand, ProductCategory, Document } from "@/lib/data/products/types";
import FadeIn from "@/components/shared/FadeIn";
import type { Metadata } from "next";

const brandLogos: Record<Brand, string> = {
  motortronics:   "/images/logo/motortronics-logo.png",
  renle:          "/images/logo/renle-logo.png",
  shinkawa:       "/images/logo/shinkawa-logo.png",
  "athena-valve":   "/images/logo/athena-valve-logo.png",
  valentech:      "/images/logo/valentech-logo.webp",
};

export function generateStaticParams() {
  return getAllProducts().map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) return {};
  return {
    title: `${product.name} | Athena Control`,
    description: product.shortDescription,
  };
}

const docIcon: Record<Document["type"], typeof FileText> = {
  catalog: BookOpen,
  datasheet: FileText,
  manual: BookOpen,
  brochure: FileText,
  "case study": FileText,
  software: Wrench,
  firmware: Wrench,
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) notFound();

  const brandName = brandNames[product.brand];
  const catName = categoryNames[category as ProductCategory];

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden py-8 lg:py-22">

        {/* Right-half tinted surface */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block bg-[#F4F4F4]">
          {/* Subtle dot grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, #C8C8C8 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              opacity: 0.45,
            }}
          />
        </div>

        {/* Thin top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1B6240]" />


        {/* Main grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center min-h-[92svh]">

            {/* ─── Left: info column ─── */}
            <FadeIn>
              <div className="pt-20 pb-28 lg:py-0 lg:pr-14 xl:pr-20 flex flex-col justify-center">
            
                {/* Category label */}
                <div className="mb-6">
                  <span className="font-heading text-[9.5px] tracking-[0.35em] text-[#6B6B6B] uppercase">
                    {catName}
                  </span>
                </div>

                {/* Product name */}
                <h1 className="font-display text-[clamp(3.5rem,6.5vw,6.5rem)] leading-[0.86] text-[#0F1A12] mb-6 font-extrabold"> 
                  {product.name.toUpperCase()}
                </h1>

                {/* Brand logo — sits under the name */}
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={brandLogos[product.brand]}
                    alt={brandName}
                    width={130}
                    height={80}
                    className="h-[50px] w-auto object-contain object-left"
                    
                  />
                </div>

                {/* Green accent bar */}
                <div className="w-10 h-[3px] bg-[#1B6240] mb-7" />

                {/* Short description */}
                <p className="text-[#6B6B6B] text-[15px] leading-relaxed mb-10 max-w-[340px]">
                  {product.shortDescription}
                </p>

                {/* Quick specs */}
                {product.quickSpecs && product.quickSpecs.length > 0 && (
                  <div className="mb-10 border-t border-[#ECECEC]">
                    {product.quickSpecs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-baseline justify-between py-3 border-b border-[#ECECEC]"
                      >
                        <span className="font-heading text-[16px] tracking-[0.25em] text-[#6B6B6B] uppercase shrink-0 mr-6">
                          {spec.label}
                        </span>
                        <span className="font-heading font-semibold text-[#0F1A12] text-[16px] text-right leading-snug">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 bg-[#1B6240] text-white font-heading font-bold px-7 py-3.5 rounded-sm hover:bg-[#1B6240]/90 transition-colors text-sm tracking-wider"
                  >
                    REQUEST A QUOTE
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  {product.manufacturerUrl && (
                    <a
                      href={product.manufacturerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#E0E0E0] text-[#6B6B6B] font-heading px-7 py-3.5 rounded-sm hover:border-[#1B6240] hover:text-[#1B6240] transition-all text-sm tracking-wider"
                    >
                      MANUFACTURER SITE
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </FadeIn>

            {/* ─── Right: product image ─── */}
            <FadeIn delay={0.2}>
              <div className="relative flex items-center justify-center py-20 lg:py-0 lg:min-h-[92svh]">

                {/* Soft radial glow behind product */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div
                    className="w-[80%] aspect-square rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
                    }}
                  />
                </div>

                {/* Floating product image */}
                {product.image ? (
                  <div
                    className="relative z-10 w-full animate-product-float"
                    style={{ maxWidth: "540px", aspectRatio: "4 / 3" }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={product.brand === "motortronics" ? "object-contain" : "object-cover"}
                      style={{ filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.13))" }}
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative z-10 w-full flex items-center justify-center" style={{ maxWidth: "540px", aspectRatio: "4 / 3" }}>
                    <span className="font-heading text-[#6B6B6B]/40 text-sm tracking-widest uppercase">
                      No image available
                    </span>
                  </div>
                )}

                {/* Floor shadow — breathes in sync with float */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-10 left-0 right-0 mx-auto h-5 rounded-full blur-2xl bg-[#0F1A12]/10 animate-shadow-breathe"
                  style={{ maxWidth: "240px" }}
                />

              </div>
            </FadeIn>

          </div>
        </div>
      </section>



      {/* ── Overview ───────────────────────────────────────────────────── */}
      {product.overview.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[260px_1fr] gap-x-16 gap-y-10 items-start">

              {/* Left: sticky section label */}
              <FadeIn>
                <div className="lg:sticky lg:top-24 pt-1">
                  <p className="font-heading text-[10px] tracking-[0.35em] text-[#6B6B6B] uppercase mb-3">
                    Product Details
                  </p>
                  <h2 className="font-display text-4xl sm:text-5xl text-[#0F1A12] leading-none">
                    OVERVIEW
                  </h2>
                  <div className="mt-5 w-8 h-[2px] bg-[#1B6240]" />
                </div>
              </FadeIn>

              {/* Right: paragraph list */}
              <div>
                {product.overview.map((para, i) => (
                  <FadeIn key={i} delay={0.1 + i * 0.07}>
                    <div className="group relative py-7 border-b border-[#F4F4F4] last:border-0 hover:bg-[#F4F4F4]/40 transition-colors duration-150 pl-5">
                      {/* Hover left accent bar */}
                      <div className="absolute left-0 inset-y-0 w-[2px] bg-[#1B6240] scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center" />
                      <p className={
                        i === 0
                          ? "text-xl leading-relaxed text-[#0F1A12] font-medium"
                          : "text-base leading-relaxed text-[#6B6B6B]"
                      }>
                        {para}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ── Features ───────────────────────────────────────────────────── */}
      {(product.features?.length ?? 0) > 0 && (
        <section className="py-16 md:py-32 bg-white">
          <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
            <AnimatedContainer className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
                {product.name}
              </h2>
              <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
                {product.shortDescription}
              </p>
            </AnimatedContainer>

            <AnimatedContainer
              delay={0.4}
              className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
            >
              {product.features?.map((feature, i) => (
                <FeatureCardWithIcon
                  key={i}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </AnimatedContainer>
          </div>
        </section>
      )}

      {/* ── Specifications ─────────────────────────────────────────────── */}
      {product.specGroups && product.specGroups.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F1A12] mb-10">
                SPECIFICATIONS
              </h2>
            </FadeIn>
            <div className="space-y-4">
              {product.specGroups.map((group, gi) => (
                <FadeIn key={group.title} delay={gi * 0.05}>
                  <div className="overflow-hidden rounded-xl border border-[#E0E0E0]">

                    {/* ── Group header — dark bar ── */}
                    <div className="bg-[#1A1A1A] px-6 py-4 flex items-center justify-between gap-4">
                      <h3 className="font-display text-lg tracking-wide text-white">
                        {group.title.toUpperCase()}
                      </h3>
                      <span className="font-heading text-[9px] tracking-[0.3em] text-white/20 uppercase shrink-0">
                        {group.specs.length}&nbsp;{group.specs.length === 1 ? "SPEC" : "SPECS"}
                      </span>
                    </div>

                    {/* ── Spec rows ── */}
                    {group.specs.map((spec, si) => (
                      <div
                        key={spec.label}
                        className="group relative flex items-stretch border-b border-[#F4F4F4] last:border-0 hover:bg-[#F4F4F4]/70 transition-colors duration-150"
                      >
                        {/* Left hover accent */}
                        <div className="absolute left-0 inset-y-0 w-[2px] bg-[#1B6240] scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center" />

                        {/* Row number + label */}
                        <div className="w-[42%] pl-6 pr-4 py-3.5 flex items-start gap-3">
                          <span className="font-heading text-[10px] text-[#1A1A1A]/10 tabular-nums select-none mt-px leading-none hidden sm:block">
                            {String(si + 1).padStart(2, "0")}
                          </span>
                          <span className="font-heading text-[10px] tracking-[0.18em] text-[#6B6B6B] uppercase leading-relaxed">
                            {spec.label}
                          </span>
                        </div>

                        {/* Vertical divider */}
                        <div className="w-px bg-[#F4F4F4] shrink-0 self-stretch" />

                        {/* Value */}
                        <div className="flex-1 px-6 py-3.5">
                          <span className="font-heading font-semibold text-sm text-[#1A1A1A] leading-relaxed">
                            {spec.value}
                          </span>
                        </div>
                      </div>
                    ))}

                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Applications ───────────────────────────────────────────────── */}
      {(product.applications?.length ?? 0) > 0 && (
        <section className="py-20 bg-[#F4F4F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <p className="font-heading text-[10px] tracking-[0.35em] text-[#6B6B6B] uppercase mb-3">
                    Use Cases
                  </p>
                  <h2 className="font-display text-3xl sm:text-5xl text-[#0F1A12] leading-none">
                    APPLICATIONS
                  </h2>
                </div>
                <p className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed md:text-right">
                  Engineered for demanding environments across multiple industries and operating conditions.
                </p>
              </div>

              {/* Application cards — gap-px trick for hairline grid lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0E0E0]">
                {product.applications?.map((app, i) => (
                  <div
                    key={app}
                    className="group relative bg-white hover:bg-[#F4F4F4] transition-colors duration-200 p-8"
                  >
                    {/* Top accent — appears on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#1B6240] transition-colors duration-200" />

                    {/* Large background number */}
                    <span className="block font-display text-[5rem] leading-none text-[#0F1A12]/[0.05] mb-3 tabular-nums select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Application name */}
                    <span className="font-heading font-semibold text-[#0F1A12] tracking-[0.12em] text-sm uppercase group-hover:text-[#1B6240] transition-colors duration-200">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Documents ──────────────────────────────────────────────────── */}
      {product.documents && product.documents.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0F1A12] mb-8">
                DOCUMENTS
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.documents.map((doc) => {
                  const Icon = docIcon[doc.type] ?? FileText;
                  return (
                    <div
                      key={doc.name}
                      className="flex items-start gap-4 bg-[#F4F4F4] border border-[#F4F4F4] rounded-xl p-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#1B6240]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-heading font-semibold text-[#0F1A12] leading-snug">
                          {doc.name}
                        </p>
                        <p className="text-xs text-[#0F1A12]/50 mt-0.5 capitalize">{doc.type}</p>
                        {doc.url ? (
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-[#1B6240] hover:underline"
                          >
                            <Download className="w-3.5 h-3.5" /> Download
                          </a>
                        ) : (
                          <span className="inline-block mt-2 text-xs text-[#0F1A12]/40">
                            Coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-[#1B6240] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-white mb-4">
              REQUEST A QUOTE
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Contact Athena Control for pricing, availability, and technical
              support for the {product.name}.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1B6240] font-heading font-bold px-8 py-4 rounded-sm hover:bg-[#F4F4F4] transition-colors"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              {product.manufacturerUrl && (
                <a
                  href={product.manufacturerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-heading font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
                >
                  View on Manufacturer Site <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
