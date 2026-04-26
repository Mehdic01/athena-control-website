import type { Product } from "../../types";

export const orbitalPlugValve: Product = {
  slug: "orbital-plug-valve",
  name: "Orbital Plug Valve",
  brand: "athena-valve",
  category: "plug-valve",
  shortDescription:
    "2\"–36\", Class 150–2500 orbital plug valve with frictionless sealing surface operation, soft seal technology, low pressure drop, and double block and bleed function.",
  overview: [
    "The Orbital Plug Valve uses a sequential two-stage operation: rotation opens the plug, and further turning engages the valve disc against the seat via downward pressure to achieve closure. Reverse operation lifts the plug first, separating the disc from the seat before rotating back to full open. When fully open, the plug channel aligns with the valve body channel to ensure the lowest possible pressure drop.",
    "Because the valve disc and seat are separated before any rotation occurs, there is no friction on the sealing surfaces during cycling, eliminating sealing face abrasion. Soft seal technology ensures leak-free closure. Available from 2\" to 36\" in Class 150–2500 with RF, BW, and RTJ end connections in full bore and reduced bore variants. Body materials include carbon steel and stainless steel. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "Frictionless Sealing Surface Operation",
      description:
        "During opening and closing, the valve disc and seat are separated before rotation — no friction and thus no abrasion on the sealing face.",
    },
    {
      title: "Soft Seal Technology",
      description:
        "Soft seal applied for sealing ensures no leakage during the closing process.",
    },
    {
      title: "Low Pressure Drop",
      description:
        "Full-bore channel alignment when fully open ensures the lowest possible pressure decrease across the valve.",
    },
    {
      title: "Double Block and Bleed",
      description:
        "Provides double block and bleed function for isolation of pipeline connections across industrial sectors.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Gas and coal-fired turbines",
    "District heating",
    "Gas measurement systems",
    "Offshore platforms",
    "HIPPS systems",
    "Cryogenic service",
    "Emergency shutdown valves",
    "Pulp and paper",
    "Mining",
    "Boiler steam and drain applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 36\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "End Connections", value: "RF / BW / RTJ" },
    { label: "Operation", value: "Lever / Gear motor / Pneumatic" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 36\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
        { label: "Bore", value: "Full bore / Reduced bore" },
      ],
    },
    {
      title: "Materials",
      specs: [
        { label: "Body Material", value: "Carbon steel, Stainless steel" },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections", value: "RF / BW / RTJ" },
        { label: "Operation", value: "Lever / Gear motor / Pneumatic actuators" },
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
  image: "/images/products/plug-valves/orbital-plug-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/orbital-plug-valve.html",
  order: 3,
};
