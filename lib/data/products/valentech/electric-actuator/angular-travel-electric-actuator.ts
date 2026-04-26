import type { Product } from "../../types";

export const angularTravelElectricActuator: Product = {
  slug: "angular-travel-electric-actuator",
  name: "Angular Travel Electric Actuator",
  brand: "valentech",
  category: "electric-actuator",
  shortDescription:
    "Angular travel electric actuator (VTL series) with 50–6,000 Nm torque, 0–90° stroke, ISO5211 flange connection, IP67/IP68 protection, and multi-voltage support for precise modulating control of rotary valves.",
  overview: [
    "The VTL series Angular Travel Electric Actuator controls 0–300° rotating valves including butterfly valves, ball valves, plug valves, and louver valves. It operates via 4–20 mA current or 0–10 V DC voltage signals to position valves automatically, enabling remote control across a wide range of industrial applications.",
    "The VTL series features compact size and lightweight construction with a standard stroke angle of 0–90° (±1%) and ISO5211 flange connection. Protection rating is IP67 standard, with IP68 available as an option. Operating voltage options cover AC 415V, 380V, 240V, 220V, and 110V, as well as DC 12V, 24V, and 48V. Operating temperature range is −25°C to +70°C with 30%–95% ambient humidity.",
  ],
  features: [
    {
      title: "Multi-Voltage Support",
      description:
        "Accepts AC 415V, 380V, 240V, 220V, and 110V, as well as DC 12V, 24V, and 48V, for compatibility with diverse site power supplies.",
    },
    {
      title: "ISO5211 Flange Connection",
      description:
        "ISO5211-compliant flange interface enables standardized direct mounting to rotary valves without adaptors.",
    },
    {
      title: "Precise Modulating Control",
      description:
        "Operates on 4–20 mA or 0–10 V DC control signals for accurate valve positioning and modulating service.",
    },
    {
      title: "IP67/IP68 Protection",
      description:
        "IP67 enclosure as standard; IP68 rated to 15 m for 72 hours available as an option for submerged or severe-ingress applications.",
    },
  ],
  applications: [
    "Petroleum",
    "Chemical industry",
    "Power generation",
    "Metallurgy",
    "Pharmaceutical",
    "Papermaking",
    "Water treatment",
    "Marine",
    "Textile",
    "Food processing",
    "Building automation",
    "Butterfly valves",
    "Ball valves",
    "Plug valves",
    "Louver valves",
  ],
  quickSpecs: [
    { label: "Model", value: "VTL" },
    { label: "Torque Range", value: "50 – 6,000 Nm" },
    { label: "Stroke Angle", value: "0 – 90° (±1%)" },
    { label: "Temperature Range", value: "−25°C to +70°C" },
    { label: "IP Rating", value: "IP67 (IP68 optional)" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Model", value: "VTL" },
        { label: "Stroke Angle", value: "0 – 90° (±1%)" },
        { label: "Connection", value: "ISO5211 flange" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Torque Range", value: "50 – 6,000 Nm (direct connection)" },
        { label: "IP Rating", value: "IP67 (standard); IP68 15 m / 72 h (optional)" },
      ],
    },
    {
      title: "Electrical",
      specs: [
        { label: "AC Voltage Options", value: "415V, 380V, 240V, 220V, 110V" },
        { label: "DC Voltage Options", value: "12V, 24V, 48V" },
        { label: "Control Signal", value: "4–20 mA / 0–10 V DC" },
        { label: "Humidity", value: "30% – 95%" },
      ],
    },
    {
      title: "Temperature Options",
      specs: [
        { label: "Standard", value: "−25°C to +70°C" },
      ],
    },
  ],
  image: "/images/products/electric-actuator/angular-travel-electric-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/angular-travel-electric-actuator.html",
  order: 4,
};
