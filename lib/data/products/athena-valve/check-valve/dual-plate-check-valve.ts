import type { Product } from "../../types";

export const dualPlateCheckValve: Product = {
  slug: "dual-plate-check-valve",
  name: "Dual Plate Type Check Valve",
  brand: "athena-valve",
  category: "check-valve",
  shortDescription:
    "2\"–60\", Class 150–2500 dual plate check valve with retainerless compact design, fast-acting spring response, and low energy loss for backflow prevention.",
  overview: [
    "The Dual Plate Type Check Valve features a unique compact design with two discs hinged like doors. The design eliminates gravity effects, requires minimal energy to open and maintain the open position, and reduces slamming and water hammer concerns through fast-acting spring response to flow reversal.",
    "Available from 2\" to 60\" in Class 150–2500 with RF, LUG, RTJ, and WAFER end connections in full bore and reduced bore variants. Body materials include carbon steel, stainless steel, alloy steel, and specialty alloys including Al-bronze. Certified to CE/PED, ISO, ATEX, SIL, FIRE SAFE, and NACE MR0175. Supplied with material test certificates, hydraulic test certificates, and third-party inspection options.",
  ],
  features: [
    {
      title: "Retainerless Design",
      description:
        "Special retainerless body and quick-acting spring provide a fast-acting response to flow reversal.",
    },
    {
      title: "Compact Two-Disc Structure",
      description:
        "Two discs hinged like doors eliminate gravity effects and minimize weight and stress on the system.",
    },
    {
      title: "Low Energy Loss",
      description:
        "Very little energy is needed to open the valve and maintain the open position under flow.",
    },
    {
      title: "Reduced Water Hammer",
      description:
        "Fast-acting spring and compact design reduce slamming and water hammer concerns on flow reversal.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Power generation",
    "Offshore platforms",
    "Cryogenic service",
    "Pulp and paper",
    "Mining",
    "Boiler steam and drain applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 60\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "End Connections", value: "RF / LUG / RTJ / WAFER" },
    { label: "Bore", value: "Full bore / Reduced bore" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, FIRE SAFE, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 60\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
        { label: "Bore", value: "Full bore / Reduced bore" },
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
      title: "End Connections",
      specs: [
        { label: "End Connections", value: "RF / LUG / RTJ / WAFER" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Fire Safe", value: "Yes" },
        { label: "Material Standard", value: "NACE MR0175" },
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL" },
      ],
    },
  ],
  image: "/images/products/check-valves/dual-plate-check-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/dual-plate-type-check-valve.html",
  order: 3,
};
