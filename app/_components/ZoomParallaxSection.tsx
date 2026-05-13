'use client';

import { ZoomParallax } from '@/components/ui/zoom-parallax';

// Image order matches the 7 ZoomParallax slots:
// [0] center main (scale 1→4)          → petrochemicals
// [1] top wide    (scale 1→5)          → turbines
// [2] tall left   (scale 1→6)          → compressors
// [3] right mid   (scale 1→5)          → generators
// [4] left center (scale 1→6)          → fans
// [5] bottom-left (scale 1→8)          → pumps
// [6] bottom-right small (scale 1→9)  → gearboxes
const images = [
  { src: '/images/home/petrochemicals.jpg', alt: 'Petrochemical plant' },
  { src: '/images/home/pumps.jpg', alt: 'Pump systems' },
  { src: '/images/home/fans.jpg', alt: 'Industrial fans' },
  { src: '/images/home/generators.jpg', alt: 'Power generators' },
  { src: '/images/home/compressors.jpg', alt: 'Compressor systems' },
  { src: '/images/home/gearboxes.jpg', alt: 'Gearbox equipment' },
  { src: '/images/home/turbines.jpg', alt: 'Industrial turbines' },
];

export default function ZoomParallaxSection() {
  return (
    <section className="bg-white">

      {/* ── Intro header ── */}
      <div className="relative flex h-[20vh] items-end justify-center pb-6 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmin]"
        />
        <div className="relative flex flex-col items-center gap-3 text-center px-4">
          <h2 className="font-display  text-[clamp(4rem,8.5vw,10rem)] leading-none text-[#1A1A1A]">
            BUILT FOR INDUSTRY
          </h2>
        </div>
      </div>

      {/* ── Parallax grid ── */}
      <ZoomParallax images={images} />

      {/* ── Spacer matching demo ── */}
      <div className="h-[2vh]" />

    </section>
  );
}
