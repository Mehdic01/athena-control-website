import type { Product } from "../../types";

export const jacketedFloatingBallValve: Product = {
  slug: "jacketed-floating-ball-valve",
  name: "Jacketed Floating Ball Valve",
  brand: "athena-valve",
  category: "ball-valve",

  shortDescription:
    "Full-bore floating ball valve with a welded heating jacket covering the entire body, designed to maintain elevated temperatures for viscous or solidifying media.",

  overview: [
    "Athena's jacketed floating ball valves are manufactured from cast carbon steel and stainless steel, with optional special materials. The valve features a fabricated two-piece jacket welded to the body, covering it from one flange end to the other to provide uniform heating of the process media.",
    "The fire-safe design is qualified to API-607. Stem sealing is adjustable and maintenance-free, with an additional O-ring for redundancy. The valve can be operated manually or with electric or pneumatic actuators.",
  ],

  features: [
    {
      title: "Full-Body Heating Jacket",
      description:
        "Two-piece fabricated jacket welded to the valve body covers the body from one flange end to the other, ensuring uniform temperature maintenance of the media.",
    },
    {
      title: "Double Sealing of Body Insert",
      description:
        "One-piece body design with double sealing of body insert for enhanced leak prevention.",
    },
    {
      title: "API 607 Fire Safe Design",
      description:
        "Cavity filler available; valve is qualified to API-607 fire testing requirements.",
    },
    {
      title: "Adjustable Stem Sealing",
      description:
        "Maintenance-free stem sealing with additional O-ring provides redundant sealing reliability.",
    },
  ],

  applications: [
    "Oil & gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "District heating",
    "Offshore platforms",
    "Cryogenic services",
    "Pulp & paper industries",
    "Mining",
    "Boiler steam applications",
  ],

  quickSpecs: [
    { label: "Size Range",      value: "1/2\" – 20\"" },
    { label: "Pressure Rating", value: "Up to 10 KGS/CM²" },
    { label: "Body Material",   value: "Carbon Steel / Stainless Steel / Alloy Steel" },
    { label: "End Connections", value: "SW / RF / RTJ / BW / NPT" },
    { label: "Heating Media",   value: "Thermic Oil / Steam / Hot Water" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range",      value: "1/2\" – 20\"" },
        { label: "Pressure Rating", value: "Up to 10 KGS/CM²" },
        { label: "Bore",            value: "Full Bore" },
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
      title: "Jacket & Heating",
      specs: [
        { label: "Jacket Construction", value: "Two-piece fabricated, welded to body" },
        { label: "Heating Media",       value: "Thermic Fluid Oil, Steam, Hot Water" },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections",  value: "SW / RF / RTJ / BW / NPT" },
        { label: "Actuator Options", value: "Manual, Electric, Pneumatic" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Fire Safe", value: "API 607" },
      ],
    },
  ],

  image: "/images/products/ball-valves/jacketed-floating-ball-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/product/jacketed-floating-ball-valve.html",
  order: 4,
};
