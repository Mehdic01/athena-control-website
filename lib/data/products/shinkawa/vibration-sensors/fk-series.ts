import type { Product } from "../../types";

export const fkSeries: Product = {
  slug: "fk-series",
  name: "FK Series",
  brand: "shinkawa",
  category: "vibration-sensors",
  subcategory: "sensors-for-pump-motor-turbine-compressor",

  shortDescription:
    "Eddy-current non-contact displacement transducers for measuring shaft vibration, axial position, rotating speed and phase mark on turbines, compressors and other critical rotating machinery.",

  overview: [
    "FK series are eddy-current transducers used for measuring shaft vibration, axial position, rotating speed and phase mark (phase reference) from small rotating machinery to large critical machinery such as turbines and compressors in plants.",
    "The system consists of a sensor, extension cable and driver unit. The sensor detects shaft displacement without contact using eddy-current principles, providing high-accuracy measurements for continuous condition monitoring.",
    "Multiple sensor sizes are available (FK-202F, FK-452F, FK-302F, FK-602F, FK-143F, FK-263F, FK-152R) to match different installation requirements and measurement applications. All models comply with API standard 670.",
  ],

  features: [
    {
      title: "Environmental friendly design",
      description:
        "Oil leakage reduction options available across the full sensor lineup for environmentally conscious installations.",
    },
    {
      title: "Flexible mounting options",
      description:
        "Multiple driver mounting configurations including DIN rail, screw mount, and multi-pitch options for easy integration into existing systems.",
    },
    {
      title: "API standard 670 compliant",
      description:
        "Fully meets American Petroleum Institute standard 670 requirements for machinery protection systems on critical rotating equipment.",
    },
    {
      title: "Intrinsically safe",
      description:
        "Certified for hazardous areas worldwide: DEKRA (Japan), CSA C/US, ATEX, Ex-CCC (China), KCs (Korea), TS (Taiwan), TR-CU (Russia), IECEx.",
    },
    {
      title: "CE marking compliant",
      description:
        "Meets European CE regulatory requirements for electromagnetic compatibility and safety.",
    },
  ],

  applications: [
    "Steam turbines",
    "Gas turbines",
    "Compressors",
    "Generators",
    "Large/medium pumps",
    "Fans (plain journal bearings)",
    "Gearboxes",
  ],

  quickSpecs: [
    {
      label: "Sensor Type",
      value: "Eddy-current, non-contact displacement",
    },
    { label: "Sensitivity", value: "7.87 V/mm" },
    { label: "Linear Range", value: "2 mm" },
    { label: "Frequency Response", value: "DC to 10 kHz (âˆ’3 dB)" },
    { label: "Power Supply", value: "âˆ’24 VDC Â±10%" },
  ],

  specGroups: [
    {
      title: "Measurement Performance",
      specs: [
        {
          label: "Calibration Material",
          value: "JIS SCM440 (AISI 4140 equivalent) flat surface",
        },
        {
          label: "Measuring Range",
          value: "0.25 to 2.25 mm from sensor tip",
        },
        { label: "Sensitivity", value: "7.87 V/mm" },
        { label: "Sensitivity Error", value: "Within Â±4%" },
        {
          label: "Scale Factor Error (5m system)",
          value: "Within Â±5% of 7.87 V/mm",
        },
        {
          label: "Scale Factor Error (9m system)",
          value: "Within Â±6.5% of 7.87 V/mm",
        },
        {
          label: "Linearity (5m system)",
          value: "Within Â±25 Î¼m of 7.87 V/mm straight line",
        },
        {
          label: "Linearity (9m system)",
          value: "Within Â±38 Î¼m of 7.87 V/mm straight line",
        },
        { label: "Frequency Response", value: "DC to 10 kHz (âˆ’3 dB)" },
      ],
    },
    {
      title: "Electrical",
      specs: [
        { label: "Power Supply", value: "âˆ’24 VDC Â±10%" },
        { label: "Current Consumption", value: "Max âˆ’15 mA (10 kÎ© load)" },
        { label: "Max Output Voltage", value: "Approx. âˆ’23 VDC" },
        { label: "Output Impedance", value: "50 Î©" },
        {
          label: "Output Noise",
          value: "Approx. 15 mV pk-pk + power supply noise",
        },
        {
          label: "Sensor Abnormal Output",
          value: "Approx. âˆ’0.6 VDC (sensor open/short)",
        },
      ],
    },
    {
      title: "Environmental",
      specs: [
        { label: "Sensor Operating Temp", value: "âˆ’40 to +177Â°C" },
        { label: "Extension Cable Temp", value: "âˆ’40 to +177Â°C" },
        { label: "Driver Operating Temp", value: "âˆ’40 to +80Â°C" },
        {
          label: "Operating Humidity",
          value:
            "30 to 95% RH (non-condensing), sensor body: 100% RH",
        },
        { label: "Marine Application Temp", value: "âˆ’25 to +70Â°C" },
      ],
    },
    {
      title: "Temperature Characteristics",
      specs: [
        { label: "Sensor", value: "Less than Â±3% of F.S. (0 to 80Â°C)" },
        {
          label: "Extension Cable",
          value: "Less than Â±4% of F.S. (0 to 80Â°C)",
        },
        { label: "Driver", value: "Less than Â±3% of F.S. (0 to 60Â°C)" },
        { label: "Loop (Total)", value: "Less than Â±6% of F.S. (0 to 60Â°C)" },
      ],
    },
    {
      title: "Physical",
      specs: [
        { label: "Sensor Tip Diameter", value: "Approx. 5 mm or 8 mm" },
        { label: "Cable Diameter", value: "Approx. 2.7 mm or 3.6 mm" },
        { label: "Connector Diameter", value: "Approx. 7.1 mm" },
        { label: "System Cable Length", value: "5 m or 9 m" },
        { label: "Driver Mass", value: "Approx. 200 g" },
      ],
    },
    {
      title: "Explosion Protection (IEC compliant)",
      specs: [
        { label: "DEKRA (Japan)", value: "Ex ia IIC T4 Ga" },
        {
          label: "CSA C/US",
          value:
            "Class I, Division 1, Groups A,B,C,D T4 / Ex ia IIC T4 Ga / AEx ia IIC T4 Ga",
        },
        { label: "ATEX (Europe)", value: "Ex ia IIC T4 Ga" },
        { label: "Ex-CCC (China)", value: "Ex ia IIC T4 Ga" },
        { label: "KCs (Korea)", value: "Ex ia IIC T4 Ga" },
        { label: "TS (Taiwan)", value: "Ex ia IIC T4 Ga" },
        { label: "TR-CU (Russia)", value: "0 Ex ia IIC T4 Ga X" },
        { label: "IECEx (Oceania)", value: "Ex ia IIC T4 Ga" },
      ],
    },
  ],

  image: "/images/products/vibration-monitoring-systems/FK_series.png",
  gallery: [],

  documents: [
    { name: "FK Series Product Catalog", type: "catalog", url: "" },
    {
      name: "FK-202F Specifications (IEC compliant)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-202F Specifications (Oil leakage reduction)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-452F Specifications (IEC compliant)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-452F Specifications (Oil leakage reduction)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-302F Specifications (IEC compliant)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-302F3 Specifications (15m System, IEC)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-302F Specifications (Oil leakage reduction)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-602F Specifications (IEC compliant)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-602F Specifications (Oil leakage reduction)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-143F Specifications (IEC compliant)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-143F Specifications (Oil leakage reduction)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-263F Specifications (IEC compliant)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-263F Specifications (Oil leakage reduction)",
      type: "datasheet",
      url: "",
    },
    {
      name: "FK-152R Long Cable Specifications (IEC compliant)",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/fk",
  featured: true,
  order: 6,
};
