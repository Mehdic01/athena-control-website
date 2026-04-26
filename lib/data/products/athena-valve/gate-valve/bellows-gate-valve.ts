import type { Product } from "../../types";

export const bellowsGateValve: Product = {
  slug: "bellows-gate-valve",
  name: "Bellows Gate Valve",
  brand: "athena-valve",
  category: "gate-valve",
  shortDescription:
    "2\"–48\", Class 150–900 flanged bellows gate valve with double sealing design and corrosion and friction resistance.",
  overview: [
    "The Bellows Gate Valve incorporates a metal bellows welded to both the bonnet and the stem, providing a hermetic seal around the stem without relying solely on conventional packing. As the stem moves linearly, the bellows convolutions compress or expand accordingly. Two sealing configurations are available: internal sealing, where the fluid is contained inside the bellow, and external sealing, where the fluid occupies the annular region between the bonnet and the bellow.",
    "Available from 2\" to 48\" in Class 150–900 with RF, RTJ, and BW end connections, the valve offers double sealing design with enhanced corrosion and friction resistance. A sleeve-nut mechanism at the yoke converts handwheel rotary motion to proper linear stem movement. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "Double Sealing Design",
      description:
        "Metal bellows provides primary hermetic sealing; secondary packing serves as a backup, delivering redundant stem seal integrity.",
    },
    {
      title: "Zero Stem Leakage",
      description:
        "Welded bellows eliminates stem fugitive emissions, meeting stringent environmental and safety standards.",
    },
    {
      title: "Corrosion and Friction Resistance",
      description:
        "Bellows material and construction selected for resistance to corrosive media and fatigue from cyclic stem movement.",
    },
    {
      title: "Flexible Sealing Mode",
      description:
        "Available in internal sealing (fluid inside bellow) or external sealing (fluid in annular region) configurations.",
    },
    {
      title: "Linear Stem Motion",
      description:
        "Sleeve-nut mechanism at the yoke converts handwheel rotation to precise linear stem travel.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Offshore platforms",
    "Cryogenic services",
    "Boiler steam applications",
    "Mining",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 48\"" },
    { label: "Pressure Class", value: "150 LB – 900 LB" },
    { label: "End Connections", value: "RF / RTJ / BW" },
    { label: "Operation", value: "Hand wheel / Gear / Motor / Pneumatic" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 48\"" },
        { label: "Pressure Class", value: "150 LB – 900 LB" },
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
  image: "/images/products/gate-valves/bellows-gate-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/bellows-gate-valve.html",
  order: 6,
};
