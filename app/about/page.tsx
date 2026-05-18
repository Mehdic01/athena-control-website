"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/about/_components/avatar";
import { cn } from "@/lib/utils";

// Product photos used in the avatar stack
const productAvatars = [
  { src: "/images/products/soft-starters/vmx-synergy-plus.png", fallback: "VS+" },
  { src: "/images/products/soft-starters/vmx-agility.png",      fallback: "VA"  },
  { src: "/images/products/condition_monitor/vm5.png",          fallback: "VM5" },
  { src: "/images/products/vibration-monitoring-systems/FK_series.png", fallback: "FK" },
];

// Brand/partner logos for the bottom marquee
const marqueeLogos = [
  { src: "/images/logo/motortronics-logo.png",  alt: "Motortronics",     width: 140 },
  { src: "/images/logo/shinkawa-logo.png",       alt: "SHINKAWA Electric", width: 140 },
  { src: "/images/logo/renle-logo.png",          alt: "RENLE",            width: 140 },
  { src: "/images/logo/athena-group-logo.png",   alt: "Athena Group",     width: 140 },
  { src: "/images/logo/valentech-logo.webp",     alt: "Valentech",        width: 120 },
];

// ─── Inline Marquee ───────────────────────────────────────────────────────────

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  repeat?: number;
}

function Marquee({
  children,
  className,
  pauseOnHover = false,
  repeat = 2,
}: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          aria-hidden={i > 0 ? true : undefined}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

// ─── About Hero ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main>
      <section className="relative w-full overflow-hidden pt-0 text-black">
        <div className="relative z-10 mx-auto h-full w-full max-w-full">
          <div className="grid grid-cols-1 md:h-screen md:grid-cols-12">

            {/* Left: hero image */}
            <div className="h-64 w-full md:col-span-6 md:h-full">
              <Image
                alt="Athena Control — industrial solutions"
                className="h-full w-full overflow-hidden object-cover object-center"
                height={1080}
                src="/images/about/about_page_hero.jpg"
                width={1920}
                priority
              />
            </div>

            {/* Right: content */}
            <div className="flex w-full items-center justify-between px-6 pt-8 pb-10 text-left md:col-span-6 md:pt-20 md:pr-6 md:pb-0 md:pl-10">
              <div className="w-full max-w-3xl space-y-6">

                <h1 className="font-display text-4xl md:text-6xl lg:text-9xl leading-none">
                  WHO WE ARE
                </h1>

                <p className="max-w-2xl font-light text-base md:text-lg lg:text-xl">
                  As a sister company of Athena Group, we are the official distributor for   Athena Valve, Motortronics, SHINKAWA Electric, ValenTech
                  and RENLE — Industrial valves, low and medium voltage soft starters, vibration monitoring systems,
                  variable-speed drives and actuators for demanding industry.
                </p>

                <div className="mt-auto space-y-7">

                  {/* Avatar stack + product count */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto">
                    <div className="flex -space-x-3">
                      {productAvatars.map((avatar, i) => (
                        <Avatar
                          key={i}
                          className="size-12 border-2 border-white transition-all duration-300 hover:grayscale-0"
                        >
                          <AvatarImage src={avatar.src} />
                          <AvatarFallback>{avatar.fallback}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div className="flex flex-col font-normal text-sm">
                      <span className="text-base sm:text-lg">+70</span>
                      <span>Products</span>
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="flex w-fit gap-6">
                    <Link
                      href="contact/#contact-form"
                      className="group mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal"
                    >
                      <span className="rounded-full bg-[#e1fcad] px-6 py-3 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
                        Start a Project
                      </span>
                      <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
                        <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                      </div>
                    </Link>
                  </div>

                </div>

                {/* Partner logos marquee */}
                <div className="relative -mx-4 mt-8 sm:-mx-6 lg:-mx-8">
                  <div className="absolute left-0 z-40 h-full w-20 bg-linear-to-r from-white" />
                  <div className="absolute right-0 z-40 h-full w-20 bg-linear-to-l from-white" />
                  <Marquee className="[--duration:25s]" pauseOnHover repeat={2}>
                    {marqueeLogos.map((logo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center px-3 md:px-5"
                      >
                        <Image
                          alt={logo.alt}
                          className="h-5 w-auto md:h-8 object-contain"
                          height={24}
                          src={logo.src}
                          width={logo.width}
                        />
                      </div>
                    ))}
                  </Marquee>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
