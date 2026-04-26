import type { Product } from "../../types";

export const castSteelFloatingBallValve: Product = {
  slug: "cast-steel-floating-ball-valve",
  name: "Cast Steel Floating Ball Valve",
  brand: "athena-valve",
  category: "ball-valve",

  shortDescription:
    "Cast steel floating ball valve for low-pressure applications per API 6D and API 608, available from 1/2\" to 8\" across ASME Class 150 to 300.",

  overview: [
    "The Athena cast steel floating ball valve is primarily engineered for low-pressure applications and is manufactured to API 6D and API 608 standards. Flanged end connections are standard, with RF, RTJ, and BW face options available.",
    "The valve supports manual lever or gear operation due to its low torque requirements and is available with soft seat or metal seat. All supplies include material test certificates and hydraulic test documentation (MTC 3.1), with third-party inspection available on request.",
  ],

  features: [
    {
      title: "Blow-out Proof Stem",
      description:
        "Stem design prevents ejection under pressure, ensuring safe operation and personnel protection.",
    },
    {
      title: "Anti-Static Design",
      description:
        "Electrical continuity between ball, stem, and body prevents static charge build-up.",
    },
    {
      title: "API 6FA Fire Safe Design",
      description:
        "Qualified to API 6FA fire testing requirements for use in fire-risk environments.",
    },
    {
      title: "Soft Seat & Metal Seat",
      description:
        "Soft seat for bubble-tight shutoff and metal seat for higher-temperature or abrasive service.",
    },
    {
      title: "Full Bore & Reduced Bore",
      description:
        "Available in full bore and reduced bore to suit different flow and piping requirements.",
    },
    {
      title: "Material Test Certification",
      description:
        "Supplied with MTC 3.1 material test certificates and hydraulic test documentation; third-party inspection available.",
    },
  ],

  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Offshore platforms",
    "Cryogenic service",
    "Emergency shutdown systems",
    "Pulp & paper industries",
  ],

  quickSpecs: [
    { label: "Size Range",      value: "1/2\" – 8\"" },
    { label: "Pressure Rating", value: "ASME Class 150 – 300" },
    { label: "Body Material",   value: "Carbon Steel / Stainless Steel / Alloy Steel" },
    { label: "End Connections", value: "RF / RTJ / BW" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range",      value: "1/2\" – 8\"" },
        { label: "Pressure Rating", value: "ASME Class 150 – 300" },
        { label: "Bore",            value: "Full Bore / Reduced Bore" },
        { label: "Seat Type",       value: "Soft Seat / Metal Seat" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body",
          value: "Carbon Steel, Stainless Steel, Alloy Steel, Monel, Inconel",
        },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections",  value: "RF / RTJ / BW" },
        { label: "Actuator Options", value: "Lever, Gear, Motor, Pneumatic" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Design Standard",       value: "API 6D / API 608" },
        { label: "Certifications",        value: "CE/PED, ISO, ATEX, SIL" },
        { label: "Fire Safe",             value: "API 6FA" },
        { label: "Material Documentation", value: "MTC 3.1" },
      ],
    },
  ],

  image: "/images/products/ball-valves/cast-steel-floating-ball-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/cast-steel-floating-ball-valve.html",
  order: 3,
};
