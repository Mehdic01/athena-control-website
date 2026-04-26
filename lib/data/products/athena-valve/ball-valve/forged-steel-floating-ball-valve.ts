import type { Product } from "../../types";

export const forgedSteelFloatingBallValve: Product = {
  slug: "forged-steel-floating-ball-valve",
  name: "Forged Steel Floating Ball Valve",
  brand: "athena-valve",
  category: "ball-valve",

  shortDescription:
    "Forged two-piece floating ball valve for high-pressure isolation service, available from 1/2\" to 10\" across Class 150 to 2500 with full and reduced bore options.",

  overview: [
    "Athena manufactures forged bolted two-piece ball valves with a floating ball design. The upstream process pressure pushes the free-floating ball against the downstream seat, providing a perfect leak-free sealing solution even after years of in-service operation.",
    "Available in full bore and reduced bore configurations with quarter-turn stem operation, the valve supports a wide range of end connections including SW, RF, RTJ, BW, and NPT. Soft seat and metal seat configurations are both available to suit different process conditions.",
  ],

  features: [
    {
      title: "Blow-out Proof Stem",
      description:
        "Stem design prevents ejection under pressure, ensuring safe operation and personnel protection in high-pressure applications.",
    },
    {
      title: "Anti-Static Design",
      description:
        "Electrical continuity between the ball, stem, and body prevents static charge build-up, essential for flammable or explosive media.",
    },
    {
      title: "API 607 Fire Safe Design",
      description:
        "Valve is qualified to API 607 fire testing requirements, maintaining integrity and limiting external leakage under fire exposure conditions.",
    },
    {
      title: "Full Bore & Reduced Bore",
      description:
        "Available in both full bore (for minimal pressure drop) and reduced bore configurations to suit application requirements.",
    },
    {
      title: "Soft Seat & Metal Seat",
      description:
        "Soft seat for bubble-tight shutoff and metal seat options for high-temperature or abrasive service.",
    },
  ],

  applications: [
    "Oil & gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Offshore platforms",
    "Cryogenic services",
    "Emergency shutdown systems",
    "Pulp & paper industries",
  ],

  quickSpecs: [
    { label: "Size Range",      value: "1/2\" – 10\"" },
    { label: "Pressure Rating", value: "Class 150 – 2500" },
    { label: "Body Material",   value: "Carbon Steel / Stainless Steel / Alloy Steel" },
    { label: "End Connections", value: "SW / RF / RTJ / BW / NPT" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range",      value: "1/2\" – 10\"" },
        { label: "Pressure Rating", value: "Class 150 – 2500" },
        { label: "Bore",            value: "Full Bore / Reduced Bore" },
        { label: "Seat Type",       value: "Soft Seat / Metal Seat" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body",
          value: "Carbon Steel, Stainless Steel, Alloy Steel, Monel, Inconel, Hastelloy",
        },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections",   value: "SW / RF / RTJ / BW / NPT" },
        { label: "Actuator Options",  value: "Lever, Gear, Motor, Pneumatic" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Certifications",   value: "CE/PED, ISO, ATEX, SIL" },
        { label: "Design Standard",  value: "API 6D" },
        { label: "Fire Safe",        value: "API 607" },
      ],
    },
  ],

  image: "/images/products/ball-valves/forged-steel-floating-ball-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products-forged-steel-floating-ball-valve.html",
  order: 1,
};
