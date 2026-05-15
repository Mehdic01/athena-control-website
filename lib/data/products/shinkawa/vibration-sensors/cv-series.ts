import type { Product } from "../../types";

export const cvSeries: Product = {
  slug: "cv-series",
  name: "CV Series",
  brand: "shinkawa",
  category: "vibration-sensors",
  subcategory: "sensors-for-pump-motor-turbine-compressor",

  shortDescription:
    "Piezoelectric velocity transducers for continuous casing vibration monitoring of turbines, compressors, pumps and other rotating machinery.",

  overview: [
    "CV series are built-in-amplifier type (IEPE) velocity transducers designed for continuous condition monitoring of rotating machines such as turbines, compressors and pumps.",
    "The transducers can be used for machine condition monitoring required by standards such as ISO 10816, ISO 20816 and API 670.",
    "Multiple models are available: CV-861 (connector type), CV-862 (integral cable type), CV-420 (4-20 mA loop powered), and CV-425 (4-20 mA with temperature output).",
  ],

  features: [
    {
      title: "Built-in-amplifier type (IEPE)",
      description:
        "Integrated electronics provide a low-impedance voltage output, simplifying cabling and improving noise immunity.",
    },
    {
      title: "Intrinsically safe",
      description:
        "Certified for hazardous area use: TIIS, ATEX (Ex ia IIC T4 Ga), and KTL.",
    },
    {
      title: "Marine type approval",
      description:
        "Holds type approval certificate for marine applications.",
    },
    {
      title: "IP67 dust tight and waterproof",
      description:
        "Hermetically sealed stainless steel case rated IP67 for harsh industrial environments.",
    },
    {
      title: "CE and UKCA compliant",
      description:
        "Meets European CE and UK UKCA regulatory requirements.",
    },
    {
      title: "4-20 mA loop powered option",
      description:
        "CV-420 model provides direct 4-20 mA output for easy integration with PLC/DCS control systems via two-wire loop power.",
    },
  ],

  applications: [
    "Gas turbines",
    "Medium-sized pumps",
    "Generators",
    "Motors",
    "Fans",
    "Compressors",
  ],

  quickSpecs: [
    { label: "Sensor Type", value: "Piezoelectric velocity (IEPE)" },
    { label: "Sensitivity", value: "3.94 mV/mm/s" },
    { label: "Frequency Response", value: "2 Hz to 7,000 Hz (Â±3 dB)" },
    { label: "Max Velocity", value: "1,270 mm/s pk" },
    { label: "Protection Rating", value: "IP67" },
  ],

  specGroups: [
    {
      title: "CV-861/CV-862 Performance",
      specs: [
        {
          label: "Sensitivity",
          value: "3.94 mV/mm/s (100 mV/in/s) Â±5% at 100 Hz, 25Â°C",
        },
        { label: "Max Velocity", value: "1,270 mm/s (50 in/s) pk" },
        { label: "Vibration Limit", value: "2,450 m/sÂ² (250g) pk" },
        {
          label: "Shock Limit",
          value: "24,500 m/sÂ² (2,500g) pk / 23,520 m/sÂ² intrinsically safe",
        },
        { label: "Natural Frequency", value: "15 kHz" },
        {
          label: "Frequency Response",
          value: "2.5â€“3,500 Hz Â±10%, 2â€“7,000 Hz Â±3 dB",
        },
        { label: "Transverse Sensitivity", value: "Max 5%" },
        { label: "Output Impedance", value: "200 Î© typical" },
      ],
    },
    {
      title: "CV-420 Performance (4-20 mA)",
      specs: [
        {
          label: "Output",
          value:
            "4â€“20 mA, full scale selectable (12.7 / 25.4 / 50.8 mm/s RMS)",
        },
        {
          label: "Frequency Response",
          value: "10â€“1,000 Hz Â±10%, 3.5â€“2,000 Hz Â±3 dB",
        },
        {
          label: "Power Requirement",
          value: "12 to 30 VDC (two-wire loop)",
        },
        { label: "Max Loop Resistance", value: "700 Î© at 24 VDC" },
        { label: "Turn-On Time", value: "30 seconds" },
        { label: "Vibration Limit", value: "2,450 m/sÂ² (250g) pk" },
        { label: "Shock Limit", value: "24,500 m/sÂ² (2,500g) pk" },
      ],
    },
    {
      title: "Electrical",
      specs: [
        {
          label: "Power Supply (CV-861/862)",
          value: "18 to 30 VDC, 2 to 10 mA DC (constant current)",
        },
        {
          label: "Power Supply (CV-420)",
          value: "12 to 30 VDC (two-wire loop)",
        },
        { label: "Grounding", value: "Case isolated, internally shielded" },
      ],
    },
    {
      title: "Environmental",
      specs: [
        {
          label: "Operating Temperature",
          value: "âˆ’50 to +120Â°C (CV-861/862), âˆ’40 to +105Â°C (CV-420)",
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
        { label: "Weight (CV-861)", value: "Approx. 145 g" },
        { label: "Weight (CV-862)", value: "Approx. 250 g (including cable)" },
        { label: "Weight (CV-420)", value: "Approx. 160 g" },
        { label: "Mounting", value: "M6 Ã— 1 mounting stud" },
        { label: "Output Connector (CV-861)", value: "MIL-C-5015 2-pin" },
      ],
    },
    {
      title: "Explosion Protection",
      specs: [
        { label: "TIIS", value: "Ex ia IIC T4 X" },
        { label: "ATEX", value: "Ex ia IIC T4 Ga" },
        { label: "KTL", value: "Ex ia IIC T4" },
      ],
    },
  ],

  image: "/images/products/vibration-monitoring-systems/ca_cv_series.png",
  gallery: [],

  documents: [
    { name: "CA/CV Series Product Catalog", type: "catalog", url: "" },
    {
      name: "CV-86 Velocity Transducer Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "CV-420 4-20mA Loop Powered Transducer Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "CV-425 4-20mA with Temperature Output Specifications",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/cv",
  featured: false,
  order: 2,
};
