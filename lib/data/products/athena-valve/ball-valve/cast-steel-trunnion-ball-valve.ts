import type { Product } from "../../types";

export const castSteelTrunnionBallValve: Product = {
  slug: "cast-steel-trunnion-ball-valve",
  name: "Cast Steel Trunnion Ball Valve",
  brand: "athena-valve",
  category: "ball-valve",

  shortDescription:
    "High-performance cast steel trunnion-mounted ball valve for large-diameter, high-line-pressure pipelines from 2\" to 40\" across Class 150 to 600.",

  overview: [
    "Athena cast steel trunnion ball valves feature a fixed ball supported at two pivot points by trunnion bearings, allowing only pivoting movement. This design significantly reduces operating torque in high-pressure, large-bore applications where a floating ball design would require excessive stem force.",
    "The upstream seat is a floating seat: process pressure pushes it against the ball's sealing surface to achieve bubble-tight shutoff. The valve is available with soft seat for precise shutoff or metal seat for aggressive service conditions.",
  ],

  features: [
    {
      title: "Trunnion-Mounted Ball",
      description:
        "Ball constrained at two pivot points by trunnion bearings, dramatically reducing operating torque in high-pressure, large-bore service.",
    },
    {
      title: "Floating Upstream Seat",
      description:
        "Upstream seat floats against the ball's sealing surface under process pressure, providing bubble-tight shutoff.",
    },
    {
      title: "Blow-out Proof Stem",
      description:
        "Stem design prevents ejection under pressure for safe operation in high-pressure applications.",
    },
    {
      title: "Anti-Static Design",
      description:
        "Electrical continuity between ball, stem, and body prevents static charge build-up.",
    },
    {
      title: "API 607 Fire Safe Design",
      description:
        "Certified to API 607 fire testing requirements, maintaining integrity in fire exposure conditions.",
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
    { label: "Size Range",      value: "2\" – 40\"" },
    { label: "Pressure Rating", value: "Class 150 – 600" },
    { label: "Body Material",   value: "Carbon Steel / Stainless Steel / Alloy Steel" },
    { label: "End Connections", value: "RF / RTJ / BW" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range",      value: "2\" – 40\"" },
        { label: "Pressure Rating", value: "Class 150 – 600" },
        { label: "Bore",            value: "Full Bore / Reduced Bore" },
        { label: "Seat Type",       value: "Soft Seat / Metal Seat" },
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
        { label: "Actuator Options", value: "Lever, Gear, Motor, Pneumatic" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL" },
        { label: "Fire Safe",      value: "API 607" },
      ],
    },
  ],

  image: "/images/products/ball-valves/cast-steel-trunnion-ball-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/cast-steel-trunnion-ball-valve.html",
  order: 6,
};
