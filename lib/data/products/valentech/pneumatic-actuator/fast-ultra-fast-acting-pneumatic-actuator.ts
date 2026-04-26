import type { Product } from "../../types";

export const fastUltraFastActingPneumaticActuator: Product = {
  slug: "fast-ultra-fast-acting-pneumatic-actuator",
  name: "Ultra-Fast Acting Pneumatic Actuator",
  brand: "valentech",
  category: "pneumatic-actuator",
  shortDescription:
    "Single-acting spring-return pneumatic actuator (VTB 2) with SIL3-certified integral high-flow quick exhaust dump valve for emergency valve closure within 1 second on air supply failure.",
  overview: [
    "The Ultra-Fast Acting Pneumatic Actuator (VTB 2) is a quick-closing single-acting actuator specifically engineered by Valen Tech with a SIL3-certified integral high-flow pneumatic quick exhaust dump valve, achieving emergency valve closure within approximately 1 second. The integrated flow regulating valves and quick exhaust mechanism enable emergency valve closure during air supply failure, protecting downstream equipment and processes.",
    "Available in standard, high, low, and ultra-low temperature variants. Weather proof, corrosion resistance, and fire safety protection options are available. Compatible with a full range of accessories including filters, regulators, gauges, solenoid valves, limit switch boxes, positioners, air-operated valves, and handwheels. Air supply 4–6 bar.",
  ],
  features: [
    {
      title: "Emergency Closure Within 1 Second",
      description:
        "Specifically engineered for quick-closing applications; achieves full valve closure within approximately 1 second on air supply failure.",
    },
    {
      title: "SIL3-Certified Integral Quick Exhaust Dump Valve",
      description:
        "Integral high-flow pneumatic quick exhaust dump valve is SIL3 certified, meeting the highest functional safety requirements.",
    },
    {
      title: "Spring Fail-Safe Return",
      description:
        "Single-acting spring return design automatically closes the valve on loss of air supply.",
    },
    {
      title: "Multiple Protection Options",
      description:
        "Available with weatherproof, corrosion resistant, and fire safety protection to suit harsh and hazardous environments.",
    },
  ],
  applications: [
    "Petroleum",
    "Chemical industry",
    "Coal",
    "Metallurgy",
    "Steel",
    "Long-distance pipelines",
    "Papermaking",
    "Pharmaceutical",
    "Ball valve emergency shutdown",
    "Butterfly valve emergency shutdown",
    "Plug valve emergency shutdown",
  ],
  quickSpecs: [
    { label: "Model", value: "VTB 2" },
    { label: "Stroke", value: "90°" },
    { label: "Closing Time", value: "Within 1 second" },
    { label: "Air Supply", value: "4 – 6 bar" },
    { label: "Safety Integrity", value: "SIL3 certified" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Model", value: "VTB 2" },
        { label: "Operation Type", value: "Single acting (spring return)" },
        { label: "Stroke", value: "90°" },
        { label: "Emergency Closing Time", value: "Within 1 second" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Air Supply", value: "4 bar (min) – 6 bar (max)" },
        { label: "Safety Integrity Level", value: "SIL3" },
      ],
    },
    {
      title: "Temperature Options",
      specs: [
        { label: "Standard", value: "−20°C to +80°C" },
        { label: "High Temperature", value: "−20°C to +150°C" },
        { label: "Low Temperature", value: "−40°C to +80°C" },
        { label: "Ultra-Low Temperature", value: "−60°C to +80°C" },
      ],
    },
  ],
  image: "/images/products/pneumatic-actuator/fast-ultra-fast-acting-pneumatic-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/product-Fast-Ultra-Fast-Acting-pneumatic-actuator.html",
  order: 5,
};
