import type { Product } from "../../types";

export const vm21Series: Product = {
  slug: "vm-21-series",
  name: "VM-21 Series",
  brand: "shinkawa",
  category: "condition-monitor",
  //subcategory: "Condition Monitor",

  shortDescription:
    "Compact signal conditioners that convert vibration, displacement, temperature and speed transducer signals to isolated 4-20 mA or 1-5 VDC outputs for condition based maintenance.",

  overview: [
    "The VM-21 series receives signals from transducers mounted on rotating machines and converts them into isolated 4-20 mA DC or 1-5 VDC signals, making condition based maintenance (CBM) accessible and cost-effective.",
    "A wide module lineup covers displacement vibration (VM-21K), velocity vibration (VM-21U), acceleration vibration (VM-21B), multi-input vibration (VM-21A), 3-wire LVDT (VM-21P), 6-wire LVDT (VM-21D), thrust position (VM-21T), revolution speed (VM-21R), temperature (VM-21F), and process signals (VM-21E).",
    "Modules can be mounted individually with the VM-21G socket on DIN rail, or up to 8 modules in the VM-21H backplane unit for rack or wall mounting.",
  ],

  features: [
    {
      title: "Small and lightweight",
      description:
        "Each signal conditioner module weighs approximately 110 g, enabling compact installations in space-constrained panels.",
    },
    {
      title: "Selectable mounting types",
      description:
        "Individual DIN-rail mounting with VM-21G socket, or up to 8 modules in the VM-21H backplane unit for rack or wall mounting.",
    },
    {
      title: "Power supply options",
      description:
        "Supports 24 VDC or 100-240 VAC/DC universal power supply depending on model selection.",
    },
    {
      title: "Waveform output for diagnostics",
      description:
        "Buffered waveform output provides raw transducer signals for machine diagnostics and analysis systems.",
    },
    {
      title: "Burn-down function",
      description:
        "Detects transducer failure and drives output below 0.8 mA (0.2 V) to signal an abnormal condition to the control system.",
    },
    {
      title: "Wide module lineup",
      description:
        "10 module types covering displacement, velocity, acceleration, thrust, LVDT, speed, temperature, and process signal inputs.",
    },
    {
      title: "Isolated output",
      description:
        "All signal outputs are galvanically isolated with 2,000 VAC withstand voltage between input, output, power and ground.",
    },
  ],

  applications: [
    "Pumps",
    "Motors",
    "Fans",
    "Compressors",
    "Turbines",
    "General rotating machinery CBM",
  ],

  quickSpecs: [
    { label: "Type", value: "Compact signal conditioner" },
    { label: "Output", value: "4-20 mA DC or 1-5 VDC (isolated)" },
    { label: "I/O Accuracy", value: "±1% F.S. at 25°C" },
    { label: "Power Supply", value: "24 VDC or 100-240 VAC/DC" },
    { label: "Weight", value: "Approx. 110 g per module" },
  ],

  specGroups: [
    {
      title: "Signal Conditioner Modules",
      specs: [
        {
          label: "VM-21K",
          value: "Displacement input vibration (FK-202F, VK-202A)",
        },
        { label: "VM-21U", value: "Velocity input vibration (CV-86)" },
        {
          label: "VM-21B",
          value: "Acceleration input vibration (CA-302, CA-721/722)",
        },
        {
          label: "VM-21A",
          value:
            "Multi-input vibration (CA/CV series, velocity/acceleration/displacement)",
        },
        {
          label: "VM-21P",
          value: "3-wire LVDT signal conditioner (LS series)",
        },
        {
          label: "VM-21D",
          value: "6-wire LVDT signal conditioner (LF series)",
        },
        {
          label: "VM-21T",
          value: "Displacement input thrust (FK-202F, FK-452F)",
        },
        {
          label: "VM-21R",
          value: "Revolution signal conditioner (RD/FK/VK/MS series)",
        },
        {
          label: "VM-21F",
          value:
            "Temperature (thermocouple K/E/J/T/R/S/B/N/W3/W5, RTD Pt100/JPt100/Pt50, mV)",
        },
        {
          label: "VM-21E",
          value: "Process signal conditioner (1-5 V or 4-20 mA input)",
        },
      ],
    },
    {
      title: "Common Specifications",
      specs: [
        {
          label: "Output (Isolated)",
          value: "1-5 VDC (250 Ω) or 4-20 mA DC (max load 600 Ω)",
        },
        {
          label: "I/O Conversion Accuracy",
          value: "±1% F.S. at 25°C, ±2% F.S. at 0-50°C",
        },
        {
          label: "Input Impedance",
          value: "50 kΩ (vibration modules)",
        },
        {
          label: "Insulation Resistance",
          value: "100 MΩ min at 500 VDC",
        },
        {
          label: "Withstand Voltage",
          value: "2,000 VAC for 1 minute",
        },
        {
          label: "Buffered Output",
          value: "Via buffer amplifier, 100 Ω output impedance",
        },
      ],
    },
    {
      title: "VM-21K (Displacement Vibration)",
      specs: [
        {
          label: "Input Transducer",
          value: "FK-202F, VK-202A (787 mV/100 μm)",
        },
        {
          label: "Measuring Range",
          value: "0-100 / 0-125 / 0-200 μm pk-pk",
        },
        {
          label: "Frequency Response",
          value: "5 Hz to 4 kHz (−3 dB)",
        },
        { label: "Response Speed", value: "τ = 500 ms, 63% response" },
        {
          label: "Power Supply Output",
          value: "−24 VDC (30 mA, short-circuit protected)",
        },
      ],
    },
    {
      title: "VM-21R (Revolution)",
      specs: [
        {
          label: "Input Transducer",
          value: "RD Series, FK Series, VK Series, MS Series",
        },
        {
          label: "Measuring Range",
          value: "0-5,000 to 0-100,000 rpm (selectable)",
        },
        {
          label: "Input Frequency",
          value: "0.01 Hz to 10 kHz, min pulse width 50 μs",
        },
        { label: "Min Input Voltage", value: "2 V pk-pk" },
      ],
    },
    {
      title: "Environmental & Physical",
      specs: [
        { label: "Operating Temperature", value: "0 to 50°C" },
        {
          label: "Relative Humidity",
          value: "10 to 90% RH (non-condensing)",
        },
        { label: "Module Weight", value: "Approx. 110 g" },
        {
          label: "Casing Material",
          value: "Modified polyphenylene oxide (black)",
        },
        {
          label: "CE Marking",
          value: "24 VDC power supply specifications only",
        },
      ],
    },
    {
      title: "Mounting Options",
      specs: [
        {
          label: "VM-21G Socket",
          value: "Single module, DIN rail or wall mount, 29.5 × 72 × 30 mm, 50 g",
        },
        {
          label: "VM-21H Backplane",
          value:
            "Up to 8 modules, rack or wall mount, 444.5 × 130 × 46.8 mm, 2.2 kg",
        },
        {
          label: "VM-21H Redundant Power",
          value: "Available for 24 VDC specification (dual DC input)",
        },
      ],
    },
  ],

  image: "/images/products/condition_monitor/vm21.png",
  gallery: [],

  documents: [
    { name: "VM-21 Series Product Catalog", type: "catalog", url: "" },
    {
      name: "VM-21K Displacement Vibration Signal Conditioner Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-21A Vibration Signal Conditioner Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-21P 3-Wire LVDT Signal Conditioner Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-21D 6-Wire LVDT Signal Conditioner Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-21T Thrust Signal Conditioner Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-21R Revolution Signal Conditioner Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-21G Signal Conditioner Socket Specifications",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/vm-21",
  featured: false,
  order: 4,
};
