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

    icon: Zap,
    showcaseImages: [
      "/images/products/softstarters/vmx-synergy-plus/vmx-synergy-plus.png",
      "/images/products/softstarters/vmx-agility/vmx-agility.png",
      "/images/products/softstarters/mvc-4.png",
      "/images/products/softstarters/vmx-synergy/vmx-synergy.png",
      "/images/products/softstarters/vmx-pfe/features/vmx-pfe-highlight.png",
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

    icon: Activity,
    showcaseImages: [
      "/images/products/vibration_monitoring_systems/ca_cv_series.jpg",
      "/images/products/vibration_monitoring_systems/FK_series.png",
      "/images/products/vibration_monitoring_systems/ms_series.jpg",
      "/images/products/vibration_monitoring_systems/wk-wkn_series.jpg",
      "/images/products/vibration_monitoring_systems/zark_series.png",
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

    icon: Droplets,
    showcaseImages: [],
  },
];

/** Pre-derived serializable array — use this wherever icon is not needed (e.g. Client Components). */
export const brandData: BrandData[] = brands.map(({ icon: _icon, ...rest }) => rest);
