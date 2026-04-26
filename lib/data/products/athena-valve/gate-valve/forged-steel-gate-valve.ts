import type { Product } from "../../types";

export const forgedSteelGateValve: Product = {
  slug: "forged-steel-gate-valve",
  name: "Forged Steel Gate Valve",
  brand: "athena-valve",
  category: "gate-valve",
  shortDescription:
    "1/2\"–2\", Class 150–2500 forged steel OS&Y gate valve per API 602 with tight shut-off and multiple bonnet options.",
  overview: [
    "The Forged Steel Gate Valve is an outside screw and yoke (OS&Y) gate valve manufactured to API 602, designed for small-bore pipelines requiring tight shut-off with minimal pressure drop. When fully open, the gate retracts entirely from the flow path, allowing media to pass with minimal turbulence. The valve can be installed horizontally or vertically and provides limited throttle control for steam, gas, or liquid services.",
    "Available from 1/2\" to 2\" in Class 150–2500, these valves are offered with bolted bonnet, welded bonnet, or pressure seal bonnet constructions. End connection options include raised face, ring-type joint, socket weld, female NPT, and butt-weld. Supplied with material test certificates and hydraulic test certificates; third-party inspection available. Certified to CE/PED, ISO, ATEX, SIL, Fire Safe, and NACE MR0175.",
  ],
  features: [
    {
      title: "API 602 Design",
      description:
        "Manufactured to API 602 for forged steel gate, globe, and check valves in small-bore piping.",
    },
    {
      title: "Tight Shut-Off",
      description:
        "Full retraction of the gate from the flow path delivers minimal pressure drop and turbulence when open.",
    },
    {
      title: "Multiple Bonnet Options",
      description:
        "Available with bolted, welded, or pressure seal bonnet to match pressure class and service requirements.",
    },
    {
      title: "Versatile End Connections",
      description:
        "Offered in RF, RTJ, socket weld, female NPT, and butt-weld configurations for flexible piping integration.",
    },
    {
      title: "Full Documentation",
      description:
        "Supplied with material test certificates, hydraulic test certificates, and optional third-party inspection.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Offshore platforms",
    "Cryogenic service",
    "Emergency shutdown valves",
    "Pulp and paper",
    "Mining",
    "Boiler steam applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "1/2\" – 2\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "End Connections", value: "RF / RTJ / SW / FNPT / BW" },
    { label: "Design Standard", value: "API 602" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, Fire Safe, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "1/2\" – 2\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
        { label: "Bore", value: "Full Bore and Reduced Bore" },
        { label: "Bonnet Types", value: "Bolted / Welded / Pressure Seal" },
        { label: "Design Standard", value: "API 602" },
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
        { label: "End Connections", value: "RF / RTJ / SW / FNPT / BW" },
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
  image: "/images/products/gate-valves/forged-steel-gate-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/forged-steel-gate-valve.html",
  order: 4,
};
