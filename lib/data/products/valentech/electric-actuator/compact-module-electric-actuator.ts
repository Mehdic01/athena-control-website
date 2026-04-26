import type { Product } from "../../types";

export const compactModuleElectricActuator: Product = {
  slug: "compact-module-electric-actuator",
  name: "Compact Module Electric Actuator",
  brand: "valentech",
  category: "electric-actuator",
  shortDescription:
    "Compact modular electric actuator (VTEQ series) with 50–3,000 N.m direct torque, IP67/IP68 protection, Exd II CT6 explosion-proof rating, and 1% control accuracy for space-constrained valve installations.",
  overview: [
    "The VTEQ series Compact Module Electric Actuator is a new-generation actuator featuring a modular design with extensible functions, suitable for butterfly valves, ball valves, gate valves, and other valve types. Its compact structure enables installation in confined spaces while accommodating a wide range of adaptive valve types. Efficient transmission with structural self-locking ensures reliable positioning.",
    "Standard protection is IP67; IP68 is optional. Explosion-proof rating reaches up to Exd II CT6, making the VTEQ suitable for hazardous area installations. A double anti-condensation design reduces the probability of electrical failure. The independent electronic control unit includes protection circuitry and achieves control accuracy up to 1%. Operating voltage is AC 110V or 220V (±10%, 1-phase, 50/60 Hz ±5%); DC 24V and AC 380V are optional.",
  ],
  features: [
    {
      title: "Compact Modular Design",
      description:
        "Modular construction with extensible functions enables installation in small spaces and easy adaptation to different valve types.",
    },
    {
      title: "High Explosion-Proof Rating",
      description:
        "Explosion-proof rating up to Exd II CT6 for safe operation in hazardous and classified areas.",
    },
    {
      title: "Double Anti-Condensation Design",
      description:
        "Dual anti-condensation measures reduce the probability of electrical failure in humid or high-humidity environments.",
    },
    {
      title: "High Control Accuracy",
      description:
        "Independent electronic control unit with protection circuitry achieves control accuracy up to 1%.",
    },
  ],
  applications: [
    "Butterfly valves",
    "Ball valves",
    "Gate valves",
  ],
  quickSpecs: [
    { label: "Model", value: "VTEQ" },
    { label: "Torque Range", value: "50 – 3,000 N.m (direct); up to 8,000 N.m with gearbox" },
    { label: "Voltage", value: "AC 110V / 220V; DC 24V / AC 380V optional" },
    { label: "Temperature Range", value: "−25°C to +70°C" },
    { label: "IP Rating", value: "IP67 (IP68 optional)" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Model", value: "VTEQ" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Torque Range", value: "50 – 3,000 N.m (direct); 3,000 – 8,000 N.m (with gearbox)" },
        { label: "IP Rating", value: "IP67 (standard); IP68 (optional)" },
        { label: "Explosion-Proof Rating", value: "Exd II CT6" },
        { label: "Control Accuracy", value: "Up to 1%" },
      ],
    },
    {
      title: "Electrical",
      specs: [
        { label: "Operating Voltage", value: "AC 110V, AC 220V ±10% (1-phase); DC 24V, AC 380V optional" },
        { label: "Frequency", value: "50/60 Hz ±5%" },
      ],
    },
    {
      title: "Temperature Options",
      specs: [
        { label: "Standard", value: "−25°C to +70°C" },
      ],
    },
  ],
  image: "/images/products/electric-actuator/compact-module-electric-actuator.png",
  manufacturerUrl:
    "https://www.valen-tech.com/products/compact-module-electric-actuator.html",
  order: 2,
};
