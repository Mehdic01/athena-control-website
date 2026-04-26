import type { Product } from "../../types";

export const doubleActingForkTypePneumaticActuator: Product = {
  slug: "double-acting-fork-type-pneumatic-actuator",
  name: "Double Acting Scotch Yoke Pneumatic Actuator",
  brand: "valentech",
  category: "pneumatic-actuator",
  shortDescription:
    "Double-acting scotch yoke pneumatic actuator for 90° quarter-turn valve automation; 3–6 bar air supply, three-point linkage sealing, self-lubricating bearings, and high starting torque.",
  overview: [
    "The Double Acting Scotch Yoke Pneumatic Actuator has ports at each end and can operate in both directions using compressed air. This design retains the valve position during signal loss and delivers higher torque capability compared to spring-return alternatives, making it suitable for applications where valve position must be maintained on air failure.",
    "The actuator employs a three-point linkage system with mutual braking between components for stable operation and leak prevention. Oil-free self-lubricating bearings and guide columns minimize radial wear and extend service life. Available in standard, high, low, and ultra-low temperature variants. Meets API 6DX-2020, EN 15714-3-2009, and ISO 5211-2017 standards. Certified to CE, ATEX, and DIRECTIVE 2014/34/EU.",
  ],
  features: [
    {
      title: "Double-Acting Operation",
      description:
        "Ports at each end enable actuation in both directions, retaining valve position during signal loss.",
    },
    {
      title: "Three-Point Linkage Sealing",
      description:
        "Mutual braking between linkage components ensures stable operation and prevents leakage.",
    },
    {
      title: "Self-Lubricating Bearings",
      description:
        "Oil-free self-lubricating bearings and guide columns minimize radial wear and extend operational lifespan.",
    },
    {
      title: "High Starting Torque",
      description:
        "Novel and flexible structure provides greater starting torque, especially suited for demanding valve control applications.",
    },
  ],
  applications: [
    "Petroleum",
    "Chemical industry",
    "Metallurgy",
    "Steel",
    "Long-distance pipelines",
    "Papermaking",
    "Pharmaceutical",
    "Ball valve automation",
    "Butterfly valve automation",
    "Plug valve automation",
  ],
  quickSpecs: [
    { label: "Model", value: "VTB-G(0-9)-P(180-1100)-DA" },
    { label: "Stroke", value: "90°" },
    { label: "Operation Type", value: "Double acting" },
    { label: "Air Supply", value: "3 – 6 bar" },
    { label: "Certifications", value: "CE, ATEX" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Model", value: "VTB-G(0-9)-P(180-1100)-DA" },
        { label: "Operation Type", value: "Double acting" },
        { label: "Stroke", value: "90°" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Air Supply", value: "3 bar (min) – 6 bar (max)" },
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
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Design Standards", value: "API 6DX-2020, EN 15714-3-2009, ISO 5211-2017" },
        { label: "Quality", value: "ISO 9001, ISO 14001, ISO 45001" },
        { label: "Certifications", value: "CE, ATEX, DIRECTIVE 2014/34/EU" },
      ],
    },
  ],
  image: "/images/products/pneumatic-actuator/double-acting-fork-type-pneumatic-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/double-acting-fork-type-pneumatic-actuator.html",
  order: 2,
};
