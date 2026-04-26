import type { Product } from "../../types";

export const topEntryBallValve: Product = {
  slug: "top-entry-ball-valve",
  name: "Top Entry Ball Valve",
  brand: "athena-valve",
  category: "ball-valve",

  shortDescription:
    "Top entry trunnion ball valve designed for in-line maintenance, allowing full trim removal without extracting the valve from the pipeline.",

  overview: [
    "The Athena top entry ball valve allows maintenance to be carried out without removing the valve from the pipeline. Trim components can be removed vertically from the bonnet side using specialized tools, dramatically reducing maintenance downtime and installation costs.",
    "Body construction uses forgings for smaller sizes and sand casting for larger sizes. The valve is available in full bore and reduced bore configurations and is certified to API 6FA Fire Safe Design.",
  ],

  features: [
    {
      title: "In-Line Maintainability",
      description:
        "Full trim components can be extracted vertically from the bonnet without removing the valve from the pipeline, minimizing shutdown time.",
    },
    {
      title: "Blow-out Proof Stem",
      description:
        "Stem design prevents ejection under pressure, ensuring safe operation and personnel protection in high-pressure applications.",
    },
    {
      title: "Anti-Static Design",
      description:
        "Electrical continuity between the ball, stem, and body prevents static charge build-up, essential for flammable or explosive media.",
    },
    {
      title: "API 6FA Fire Safe Design",
      description:
        "Qualified to API 6FA fire testing requirements, maintaining integrity and limiting external leakage in fire exposure conditions.",
    },
    {
      title: "Full Bore & Reduced Bore",
      description:
        "Available in both full bore and reduced bore configurations to suit application flow requirements.",
    },
  ],

  applications: [
    "Oil & gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Offshore platforms",
    "Cryogenic services",
    "Pulp & paper industries",
    "Mining",
    "Boiler steam and drain applications",
  ],

  quickSpecs: [
    { label: "Size Range",      value: "2\" – 24\"" },
    { label: "Pressure Rating", value: "Class 150 – 1500" },
    { label: "Body Material",   value: "Carbon Steel / Stainless Steel / Alloy Steel" },
    { label: "End Connections", value: "RF / RTJ / BW" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range",      value: "2\" – 24\"" },
        { label: "Pressure Rating", value: "Class 150 – 1500" },
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
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL" },
        { label: "Fire Safe",      value: "API 6FA" },
      ],
    },
  ],

  image: "/images/products/ball-valves/top-entry-ball-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/top-entry-ball-valve.html",
  order: 2,
};
