import type { Product } from "../../types";

export const normalSwingCheckValve: Product = {
  slug: "normal-swing-check-valve",
  name: "Cast Steel Swing Check Valve",
  brand: "athena-valve",
  category: "check-valve",
  shortDescription:
    "2\"–60\", Class 150–2500 cast steel swing check valve for high-pressure and high-temperature service, available in forged or cast materials and compatible with pigging operations.",
  overview: [
    "The Cast Steel Swing Check Valve operates by the swinging action of the disc away from the seat, allowing forward flow; when flow stops, the disc returns to the seat, preventing backflow. Available in both forged and cast materials, the construction ensures total reliability for high-pressure and high-temperature services.",
    "Suitable for upstream and midstream applications including lines where pigging operations are required for maintenance. Available from 2\" to 60\" in Class 150–2500 with RF, RTJ, and BW end connections. Body materials span carbon steel, stainless steel, alloy steel, and specialty alloys including Al-bronze. Certified to CE/PED, ISO, ATEX, SIL, FIRE SAFE, and NACE MR0175. Supplied with material test certificates (MTC 3.1) and hydraulic test certificates; third-party inspection is available.",
  ],
  features: [
    {
      title: "Swing Disc Design",
      description:
        "The swinging action of the disc allows forward flow; when flow stops, the disc returns to seat, preventing backflow.",
    },
    {
      title: "Forged or Cast Construction",
      description:
        "Available in both forged and cast materials, ensuring total reliability for high-pressure and high-temperature services.",
    },
    {
      title: "Pigging Compatible",
      description:
        "Suitable for upstream and midstream applications in lines where pigging operations are required for various maintenance services.",
    },
    {
      title: "Full Documentation",
      description:
        "Supplied with material test certificates (MTC 3.1) and hydraulic test certificates; third-party inspection is available.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Gas and coal-fired turbines",
    "District heating",
    "Offshore platforms",
    "Cryogenic service",
    "Pulp and paper",
    "Mining",
    "Boiler steam and drain applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 60\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "End Connections", value: "RF / RTJ / BW" },
    { label: "Body Material", value: "Carbon steel, SS, Alloy steel, Al-bronze" },
    { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL, FIRE SAFE, NACE MR0175" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 60\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body Material",
          value:
            "Carbon steel, Stainless steel, Alloy steel, Monel, Inconel, Hastelloy, Al-bronze",
        },
      ],
    },
    {
      title: "End Connections",
      specs: [
        { label: "End Connections", value: "RF / RTJ / BW" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Fire Safe", value: "Yes" },
        { label: "Material Standard", value: "NACE MR0175" },
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL" },
      ],
    },
  ],
  image: "/images/products/check-valves/normal-swing-check-valve.png",
  manufacturerUrl:
    "https://www.athenavalve.com/products/normal-swing-check-valve.html",
  order: 2,
};
