import type { Product } from "../../types";

export const pressureSealGateValve: Product = {
  slug: "pressure-seal-gate-valve",
  name: "Pressure Seal Type Gate Valve",
  brand: "athena-valve",
  category: "gate-valve",
  shortDescription:
    "2\"–30\", Class 900–2500 cast steel pressure seal gate valve for high-pressure, high-temperature hydrocarbon and steam service.",
  overview: [
    "The Pressure Seal Type Gate Valve employs a self-energizing body-bonnet joint that strengthens as internal pressure increases, making it inherently suited for high-pressure and high-temperature applications. The higher the line pressure, the tighter the seal — eliminating the risk of bonnet joint leakage common in conventional bolted designs under elevated conditions.",
    "Available from 2\" to 30\" in Class 900–2500, these valves handle steam, condensate, boiler feedwater, and hydrocarbon services across thermal and nuclear power plants, petrochemical facilities, and oil and gas installations. Body materials include carbon steel, stainless steel, alloy steel, specialty alloys, and Al-bronze. Certified to CE/PED, ISO, ATEX, SIL, Fire Safe, and NACE MR0175.",
  ],
  features: [
    {
      title: "Self-Energizing Pressure Seal",
      description:
        "Body-bonnet joint seal improves with increasing internal pressure, providing leak-free performance under the most demanding conditions.",
    },
    {
      title: "High-Pressure / High-Temperature Rating",
      description:
        "Rated to Class 2500, suitable for the most severe steam, condensate, boiler feedwater, and hydrocarbon services.",
    },
    {
      title: "Proven Power Plant Performance",
      description:
        "Extensively deployed in thermal and nuclear power generation worldwide.",
    },
    {
      title: "Wide Material Selection",
      description:
        "Available in carbon steel, stainless steel, alloy steel, Monel, Inconel, Hastelloy, and Al-bronze to match process requirements.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation (thermal and nuclear)",
    "Gas and coal-fired turbines",
    "District heating",
    "Offshore platforms",
    "Cryogenic services",
    "Boiler steam applications",
    "Pulp and paper",
    "Mining",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 30\"" },
    { label: "Pressure Class", value: "900 LB – 2500 LB" },
    { label: "End Connections", value: "RF / RTJ / BW" },
    { label: "Standards", value: "API / BS / ASME B16.34" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, Fire Safe, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 30\"" },
        { label: "Pressure Class", value: "900 LB – 2500 LB" },
        { label: "Design Standard", value: "API / BS / ASME B16.34" },
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
  image: "/images/products/gate-valves/pressure-seal-gate-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/pressure-seal-type-gate-valve.html",
  order: 2,
};
