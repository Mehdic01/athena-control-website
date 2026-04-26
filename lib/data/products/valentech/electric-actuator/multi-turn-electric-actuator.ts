import type { Product } from "../../types";

export const multiTurnElectricActuator: Product = {
  slug: "multi-turn-electric-actuator",
  name: "Multi-Turn Electric Actuator",
  brand: "valentech",
  category: "electric-actuator",
  shortDescription:
    "Multi-turn electric actuator (VTEM series) with 100–3,000 N.m direct output torque, 18–144 rpm speed range, IP67/IP68 protection, and basic, intelligent, and bus control forms for straight-stroke and quarter-turn valve applications.",
  overview: [
    "The VTEM series Multi-Turn Electric Actuator delivers direct output torque from 100 N.m to 3,000 N.m with an output speed range of 18–144 rpm. For applications requiring higher torque, an electric worm gear box can be installed to extend the output range beyond 3,000 N.m. The actuator is compatible with straight-stroke and quarter-turn valves after appropriate gearbox installation.",
    "Available in basic, intelligent, bus, intelligent split, and other control forms, offering safe, stable, and reliable operation. Standard enclosure protection is IP67, with IP68 available as an option. Operating temperature range is −30°C to +70°C, with a −40°C low-temperature option. Cable entries are 2×NPT 3/4\" with one reserve port.",
  ],
  features: [
    {
      title: "Wide Torque and Speed Range",
      description:
        "Direct output torque from 100 to 3,000 N.m; output speed from 18 to 144 rpm. Electric worm gear box available for higher torque requirements.",
    },
    {
      title: "Multiple Control Forms",
      description:
        "Supports basic, intelligent, bus, intelligent split, and other control configurations for flexible integration into automation systems.",
    },
    {
      title: "IP67/IP68 Protection",
      description:
        "IP67 enclosure as standard; IP68 optional for submerged or severe-ingress environments.",
    },
    {
      title: "Extended Low-Temperature Option",
      description:
        "Standard operating range −30°C to +70°C; −40°C low-temperature variant available for cold climate installations.",
    },
  ],
  applications: [
    "Ball valves",
    "Butterfly valves",
    "Plug valves",
    "Gate valves",
    "Globe valves",
    "Regulating valves",
    "Venting valves",
    "Stop valves",
  ],
  quickSpecs: [
    { label: "Model", value: "VTEM" },
    { label: "Torque Range", value: "100 – 3,000 N.m (direct)" },
    { label: "Speed Range", value: "18 – 144 rpm" },
    { label: "Temperature Range", value: "−30°C to +70°C" },
    { label: "IP Rating", value: "IP67 (IP68 optional)" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Model", value: "VTEM" },
        { label: "Operation Type", value: "Multi-turn" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Torque Range", value: "100 – 3,000 N.m (direct output)" },
        { label: "Speed Range", value: "18 – 144 rpm" },
        { label: "IP Rating", value: "IP67 (standard); IP68 (optional)" },
        { label: "Cable Entries", value: "2×NPT 3/4\" + 1×NPT 3/4\" (reserve)" },
      ],
    },
    {
      title: "Temperature Options",
      specs: [
        { label: "Standard", value: "−30°C to +70°C" },
        { label: "Low Temperature", value: "−40°C to +70°C" },
      ],
    },
  ],
  image: "/images/products/electric-actuator/multi-turn-electric-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/multi-turn-electric-actuator.html",
  order: 1,
};
