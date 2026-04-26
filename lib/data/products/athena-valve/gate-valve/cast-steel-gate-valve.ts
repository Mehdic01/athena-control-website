import type { Product } from "../../types";

export const castSteelGateValve: Product = {
  slug: "cast-steel-gate-valve",
  name: "Cast Steel Gate Valve",
  brand: "athena-valve",
  category: "gate-valve",
  shortDescription:
    "2\"–48\", Class 150–900 cast steel OS&Y gate valve with low fluid resistance and bidirectional flow capability.",
  overview: [
    "The Cast Steel Gate Valve is a handwheel-operated manual OS&Y gate valve with a cast steel body, bolted bonnet, and non-rising stem design. It delivers low fluid resistance and places no restriction on flow direction, making it suitable for steam, saturated steam, air, gas, and oil service. The valve is commonly specified for steam systems and boiler plant applications.",
    "Available from 2\" to 48\" in Class 150–900, these valves accept manual, gear, motor, or pneumatic actuation. Supplied with genuine raw materials, material test certificates, and hydraulic test certificates; third-party inspection is available. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "Bidirectional Flow",
      description:
        "Non-rising stem and symmetric gate design places no restriction on the direction of media flow.",
    },
    {
      title: "Low Fluid Resistance",
      description:
        "Full bore gate opening minimizes pressure drop and turbulence for efficient pipeline operation.",
    },
    {
      title: "Cast Steel Body",
      description:
        "Robust cast steel construction provides high structural integrity across the full Class 150–900 pressure range.",
    },
    {
      title: "Flexible Actuation",
      description:
        "Available with handwheel, gear, motor, or pneumatic actuators to suit manual or automated operations.",
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
    "District heating",
    "Cryogenic services",
    "Pulp and paper",
    "Mining",
    "Boiler steam applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 48\"" },
    { label: "Pressure Class", value: "150 LB – 900 LB" },
    { label: "End Connections", value: "RF / RTJ / BW" },
    { label: "Operation", value: "Hand wheel / Gear / Motor / Pneumatic" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 48\"" },
        { label: "Pressure Class", value: "150 LB – 900 LB" },
        { label: "Bonnet Type", value: "Bolted Bonnet" },
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
  image: "/images/products/gate-valves/cast-steel-gate-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/cast-steel-gate-valve.html",
  order: 5,
};
