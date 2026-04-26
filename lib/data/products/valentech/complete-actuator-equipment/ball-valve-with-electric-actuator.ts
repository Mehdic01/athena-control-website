import type { Product } from "../../types";

export const ballValveWithElectricActuator: Product = {
  slug: "ball-valve-with-electric-actuator",
  name: "Ball Valve with Electric Actuator",
  brand: "valentech",
  category: "complete-actuator-equipment",
  shortDescription:
    "Complete electric ball valve assembly (IP67/IP68) combining Athena ball valves and Valen Tech VTEM multi-turn electric actuators; 2\"–40\", Class 150–2500, 100–3,000 N.m, carbon steel to Hastelloy, for automated on/off and control service.",
  overview: [
    "The Electric Ball Valve combines Athena Group ball valves with Valen Tech VTEM series multi-turn electric actuators in a complete equipment solution for industrial on/off and control service. The electric actuator provides reliable valve positioning with IP67 standard enclosure protection and optional IP68 rating. Multiple optional protection ratings — including BT4/BT6 and CT4/CT6 — accommodate hazardous and demanding environments.",
    "Available in sizes from 2\" to 40\" and pressure ratings from Class 150 to 2500. Body materials include carbon steel, stainless steel, alloy steel, Monel, Inconel, and Hastelloy. End connections include RF, RTJ, and BW. The VTEM series actuator delivers 100–3,000 N.m torque at 18–144 rpm, with ambient temperature range −30°C to +70°C (−40°C optional).",
  ],
  features: [
    {
      title: "VTEM Multi-Turn Electric Actuator",
      description:
        "VTEM series actuator delivers 100–3,000 N.m torque at 18–144 rpm for reliable electric valve positioning.",
    },
    {
      title: "IP67/IP68 Waterproof Protection",
      description:
        "IP67 enclosure as standard; IP68 optional for submerged or severe-ingress service environments.",
    },
    {
      title: "Wide Body Material Range",
      description:
        "Body materials from carbon steel and stainless steel through Monel, Inconel, and Hastelloy for corrosive and high-alloy applications.",
    },
    {
      title: "Multiple Optional Protection Ratings",
      description:
        "Optional BT4/BT6 and CT4/CT6 protection ratings extend compatibility to hazardous classified areas.",
    },
  ],
  applications: [
    "Ball valves",
    "Butterfly valves",
    "Plug valves",
    "Gate valves",
    "Globe valves",
    "Check valves",
    "Regulating valves",
    "Petroleum",
    "Chemical industry",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 40\"" },
    { label: "Pressure Rating", value: "Class 150 – 2500" },
    { label: "Body Material", value: "Carbon Steel / SS / Alloy Steel / Monel / Inconel / Hastelloy" },
    { label: "Actuator Torque", value: "100 – 3,000 N.m" },
    { label: "IP Rating", value: "IP67 (IP68 optional)" },
  ],
  specGroups: [
    {
      title: "Valve Specifications",
      specs: [
        { label: "Size Range", value: "2\" – 40\"" },
        { label: "Pressure Rating", value: "Class 150 – 2500" },
        { label: "End Connections", value: "RF, RTJ, BW" },
        { label: "Body Material", value: "Carbon steel, stainless steel, alloy steel, Monel, Inconel, Hastelloy" },
      ],
    },
    {
      title: "Actuator Specifications",
      specs: [
        { label: "Model", value: "VTEM series" },
        { label: "Torque Range", value: "100 – 3,000 N.m" },
        { label: "Speed Range", value: "18 – 144 rpm" },
        { label: "Ambient Temperature", value: "−30°C to +70°C (−40°C optional)" },
      ],
    },
    {
      title: "Protection",
      specs: [
        { label: "Standard", value: "IP67" },
        { label: "Optional", value: "IP68, BT4/BT6, CT4/CT6" },
      ],
    },
  ],
  image: "/images/products/complete-actuator-equipment/ball-valve-with-electric-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/ball-valve-with-electric-actuator.html",
  order: 4,
};
