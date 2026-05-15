import type { ElementType } from "react";
import { Zap, Droplets, Activity, Cpu } from "lucide-react";

export interface Brand {
  id: string;
  name: string;
  fullName?: string;
  role: "Official Turkish Distributor" | "Sister Company";
  website: string;
  /** Path relative to /public. Empty string = no logo file yet (render name as text). */
  logo: string;
  description: string;
  highlights: string[];
  icon: ElementType;
  /**
   * Up to 3 product image paths (relative to /public) used in the brand showcase
   * component on the products page. Keep to exactly 3 for distributor brands so
   * the staggered photo grid stays balanced. Leave empty for non-distributor brands.
   */
  showcaseImages: string[];
}

/** Serializable subset of Brand — safe to pass from Server to Client Components. */
export type BrandData = Omit<Brand, "icon">;

export const brands: Brand[] = [
  {
    id: "motortronics",
    name: "Motortronics",
    role: "Official Turkish Distributor",
    website: "https://www.motortronics.com",
    logo: "/images/brands/motortronics-logo.png",
    description:
      "The global leader in soft starter technology for AC induction motors, with decades of innovation in motor control and protection. Motortronics delivers cutting-edge VMX series soft starters for every industrial application.",
    highlights: ["Soft Starters", "Motor Control", "18 A – 13.8 kV"],
    icon: Zap,
    showcaseImages: [
      "/images/products/soft-starters/vmx-synergy-plus.png",
      "/images/products/soft-starters/vmx-agility.png",
      "/images/products/soft-starters/mvc4.png",
      "/images/products/soft-starters/vmx-synergy.png",
      "/images/products/soft-starters/vmx-pfe.png",
    ],
  },
  {
    id: "shinkawa",
    name: "SHINKAWA Electric",
    role: "Official Turkish Distributor",
    website: "https://www.shinkawa.co.jp/eng/",
    logo: "/images/brands/shinkawa-logo.png",
    description:
      "Pioneer in vibration monitoring systems for motors, pumps, compressors, and turbines. SHINKAWA's precision instrumentation prevents catastrophic equipment failure through real-time condition monitoring.",
    highlights: ["Vibration Sensors", "Condition Monitoring", "Predictive Maintenance"],
    icon: Activity,
    showcaseImages: [
      "/images/products/vibration-monitoring-systems/ca_cv_series.png",
      "/images/products/vibration-monitoring-systems/FK_series.png",
      "/images/products/vibration-monitoring-systems/ms_series.png",
      "/images/products/vibration-monitoring-systems/wk-wkn_series.png",
      "/images/products/vibration-monitoring-systems/zark_series.png",
      "/images/products/condition_monitor/vm25.png",
      "/images/products/condition_monitor/vm5.jpg",
      "/images/products/condition_monitor/vm21.jpg",
      "/images/products/condition_monitor/vm7.jpg",
    ],
  },
  {
    id: "renle",
    name: "RENLE",
    fullName: "Shanghai RENLE Science and Technology Co., Ltd",
    role: "Official Turkish Distributor",
    website: "https://www.renle.com",
    logo: "/images/brands/renle-logo.png",
    description:
      "Shanghai RENLE Science and Technology delivers advanced power electronics solutions including variable frequency drives, soft starters, and static var generators trusted by industrial operators worldwide.",
    highlights: ["Frequency Inverters", "Variable Speed Drives", "LV & HV"],
    icon: Cpu,
    showcaseImages: [
      "/images/products/frequency_inverter/rnb2000.png",
      "/images/products/frequency_inverter/rnb3000.png",
      "/images/products/frequency_inverter/rnb6000.png",
      "/images/products/frequency_inverter/rnb1000.png",
      "/images/products/frequency_inverter/rnb6000.png",
    ],
  },
  {
    id: "athena-valve",
    name: "Athena Valve",
    fullName: "Athena Group",
    role: "Sister Company",
    website: "https://www.athenavalve.com",
    logo: "/images/brands/athena-group-logo.png",
    description:
      "A global fluid control leader providing high-performance industrial valves trusted across critical infrastructure worldwide. Athena Valve's product range spans ball, butterfly, gate, globe, check, and plug valves for oil & gas, petrochemical, power, and water treatment industries.",
    highlights: ["Industrial Valves", "Flow Control", "6 Valve Categories"],
    icon: Droplets,
    showcaseImages: [],
  },
];

/** Pre-derived serializable array — use this wherever icon is not needed (e.g. Client Components). */
export const brandData: BrandData[] = brands.map(({ icon: _icon, ...rest }) => rest);
