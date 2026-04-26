import type { Product } from "../../types";

export const forgedSteelGlobeValve: Product = {
  slug: "forged-steel-globe-valve",
  name: "Forged Steel Globe Valve",
  brand: "athena-valve",
  category: "globe-valve",
  shortDescription:
    "1/2\"–2\", Class 800–2500 forged steel OS&Y globe valve with rising stem and multiple bonnet options for high-pressure service.",
  overview: [
    "The Forged Steel Globe Valve is an outside screw and yoke (OS&Y) design with a rising stem and non-rising handwheel construction, available with threaded or flanged ends. The compact, sturdy forged body is engineered for high-pressure and high-temperature applications, with full or reduced bore options and three bonnet configurations — bolted, welded, and pressure seal — to match specific service requirements including cryogenic duties.",
    "Available from 1/2\" to 2\" in Class 800–2500, end connections include raised face, ring-type joint, butt-weld, socket weld, and female NPT. Supplied with material test certificates and hydraulic test documentation. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "OS&Y Rising Stem",
      description:
        "Outside screw and yoke design with rising stem provides clear visual position indication and simplifies packing maintenance.",
    },
    {
      title: "Forged Body Construction",
      description:
        "Compact forged steel body delivers superior strength-to-weight ratio for high-pressure and high-temperature service.",
    },
    {
      title: "Multiple Bonnet Options",
      description:
        "Bolted, welded, and pressure seal bonnet configurations available, including variants for cryogenic applications.",
    },
    {
      title: "Versatile End Connections",
      description:
        "Available in RF, RTJ, BW, SW, and FNPT to suit a wide range of piping systems.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Offshore platforms",
    "Cryogenic services",
    "Emergency shutdown systems",
    "Pulp and paper",
    "Mining",
    "Boiler applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "1/2\" – 2\"" },
    { label: "Pressure Class", value: "800 LB – 2500 LB" },
    { label: "End Connections", value: "RF / RTJ / BW / SW / FNPT" },
    { label: "Bonnet Types", value: "Bolted / Welded / Pressure Seal" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "1/2\" – 2\"" },
        { label: "Pressure Class", value: "800 LB – 2500 LB" },
        { label: "Bore", value: "Full Bore and Reduced Bore" },
        { label: "Bonnet Types", value: "Bolted / Welded / Pressure Seal" },
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
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections", value: "RF / RTJ / BW / SW / FNPT" },
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
  image: "/images/products/globe-valves/forged-steel-globe-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/forged-steel-globe-valves.html",
  order: 2,
};
