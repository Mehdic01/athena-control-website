import type { Product } from "../../types";

export const pressureSealGlobeValve: Product = {
  slug: "pressure-seal-globe-valve",
  name: "Pressure Seal Type Globe Valve",
  brand: "athena-valve",
  category: "globe-valve",
  shortDescription:
    "2\"–16\", Class 600–2500 pressure seal globe valve for high-temperature, high-pressure service with absolute reliable bonnet-joint sealing.",
  overview: [
    "The Pressure Seal Type Globe Valve provides absolute reliable sealing of the body-bonnet joint under high-temperature and high-pressure conditions. The self-energizing pressure seal design strengthens its bonnet joint as internal pressure increases, eliminating the risk of bonnet joint leakage common in conventional bolted designs. The non-rotating stem and anti-static design contribute to consistent, low-maintenance operation.",
    "Available from 2\" to 16\" in Class 600–2500, these valves are engineered and manufactured in strict conformance to ASME, ANSI, ASTM, API, and ASME B16.34 standards. End connections include RF, RTJ, and BW. Body materials span carbon steel, stainless steel, alloy steel, and specialty alloys. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175 with API 6FA Fire Safe certification.",
  ],
  features: [
    {
      title: "Self-Energizing Pressure Seal Bonnet",
      description:
        "Bonnet joint seal strengthens with increasing internal pressure, providing absolute reliable sealing in high-pressure service.",
    },
    {
      title: "Non-Rotating Stem",
      description:
        "Non-rotating stem design reduces seat wear and maintains sealing integrity over extended service cycles.",
    },
    {
      title: "Anti-Static and Fire Safe",
      description:
        "Anti-static design and API 6FA Fire Safe certification standard across the range.",
    },
    {
      title: "ASME / API Compliant",
      description:
        "Engineered and manufactured in strict conformance to ASME, ANSI, ASTM, API, and ASME B16.34 standards.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Power generation",
    "Offshore platforms",
    "Cryogenic service",
    "Boiler steam and drain systems",
    "Pulp and paper",
    "Mining",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 16\"" },
    { label: "Pressure Class", value: "600 LB – 2500 LB" },
    { label: "End Connections", value: "RF / RTJ / BW" },
    { label: "Standards", value: "API / BS / ASME B16.34" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 16\"" },
        { label: "Pressure Class", value: "600 LB – 2500 LB" },
        { label: "Design Standard", value: "API / BS / ASME B16.34" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body Material",
          value:
            "Carbon steel, Stainless steel, Alloy steel, Monel, Inconel, Hastelloy",
        },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections", value: "RF / RTJ / BW" },
        { label: "Operation", value: "Hand wheel / Gear / Motor" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Fire Safe", value: "API 6FA" },
        { label: "Material Standard", value: "NACE MR0175" },
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL" },
      ],
    },
  ],
  image: "/images/products/globe-valves/pressure-seal-globe-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/pressure-seal-type-globe-valve.html",
  order: 6,
};
