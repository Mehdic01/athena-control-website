import type { Product } from "../../types";

export const concentricButterflyValve: Product = {
  slug: "concentric-butterfly-valve",
  name: "Concentric Butterfly Valve",
  brand: "athena-valve",
  category: "butterfly-valve",
  shortDescription:
    "2\"–48\", Class 125–150 soft-sealing concentric butterfly valve with bi-directional sealing and light-weight design.",
  overview: [
    "Concentric butterfly valves are soft-sealing elastic seat-type midline valves designed for switching and regulating fluid flow. With the stem centered in the disc and the disc centered in the bore, these valves offer a symmetric design that delivers bi-directional sealing performance. The rubber-covered valve body provides complete isolation of the medium from metallic components, making them suitable for corrosive service conditions.",
    "Available from 2\" to 48\" in Class 125–150, these valves conform to API 609 and are supplied with genuine raw materials, material test certificates (MTC 3.1), and hydraulic test certificates. Their light weight and low cost make them a practical alternative to gate valves in water treatment, HVAC, and general industrial fluid control.",
  ],
  features: [
    {
      title: "Bi-Directional Sealing",
      description:
        "Symmetric concentric geometry provides reliable sealing in both flow directions.",
    },
    {
      title: "Rubber-Covered Body",
      description:
        "Full rubber lining isolates the body from the medium, extending life in corrosive applications.",
    },
    {
      title: "Light Weight and Low Cost",
      description:
        "Compact, wafer-style construction reduces installation costs and supporting structure requirements.",
    },
    {
      title: "API 609 Compliant",
      description: "Designed and tested in conformance with API 609 design standard.",
    },
    {
      title: "Full Documentation",
      description:
        "Supplied with material test certificates (MTC 3.1), hydraulic test certificates, and third-party inspection options.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Power generation",
    "District heating",
    "Offshore platforms",
    "Pulp and paper",
    "Mining",
    "Cryogenic service",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 48\"" },
    { label: "Pressure Class", value: "125 LB – 150 LB" },
    { label: "End Connections", value: "Wafer / Lug / RF" },
    { label: "Standard", value: "API 609" },
    { label: "Operation", value: "Lever / Gear / Motor / Pneumatic" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 48\"" },
        { label: "Pressure Class", value: "125 LB – 150 LB" },
        { label: "Design Standard", value: "API 609" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body Material",
          value: "Cast iron, Carbon steel, Stainless steel, Bronze",
        },
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
  image: "/images/products/butterfly-valves/concentric-butterfly-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/concentric-butterfly-valve.html",
  order: 2,
};
