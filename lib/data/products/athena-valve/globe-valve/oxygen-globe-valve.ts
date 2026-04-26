import type { Product } from "../../types";

export const oxygenGlobeValve: Product = {
  slug: "oxygen-globe-valve",
  name: "Oxygen Globe Valve",
  brand: "athena-valve",
  category: "globe-valve",
  shortDescription:
    "1/2\"–4\", Class 150–2500 mandatory sealed globe valve for oxygen service with fire and flame resistance and excellent sealing performance.",
  overview: [
    "The Oxygen Globe Valve is a mandatory sealed globe valve specifically designed for oxygen service, where fire and flame resistance, good sealing performance, and a small working stroke are critical requirements. The pressure-applied disc closure ensures a tight, reliable seal across all rated pressure classes without the need for additional sealants.",
    "Available from 1/2\" to 4\" in Class 150–2500, end connections include raised face, flat face, and ring-type joint. Body materials span carbon steel, stainless steel, alloy steel, and specialty alloys. Supplied with material test certificates (MTC 3.1) and hydraulic test certificates; third-party inspection is available. Certified to NACE MR0175, CE/PED, ISO, ATEX, and SIL.",
  ],
  features: [
    {
      title: "Oxygen Service Design",
      description:
        "Mandatory sealed construction specifically engineered for oxygen service with best-in-class fire and flame resistance.",
    },
    {
      title: "Small Working Stroke",
      description:
        "Compact disc travel minimizes actuation time and reduces wear for frequent cycle applications.",
    },
    {
      title: "Good Sealing Performance",
      description:
        "Pressure-applied disc closure delivers reliable, tight shut-off across all rated pressure classes.",
    },
    {
      title: "Full Documentation",
      description:
        "Supplied with material test certificates (MTC 3.1), hydraulic test certificates, and optional third-party inspection.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Petrochemical plants",
    "Power generation",
    "Gas and coal-fired turbines",
    "District heating",
    "Gas measurement systems",
    "Offshore platforms",
    "HIPPS systems",
    "Cryogenic service",
    "Emergency shutdown valves",
    "Pulp and paper",
    "Mining",
    "Boiler steam and drain applications",
  ],
  quickSpecs: [
    { label: "Size Range", value: "1/2\" – 4\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "End Connections", value: "RF / FF / RTJ" },
    { label: "Operation", value: "Hand wheel / Gear / Motor / Pneumatic" },
    { label: "Certifications", value: "NACE MR0175, CE/PED, ISO, ATEX, SIL" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "1/2\" – 4\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
      ],
    },
    {
      title: "Materials",
      specs: [
        {
          label: "Body Material",
          value:
            "Carbon steel, Stainless steel, Alloy steel, Monel, Inconel, Hastelloy",
        },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections", value: "RF / FF / RTJ" },
        { label: "Operation", value: "Hand wheel / Gear / Motor / Pneumatic actuators" },
      ],
    },
    {
      title: "Standards & Certifications",
      specs: [
        { label: "Material Standard", value: "NACE MR0175" },
        { label: "Certifications", value: "CE/PED, ISO, ATEX, SIL" },
      ],
    },
  ],
  image: "/images/products/globe-valves/oxygen-globe-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/product/5242491393146632.html",
  order: 5,
};
