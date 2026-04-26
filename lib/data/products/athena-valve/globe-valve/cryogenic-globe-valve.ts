import type { Product } from "../../types";

export const cryogenicGlobeValve: Product = {
  slug: "cryogenic-globe-valve",
  name: "Cryogenic Globe Valve",
  brand: "athena-valve",
  category: "globe-valve",
  shortDescription:
    "2\"–18\", Class 150–2500 cryogenic globe valve rated to −196°C with extended bonnet and spring-loaded stem packing.",
  overview: [
    "The Cryogenic Globe Valve is designed for service at temperatures as low as −196°C, covering LNG, liquid nitrogen, liquid oxygen, gas treatment, and liquefied gas storage and transportation applications. Low operating torques and spring-loaded stem packing maintain consistent sealing performance across the full cryogenic temperature range, while the superior seat design ensures extended service life with minimal maintenance.",
    "An extended bonnet is fitted on all valves intended for service below −50°C, keeping the stem packing assembly away from the cold medium to prevent freeze-up. Available from 2\" to 18\" in Class 150–2500 with RF, RTJ, and BW end connections. The stainless steel body is standard for cryogenic service. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "Cryogenic Rating to −196°C",
      description:
        "Minimum design temperature of −196°C, suitable for LNG, liquid nitrogen, and liquid oxygen service.",
    },
    {
      title: "Extended Bonnet",
      description:
        "Extended bonnet on all valves for service below −50°C isolates stem packing from cold medium, preventing freeze-up.",
    },
    {
      title: "Spring-Loaded Stem Packing",
      description:
        "Spring-loaded packing maintains consistent sealing force throughout thermal cycling and temperature extremes.",
    },
    {
      title: "Low Operating Torque",
      description:
        "Optimized internal geometry delivers low actuation torque at cryogenic temperatures.",
    },
    {
      title: "Superior Seat Design",
      description:
        "Seat geometry and materials selected for durability and easy maintenance across extended cryogenic service.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Offshore platforms",
    "Cryogenic services (LNG, LN₂, LOX)",
    "Gas treatment plants",
    "Liquefied gas storage and transportation",
    "Emergency shutdown systems",
    "Pulp and paper",
    "Mining",
    "Boiler applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 18\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "Min. Temperature", value: "−196°C" },
    { label: "End Connections", value: "RF / RTJ / BW" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 18\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
        { label: "Minimum Temperature", value: "−196°C" },
      ],
    },
    {
      title: "Materials",
      specs: [
        { label: "Body Material", value: "Stainless steel" },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections", value: "RF / RTJ / BW" },
        { label: "Operation", value: "Hand wheel / Gear / Motor / Pneumatic actuators" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Material Standard", value: "NACE MR0175" },
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL" },
      ],
    },
  ],
  image: "/images/products/globe-valves/cryogenic-globe-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/cryogenic-globe-valve.html",
  order: 4,
};
