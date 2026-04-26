import type { Product } from "../../types";

export const dbbBallValve: Product = {
  slug: "dbb-ball-valve",
  name: "Double Block and Bleed Ball Valve",
  brand: "athena-valve",
  category: "ball-valve",

  shortDescription:
    "API 6D double block and bleed ball valve combining two in-line isolation seats and a bleed valve in a single compact body, available from 2\" to 24\" across Class 150 to 2500.",

  overview: [
    "The Athena double block and bleed (DBB) ball valve integrates two in-line isolation valves into a single body with an additional bleed valve. This design provides double isolation from both upstream and downstream pressure, with the ability to vent or monitor the cavity between the two sealing surfaces.",
    "The single-body construction saves weight and space compared to two separate valves with a bleed fitting, while also reducing the number of potential leak paths. Full bore and reduced bore configurations are available.",
  ],

  features: [
    {
      title: "Double Block and Bleed",
      description:
        "Two in-line isolation seats in a single body with a bleed valve allow double isolation and cavity venting from one compact assembly.",
    },
    {
      title: "Weight & Space Saving",
      description:
        "Single-body design eliminates two pipe flanges and reduces total weight and installation footprint compared to two separate valves.",
    },
    {
      title: "Blow-out Proof Stem",
      description:
        "Stem design prevents ejection under pressure, ensuring safe operation in high-pressure applications.",
    },
    {
      title: "Anti-Static Design",
      description:
        "Electrical continuity between ball, stem, and body prevents static charge build-up.",
    },
    {
      title: "API 6FA Fire Safe Design",
      description:
        "Qualified to API 6FA fire testing requirements for use in fire-risk environments.",
    },
  ],

  applications: [
    "Oil & gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Offshore platforms",
    "Cryogenic services",
    "Emergency shutdown systems",
    "Pulp & paper industries",
  ],

  quickSpecs: [
    { label: "Size Range",      value: "2\" – 24\"" },
    { label: "Pressure Rating", value: "Class 150 – 2500" },
    { label: "Body Material",   value: "Carbon Steel / Stainless Steel / Alloy Steel" },
    { label: "End Connections", value: "RF / RTJ / BW" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range",      value: "2\" – 24\"" },
        { label: "Pressure Rating", value: "Class 150 – 2500" },
        { label: "Bore",            value: "Full Bore / Reduced Bore" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body",
          value: "Carbon Steel, Stainless Steel, Alloy Steel, Monel, Inconel, Hastelloy",
        },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections",  value: "RF / RTJ / BW" },
        { label: "Actuator Options", value: "Lever, Gear Motor, Pneumatic" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Design Standard", value: "API 6D" },
        { label: "Certifications",  value: "CE/PED, ISO, ATEX, SIL" },
        { label: "Fire Safe",       value: "API 6FA" },
      ],
    },
  ],

  image: "/images/products/ball-valves/dbb-ball-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/dbb-ball-valves.html",
  order: 8,
};
