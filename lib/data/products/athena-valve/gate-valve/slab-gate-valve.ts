import type { Product } from "../../types";

export const slabGateValve: Product = {
  slug: "slab-gate-valve",
  name: "SLab Gate Valve",
  brand: "athena-valve",
  category: "gate-valve",
  shortDescription:
    "2\"–24\", Class 150–600 slab gate valve with symmetrical bidirectional sealing, metal-to-metal gas-tight sealing, and low life-cycle cost.",
  overview: [
    "The SLab Gate Valve incorporates a one-piece floating slab gate combined with floating seats and a spring-loaded, pressure-energized stem seal to deliver symmetrical bidirectional sealing without pressure trapping. A single pressure-energized PEEK lip seal at the seat-to-body interface maintains the primary body seal, while metal-to-metal seating surfaces provide gas-tight isolation without the need for sealants.",
    "Available from 2\" to 24\" in Class 150–600 with RF, RTJ, and BW end connections, the SLab Gate Valve is designed for exceptional service life with minimal maintenance and a low life-cycle cost compared to alternative valve designs. Body materials include carbon steel, stainless steel, alloy steel, specialty alloys, and Al-bronze. Certified to NACE MR0175, CE/PED, ISO, ATEX, SIL, and Fire Safe.",
  ],
  features: [
    {
      title: "Symmetrical Bidirectional Sealing",
      description:
        "Floating slab gate and seat design delivers bidirectional sealing while preventing pressure trapping in the body cavity.",
    },
    {
      title: "Metal-to-Metal Gas-Tight Sealing",
      description:
        "Seating surfaces achieve gas-tight isolation without injectable sealants, reducing maintenance requirements.",
    },
    {
      title: "Pressure-Energized Stem Seal",
      description:
        "Spring-loaded stem seal requires no longitudinal preload and self-energizes with line pressure for zero fugitive emissions.",
    },
    {
      title: "PEEK Lip Seal",
      description:
        "Single pressure-energized PEEK lip seal at the seat-to-body interface provides robust, long-life primary body sealing.",
    },
    {
      title: "Low Life-Cycle Cost",
      description:
        "Minimal maintenance requirements and long service life deliver a lower total cost of ownership compared to competing designs.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Turbines",
    "District heating",
    "Offshore platforms",
    "Cryogenic services",
    "Emergency shutdown systems",
    "Pulp and paper",
    "Mining",
    "Boiler applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 24\"" },
    { label: "Pressure Class", value: "150 LB – 600 LB" },
    { label: "End Connections", value: "RF / RTJ / BW" },
    { label: "Operation", value: "Hand wheel / Gear / Motor" },
    { label: "Certifications", value: "NACE MR0175, CE/PED, ISO, ATEX, SIL, Fire Safe" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 24\"" },
        { label: "Pressure Class", value: "150 LB – 600 LB" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body Material",
          value:
            "Carbon steel, Stainless steel, Alloy steel, Monel, Inconel, Hastelloy, Al-bronze",
        },
        { label: "Seat Seal Material", value: "PEEK" },
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
        { label: "Material Standard", value: "NACE MR0175" },
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, Fire Safe" },
      ],
    },
  ],
  image: "/images/products/gate-valves/slab-gate-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/reliable-performance-symmetrical-bidirectional-sealing-gate-valve.html",
  order: 8,
};
