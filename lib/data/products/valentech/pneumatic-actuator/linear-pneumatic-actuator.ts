import type { Product } from "../../types";

export const linearPneumaticActuator: Product = {
  slug: "linear-pneumatic-actuator",
  name: "Linear Pneumatic Actuator",
  brand: "valentech",
  category: "pneumatic-actuator",
  shortDescription:
    "Linear pneumatic actuator converting compressed air into linear motion for on/off, modulating, and HIPPS valve service; up to 3,000 KN output force, IP67, available in carbon or stainless steel.",
  overview: [
    "The Linear Pneumatic Actuator converts the energy in compressed air into linear motion through controlled air supply and exhaust, enabling cylinder telescopic movement. Comprising a cylinder, piston, seal, and guide, compressed air directed through a control valve creates pressure differences that cause the piston to move reciprocally.",
    "Available in spring return and double acting configurations for on/off, modulating, or HIPPS valve service. Body materials include carbon steel and stainless steel. Rated to IP67. Output force up to 3,000 KN. Operating temperature −29°C to +100°C; −60°C available upon request.",
  ],
  features: [
    {
      title: "Spring Return and Double Acting Options",
      description:
        "Available in spring return or double acting configurations to suit on/off, modulating, or HIPPS valve service.",
    },
    {
      title: "High Output Force",
      description:
        "High pressure ratings deliver output forces up to 3,000 KN for demanding linear valve applications.",
    },
    {
      title: "IP67 Protection",
      description:
        "IP67-rated enclosure provides waterproof protection for outdoor and harsh-environment installations.",
    },
    {
      title: "Carbon or Stainless Steel Construction",
      description:
        "Available in carbon steel or stainless steel to suit corrosion and material compatibility requirements.",
    },
  ],
  applications: [
    "Ball valves",
    "Butterfly valves",
    "Plug valves",
    "Gate valves",
    "Globe valves",
  ],
  quickSpecs: [
    { label: "Model", value: "VTB" },
    { label: "Max Output Force", value: "3,000 KN" },
    { label: "Temperature Range", value: "−29°C to +100°C" },
    { label: "IP Rating", value: "IP67" },
    { label: "Body Material", value: "Carbon steel / Stainless steel" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Model", value: "VTB" },
        { label: "Operation Type", value: "Spring return / Double acting" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Max Output Force", value: "3,000 KN" },
        { label: "Temperature Range", value: "−29°C to +100°C (−60°C on request)" },
        { label: "IP Rating", value: "IP67" },
      ],
    },
    {
      title: "Materials",
      specs: [
        { label: "Body Material", value: "Carbon steel / Stainless steel" },
      ],
    },
  ],
  image: "/images/products/pneumatic-actuator/linear-pneumatic-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/linear-pneumatic-actuator.html",
  order: 3,
};
