import type { Product } from "../../types";

export const springReturnForkTypePneumaticActuator: Product = {
  slug: "spring-return-fork-type-pneumatic-actuator",
  name: "Spring-Return Scotch Yoke Pneumatic Actuator",
  brand: "valentech",
  category: "pneumatic-actuator",
  shortDescription:
    "Single-acting scotch yoke pneumatic actuator with spring return for 90° quarter-turn valves; 360–110,000 Nm torque range, 4–6 bar air supply, automatically returns to safe position on air failure.",
  overview: [
    "The Spring-Return Scotch Yoke Pneumatic Actuator is a single-acting device that relies on air pressure to drive the valve to open and close. During operation, compressed air enters the cylinder and pushes the piston to rotate the output shaft 90°. When air supply is lost, the integrated spring mechanism automatically resets the valve to its initial (fail-safe) position.",
    "Designed as a modular product line for ball, butterfly, and plug valves requiring frequent operation. Configurable as normally open or normally closed. Available with standard, high, low, and ultra-low temperature options. Meets API 6DX-2020, EN 15714-3-2009, and ISO 5211-2017 standards. Certified to CE, ATEX/EAC, and DIRECTIVE 2014/34/EU.",
  ],
  features: [
    {
      title: "Spring Fail-Safe Return",
      description:
        "Integrated spring mechanism automatically resets the valve to the safe position on air supply failure, ideal for safety-critical and emergency shutdown applications.",
    },
    {
      title: "Normally Open or Normally Closed",
      description:
        "Configurable as normally open or normally closed to suit process safety requirements.",
    },
    {
      title: "90° Quarter-Turn Stroke",
      description:
        "Designed for direct automation of ball, butterfly, and plug valves with 90° stroke.",
    },
    {
      title: "Wide Temperature Range",
      description:
        "Available in standard (−20~80°C), high (−20~+150°C), low (−40~+80°C), and ultra-low (−60~+80°C) temperature variants.",
    },
  ],
  applications: [
    "Petroleum",
    "Chemical industry",
    "Chemical fiber",
    "Coal gasification",
    "Metallurgy",
    "Steel",
    "Long-distance pipelines",
    "Papermaking",
    "Pharmaceutical",
    "Environmental protection",
    "Safety and emergency shutdown systems",
  ],
  quickSpecs: [
    { label: "Model", value: "VTB-G(0-9)-P(180-1100)-SR" },
    { label: "Stroke", value: "90°" },
    { label: "Torque Range", value: "360 Nm – 110,000 Nm" },
    { label: "Air Supply", value: "4 – 6 bar" },
    { label: "Certifications", value: "CE, ATEX/EAC" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Model", value: "VTB-G(0-9)-P(180-1100)-SR" },
        { label: "Operation Type", value: "Single acting (spring return)" },
        { label: "Stroke", value: "90°" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Torque Range", value: "360 Nm – 110,000 Nm" },
        { label: "Air Supply", value: "4 bar (min) – 6 bar (max)" },
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
        { label: "Certifications", value: "CE, ATEX/EAC, DIRECTIVE 2014/34/EU" },
      ],
    },
  ],
  image: "/images/products/pneumatic-actuator/spring-return-fork-type-pneumatic-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/spring-return-fork-type-pneumatic-actuator.html",
  order: 1,
};
