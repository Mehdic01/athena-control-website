import type { Product } from "../../types";

export const risingStemGateValve: Product = {
  slug: "rising-stem-gate-valve",
  name: "Rising Stem Gate Valve",
  brand: "athena-valve",
  category: "gate-valve",
  shortDescription:
    "2\"–20\", Class 125–150 cast iron rising stem gate valve with external threads and visual position indicator.",
  overview: [
    "The Rising Stem Gate Valve features external threads positioned outside the valve body, causing the stem to rise visibly as the valve opens. This design allows operators to instantly determine the valve's open or closed position by observing the amount of stem exposed — a key safety and operational advantage in industrial environments.",
    "Available from 2\" to 20\" in Class 125–150, these valves offer easy operation, small fluid resistance, and full bore flow. Designed to MSS-SP-128 and NACE MR0175 standards, they are certified to CE/PED, ISO, ATEX, SIL, and Fire Safe requirements for use in oil and gas, power generation, and other demanding services.",
  ],
  features: [
    {
      title: "Visual Position Indicator",
      description:
        "Rising stem with external threads provides a clear visual indication of valve open or closed position at all times.",
    },
    {
      title: "Easy Operation",
      description:
        "Compact handwheel design with low operating torque requirements simplifies on-site operation and maintenance.",
    },
    {
      title: "Small Fluid Resistance",
      description:
        "Full bore opening minimizes pressure drop and turbulence, preserving pipeline efficiency.",
    },
    {
      title: "Bolted Bonnet Construction",
      description:
        "Bolted bonnet enables straightforward field servicing and internal inspection without removing the valve from line.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Power generation",
    "District heating",
    "Offshore platforms",
    "Cryogenic service",
    "Emergency shutdown",
    "Pulp and paper",
    "Mining",
    "Boiler steam and drain applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 20\"" },
    { label: "Pressure Class", value: "125 LB – 150 LB" },
    { label: "End Connections", value: "RF / FNPT" },
    { label: "Design Standard", value: "MSS-SP-128 / NACE MR0175" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, Fire Safe" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 20\"" },
        { label: "Pressure Class", value: "125 LB – 150 LB" },
        { label: "Bore", value: "Full Bore" },
        { label: "Bonnet Type", value: "Bolted Bonnet" },
        { label: "Design Standard", value: "MSS-SP-128" },
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
        { label: "End Connections", value: "RF / FNPT" },
        { label: "Operation", value: "Hand wheel" },
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
  image: "/images/products/gate-valves/rising-stem-gate-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/product-detail/5238662618154634.html",
  order: 1,
};
