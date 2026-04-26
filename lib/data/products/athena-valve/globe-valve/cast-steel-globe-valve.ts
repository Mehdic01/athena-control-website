import type { Product } from "../../types";

export const castSteelGlobeValve: Product = {
  slug: "cast-steel-globe-valve",
  name: "Cast Steel Globe Valve",
  brand: "athena-valve",
  category: "globe-valve",
  shortDescription:
    "2\"–18\", Class 150–1500 cast steel globe valve per BS 1873 with streamlined body, OS&Y rising stem, and back-seating arrangement.",
  overview: [
    "The Cast Steel Globe Valve is designed to BS 1873 with a streamlined body that provides a full flow-way area for smooth fluid passage and minimum pressure drop. The outside screw and yoke (OS&Y) rising stem incorporates stainless steel seat rings and a back-seating arrangement that permits replacement of gland packing in the fully open position while the valve remains under inline pressure, reducing maintenance downtime.",
    "Available from 2\" to 18\" in Class 150–1500 with RF, RTJ, and BW end connections, these valves are operated by handwheel, gear, motor, or pneumatic actuator. A bolted self-aligning two-piece gland and self-aligning loose valve disc on stem contribute to tight shut-off and efficient flow control. Certified to NACE MR0175, CE/PED, ISO, ATEX, and SIL.",
  ],
  features: [
    {
      title: "Streamlined Body Design",
      description:
        "Full flow-way area minimizes pressure drop and turbulence for smooth fluid passage through the valve.",
    },
    {
      title: "Back-Seating Arrangement",
      description:
        "Permits replacement of gland packing in the fully open position while the valve is under inline pressure.",
    },
    {
      title: "Stainless Steel Seat Rings",
      description:
        "Stainless steel seat rings provide durable, corrosion-resistant seating for tight shut-off across all rated pressure classes.",
    },
    {
      title: "Self-Aligning Loose Disc",
      description:
        "Loose valve disc on stem self-aligns to the seat at closure, ensuring even seating load and extended seat life.",
    },
    {
      title: "BS 1873 Design",
      description:
        "Engineered and manufactured in conformance with BS 1873 for cast steel globe and check valves.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Gas and coal-fired turbines",
    "District heating",
    "Offshore platforms",
    "Cryogenic service",
    "Emergency shutdown valves",
    "Pulp and paper",
    "Mining",
    "Boiler steam and drain applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 18\"" },
    { label: "Pressure Class", value: "150 LB – 1500 LB" },
    { label: "End Connections", value: "RF / RTJ / BW" },
    { label: "Design Standard", value: "BS 1873" },
    { label: "Certifications", value: "NACE MR0175, CE/PED, ISO, ATEX, SIL" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 18\"" },
        { label: "Pressure Class", value: "150 LB – 1500 LB" },
        { label: "Design Standard", value: "BS 1873" },
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
        { label: "Seat Rings", value: "Stainless steel" },
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
  image: "/images/products/globe-valves/cast-steel-globe-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/Cast-Steel-Globe-Valves.html",
  order: 3,
};
