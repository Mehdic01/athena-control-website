import type { Product } from "../../types";

export const zarkSeries: Product = {
  slug: "zark-series",
  name: "ZARK Series",
  brand: "shinkawa",
  category: "vibration-sensors",
  subcategory: "sensors-for-pump-motor-turbine-compressor",
  keyProduct: true,

  shortDescription:
    "Wireless vibration monitoring system for rotating machinery. Combines battery-powered sensors with cloud-based or on-premise condition monitoring for predictive maintenance.",

  overview: [
    "ZARK helps improve plant KPIs with better monitoring capabilities on rotating machine conditions, enabling fewer unexpected stops and better in-time maintenance.",
    "The system consists of ZARK Nano battery-powered wireless sensors and ZARK X8II hub units. Data is transmitted via Bluetooth Low Energy and can be monitored through either Machine Dossier (cloud service) or infiSYS 3.0 (on-premise system).",
    "The cloud-based Machine Dossier option provides low initial deployment cost with immediate access to machine condition data without installing an on-site computer. The on-premise infiSYS 3.0 option keeps all data stored locally with Modbus integration capability.",
    "A smartphone patrol inspection system is also available for ZARK Nano, allowing easy and safe data collection from a distance during routine patrols, even without on-site Wi-Fi.",
  ],

  features: [
    {
      title: "Wireless and battery-powered",
      description:
        "ZARK Nano sensors require no wiring — battery life up to 3 years with replaceable 1/2AA lithium battery.",
    },
    {
      title: "Cloud or on-premise flexibility",
      description:
        "Choose Machine Dossier cloud service for low-cost deployment or infiSYS 3.0 for on-premise data control with Modbus integration.",
    },
    {
      title: "3-axis MEMS vibration sensor",
      description:
        "Built-in 3-axis MEMS accelerometer with measurement range up to 156.8 m/s² peak and frequency range 5 to 2,000 Hz.",
    },
    {
      title: "Temperature monitoring included",
      description:
        "Integrated temperature measurement from −20 to 85°C alongside vibration data.",
    },
    {
      title: "Smartphone patrol inspection",
      description:
        "Collect data from ZARK Nano sensors using a smartphone app during routine patrols — no on-site Wi-Fi required.",
    },
    {
      title: "Scalable system",
      description:
        "Each ZARK X8II hub connects up to 16 ZARK Nano sensors via BLE 5.0 with approximately 40 m communication range.",
    },
  ],

  applications: [
    "Pumps",
    "Motors",
    "Fans",
    "Compressors",
    "Gearboxes",
    "General rotating machinery",
  ],

  quickSpecs: [
    { label: "Sensor Type", value: "3-axis MEMS accelerometer (wireless)" },
    { label: "Communication", value: "Bluetooth Low Energy 5.0" },
    { label: "Measurement Range", value: "156.8 m/s² peak" },
    { label: "Frequency Range", value: "5 to 2,000 Hz" },
    { label: "Battery Life", value: "Up to 3 years" },
  ],

  specGroups: [
    {
      title: "ZARK Nano (ZN-4A) — Vibration Measurement",
      specs: [
        { label: "Sensor Type", value: "3-axis MEMS" },
        { label: "Measuring Axis", value: "1 axis (vertical) or 3 axis" },
        { label: "Measurement Range", value: "156.8 m/s² (16g) peak" },
        { label: "Frequency Range", value: "5 to 2,000 Hz (−3 dB)" },
        { label: "Sampling Frequency", value: "6,400 Hz" },
        { label: "Spectrum Lines", value: "800 / 1,600 / 3,200" },
      ],
    },
    {
      title: "ZARK Nano (ZN-4A) — Temperature Measurement",
      specs: [{ label: "Range", value: "−20 to 85°C (±3°C)" }],
    },
    {
      title: "ZARK Nano (ZN-4A) — Data Collection",
      specs: [
        {
          label: "Collection Interval",
          value: "1, 2, 4, 6, 12 hours or 1 day",
        },
        {
          label: "Alarm Behavior",
          value: "Interval halves (min 1 hour) when alarm threshold exceeded",
        },
        { label: "Waveform Data", value: "2,048 points per collection" },
      ],
    },
    {
      title: "ZARK Nano (ZN-4A) — Communication & Power",
      specs: [
        {
          label: "Radio System",
          value: "Bluetooth Low Energy (BLE) 5.0, 2.4 GHz",
        },
        {
          label: "Max Communication Distance",
          value: "Approx. 40 m (line-of-sight)",
        },
        {
          label: "Battery Type",
          value: "Replaceable 1/2AA, 3.6 V lithium thionyl chloride",
        },
        {
          label: "Battery Life",
          value: "Up to 3 years or approx. 4,000 collections",
        },
      ],
    },
    {
      title: "ZARK Nano (ZN-4A) — Physical",
      specs: [
        { label: "Dimensions", value: "28 × 50 mm (H)" },
        { label: "Mass", value: "Approx. 75 g (including battery)" },
        { label: "Mounting", value: "UNF 1/4-28 (M6 adapter included)" },
        {
          label: "Case Material",
          value: "Plastic cover, stainless steel base",
        },
        { label: "Protection Rating", value: "IP66" },
        { label: "Operating Temperature", value: "−20 to 85°C" },
        { label: "Humidity", value: "0 to 100% RH (non-condensing)" },
      ],
    },
    {
      title: "ZARK X8II HUB (ZX-3A0)",
      specs: [
        { label: "Max ZARK Nano Connections", value: "Up to 16 units" },
        {
          label: "Communication to Nano",
          value: "BLE 5.0, 2.4 GHz, approx. 40 m range",
        },
        {
          label: "Communication to Cloud",
          value: "IEEE 802.11 b/g/n (Wi-Fi 2.4 GHz), internet required",
        },
        { label: "Power Supply", value: "100 to 240 VAC, 50/60 Hz" },
        {
          label: "Dimensions",
          value: "190 × 280 × 130 mm (excl. protrusions)",
        },
        { label: "Mass", value: "Approx. 1.6 kg" },
        { label: "Enclosure Material", value: "Plastic" },
        { label: "Operating Temperature", value: "−20 to 60°C" },
        { label: "Humidity", value: "5 to 95% RH (non-condensing)" },
      ],
    },
  ],

  image: "/images/products/vibration_monitoring_systems/zark_series.png",
  gallery: [],

  documents: [
    { name: "ZARK Series Product Catalog", type: "catalog", url: "" },
    { name: "ZN-4A ZARK Nano Specifications", type: "datasheet", url: "" },
    {
      name: "ZX-3A0 ZARK X8II HUB Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "ZX-3A1 ZARK X8II HYBRID HUB Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "ZX-3A2 ZARK X8II HUB (On-premise) Specifications",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/zark",
  featured: true,
  order: 5,
};
