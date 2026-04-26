import type { Product } from "../../types";

export const tripleOffsetButterflyValve: Product = {
  slug: "triple-offset-butterfly-valve",
  name: "Triple Offset Butterfly Valve",
  brand: "athena-valve",
  category: "butterfly-valve",
  shortDescription:
    "1-1/2\"–80\", Class 150–2500 triple eccentric butterfly valve with zero leakage and bi-directional sealing.",
  overview: [
    "The Triple Offset Butterfly Valve features a three-eccentric geometry that ensures the sealing disc fully detaches from the seat immediately upon opening, eliminating friction-induced wear and delivering zero-leakage performance throughout its service life. The cam-effect sealing mechanism generates tight metal-to-metal contact at closure while requiring minimal operating torque.",
    "Available in a wide size range from 1-1/2\" to 80\" and pressure classes from 150 LB to 2500 LB, these valves are suited for demanding on-off and throttling duties in oil and gas, petrochemical, and power generation applications. Body materials include carbon steel, stainless steel, alloy steel, and specialty alloys such as Monel, Inconel, and Hastelloy for corrosive or high-temperature service.",
  ],
  features: [
    {
      title: "Zero Leakage",
      description:
        "Triple eccentric geometry ensures bi-directional zero leakage across all pressure classes.",
    },
    {
      title: "Minimal Operating Torque",
      description:
        "Disc detaches from seat immediately upon opening, eliminating friction and reducing actuator sizing requirements.",
    },
    {
      title: "Reduced Wear",
      description:
        "No rubbing contact between disc and seat during travel extends service life significantly over conventional designs.",
    },
    {
      title: "Wide Material Range",
      description:
        "Body and trim available in carbon steel, stainless steel, alloy steel, Monel, Inconel, and Hastelloy for aggressive media.",
    },
    {
      title: "Flexible End Connections",
      description:
        "Supplied in wafer, lug, raised-face flange, butt-weld, and ring-type joint configurations.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries and petrochemical plants",
    "Power generation",
    "District heating systems",
    "Offshore platforms",
    "Cryogenic applications",
    "Pulp and paper",
    "Mining",
    "Boiler steam systems",
  ],
  quickSpecs: [
    { label: "Size Range", value: "1-1/2\" – 80\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "End Connections", value: "Wafer / Lug / RF / BW / RTJ" },
    { label: "Standard", value: "API 609" },
    { label: "Operation", value: "Lever / Gear / Motor / Pneumatic" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "1-1/2\" – 80\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
        { label: "Design Standard", value: "API 609" },
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
        { label: "Seat Material", value: "RTFE" },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections", value: "Wafer / Lug / RF / BW / RTJ" },
        { label: "Operation", value: "Lever / Gear / Motor / Pneumatic actuators" },
      ],
    },
  ],
  image: "/images/products/butterfly-valves/triple-offset-butterfly-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products-triple-offset-butterfly-valve.html",
  order: 1,
};
