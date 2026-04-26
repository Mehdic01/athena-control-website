"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Shield, Zap, Settings2, Activity, Cpu, Gauge,
  Thermometer, Bell, Radio, Monitor, Layers, RotateCcw,
  Package, GitBranch, Play, Wifi, Wrench,
  type LucideIcon,
} from "lucide-react";

function getFeatureIcon(title: string): LucideIcon {
  const t = title.toLowerCase();
  if (t.includes("protect") || t.includes("safety") || t.includes("secure") || t.includes("emc")) return Shield;
  if (t.includes("power") || t.includes("energy") || t.includes("efficien") || t.includes("voltag")) return Zap;
  if (t.includes("control") || t.includes("pid") || t.includes("configur") || t.includes("mode") || t.includes("adjust")) return Settings2;
  if (t.includes("monitor") || t.includes("signal") || t.includes("real-time") || t.includes("vibrat") || t.includes("sensor")) return Activity;
  if (t.includes("motor") || t.includes("digital") || t.includes("process")) return Cpu;
  if (t.includes("speed") || t.includes("frequen") || t.includes("perform") || t.includes("range") || t.includes("accura")) return Gauge;
  if (t.includes("temp") || t.includes("thermal") || t.includes("heat")) return Thermometer;
  if (t.includes("alarm") || t.includes("alert") || t.includes("warn")) return Bell;
  if (t.includes("communicat") || t.includes("protocol") || t.includes("network") || t.includes("modbus") || t.includes("profibus")) return Radio;
  if (t.includes("display") || t.includes("interface") || t.includes("panel") || t.includes("screen") || t.includes("hmi") || t.includes("led")) return Monitor;
  if (t.includes("multi") || t.includes("channel") || t.includes("layer")) return Layers;
  if (t.includes("torque") || t.includes("rotat")) return RotateCcw;
  if (t.includes("compact") || t.includes("design") || t.includes("housing") || t.includes("install")) return Package;
  if (t.includes("bypass")) return GitBranch;
  if (t.includes("start") || t.includes("stop") || t.includes("ramp") || t.includes("soft")) return Play;
  if (t.includes("wireless") || t.includes("remote") || t.includes("wifi")) return Wifi;
  return Wrench;
}

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const [p, setP] = React.useState<number[][]>([]);
  React.useEffect(() => { setP(genRandomPattern()); }, []);

  return (
    <div className={cn("relative overflow-hidden p-6", className)} {...props}>
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
      <feature.icon className="text-foreground/75 size-6" strokeWidth={1} aria-hidden />
      <h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>
      <p className="text-muted-foreground relative z-20 mt-2 text-xs font-light">{feature.description}</p>
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5;
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>["className"];
  children: React.ReactNode;
};

export function FeatureCardWithIcon({
  title,
  description,
  className,
  ...props
}: { title: string; description: string } & Omit<React.ComponentProps<"div">, "children">) {
  return (
    <FeatureCard
      feature={{ title, description, icon: getFeatureIcon(title) }}
      className={className}
      {...props}
    />
  );
}

export function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

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
