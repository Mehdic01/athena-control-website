import type { Product } from "../../types";

export const cryogenicGateValve: Product = {
  slug: "cryogenic-gate-valve",
  name: "Cryogenic Gate Valve",
  brand: "athena-valve",
  category: "gate-valve",
  shortDescription:
    "2\"–60\", Class 150–2500 cryogenic cast steel gate valve rated to −196°C with OS&Y design and extended bonnet.",
  overview: [
    "The Cryogenic Gate Valve is engineered for service at temperatures as low as −196°C, making it suitable for LNG, liquid nitrogen, liquid oxygen, and other cryogenic process applications. The outside stem and yoke (OS&Y) design with extended bonnet keeps the stem packing assembly away from the cold fluid, preventing packing freeze-up and maintaining reliable sealing throughout cryogenic service.",
    "Available from 2\" to 60\" in Class 150–2500, these valves feature flexible wedges with CoCr alloy seating faces specifically selected for cryogenic service. All valves are thoroughly degreased and cleaned prior to delivery. Manufactured to API 602 and ASME B16.34 standards, with certifications including CE/PED, ISO, ATEX, SIL, and NACE MR0175.",
  ],
  features: [
    {
      title: "Cryogenic Rating to −196°C",
      description:
        "Designed and tested for service at minimum −196°C, suitable for LNG, liquid nitrogen, and liquid oxygen applications.",
    },
    {
      title: "OS&Y Extended Bonnet",
      description:
        "Outside stem and yoke design with extended bonnet protects stem packing from cold medium exposure, preventing freeze-up.",
    },
    {
      title: "CoCr Alloy Seating Faces",
      description:
        "Flexible wedge with cobalt-chromium alloy seating faces provides excellent sealing performance at cryogenic temperatures.",
    },
    {
      title: "Degreased and Cleaned",
      description:
        "All valves are thoroughly degreased and cleaned prior to delivery, meeting oxygen service cleanliness requirements.",
    },
    {
      title: "Full and Reduced Bore",
      description: "Available in both full bore and reduced bore configurations.",
    },
  ],
  applications: [
    "Oil and gas pipelines",
    "Refineries",
    "Power generation",
    "Offshore platforms",
    "Cryogenic service (LNG, LN₂, LOX)",
    "Emergency shutdown valves",
  ],
  quickSpecs: [
    { label: "Size Range", value: "2\" – 60\"" },
    { label: "Pressure Class", value: "150 LB – 2500 LB" },
    { label: "Min. Temperature", value: "−196°C" },
    { label: "End Connections", value: "RF / BW / RTJ" },
    { label: "Standards", value: "API 602 / ASME B16.34" },
  ],
  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Size Range", value: "2\" – 60\"" },
        { label: "Pressure Class", value: "150 LB – 2500 LB" },
        { label: "Minimum Temperature", value: "−196°C" },
        { label: "Bore", value: "Full Bore and Reduced Bore" },
        { label: "Design Standard", value: "API 602 / ASME B16.34" },
      ],
    },
    {
      title: "Materials",
      specs: [
        { label: "Body Material", value: "Stainless steel" },
        { label: "Seating Faces", value: "CoCr alloy" },
      ],
    },
    {
      title: "End Connections & Actuation",
      specs: [
        { label: "End Connections", value: "RF / BW / RTJ" },
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
  image: "/images/products/gate-valves/cryogenic-gate-valve.png",
  manufacturerUrl: "https://www.athenavalve.com/products/cryogenic-gate-valve.html",
  order: 3,
};
