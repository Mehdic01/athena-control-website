import type { Product } from "../../types";

export const caSeries: Product = {
  slug: "ca-series",
  name: "CA Series",
  brand: "shinkawa",
  category: "vibration-sensors",
  subcategory: "sensors-for-pump-motor-turbine-compressor",

  shortDescription:
    "Compact piezoelectric acceleration transducers with wide frequency response, designed for continuous vibration monitoring of motors, pumps, fans and gearboxes.",

  overview: [
    "CA series are built-in-amplifier type (IEPE) piezoelectric acceleration transducers designed for continuous vibration monitoring of rotating machines such as electric motors, pumps, fans and gearboxes.",
    "The transducers can be used for machine condition monitoring required by standards such as ISO 10816, ISO 20816 and API 670.",
    "Multiple models are available: CA-72 (connector and integral cable types), CA-101 (compact with integral cable), CA-302 (compact with integral cable and wide explosion-proof certifications), and CA-L02 (low-frequency model).",
  ],

  features: [
    {
      title: "Built-in-amplifier type (IEPE)",
      description:
        "Integrated electronics provide a low-impedance output, simplifying cabling and improving noise immunity.",
    },
    {
      title: "Small size and reasonable cost",
      description:
        "Compact stainless steel design enables easy installation in tight spaces while keeping system costs low.",
    },
    {
      title: "API 670 compliant",
      description:
        "Meets American Petroleum Institute standard 670 requirements for machinery protection systems.",
    },
    {
      title: "Intrinsically safe",
      description:
        "Certified for hazardous area use: TIIS, ATEX (Ex ia IIC T4 Ga), NEPSI, and KTL.",
    },
    {
      title: "Marine type approval",
      description: "Holds type approval certificate for marine applications.",
    },
    {
      title: "IP67 dust tight and waterproof",
      description:
        "Hermetically sealed stainless steel case rated IP67 for harsh industrial environments.",
    },
    {
      title: "CE and UKCA compliant",
      description: "Meets European CE and UK UKCA regulatory requirements.",
    },
  ],

  applications: [
    "Motors (rolling bearing)",
    "Pumps (rolling bearing)",
    "Gearboxes (rolling bearing)",
    "Fans",
    "Compressors",
    "Turbines",
  ],

  quickSpecs: [
    { label: "Sensor Type", value: "Piezoelectric acceleration (IEPE)" },
    { label: "Sensitivity", value: "100 mV/9.8 m/s²" },
    { label: "Frequency Response", value: "1 Hz to 10,000 Hz (±3 dB)" },
    { label: "Measurement Range", value: "490 m/s² pk" },
    { label: "Protection Rating", value: "IP67" },
  ],

  specGroups: [
    {
      title: "CA-72 Performance",
      specs: [
        {
          label: "Sensitivity",
          value: "100 mV/9.8 m/s² (100 mV/g) ±5% at 100 Hz, 25°C",
        },
        { label: "Acceleration Range", value: "490 m/s² (50g) pk" },
        { label: "Vibration Limit", value: "4,900 m/s² (500g) pk" },
        { label: "Shock Limit", value: "49,000 m/s² (5,000g) pk" },
        { label: "Amplitude Nonlinearity", value: "1.0%" },
        { label: "Natural Frequency", value: "26 kHz" },
        {
          label: "Frequency Response",
          value: "3–5,000 Hz ±5%, 2–7,000 Hz ±10%, 1–15,000 Hz ±3 dB",
        },
        { label: "Transverse Sensitivity", value: "Max 5%" },
        { label: "Output Impedance", value: "100 Ω typical" },
        { label: "Weight (CA-721)", value: "Approx. 120 g" },
        { label: "Weight (CA-722)", value: "Approx. 230 g (including cable)" },
      ],
    },
    {
      title: "CA-302 Performance",
      specs: [
        {
          label: "Sensitivity",
          value: "100 mV/9.8 m/s² (100 mV/g) ±5% at 100 Hz, 25°C",
        },
        { label: "Acceleration Range", value: "490 m/s² (50g) pk" },
        { label: "Vibration Limit", value: "4,900 m/s² (500g) pk" },
        { label: "Shock Limit", value: "9,800 m/s² (1,000g) pk" },
        { label: "Max Shock Energy", value: "4 J (intrinsically safe)" },
        { label: "Natural Frequency", value: "30 kHz" },
        {
          label: "Frequency Response",
          value: "2–5,000 Hz ±10%, 1–10,000 Hz ±3 dB",
        },
        { label: "Transverse Sensitivity", value: "Max 5%" },
        { label: "Output Impedance", value: "100 Ω typical" },
        { label: "Weight", value: "Approx. 90 g" },
      ],
    },
    {
      title: "CA-101 Performance",
      specs: [
        {
          label: "Sensitivity",
          value: "100 mV/9.8 m/s² (100 mV/g) ±15% at 80 Hz, 25°C",
        },
        { label: "Acceleration Range", value: "392 m/s² (40g) pk" },
        { label: "Shock Limit", value: "9,800 m/s² (1,000g) pk" },
        { label: "Natural Frequency", value: "18 kHz typ." },
        { label: "Frequency Response", value: "10–3,000 Hz ±3 dB" },
        { label: "Transverse Sensitivity", value: "Max 10%" },
        { label: "Output Impedance", value: "Less than 200 Ω" },
        { label: "Weight", value: "Approx. 120 g" },
      ],
    },
    {
      title: "Electrical",
      specs: [
        {
          label: "Power Supply (CA-72/302)",
          value:
            "18–30 VDC (CA-72), 20–30 VDC (CA-302), 2–10 mA constant current",
        },
        { label: "Power Supply (CA-101)", value: "20–30 VDC, 2–8 mA" },
        { label: "Grounding", value: "Case isolated, internally shielded" },
      ],
    },
    {
      title: "Environmental",
      specs: [
        {
          label: "Operating Temperature (CA-72/302)",
          value: "−50 to +120°C",
        },
        {
          label: "Operating Temperature (CA-101)",
          value: "−20 to +80°C",
        },
        { label: "Relative Humidity", value: "100% RH" },
        { label: "Protection Rating", value: "IP67" },
      ],
    },
    {
      title: "Physical",
      specs: [
        { label: "Case Material", value: "Stainless steel" },
        { label: "Sealing", value: "Hermetic" },
        { label: "Mounting", value: "M6 mounting stud" },
        { label: "Output Connector (CA-721)", value: "MIL-C-5015 2-pin" },
        {
          label: "Cabling (CA-722/302/101)",
          value: "2-conductor shielded, approx. 5 m integral cable",
        },
      ],
    },
    {
      title: "Explosion Protection",
      specs: [
        {
          label: "TIIS",
          value: "Ex ia IIB T3 X / Ex ia IIB T4 X / Ex ia IIC T3 X",
        },
        { label: "ATEX", value: "Ex ia IIC T4 Ga" },
        { label: "NEPSI", value: "Ex ia IIC T4 Ga" },
        { label: "KTL", value: "Ex ia IIC T4" },
      ],
    },
  ],

  image: "/images/products/vibration_monitoring_systems/ca_cv_series.png",
  gallery: [],

  documents: [
    { name: "CA/CV Series Product Catalog", type: "catalog", url: "" },
    {
      name: "CA-72 Acceleration Transducer Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "CA-101 Acceleration Transducer Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "CA-302 Acceleration Transducer Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "CA-L02 Acceleration Transducer Specifications",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/ca",
  featured: false,
  order: 3,
};
