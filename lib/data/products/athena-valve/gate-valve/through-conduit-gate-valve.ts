import type { Product } from "../../types";

export const throughConduitGateValve: Product = {
  slug: "through-conduit-gate-valve",
  name: "Through Conduit Gate Valve",
  brand: "athena-valve",
  category: "gate-valve",
  shortDescription:
    "2\"–60\", Class 150–2500 full-bore through conduit gate valve for high-pressure, high-temperature isolation with minimal pressure drop.",
  overview: [
    "The Through Conduit Gate Valve features a full-port bi-directional gate that maintains a continuous, unobstructed flow path when open, eliminating the cavities that trap media in conventional gate valves. This design prevents product contamination, simplifies pigging operations, and is particularly suited to applications requiring frequent flow path cleaning.",
    "Available from 2\" to 60\" in Class 150–2500 with flanged and butt-weld end connections, these valves handle oil, gas, and liquid services at temperatures up to 200°C. They are suitable for both isolation and throttling duties and conform to API 6D and API 600 standards. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "Full Port Bi-Directional Flow",
      description:
        "Continuous bore through the gate provides unrestricted flow in both directions, eliminating media trapping cavities.",
    },
    {
      title: "Piggable Design",
      description:
        "Unobstructed conduit allows pipeline pigs to pass through freely for inspection and cleaning operations.",
    },
    {
      title: "Minimal Pressure Drop",
      description:
        "Through-conduit geometry minimizes turbulence and pressure loss compared to conventional gate designs.",
    },
    {
      title: "High-Pressure and High-Temperature",
      description:
        "Rated to Class 2500 and up to 200°C, covering the most demanding pipeline isolation requirements.",
    },
    {
      title: "API 6D / API 600 Compliant",
      description:
        "Designed and tested to API 6D and API 600 standards for pipeline and process applications.",
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
    "Boiler steam applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 60\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "Max. Temperature", value: "200°C" },
    { label: "End Connections", value: "RF / RTJ / BW" },
    { label: "Standards", value: "API 6D / API 600 / NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 60\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
        { label: "Maximum Temperature", value: "200°C" },
        { label: "Design Standards", value: "API 6D / API 600" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body Material",
          value: "Carbon steel, Stainless steel, Alloy steel",
        },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections", value: "RF / RTJ / BW" },
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
  image: "/images/products/gate-valves/through-conduit-gate-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/through-conduit-type-gate-valve.html",
  order: 7,
};
