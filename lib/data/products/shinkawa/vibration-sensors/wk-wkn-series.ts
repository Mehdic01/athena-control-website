import type { Product } from "../../types";

export const wkWknSeries: Product = {
  slug: "wk-wkn-series",
  name: "WK/WKN Series",
  brand: "shinkawa",
  category: "vibration-sensors",
  subcategory: "sensors-for-pump-motor-turbine-compressor",

  shortDescription:
    "2-wire vibration/thrust transmitter with eddy-current sensor technology. Achieves low-cost vibration monitoring via a two-wire current loop system.",

  overview: [
    "The WK/WKN series adds a vibration conversion function or thrust conversion function to an eddy current transducer.",
    "Driving by a 2-wire current loop can directly transmit 4 to 20 mA signals so that the cost of the vibration monitoring system is saved.",
    "The WK series uses a separate transmitter box, while the WKN series integrates the transmitter into a compact transducer unit — both sharing the same eddy-current sensor and extension cable components.",
  ],

  features: [
    {
      title: "No need for vibration monitor or vibration converter",
      description:
        "Direct 4 to 20 mA output eliminates the need for separate vibration monitors or signal converters.",
    },
    {
      title: "Long-distance wiring capable",
      description:
        "Current output signal allows long-distance cable runs without signal degradation.",
    },
    {
      title: "Direct connection to control devices",
      description:
        "4-20 mA current loop connects directly to PLC, DCS, and other control systems.",
    },
    {
      title: "Ideal for small rotating machines",
      description:
        "Designed for vibration monitoring of general-purpose compressors, pumps, and motors.",
    },
    {
      title: "Explosion-proof system",
      description:
        "Non-incendive construction available: CSA C/US Class I Division 2, ATEX Ex nA II T4 Gc, KTL, TR-CU.",
    },
  ],

  applications: [
    "Pumps",
    "Motors",
    "General-purpose compressors",
    "Small rotating machinery",
    "Water & wastewater plants",
    "Industrial machinery",
  ],

  quickSpecs: [
    { label: "Sensor Type", value: "Eddy current, non-contact" },
    { label: "Output Signal", value: "4 to 20 mA (2-wire)" },
    { label: "Frequency Response", value: "5 Hz to 6,000 Hz" },
    { label: "Power Supply", value: "12 to 35 VDC" },
    { label: "Explosion Protection", value: "CSA, ATEX, KTL, TR-CU" },
  ],

  specGroups: [
    {
      title: "Current Output (4-20 mA)",
      specs: [
        {
          label: "Output Range",
          value: "0–100, 0–125, 0–200, 0–250, 0–400 μm pk-pk (selectable)",
        },
        { label: "Conversion Accuracy", value: "±1.5% of Full Scale Range" },
        { label: "Max Load Resistance", value: "43.5 × (Vps − 12) Ω" },
        {
          label: "Not-OK Function",
          value: "Output drops to ≤3.6 mA on sensor open/short or out-of-range",
        },
      ],
    },
    {
      title: "GAP Output (Waveform)",
      specs: [
        {
          label: "Calibration Material",
          value: "JIS SCM440 (AISI 4140 equivalent) flat target",
        },
        { label: "Linear Range", value: "1.4 mm (Gap: 0.3 to 1.7 mm)" },
        { label: "Scale Factor", value: "7.87 mV/μm" },
        { label: "Scale Factor Error", value: "7.87 mV/μm ±6.5% typ." },
        {
          label: "Output Impedance",
          value: "10 kΩ (calibrated at 10 MΩ load)",
        },
      ],
    },
    {
      title: "System",
      specs: [
        {
          label: "Frequency Response",
          value: "5 Hz to 6,000 Hz (+0 dB, −3 dB) at 900 μm gap",
        },
        { label: "Power Supply Voltage", value: "12 to 35 VDC" },
        { label: "System Cable Length", value: "5 m or 7 m" },
      ],
    },
    {
      title: "Environmental",
      specs: [
        {
          label: "Transmitter Operating Temp",
          value: "0 to 70°C (32 to 158°F)",
        },
        {
          label: "Transmitter Storage Temp",
          value: "−34 to +100°C (−29 to +212°F)",
        },
        {
          label: "Sensor Operating Temp",
          value: "−34 to +177°C (−29 to +350°F)",
        },
        { label: "Connector Max Temp", value: "125°C (257°F)" },
        { label: "Relative Humidity", value: "30 to 95% RH (non-condensing)" },
      ],
    },
    {
      title: "Physical",
      specs: [
        { label: "Sensor Tip Diameter", value: "Approx. 5.5 mm (0.217 in)" },
        { label: "Cable Diameter", value: "Approx. 2.7 mm (0.106 in)" },
        { label: "Connector Diameter", value: "Approx. 7.1 mm (0.280 in)" },
        {
          label: "WK Transmitter Size",
          value: "100 × 74 × 50 mm, approx. 530 g",
        },
        {
          label: "WKN Transmitter Size (Type 1)",
          value: "90 × 40 × 46.2 mm, approx. 200 g",
        },
        {
          label: "WKN Transmitter Size (Type 2)",
          value: "90 × 74 × 45.2 mm, approx. 200 g",
        },
      ],
    },
    {
      title: "Explosion Protection",
      specs: [
        {
          label: "CSA C/US",
          value: "Class I, Division 2, Groups A, B, C and D",
        },
        { label: "ATEX", value: "Ex nA II T4 Gc" },
        { label: "KTL", value: "Ex nA II T4" },
        { label: "TR-CU", value: "2Ex nA II T4 Gc X" },
      ],
    },
  ],

  image: "/images/products/vibration_monitoring_systems/wk-wkn_series.png",
  gallery: [],

  documents: [
    { name: "WK Series Product Catalog", type: "catalog", url: "" },
    { name: "WKN Series Product Catalog", type: "catalog", url: "" },
    { name: "WK-142K Specifications", type: "datasheet", url: "" },
    {
      name: "WK-142K5 Specifications (9m System)",
      type: "datasheet",
      url: "",
    },
    { name: "WK-142T Specifications (Thrust)", type: "datasheet", url: "" },
    { name: "WKN-142K Specifications", type: "datasheet", url: "" },
    {
      name: "WKN-142K5 Specifications (9m System)",
      type: "datasheet",
      url: "",
    },
    { name: "WKN-142T Specifications (Thrust)", type: "datasheet", url: "" },
    {
      name: "WKN-142T5 Specifications (9m System)",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/wk",
  featured: false,
  order: 1,
};
