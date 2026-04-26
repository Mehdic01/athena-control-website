import type { Product } from "../../types";

export const cryogenicBallValve: Product = {
  slug: "cryogenic-ball-valve",
  name: "Cryogenic Ball Valve",
  brand: "athena-valve",
  category: "ball-valve",

  shortDescription:
    "Ball valve engineered for cryogenic service down to -196°C, with an integral bonnet extension and rising stem design to protect stem packing from cryogenic liquids.",

  overview: [
    "Athena cryogenic ball valves are designed for extremely low-temperature service. An integral bonnet extension keeps the stem packing away from the cryogenic liquid, allowing the liquid to boil and convert to gas before reaching the packing area, preventing seal degradation.",
    "The valve incorporates a body cavity relief hole in the ball to prevent over-pressure due to thermal expansion of trapped media. A live loaded stem seal ensures consistent sealing across the full temperature range. Available in full bore and reduced bore configurations.",
  ],

  features: [
    {
      title: "Integral Bonnet Extension",
      description:
        "Extended bonnet keeps stem packing isolated from cryogenic liquids, allowing media to convert to gas before reaching the packing and preventing seal damage.",
    },
    {
      title: "Body Cavity Relief Hole",
      description:
        "Relief hole in the ball prevents over-pressure caused by thermal expansion of trapped cryogenic liquid in the body cavity.",
    },
    {
      title: "Rising Stem Design",
      description:
        "Rising stem ball valve configuration provides visual indication of valve position and reliable operation at cryogenic temperatures.",
    },
    {
      title: "Live Loaded Stem Seal",
      description:
        "Spring-energized stem seal maintains consistent sealing force across the full cryogenic temperature range.",
    },
    {
      title: "Blow-out Proof Stem",
      description:
        "Stem design prevents ejection under pressure, ensuring safe operation in high-pressure cryogenic applications.",
    },
    {
      title: "API 6FA Fire Safe Design",
      description:
        "Qualified to API 6FA fire testing requirements even in cryogenic service installations.",
    },
  ],

  applications: [
    "Liquid oxygen (LO₂) service",
    "Liquid hydrogen (LH₂) service",
    "Liquid nitrogen (LN₂) service",
    "LNG plants and terminals",
    "Liquid methane service",
    "Ammonia and fluorine service",
    "Oil & gas processing",
    "Petrochemical plants",
    "Emergency shutdown systems",
  ],

  quickSpecs: [
    { label: "Size Range",        value: "1/2\" – 24\"" },
    { label: "Pressure Rating",   value: "Class 150 – 600" },
    { label: "Temperature Range", value: "Down to -196°C" },
    { label: "Body Material",     value: "Low Temp Carbon Steel / Stainless Steel" },
    { label: "End Connections",   value: "RF / RTJ / BW / SW / NPT" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range",        value: "1/2\" – 24\"" },
        { label: "Pressure Rating",   value: "Class 150 – 600" },
        { label: "Temperature Range", value: "Down to -196°C" },
        { label: "Bore",              value: "Full Bore / Reduced Bore" },
      ],
    },
    {
      title: "Materials",
      specs: [
        { label: "Body", value: "Low Temperature Carbon Steel, Stainless Steel" },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections",  value: "RF / RTJ / BW / SW / NPT" },
        { label: "Actuator Options", value: "Handwheel, Gear, Motor, Pneumatic" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL" },
        { label: "Fire Safe",      value: "API 6FA" },
      ],
    },
  ],

  image: "/images/products/ball-valves/cryogenic-ball-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/cryogenic-ball-valve.html",
  order: 5,
};
