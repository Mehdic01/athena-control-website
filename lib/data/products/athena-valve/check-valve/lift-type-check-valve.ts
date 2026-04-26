import type { Product } from "../../types";

export const liftTypeCheckValve: Product = {
  slug: "lift-type-check-valve",
  name: "Forged Steel Lift Check Valve",
  brand: "athena-valve",
  category: "check-valve",
  shortDescription:
    "1/2\"–2\", Class 150–2500 forged steel lift check valve per API 602 with spring-loaded disc for high-pressure and high-temperature service, available in bolted and welded bonnet designs.",
  overview: [
    "The Forged Steel Lift Check Valve features a sealing disc set to a vertically constrained spring. A minimum upstream pressure is required to lift the disc and allow forward flow; when pressure drops, the spring returns the disc to the sealed position, preventing backflow. Available in swing type, lift type, bolted bonnet, and welded bonnet designs.",
    "Available from 1/2\" to 2\" in Class 150–2500 with RF, RTJ, BW, SW, and FNPT end connections in full bore and reduced bore variants. Body materials include carbon steel, stainless steel, alloy steel, duplex stainless steel, and specialty alloys. Designed to API 602 and Fire Safe to API 607. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175. Supplied with material test certificates (MTC 3.1) and hydraulic test certificates; third-party inspection is available.",
  ],
  features: [
    {
      title: "Spring-Loaded Lift Mechanism",
      description:
        "Vertically constrained spring-loaded disc requires a minimum pressure threshold to open and automatically reseats on flow reversal.",
    },
    {
      title: "Bolted and Welded Bonnet Options",
      description:
        "Available in bolted bonnet and welded bonnet designs to suit varying pressure and maintenance requirements.",
    },
    {
      title: "API 602 Design",
      description:
        "Designed and manufactured in conformance with API 602 for forged steel valves. Fire Safe to API 607.",
    },
    {
      title: "Full Documentation",
      description:
        "Manufactured from genuine raw materials with material test certificates (MTC 3.1) and hydraulic test certificates; third-party inspection is available.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Gas and coal-fired turbines",
    "District heating",
    "Offshore platforms",
    "Cryogenic service",
    "Emergency shutdown valves",
    "Pulp and paper",
    "Mining",
    "Boiler steam and drain applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "1/2\" – 2\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "End Connections", value: "RF / RTJ / BW / SW / FNPT" },
    { label: "Design Standard", value: "API 602 / Fire Safe API 607" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "1/2\" – 2\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
        { label: "Design Standard", value: "API 602" },
        { label: "Fire Safe", value: "API 607" },
        { label: "Bore", value: "Full bore / Reduced bore" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body Material",
          value:
            "Carbon steel, Stainless steel, Duplex stainless steel, Alloy steel, Monel, Inconel, Hastelloy",
        },
      ],
    },
    {
      title: "End Connections",
      specs: [
        { label: "End Connections", value: "RF / RTJ / BW / SW / FNPT" },
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
  image: "/images/products/check-valves/lift-type-check-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/lift-type-check-valve.html",
  order: 6,
};
