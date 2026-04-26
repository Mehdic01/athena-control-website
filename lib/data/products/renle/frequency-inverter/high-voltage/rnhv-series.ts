import type { Product } from "../../../types";


export const rnhvSeries: Product = {
  slug: "rnhv-series",
  name: "RNHV Series",
  brand: "renle",
  category: "frequency-inverter",
  subcategory: "high-voltage",
  keyProduct: true,
  
  shortDescription:
    "High-voltage source-type frequency converter using power unit series connection technology to deliver direct 6kV/10kV output, designed for speed regulation and energy savings on fans, pumps, and compressors.",
  overview: [
    "The RNHV Series adopts power unit series connection technology, directly outputting 6kV or 10kV voltage and classifying it as a high-voltage source-type frequency converter. Designed with goals of high reliability, ease of operation, and high performance, it targets speed regulation, energy savings, and process improvement for fans, pumps, and compressors.",
    "To reduce renovation costs and shorten installation cycles, the system uses an integrated design encompassing all components and internal wiring — including transformer cabinets, power cabinets, control cabinets, and optional bypass cabinets. End-users connect only high-voltage input/output cables, low-voltage control power, and signal wires. Every unit undergoes strict inspection and performance testing before leaving the factory.",
    "Key differentiators include integrated transportation and unilateral maintenance, plus metallized film DC support capacitors with built-in mechanical bypass — offering high reliability, maintenance-free operation, and long service life compared to electrolytic alternatives.",
  ],
  features: [
    {
      title: "Power Unit Series Connection Technology",
      description:
        "Adopts unit module series multi-level technology to directly output 6kV or 10kV, classifying the drive as a voltage-source converter with no output transformer required.",
    },
    {
      title: "Integrated System Design",
      description:
        "All components — transformer cabinets, power cabinets, control cabinets, and optional bypass cabinets — are pre-wired and integrated. End-users connect only HV input/output cables, LV control power, and signal wires, significantly reducing installation time and renovation cost.",
    },
    {
      title: "Modular Drawer Cabinet Structure",
      description:
        "New modular drawer cabinet design with fast-insertion connection technology enables extremely convenient installation and maintenance, with an innovative aesthetic appearance.",
    },
    {
      title: "H-Bridge Power Unit Topology",
      description:
        "Each power unit uses an H-bridge topology in a fully modular, fully interchangeable design with a semi-sealed structure for strong environmental adaptability and high reliability.",
    },
    {
      title: "Internal Unit Bypass Function",
      description:
        "Built-in mechanical bypass integrated within each power unit allows continued operation even if a unit fault occurs, maximizing system availability.",
    },
    {
      title: "Metallized Film DC Support Capacitors",
      description:
        "Uses metallized film capacitors rather than electrolytic capacitors for the DC support stage — maintenance free, with significantly longer service life.",
    },
    {
      title: "True-Color Touchscreen HMI",
      description:
        "Friendly true-color touchscreen interface with virtual instrument panels displaying real-time main operating parameters, system status, and power unit status at a glance.",
    },
    {
      title: "Historical Data, Trend Analysis & Fault Diagnostics",
      description:
        "Stores real-time and historical operating data, provides trend analysis charts, and features built-in fault diagnostics with parameter setting and operation data recording.",
    },
    {
      title: "Multi-Language Support with Tiered User Permissions",
      description:
        "Supports multiple languages and provides tiered permission levels — usage, debugging, and maintenance — to control access and protect system configuration.",
    },
  ],
  applications: [
    "Fans",
    "Pumps",
    "Compressors",
    "HVAC Systems",
    "Power Generation Auxiliaries",
    "Heavy Industrial Processes",
  ],
  quickSpecs: [
    { label: "Output Voltage", value: "6kV / 10kV" },
    { label: "Converter Type", value: "High-voltage source type" },
    { label: "Topology", value: "Unit H-bridge series multi-level" },
    { label: "Capacitor Type", value: "Metallized film (maintenance free)" },
    { label: "HMI", value: "True-color touchscreen" },
  ],
  image: "/images/products/frequency_inverter/rnhv.png",
  manufacturerUrl: "https://www.renle.com/?p=562&a=view&r=1008",
  order: 1,
};
