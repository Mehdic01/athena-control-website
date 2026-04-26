import type { Product } from "../../types";

export const gateValveWithPneumaticActuator: Product = {
  slug: "gate-valve-with-pneumatic-actuator",
  name: "Gate Valve with Pneumatic Actuator",
  brand: "valentech",
  category: "complete-actuator-equipment",
  shortDescription:
    "Complete pneumatic gate valve assembly (IP68) combining Athena API 600 gate valves and Valen Tech linear pneumatic actuators; 2\"–48\", Class 150–1500, −29°C to +425°C, carbon or stainless steel, spring return or double acting.",
  overview: [
    "The Pneumatic Gate Valve combines Athena Group gate valves designed to API 600 with Valen Tech linear pneumatic actuators in a complete equipment solution for industrial on/off service. The linear actuator drives the gate element to open or close against the flow. Available in spring-return and double-acting configurations for fail-safe and standard service requirements.",
    "Available in sizes from 2\" to 48\" and pressure ratings from Class 150 to 1500. The valve operating temperature range is −29°C to +425°C. Body materials include carbon steel and stainless steel. The actuator provides IP68-rated enclosure protection and operates from −29°C to +100°C, with a −60°C low-temperature option available on request.",
  ],
  features: [
    {
      title: "API 600 Gate Valve Design",
      description:
        "Gate valve designed to API 600, ensuring compliance with industry standards for industrial isolation service.",
    },
    {
      title: "Spring Return and Double Acting Options",
      description:
        "Available in spring-return and double-acting configurations for fail-safe on air loss or standard bidirectional operation.",
    },
    {
      title: "IP68 Enclosure Protection",
      description:
        "IP68-rated actuator enclosure provides full waterproof protection for demanding outdoor and submerged-service installations.",
    },
    {
      title: "Wide Valve Temperature Range",
      description:
        "Valve operating temperature from −29°C to +425°C accommodates ambient and high-temperature process service.",
    },
  ],
  applications: [
    "Tank farms",
    "Olefin plants",
    "Oil and gas",
    "Petroleum",
    "Chemical industry",
    "Power generation",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 48\"" },
    { label: "Pressure Rating", value: "Class 150 – 1500" },
    { label: "Design Standard", value: "API 600" },
    { label: "Valve Temperature", value: "−29°C to +425°C" },
    { label: "IP Rating", value: "IP68" },
  ],
  specGroups: [
    {
      title: "Valve Specifications",
      specs: [
        { label: "Size Range", value: "2\" – 48\"" },
        { label: "Pressure Rating", value: "Class 150 – 1500" },
        { label: "Design Standard", value: "API 600" },
        { label: "Body Material", value: "Carbon steel, stainless steel" },
        { label: "Operating Temperature", value: "−29°C to +425°C" },
      ],
    },
    {
      title: "Actuator Specifications",
      specs: [
        { label: "Operation Type", value: "Linear action; spring return / double acting" },
        { label: "IP Rating", value: "IP68" },
        { label: "Actuator Temperature", value: "−29°C to +100°C (−60°C on request)" },
      ],
    },
  ],
  image: "/images/products/complete-actuator-equipment/gate-valve-with-pneumatic-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/gate-valve-with-pneumatic-actuator.html",
  order: 3,
};
