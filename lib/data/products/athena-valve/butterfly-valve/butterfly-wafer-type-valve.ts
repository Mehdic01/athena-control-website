import type { Product } from "../../types";

export const butterflyWaferTypeValve: Product = {
  slug: "butterfly-wafer-type-valve",
  name: "Butterfly Wafer Type Valve",
  brand: "athena-valve",
  category: "butterfly-valve",
  shortDescription:
    "2\"–48\", Class 125–600 high-performance wafer butterfly valve with stainless steel trim for isolation and throttling service.",
  overview: [
    "The Butterfly Wafer Type Valve is a high-performance concentric butterfly valve featuring a stainless steel body and stainless steel trim, designed for isolation and throttling service across a wide range of media including heating hot water, chilled water, steam, viscous liquids, corrosive liquids, and corrosive gases. Its compact wafer construction minimizes face-to-face dimensions and overall weight.",
    "Available from 2\" to 48\" in Class 125–600, the valve is suited for commercial, industrial, and mechanical HVAC applications as well as fire-safe refinery operations. All valves are supplied with material test certificates and hydraulic test certificates; third-party inspection is available upon request.",
  ],
  features: [
    {
      title: "High-Performance Design",
      description:
        "Stainless steel body and trim provide durability and sealing integrity across a wide range of service conditions.",
    },
    {
      title: "Broad Media Compatibility",
      description:
        "Handles general applications through viscous and corrosive liquids, corrosive gases, and high-temperature steam.",
    },
    {
      title: "Throttling Capability",
      description:
        "Suitable for both isolation and throttling service including steam control and flow regulation.",
    },
    {
      title: "Fire-Safe Rated",
      description:
        "Qualified for fire-safe service in refinery and petrochemical operations.",
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
    "HVAC systems",
    "Pulp and paper",
    "Mining",
    "Boiler steam applications",
    "Cryogenic services",
    "Emergency shutdown systems",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 48\"" },
    { label: "Pressure Class", value: "125 LB – 600 LB" },
    { label: "End Connections", value: "Wafer / Lug / RF" },
    { label: "Stem Standard", value: "ISO 5211" },
    { label: "Operation", value: "Lever / Gear / Motor / Pneumatic" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 48\"" },
        { label: "Pressure Class", value: "125 LB – 600 LB" },
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
        { label: "Trim Material", value: "Stainless steel" },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections", value: "Wafer / Lug / RF" },
        { label: "Stem Standard", value: "ISO 5211" },
        { label: "Operation", value: "Lever / Gear / Motor / Pneumatic actuators" },
      ],
    },
  ],
  image: "/images/products/butterfly-valves/butterfly-wafer-type-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/product-detail/butterfly-wafer-type-valve.html",
  order: 4,
};
