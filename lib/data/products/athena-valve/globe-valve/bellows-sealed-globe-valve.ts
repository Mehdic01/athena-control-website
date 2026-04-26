import type { Product } from "../../types";

export const bellowsSealedGlobeValve: Product = {
  slug: "bellows-sealed-globe-valve",
  name: "Bellows Sealed Globe Valve",
  brand: "athena-valve",
  category: "globe-valve",
  shortDescription:
    "1/2\"–2\", Class 150–1500 bellows sealed globe valve with stainless steel bellows and secondary stuffing box for zero external leakage.",
  overview: [
    "The Bellows Sealed Globe Valve features a stainless steel bellows welded around the valve stem that provides a hermetic barrier against external leakage. A secondary stuffing box around the stem gives an additional layer of protection, making the valve well-suited for piping systems handling potentially harmful or environmentally sensitive chemicals where stem fugitive emissions must be eliminated.",
    "Available from 1/2\" to 2\" in Class 150–1500, these valves provide reliable flow control at high pressure and temperature. End connection options include raised face, ring-type joint, butt-weld, socket weld, and female NPT. Bolted bonnet, welded bonnet, and pressure seal constructions are offered. Supplied with material test certificates and hydraulic test certificates; third-party inspection is available. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "Stainless Steel Bellows",
      description:
        "Welded stainless steel bellows provides a hermetic stem seal, preventing external leakage of hazardous or environmentally sensitive media.",
    },
    {
      title: "Secondary Stuffing Box",
      description:
        "Additional stuffing box around the valve stem acts as a secondary seal, providing redundant protection against stem leakage.",
    },
    {
      title: "Multiple Bonnet Options",
      description:
        "Available with bolted, welded, or pressure seal bonnet to match pressure class and service conditions.",
    },
    {
      title: "Versatile End Connections",
      description:
        "Offered in RF, RTJ, BW, SW, and FNPT configurations for flexible piping integration.",
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
    "Gas turbines",
    "District heating",
    "Offshore platforms",
    "Cryogenic services",
    "Emergency shutdown systems",
    "Pulp and paper",
    "Mining",
    "Boiler applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "1/2\" – 2\"" },
    { label: "Pressure Class", value: "150 LB – 1500 LB" },
    { label: "End Connections", value: "RF / RTJ / BW / SW / FNPT" },
    { label: "Bonnet Types", value: "Bolted / Welded / Pressure Seal" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "1/2\" – 2\"" },
        { label: "Pressure Class", value: "150 LB – 1500 LB" },
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
        { label: "Bellows Material", value: "Stainless steel" },
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
  image: "/images/products/globe-valves/bellows-sealed-globe-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/product/5243635620184018.html",
  order: 7,
};
