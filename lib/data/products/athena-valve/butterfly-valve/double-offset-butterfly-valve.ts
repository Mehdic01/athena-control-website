import type { Product } from "../../types";

export const doubleOffsetButterflyValve: Product = {
  slug: "double-offset-butterfly-valve",
  name: "Double Offset Butterfly Valve",
  brand: "athena-valve",
  category: "butterfly-valve",
  shortDescription:
    "1-1/2\"–80\", Class 150–2500 double eccentric butterfly valve with bi-directional zero leakage and reduced actuation torque.",
  overview: [
    "The Double Offset Butterfly Valve employs a two-eccentric disc geometry with an elastic pressure self-sealing seat structure that delivers bi-directional zero leakage. The cam-effect sealing mechanism progressively loads the seat at closure while immediately releasing upon opening, eliminating seat friction during travel and significantly reducing required actuation torque compared to concentric designs.",
    "Engineered for arduous duty service, these valves are available from 1-1/2\" to 80\" across Class 150 to 2500. The carbon steel or stainless steel wafer-pattern body with RTFE seat conforms to API 609 and ISO 5211. Lower installation depth and actuation costs make them a cost-effective alternative to gate valves in water supply and general industrial pipelines.",
  ],
  features: [
    {
      title: "Bi-Directional Zero Leakage",
      description:
        "Elastic pressure self-sealing seat provides zero leakage in both flow directions across all rated pressure classes.",
    },
    {
      title: "Reduced Actuation Torque",
      description:
        "Cam-effect sealing releases seat contact immediately upon opening, lowering actuator sizing and energy consumption.",
    },
    {
      title: "RTFE Seat",
      description:
        "Reinforced PTFE seat provides excellent chemical resistance and a long service life in corrosive media.",
    },
    {
      title: "Wide Pressure and Size Range",
      description:
        "Available from 1-1/2\" to 80\" in Class 150–2500, covering a broad range of pipeline applications.",
    },
    {
      title: "API 609 Compliant",
      description:
        "Designed and tested to API 609; lever-operated models also conform to ISO 5211.",
    },
  ],
  applications: [
    "Oil and gas",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "District heating",
    "Offshore platforms",
    "Cryogenic services",
    "Pulp and paper",
    "Mining",
    "Boiler steam and drain systems",
  ],
  quickSpecs: [
    { label: "Size Range", value: "1-1/2\" – 80\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "End Connections", value: "Wafer / Lug / RF / RTJ" },
    { label: "Standards", value: "API 609 / ISO 5211" },
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
        { label: "End Connections", value: "Wafer / Lug / RF / RTJ" },
        { label: "Stem Standard", value: "ISO 5211" },
        { label: "Operation", value: "Lever / Gear / Motor / Pneumatic actuators" },
      ],
    },
  ],
  image: "/images/products/butterfly-valves/double-offset-butterfly-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/double-offset-butterfly-valves.html",
  order: 3,
};
