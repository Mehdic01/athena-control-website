import type { Product } from "../../types";

export const vm5Series: Product = {
  slug: "vm-5-series",
  name: "VM-5 Series",
  brand: "shinkawa",
  category: "condition-monitor",
  //subcategory: "Condition Monitor",
  keyProduct: true,

  shortDescription:
    "Rack-mount condition monitor for shaft vibration, axial position, eccentricity, temperature and rotational speed. API 670 compliant with flexible 8/10-slot configurations for TSI applications.",

  overview: [
    "VM-5 Series monitor is designed in accordance with API standard 670 and offers flexible options of 10-slot and 8-slot rack mount types, plus a power source built-in standalone type for configurations from small to middle scale rotating machinery up to TSI for large turbine generators.",
    "The modular design allows flexible configuration by combining different monitor modules — vibration, thrust, eccentricity, speed, temperature and more — in a single rack to match specific machinery monitoring requirements.",
    "Data communication capability allows for system expansion, and all settings and checks can be performed from the front panel without disturbing operation.",
  ],

  features: [
    {
      title: "High reliability with redundant power supply",
      description:
        "10-slot rack mount type supports redundant power supply for critical machinery protection applications.",
    },
    {
      title: "Data communication for system expansion",
      description:
        "Rack mount type supports data communication enabling integration with plant monitoring and control systems.",
    },
    {
      title: "Flexible modular configuration",
      description:
        "Mix and match monitor modules (vibration, thrust, eccentricity, speed, temperature, differential expansion) to build the exact monitoring system needed.",
    },
    {
      title: "Front panel setup and monitoring",
      description:
        "All settings and checks are performed from the front panel without disturbing operation. LCD digital and bar graph meters display measurement values and alarm set points simultaneously.",
    },
    {
      title: "Field-changeable configuration",
      description:
        "Monitor configuration can be changed in the field without returning equipment to the factory.",
    },
    {
      title: "Self diagnostics",
      description:
        "Built-in self diagnostics function continuously monitors system health and alerts operators to abnormal conditions.",
    },
    {
      title: "Marine and hazardous area certifications",
      description:
        "Optional marine type approval and CE marking available. Tropical specification for high-humidity environments.",
    },
  ],

  applications: [
    "Steam turbines",
    "Gas turbines",
    "Generators",
    "Compressors",
    "Large pumps",
    "TSI (Turbine Supervisory Instrumentation)",
  ],

  quickSpecs: [
    { label: "Type", value: "Rack-mount condition monitor" },
    { label: "Rack Options", value: "10-slot, 8-slot, standalone" },
    { label: "Standard", value: "API 670 compliant" },
    { label: "Display", value: "LCD digital + bar graph meter" },
    { label: "Power Supply", value: "85–264 VAC / 24 VDC / 110 VDC" },
  ],

  specGroups: [
    {
      title: "Monitor Modules Available",
      specs: [
        { label: "VM-5K", value: "Dual Vibration Monitor" },
        { label: "VM-55", value: "Vibration Monitor" },
        { label: "VM-5U", value: "Dual Seismic Monitor" },
        { label: "VM-5B", value: "Dual Acceleration Monitor" },
        { label: "VM-5M", value: "Dual Path Monitor" },
        { label: "VM-5C", value: "Eccentricity Monitor" },
        { label: "VM-5T", value: "Dual Thrust Monitor" },
        { label: "VM-5D", value: "Dual Differential Expansion Monitor" },
        {
          label: "VM-5N",
          value: "Ramp Differential Expansion Monitor",
        },
        {
          label: "VM-5L",
          value: "Complementary Input Differential Expansion Monitor",
        },
        { label: "VM-5E", value: "Dual Case Expansion Monitor" },
        { label: "VM-5A", value: "Dual Valve Position Monitor" },
        { label: "VM-5S", value: "Dual Tachometer" },
        { label: "VM-5R", value: "Tachometer" },
        { label: "VM-51", value: "Rod Drop Monitor" },
        { label: "VM-52", value: "Bottom Hold Monitor" },
      ],
    },
    {
      title: "VM-5K Dual Vibration Monitor (Representative Specs)",
      specs: [
        { label: "Input Channels", value: "2 points" },
        {
          label: "Compatible Sensors",
          value:
            "VK-202A, VK-202P, FK-202F, VK-302P, FK-302F, VC Series",
        },
        {
          label: "Monitor Range (μm pk-pk)",
          value: "0–100, 0–125, 0–200, 0–400, 0–500 (selectable)",
        },
        {
          label: "Monitor Range (mils pk-pk)",
          value: "0–3, 0–5, 0–10, 0–15 (selectable)",
        },
        {
          label: "Rectification",
          value: "Average (standard), pk-pk, RMS (optional)",
        },
        {
          label: "High Cut-off Frequency",
          value: "100 Hz / 500 Hz / 1 kHz / 4 kHz / 10 kHz (selectable)",
        },
        {
          label: "Alarm Set Points",
          value: "4 points (DANGER1, ALERT1, DANGER2, ALERT2)",
        },
        { label: "Alarm Set Range", value: "0 to 110% of monitor range" },
        {
          label: "Alarm Set Accuracy",
          value: "±1.0% of F.S. or less",
        },
        { label: "Alarm Output", value: "5 or 6 relay contact points" },
        {
          label: "Recorder Output",
          value:
            "1–5 VDC or 4–20 mA DC (standard), 0 to ±10 VDC (optional)",
        },
        {
          label: "Recorder Output Accuracy",
          value: "±0.5% of F.S. at 100 Hz, 25°C",
        },
      ],
    },
    {
      title: "Display",
      specs: [
        {
          label: "Digital Meter",
          value: "LCD 5-digit (7 segment, backlit)",
        },
        { label: "Bar Graph Meter", value: "LCD 40 segments (backlit)" },
        { label: "Digital Meter Accuracy", value: "±1.0% of F.S." },
        { label: "Bar Graph Accuracy", value: "±2.5% of F.S." },
        {
          label: "Alarm Indicators",
          value: "DANGER (red), ALERT (yellow), OK (green), BYPASS (red)",
        },
      ],
    },
    {
      title: "Environmental",
      specs: [
        {
          label: "Operating Temperature",
          value: "0 to 65°C (32 to 149°F)",
        },
        {
          label: "Storage Temperature",
          value: "−30 to +85°C (−22 to +185°F)",
        },
        {
          label: "Relative Humidity",
          value: "20 to 95% (non-condensing)",
        },
      ],
    },
    {
      title: "Physical",
      specs: [
        { label: "Monitor Module Mass", value: "Max 0.7 kg" },
        { label: "With Single Unit Rack", value: "Max 2.5 kg" },
        { label: "Face Plate Material", value: "Aluminum" },
        {
          label: "Power Supply Options",
          value: "85–264 VAC, 24 VDC, 110 VDC",
        },
      ],
    },
    {
      title: "System Components",
      specs: [
        { label: "VM-53", value: "Dual Communication Unit" },
        { label: "VM-5P3", value: "Phase Marker Unit" },
        {
          label: "VM-5Y1/2/3",
          value: "Relay Module Unit (Terminal Block Type)",
        },
        { label: "VM-5Z5/6/7", value: "Power Supply Unit" },
        { label: "VM-5G0/1/2", value: "Single Unit Instrument Rack" },
        { label: "VM-5H4", value: "Instrument Rack (8/10 slot)" },
        {
          label: "VM-5W2",
          value: "Dual Power Supply Instrument Rack",
        },
        { label: "VM-5X", value: "Interface Unit" },
      ],
    },
  ],

  image: "/images/products/condition_monitor/vm5.png",
  gallery: [],

  documents: [
    {
      name: "VM-5 Monitor for TSI Product Catalog",
      type: "catalog",
      url: "",
    },
    {
      name: "VM-5K Dual Vibration Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-55 Vibration Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-5U Dual Seismic Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-5B Dual Acceleration Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-5T Dual Thrust Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-5S Dual Tachometer Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-5C Eccentricity Monitor Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-5D Dual Differential Expansion Monitor Specifications",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/vm-5",
  featured: true,
  order: 1,
};
