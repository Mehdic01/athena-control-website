import type { Product } from "../../types";

export const angleGlobeValve: Product = {
  slug: "angle-globe-valve",
  name: "Angle Globe Valve",
  brand: "athena-valve",
  category: "globe-valve",
  shortDescription:
    "1/2\"–2\", Class 150–2500 angle globe valve with 90° or 45° body geometry and streamlined curved bore for optimal flow.",
  overview: [
    "The Angle Globe Valve is a modification of the standard globe valve where the inlet and outlet ports are oriented at a 90° or 45° angle rather than in-line. The streamlined curved bore creates an optimal flow path with a lower Cv value compared to straight-pattern globes, making it well suited for periodic pulsating flow and applications prone to slugging effects.",
    "Available from 1/2\" to 2\" in Class 150–2500, optional features include packing flushing connections and heating steam jackets to prevent medium accumulation in the body. Anti-static design and API 6FA Fire Safe certification are standard. Multiple bonnet constructions and end connections are offered. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "90° / 45° Angle Body",
      description:
        "Inlet and outlet ports at a right angle eliminate one pipe elbow and reduce overall piping layout complexity.",
    },
    {
      title: "Streamlined Curved Bore",
      description:
        "Optimized internal flow path reduces pressure drop and turbulence, delivering a lower Cv value than straight-pattern designs.",
    },
    {
      title: "Pulsating Flow Capability",
      description:
        "Designed to handle periodic pulsating flow and slugging effects without seat damage or instability.",
    },
    {
      title: "Optional Steam Jacket",
      description:
        "Heating steam jacket option prevents medium accumulation and solidification in the valve body for high-viscosity or solidifying media.",
    },
    {
      title: "Anti-Static and Fire Safe",
      description:
        "Anti-static design and API 6FA Fire Safe certification as standard.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Power generation",
    "Offshore platforms",
    "Cryogenic service",
    "Emergency shutdown systems",
    "Pulp and paper",
    "Mining",
    "Boiler steam applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "1/2\" – 2\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "End Connections", value: "RF / RTJ / BW / SW / FNPT" },
    { label: "Bonnet Types", value: "Bolted / Welded / Pressure Seal" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "1/2\" – 2\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
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
        { label: "Fire Safe", value: "API 6FA" },
        { label: "Material Standard", value: "NACE MR0175" },
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL" },
      ],
    },
  ],
  image: "/images/products/globe-valves/angle-globe-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/angle-globe-valve.html",
  order: 1,
};
