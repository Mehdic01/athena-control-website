import type { Product } from "../../types";

export const axialFlowCheckValve: Product = {
  slug: "axial-flow-check-valve",
  name: "Axial Flow Check Valve",
  brand: "athena-valve",
  category: "check-valve",
  shortDescription:
    "2\"–36\", Class 150–1500 axial flow check valve with spring-assisted closure, low pressure drop, and anti-cavitation design for high-flow pipeline service.",
  overview: [
    "The Axial Flow Check Valve employs spring force and back-pressure to restore the disc to the sealing position on flow reversal. The axial flow structure and accurate flowing passage enable little pressure loss and prevent cavitation, while the disc carrier and pin design prevents sticking during operation.",
    "Available from 2\" to 36\" in Class 150–1500 with RF, BW, and RTJ end connections. Body materials include carbon steel, stainless steel, alloy steel, and specialty alloys. Engineered and manufactured in conformance with API 6D and ASME B16.34. Supplied with material test certificates (MTC 3.1) and hydraulic test certificates; third-party inspection is available. Certified to CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "Low Pressure Drop",
      description:
        "Axial flow structure and accurate flowing passage enable little pressure loss and stable flow characteristics.",
    },
    {
      title: "Anti-Cavitation Design",
      description:
        "Engineered to prevent cavitation erosion in high-flow pipeline applications.",
    },
    {
      title: "Non-Sticking Mechanism",
      description:
        "Disc carrier and pin design prevents disc sticking during operation.",
    },
    {
      title: "Low-Noise Operation",
      description:
        "Quiet operation suited to high-flow pipeline applications requiring backflow prevention.",
    },
    {
      title: "Spring-Assisted Closure",
      description:
        "Spring force and back-pressure work together to restore the disc to sealing position on flow reversal.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Power generation",
    "Gas and coal-fired turbines",
    "District heating",
    "Gas measurement systems",
    "Offshore platforms",
    "HIPPS systems",
    "Cryogenic service",
    "Emergency shutdown systems",
    "Pulp and paper",
    "Mining",
    "Boiler steam and drain applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 36\"" },
    { label: "Pressure Class", value: "150 LB – 1500 LB" },
    { label: "End Connections", value: "RF / BW / RTJ" },
    { label: "Standards", value: "API 6D / ASME B16.34" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 36\"" },
        { label: "Pressure Class", value: "150 LB – 1500 LB" },
        { label: "Design Standard", value: "API 6D / ASME B16.34" },
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
      title: "End Connections",
      specs: [
        { label: "End Connections", value: "RF / BW / RTJ" },
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
  image: "/images/products/check-valves/axial-flow-check-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/axial-flow-check-valve.html",
  order: 1,
};
