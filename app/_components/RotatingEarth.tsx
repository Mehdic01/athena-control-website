"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import * as d3 from "d3";

export interface BrandPin {
  name: string;
  value: string;
  lng: number;
  lat: number;
  logo?: string;
  website?: string;
}

interface RotatingEarthProps {
  size?: number;
  brandPins?: BrandPin[];
  athenaPin?: BrandPin;
  className?: string;
}

// Dot-product visibility check for orthographic projection
function isPointVisible(lng: number, lat: number, rotation: number[]): boolean {
  const toRad = Math.PI / 180;
  const centerLat = -(rotation[1] || 0) * toRad;
  const dLng = (lng - -rotation[0]) * toRad;
  const latRad = lat * toRad;
  return (
    Math.cos(latRad) * Math.cos(centerLat) * Math.cos(dLng) +
      Math.sin(latRad) * Math.sin(centerLat) >
    0
  );
}

export default function RotatingEarth({
  size = 700,
  brandPins = [],
  athenaPin,
  className = "",
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Direct DOM refs for logo overlays — updated in RAF, never via React state
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const athenaLogoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rawCanvas = canvasRef.current;
    const rawContainer = containerRef.current;
    if (!rawCanvas || !rawContainer) return;
    const rawCtx = rawCanvas.getContext("2d");
    if (!rawCtx) return;

    // Re-assign to new consts so TypeScript knows these are non-nullable
    // in all closures (hoisted function declarations lose narrowing otherwise).
    const canvas = rawCanvas;       // HTMLCanvasElement
    const container = rawContainer; // HTMLDivElement
    const ctx = rawCtx;             // CanvasRenderingContext2D

    // ── Hi-DPI canvas setup ──────────────────────────────────────────────────
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const radius = (size / 2) * 0.88;
    const cx = size / 2;
    const cy = size / 2;

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([cx, cy])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(ctx);

    // Cache graticule once — creating it every frame is expensive
    const graticule = d3.geoGraticule()();

    // ── Land dot helpers ─────────────────────────────────────────────────────
    function pointInPolygon(point: [number, number], ring: number[][]): boolean {
      const [x, y] = point;
      let inside = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i];
        const [xj, yj] = ring[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside;
        }
      }
      return inside;
    }

    function pointInFeature(point: [number, number], feature: GeoJSON.Feature): boolean {
      const geo = feature.geometry as GeoJSON.Polygon | GeoJSON.MultiPolygon;
      if (geo.type === "Polygon") {
        if (!pointInPolygon(point, geo.coordinates[0] as number[][])) return false;
        for (let i = 1; i < geo.coordinates.length; i++) {
          if (pointInPolygon(point, geo.coordinates[i] as number[][])) return false;
        }
        return true;
      }
      if (geo.type === "MultiPolygon") {
        for (const poly of geo.coordinates) {
          if (!pointInPolygon(point, poly[0] as number[][])) continue;
          let inHole = false;
          for (let i = 1; i < poly.length; i++) {
            if (pointInPolygon(point, poly[i] as number[][])) { inHole = true; break; }
          }
          if (!inHole) return true;
        }
      }
      return false;
    }

    function generateDotsInPolygon(feature: GeoJSON.Feature): [number, number][] {
      const dots: [number, number][] = [];
      const [[minLng, minLat], [maxLng, maxLat]] = d3.geoBounds(feature as d3.ExtendedFeature);
      for (let lng = minLng; lng <= maxLng; lng += 1.2) {
        for (let lat = minLat; lat <= maxLat; lat += 1.2) {
          const pt: [number, number] = [lng, lat];
          if (pointInFeature(pt, feature)) dots.push(pt);
        }
      }
      return dots;
    }

    // ── Mutable animation state (not React state — no re-renders) ────────────
    const rotation: [number, number] = [0, -20];
    const allDots: { lng: number; lat: number }[] = [];
    let landFeatures: GeoJSON.FeatureCollection | null = null;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let rafId: number | null = null;
    let time = 0;

    // ── Render ───────────────────────────────────────────────────────────────
    function render() {
      ctx.clearRect(0, 0, size, size);

      // Globe border only — transparent interior so the dark hero shows through
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = "rgba(255,255,255,0.40)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Graticule (cached object — never recreated)
      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = "rgba(255,255,255,0.10)";
      ctx.lineWidth = 0.4;
      ctx.stroke();

      if (landFeatures) {
        // Land outline
        ctx.beginPath();
        for (const feature of landFeatures.features) {
          path(feature as d3.GeoPermissibleObjects);
        }
        ctx.strokeStyle = "rgba(255,255,255,0.28)";
        ctx.lineWidth = 0.7;
        ctx.stroke();

        // Land dots — all in one batched path (single fill call instead of N fills)
        ctx.beginPath();
        for (const { lng, lat } of allDots) {
          if (!isPointVisible(lng, lat, rotation)) continue;
          const p = projection([lng, lat]);
          if (!p) continue;
          ctx.moveTo(p[0] + 0.9, p[1]);
          ctx.arc(p[0], p[1], 0.9, 0, 2 * Math.PI);
        }
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.fill();
      }

      // Brand pin glows (no shadowBlur — it forces expensive compositing)
      for (const { lng, lat } of brandPins) {
        if (!isPointVisible(lng, lat, rotation)) continue;
        const p = projection([lng, lat]);
        if (!p) continue;

        const grd = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], 24);
        grd.addColorStop(0, "rgba(255,255,255,0.30)");
        grd.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.arc(p[0], p[1], 24, 0, 2 * Math.PI);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p[0], p[1], 6, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      // Athena Control home pin (Turkey)
      if (athenaPin && isPointVisible(athenaPin.lng, athenaPin.lat, rotation)) {
        const p = projection([athenaPin.lng, athenaPin.lat]);
        if (p) {
          // Pulsing outer ring
          const pulse = 0.25 + 0.2 * Math.sin(time * 3.5);
          const ringR = 13 + 4 * Math.sin(time * 3.5);
          ctx.beginPath();
          ctx.arc(p[0], p[1], ringR, 0, 2 * Math.PI);
          ctx.strokeStyle = `rgba(255,255,255,${pulse})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // White glow
          const grd = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], 30);
          grd.addColorStop(0, "rgba(255,255,255,0.38)");
          grd.addColorStop(1, "rgba(255,255,255,0)");
          ctx.beginPath();
          ctx.arc(p[0], p[1], 30, 0, 2 * Math.PI);
          ctx.fillStyle = grd;
          ctx.fill();

          // White shell + green core
          ctx.beginPath();
          ctx.arc(p[0], p[1], 8, 0, 2 * Math.PI);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p[0], p[1], 4, 0, 2 * Math.PI);
          ctx.fillStyle = "#1B6240";
          ctx.fill();
        }
      }

      // Logo overlay: update positions directly in DOM (no React state re-renders)
      for (let i = 0; i < brandPins.length; i++) {
        const pin = brandPins[i];
        const el = logoRefs.current[i];
        if (!el) continue;

        const visible = isPointVisible(pin.lng, pin.lat, rotation);
        const p = projection([pin.lng, pin.lat]);
        if (!visible || !p) {
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
          continue;
        }
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
        // Offset: center the 64px logo + 20px label above the 6px pin dot
        el.style.transform = `translate(${p[0] - 32}px, ${p[1] - 102}px)`;
      }

      // Athena Control logo overlay
      const athenaEl = athenaLogoRef.current;
      if (athenaEl && athenaPin) {
        const visible = isPointVisible(athenaPin.lng, athenaPin.lat, rotation);
        const p = projection([athenaPin.lng, athenaPin.lat]);
        if (!visible || !p) {
          athenaEl.style.opacity = "0";
          athenaEl.style.pointerEvents = "none";
        } else {
          athenaEl.style.opacity = "1";
          athenaEl.style.pointerEvents = "auto";
          // Center the 80px logo above the pin
          athenaEl.style.transform = `translate(${p[0] - 40}px, ${p[1] - 118}px)`;
        }
      }
    }

    // ── RAF loop (start/stop via IntersectionObserver) ───────────────────────
    function loop() {
      if (!isDragging) rotation[0] += 0.22;
      time += 0.012;
      projection.rotate(rotation);
      render();
      rafId = requestAnimationFrame(loop);
    }

    function startLoop() {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(loop);
    }

    function stopLoop() {
      if (rafId === null) return;
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? startLoop() : stopLoop()),
      { threshold: 0 }
    );
    observer.observe(container);

    // ── Mouse drag ───────────────────────────────────────────────────────────
    function onMouseDown(e: MouseEvent) {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.style.cursor = "grabbing";
    }

    function onMouseMove(e: MouseEvent) {
      if (!isDragging) return;
      rotation[0] += (e.clientX - lastX) * 0.4;
      rotation[1] = Math.max(-80, Math.min(80, rotation[1] - (e.clientY - lastY) * 0.4));
      lastX = e.clientX;
      lastY = e.clientY;
    }

    function onMouseUp() {
      isDragging = false;
      canvas.style.cursor = "grab";
    }

    // ── Touch drag ───────────────────────────────────────────────────────────
    function onTouchStart(e: TouchEvent) {
      if (e.touches.length !== 1) return;
      isDragging = true;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }

    function onTouchMove(e: TouchEvent) {
      if (!isDragging || e.touches.length !== 1) return;
      e.preventDefault();
      rotation[0] += (e.touches[0].clientX - lastX) * 0.4;
      rotation[1] = Math.max(-80, Math.min(80, rotation[1] - (e.touches[0].clientY - lastY) * 0.4));
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }

    canvas.style.cursor = "grab";
    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", () => { isDragging = false; });

    // ── Load GeoJSON land data ───────────────────────────────────────────────
    async function loadData() {
      try {
        const res = await fetch("/data/ne_110m_land.json");
        if (!res.ok) throw new Error("fetch failed");
        landFeatures = (await res.json()) as GeoJSON.FeatureCollection;
        for (const feature of landFeatures.features) {
          for (const dot of generateDotsInPolygon(feature)) {
            allDots.push({ lng: dot[0], lat: dot[1] });
          }
        }
      } catch {
        // Globe renders ocean + grid until data is available
      }
    }

    loadData();

    return () => {
      stopLoop();
      observer.disconnect();
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [size, brandPins, athenaPin]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Logo overlays — positioned each frame via direct DOM mutation, not React state */}
      {brandPins.map((pin, i) => (
        <div
          key={pin.name}
          ref={(el) => { logoRefs.current[i] = el; }}
          className="absolute top-0 left-0 opacity-0 pointer-events-none"
          style={{ willChange: "transform, opacity" }}
        >
          <a
            href={pin.website ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-125 cursor-pointer"
          >
            <div className="w-16 h-16 bg-white rounded-full shadow-md border border-[rgba(27,98,64,0.25)] flex items-center justify-center p-2 overflow-hidden">
              {pin.logo ? (
                <div className="relative w-full h-full">
                  <Image
                    src={pin.logo}
                    alt={pin.name}
                    fill
                    className="object-contain"
                    sizes="72px"
                  />
                </div>
              ) : (
                <span className="font-heading text-[9px] font-bold text-[#1B6240] text-center leading-tight">
                  {pin.name}
                </span>
              )}
            </div>
            <div className="bg-white/95 rounded px-2 py-0.5 text-[11px] font-heading font-semibold text-[#0F1A12] whitespace-nowrap shadow-sm border border-[rgba(27,98,64,0.12)]">
              {pin.name}
            </div>
          </a>
        </div>
      ))}
      {/* Athena Control home pin overlay — larger, green-branded */}
      {athenaPin && (
        <div
          ref={athenaLogoRef}
          className="absolute top-0 left-0 opacity-0 pointer-events-none z-10"
          style={{ willChange: "transform, opacity" }}
        >
          <a
            href={athenaPin.website ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-125 cursor-pointer"
          >
            <div className="w-20 h-20 bg-white rounded-full shadow-lg border-2 border-[#1B6240] flex items-center justify-center p-2 overflow-hidden">
              {athenaPin.logo ? (
                <div className="relative w-full h-full">
                  <Image
                    src={athenaPin.logo}
                    alt={athenaPin.name}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
              ) : (
                <span className="font-heading text-[9px] font-bold text-white text-center leading-tight">
                  {athenaPin.name}
                </span>
              )}
            </div>
            <div className="bg-white rounded px-2 py-0.5 text-[11px] font-heading font-semibold text-[#1B6240] whitespace-nowrap shadow-sm border border-[#1B6240]/25">
              {athenaPin.name}
            </div>
          </a>
        </div>
      )}    </div>
  );
}
