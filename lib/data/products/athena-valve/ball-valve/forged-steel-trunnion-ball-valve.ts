import type { Product } from "../../types";

export const forgedSteelTrunnionBallValve: Product = {
  slug: "forged-steel-trunnion-ball-valve",
  name: "Forged Steel Trunnion Ball Valve",
  brand: "athena-valve",
  category: "ball-valve",

  shortDescription:
    "Forged steel trunnion-mounted ball valve for high-pressure service from 2\" to 40\" across Class 150 to 2500, compliant with API-6D and NACE.",

  overview: [
    "Athena forged steel trunnion ball valves utilize a ball fixed at two trunnion pivot points to prevent axial movement, reducing operating torque in high-pressure pipeline service. Bolted or welded body construction with close-coupled trunnion blocks is available.",
    "The valve features self-relieving seats as standard, with optional double piston sealing for bi-directional isolation. Secondary seat sealant injection capability and special seat compounds are available. Compliant with API-6D and NACE requirements.",
  ],

  features: [
    {
      title: "Blow-out Proof Stem",
      description:
        "Stem design prevents ejection under pressure; certified to API 607 Fire Safe Design.",
    },
    {
      title: "Anti-Static Design",
      description:
        "Electrical continuity between ball, stem, and body prevents static charge build-up in explosive atmospheres.",
    },
    {
      title: "Self-Relieving Seats",
      description:
        "Standard self-relieving seats prevent body cavity over-pressure. Optional double piston sealing available for bi-directional shutoff.",
    },
    {
      title: "Secondary Seat Sealant",
      description:
        "Seat sealant injection ports allow field remediation of seat leakage without removing the valve from the pipeline.",
    },
    {
      title: "NACE Compliance",
      description:
        "Materials and construction comply with NACE requirements for sour service in H₂S environments.",
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
    { label: "Pressure Rating", value: "Class 150 – 2500" },
    { label: "Body Material",   value: "Carbon Steel / Stainless Steel / Alloy Steel" },
    { label: "End Connections", value: "RF / RTJ / BW" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range",      value: "2\" – 40\"" },
        { label: "Pressure Rating", value: "Class 150 – 2500" },
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
        { label: "Certifications",  value: "CE/PED, ISO, ATEX, SIL" },
        { label: "Design Standard", value: "API 6D" },
        { label: "Fire Safe",       value: "API 607" },
        { label: "Sour Service",    value: "NACE" },
      ],
    },
  ],

  image: "/images/products/ball-valves/forged-steel-trunnion-ball-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/forged-steel-trunnion-ball-valve.html",
  order: 7,
};
