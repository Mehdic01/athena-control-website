import type { Product } from "../../types";

export const vm7Series: Product = {
  slug: "vm-7-series",
  name: "VM-7 Series",
  brand: "shinkawa",
  category: "condition-monitor",
  //subcategory: "Condition Monitor",

  shortDescription:
    "Fully digital large rotating machinery condition monitor. Covers 17 measurement parameters for TSI and protective monitoring, designed to API 670 and ISO standards.",

  overview: [
    "VM-7 Series is a fully digitalized condition monitor designed in accordance with API standard 670 and ISO standards, scalable to the size of the rotating machinery being monitored.",
    "The multi-functional monitor modules cover 17 measurement parameters used for TSI (Turbine Supervisory Instrumentation) and other rotating machinery monitoring. Modules can be configured on PC to meet specific monitoring needs.",
    "The system supports up to 12 monitor module slots plus power supply, communication and relay modules, with optional analysis and diagnostic capabilities through the infiSYS platform.",
  ],

  features: [
    {
      title: "Fully digital architecture",
      description:
        "All monitor modules are fully digitalized, enabling advanced signal processing, PC-based configuration and integration with analysis systems.",
    },
    {
      title: "17 measurement parameters",
      description:
        "Covers vibration, displacement, absolute vibration, speed, eccentricity, temperature, rod drop, differential expansion and more in a single system.",
    },
    {
      title: "API 670 and ISO compliant",
      description:
        "Designed to meet the requirements of API standard 670 for protective monitoring of critical rotating machinery in plants.",
    },
    {
      title: "PC-based configuration",
      description:
        "Device Config software allows system configuration in or out of the field via USB connection to the rack.",
    },
    {
      title: "MCL View monitoring software",
      description:
        "PC software displays measurement values and monitoring status of each module in real-time bar graph and numerical formats.",
    },
    {
      title: "Optional analysis and diagnostics",
      description:
        "Optional analysis board enables integration with infiSYS View Station for measured values, analysis plots and diagnostic results.",
    },
    {
      title: "Achilles certified",
      description:
        "Achilles certification for supply chain and procurement qualification in the oil & gas and utilities industries.",
    },
  ],

  applications: [
    "Steam turbines",
    "Gas turbines (including aeroderivative)",
    "Generators",
    "Large compressors",
    "Critical rotating machinery",
    "TSI (Turbine Supervisory Instrumentation)",
  ],

  quickSpecs: [
    { label: "Type", value: "Fully digital rack-mount condition monitor" },
    { label: "Measurement Parameters", value: "17 types" },
    { label: "Module Slots", value: "Up to 12 (slots 0–11)" },
    { label: "Standard", value: "API 670 / ISO compliant" },
    { label: "Communication", value: "USB, Network (via VM-742B)" },
  ],

  specGroups: [
    {
      title: "Monitor Modules",
      specs: [
        {
          label: "VM-701B",
          value: "Vibration / Displacement Monitor Module",
        },
        { label: "VM-702B", value: "Absolute Vibration Monitor Module" },
        {
          label: "VM-703B",
          value: "Tachometer & Eccentricity Monitor Module",
        },
        { label: "VM-704B", value: "Temperature Monitor Module" },
        {
          label: "VM-705B",
          value: "18-Channel Temperature Monitor Module",
        },
        { label: "VM-706B", value: "Rod Drop Monitor Module" },
        {
          label: "VM-707B",
          value: "Aeroderivative Gas Turbine Monitor Module",
        },
      ],
    },
    {
      title: "System Modules",
      specs: [
        { label: "VM-721B", value: "18-Channel Relay Module" },
        { label: "VM-722B", value: "9-Channel Relay Module" },
        {
          label: "VM-741B",
          value: "Local Communication & Phase Marker Module (Slot 0)",
        },
        { label: "VM-742B", value: "Network Communication Module" },
        {
          label: "VM-751B",
          value: "Primary Power Supply Module (Slot P1)",
        },
        {
          label: "VM-752B",
          value: "Secondary Power Supply Module (Slot P2)",
        },
        { label: "VM-76B", value: "Instrument Rack" },
      ],
    },
    {
      title: "Software",
      specs: [
        {
          label: "VM-771B MCL View",
          value:
            "Real-time monitoring display (bar graph, measured values, status)",
        },
        {
          label: "VM-772B Device Config",
          value: "PC-based system configuration via USB",
        },
        {
          label: "infiSYS View Station",
          value:
            "Analysis plots and diagnostic results (requires optional analysis board)",
        },
      ],
    },
    {
      title: "Rack Configuration",
      specs: [
        { label: "Power Supply Slots", value: "P1 (primary), P2 (redundant)" },
        { label: "Communication Slots", value: "C1, C2 (network communication)" },
        {
          label: "Slot 0",
          value: "Local Communication & Phase Marker Module (required)",
        },
        {
          label: "Slots 1–11",
          value: "Monitor, relay, or blank modules",
        },
      ],
    },
  ],

  image: "/images/products/condition_monitor/vm7.png",
  gallery: [],

  documents: [
    {
      name: "VM-7 Series Large Rotating Machinery Condition Monitor Catalog",
      type: "catalog",
      url: "",
    },
    {
      name: "infiSYS Family Updated Information",
      type: "brochure",
      url: "",
    },
    {
      name: "VM-701B Vibration/Displacement Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-702B Absolute Vibration Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-703B Tachometer & Eccentricity Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-704B Temperature Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-705B 18-Ch Temperature Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-706B Rod Drop Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-707B Aeroderivative Gas Turbine Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-721B 18-Ch Relay Module Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-741B Local Communication & Phase Marker Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-742B Network Communication Module Specifications",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/vm-7",
  featured: true,
  order: 2,
};
