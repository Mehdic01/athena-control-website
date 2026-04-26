import type { Product } from "../../types";

export const rackAndPinionPneumaticActuator: Product = {
  slug: "rack-and-pinion-pneumatic-actuator",
  name: "Rack and Pinion Pneumatic Actuator",
  brand: "valentech",
  category: "pneumatic-actuator",
  shortDescription:
    "Aluminum alloy rack and pinion pneumatic actuator (VTA series) with linear torque output, NAMUR-compliant accessory interface, and 3–10 bar air supply for 90° rotary valve automation.",
  overview: [
    "The VTA series Rack and Pinion Pneumatic Actuator is developed using new technologies, materials, and processes to deliver a compact structure with linear torque output throughout the stroke. Connection dimensions meet international standards and direct installation of compatible accessories is supported. The rotary stroke design makes it suitable for automating ball, butterfly, and plug valves.",
    "The rack and pinion design often represents the most economical solution for small to medium-diameter rotary valves or valves requiring constant torque during the entire stroke. Body material is aluminum alloy. Operating pressure options include 3, 4, 5, 6, and 10 bar. Complies with EN 15714-3, ISO 5211, DIN 3337, VDI/VDE 3845, and NAMUR standards.",
  ],
  features: [
    {
      title: "Linear Torque Output",
      description:
        "Rack and pinion mechanism delivers consistent linear torque throughout the full 90° stroke.",
    },
    {
      title: "Compact Aluminum Alloy Construction",
      description:
        "Lightweight aluminum alloy body provides a compact, cost-effective solution for small to medium-diameter rotary valves.",
    },
    {
      title: "NAMUR-Compliant Accessory Interface",
      description:
        "Connection dimensions comply with NAMUR, VDI/VDE 3845, and ISO 5211, enabling direct installation of accessories without adaptors.",
    },
    {
      title: "Wide Pressure Range",
      description:
        "Accepts air supply at 3, 4, 5, 6, or 10 bar to suit varying site utility conditions.",
    },
  ],
  applications: [
    "Ball valves",
    "Butterfly valves",
    "Plug valves",
    "Petroleum",
    "Chemical industry",
    "Power generation",
    "Metallurgy",
  ],
  quickSpecs: [
    { label: "Model", value: "VTA" },
    { label: "Body Material", value: "Aluminum alloy" },
    { label: "Air Supply", value: "3 / 4 / 5 / 6 / 10 bar" },
    { label: "Standards", value: "EN 15714-3, ISO 5211, NAMUR" },
    { label: "Temperature Range", value: "−20°C to +80°C (standard)" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Model", value: "VTA" },
        { label: "Body Material", value: "Aluminum alloy" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Air Supply", value: "3 / 4 / 5 / 6 / 10 bar" },
      ],
    },
    {
      title: "Temperature Options",
      specs: [
        { label: "Standard", value: "−20°C to +80°C" },
        { label: "Low Temperature", value: "−40°C to +80°C" },
        { label: "Ultra-Low Temperature", value: "−60°C to +80°C" },
        { label: "High Temperature", value: "−20°C to +160°C" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Design Standards", value: "EN 15714-3, ISO 5211, DIN 3337, VDI/VDE 3845, NAMUR" },
      ],
    },
  ],
  image: "/images/products/pneumatic-actuator/rack-and-pinion-pneumatic-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/rack-and-pinion-pneumatic-actuator.html",
  order: 4,
};
