import type { Product } from "../../types";

export const partiallyRotaryElectricActuator: Product = {
  slug: "partially-rotary-electric-actuator",
  name: "Quarter Turn Electric Actuator",
  brand: "valentech",
  category: "electric-actuator",
  shortDescription:
    "Quarter-turn electric actuator (VTLQ series) with 50–6,000 Nm torque, 90° stroke, double worm gear self-locking, built-in thermal motor protection, and manual handwheel for butterfly, ball, and plug valve control.",
  overview: [
    "The VTLQ series Quarter Turn Electric Actuator controls valve operation through 90° rotational movement, suitable for butterfly valves, ball valves, and plug valves. It enables remote control and on-site operation for valve opening, closing, and adjustment across industrial applications. The worm gear mechanism provides accurate transmission with low noise and high output torque, covering a range of 50 to 6,000 Nm.",
    "A double worm gear self-locking mechanism prevents reversal, and external mechanical limit stops prevent overtravel. A built-in thermal switch protects the motor against overload with insulation class F. Torque switches provide additional overload protection while limit switches enable precise positioning. A manual handwheel allows emergency valve control during power failure. Shell construction is oxidized aluminum alloy with polyester powder coating.",
  ],
  features: [
    {
      title: "Double Worm Gear Self-Locking",
      description:
        "Double worm gear mechanism prevents reversal and holds valve position without power; external mechanical limit stops prevent overtravel.",
    },
    {
      title: "Built-In Motor Protection",
      description:
        "Built-in thermal switch and torque switches protect the motor against overload; insulation class F.",
    },
    {
      title: "Manual Emergency Operation",
      description:
        "Hand wheel enables emergency valve control during power failure, ensuring operational continuity.",
    },
    {
      title: "Precise Limit and Torque Control",
      description:
        "Limit switches enable precise positioning; torque switches provide overload protection throughout the stroke.",
    },
  ],
  applications: [
    "Butterfly valves",
    "Ball valves",
    "Plug valves",
    "Power generation",
    "Metallurgy",
    "Petroleum",
    "Chemical industry",
    "Food processing",
    "Textile",
    "Papermaking",
    "Pharmaceutical",
    "Water treatment",
  ],
  quickSpecs: [
    { label: "Model", value: "VTLQ" },
    { label: "Torque Range", value: "50 – 6,000 Nm" },
    { label: "Stroke Angle", value: "90° ±10° (0°–270° optional)" },
    { label: "Temperature Range", value: "−25°C to +60°C" },
    { label: "Shell Material", value: "Oxidized aluminum alloy" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Model", value: "VTLQ" },
        { label: "Stroke Angle", value: "90° ±10° (0°–270° optional)" },
        { label: "Shell Material", value: "Oxidized aluminum alloy with polyester powder coating" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Torque Range", value: "50 – 6,000 Nm" },
        { label: "Operating Temperature", value: "−25°C to +60°C" },
      ],
    },
    {
      title: "Materials",
      specs: [
        { label: "Shell", value: "Oxidized aluminum alloy with polyester powder coating" },
        { label: "Components", value: "Steel, aluminum alloy, aluminum bronze, polycarbonate" },
      ],
    },
  ],
  image: "/images/products/electric-actuator/partially-rotary-electric-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/partially-rotary-electric-actuator.html",
  order: 3,
};
