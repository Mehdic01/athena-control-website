import type { Product } from "../../types";

export const plugValve: Product = {
  slug: "plug-valve",
  name: "Plug Valve",
  brand: "athena-valve",
  category: "plug-valve",
  shortDescription:
    "1/2\"–36\", Class 150–900 plug valve per API 6D / API 599 / ASME B16.34, available in lubricated, non-lubricated, soft sealing, and hard sealing configurations with quarter-turn operation.",
  overview: [
    "The Plug Valve operates on the same quarter-turn principle as ball valves. Sealing is achieved through the polished plug rotating within the valve body; the plug can be straight or tapered depending on operational requirements. Sealing energy comes from mechanical force built into the valve at the assembly stage.",
    "Available in lubricated and lined plug valve variants including soft sealing, hard sealing, lubricated, and non-lubricated configurations. Port patterns include short pattern, regular pattern, Venturi pattern, round port, and jacketed designs. Available from 1/2\" to 36\" in Class 150–900 with RF, BW, RTJ, SW, and FNPT end connections in full bore and reduced bore variants. Manufactured in conformance with API 6D, API 599, ASME B16.34, ASTM, ANSI, EN, DIN, and BS standards. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "Multiple Sealing Configurations",
      description:
        "Available in soft sealing, hard sealing, lubricated, and non-lubricated variants to suit varying shutoff and torque requirements.",
    },
    {
      title: "Quarter-Turn Operation",
      description:
        "Quarter-turn actuation via manual hand lever or actuating device provides fast, simple on/off control.",
    },
    {
      title: "Versatile Port Patterns",
      description:
        "Available in short pattern, regular pattern, Venturi pattern, round port, and jacketed designs.",
    },
    {
      title: "Multi-Standard Compliance",
      description:
        "Manufactured in conformance with API 6D, API 599, ASME B16.34, ASTM, ANSI, EN, DIN, and BS standards.",
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
    { label: "Size Range", value: "1/2\" – 36\"" },
    { label: "Pressure Class", value: "150 LB – 900 LB" },
    { label: "End Connections", value: "RF / BW / RTJ / SW / FNPT" },
    { label: "Standards", value: "API 6D / API 599 / ASME B16.34" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "1/2\" – 36\"" },
        { label: "Pressure Class", value: "150 LB – 900 LB" },
        { label: "Design Standard", value: "API 6D / API 599 / ASME B16.34" },
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
        { label: "End Connections", value: "RF / BW / RTJ / SW / FNPT" },
        { label: "Operation", value: "Manual lever / Gear motor / Pneumatic actuators" },
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
  image: "/images/products/plug-valves/plug-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/plug-valve.html",
  order: 2,
};
