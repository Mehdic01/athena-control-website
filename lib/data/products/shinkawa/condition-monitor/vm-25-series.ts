import type { Product } from "../../types";

export const vm25Series: Product = {
  slug: "vm-25-series",
  name: "VM-25 Series",
  brand: "shinkawa",
  category: "condition-monitor",
  

  shortDescription:
    "Compact DIN-rail mount vibration condition monitor with Modbus/TCP communication. IoT-ready, field-configurable, and expandable up to 8 input channels for general-purpose rotating machinery.",

  overview: [
    "VM-25 is a compact condition monitoring system with standard Modbus/TCP digital communication, making it IoT-ready for integration with plant control and monitoring networks.",
    "The system is expandable and configurable with 2 to 8 vibration measurement channels, isolated recorder outputs, and relay outputs in a modular slot-based architecture. Its small footprint (approx. 158 × 99 × 113 mm) requires minimal panel space.",
    "Field-configurable input sensors, monitor ranges, alarm settings and other parameters can be changed via the VM-25S01 Device Config PC software, allowing adaptation to changing monitoring needs without factory modification.",
  ],

  features: [
    {
      title: "Digital communication (Modbus/TCP)",
      description:
        "Standard Ethernet-based Modbus/TCP communication enables integration with PLC, DCS, SCADA and IoT platforms for remote monitoring.",
    },
    {
      title: "Configurable channel count",
      description:
        "Available in multiple configurations from 2 to 8 input channels, with optional isolated recorder output and relay output slots.",
    },
    {
      title: "Field configurable",
      description:
        "Input sensors, monitor ranges, alarm settings, filter frequencies and more can be changed in the field via VM-25S01 Device Config software.",
    },
    {
      title: "Compact DIN-rail mount",
      description:
        "Small footprint of approximately 158 × 99 × 113 mm mounts on standard 35 mm DIN rail, requiring minimal panel space.",
    },
    {
      title: "Hazardous area certified",
      description:
        "Non-incendive certification: CSA C/US Class I Division 2, ATEX Ex ec nC IIC T4 Gc, IECEx.",
    },
  ],

  applications: [
    "Pumps",
    "Motors",
    "Fans",
    "Compressors",
    "General-purpose rotating machinery",
    "Water & wastewater plants",
  ],

  quickSpecs: [
    { label: "Type", value: "Compact DIN-rail condition monitor" },
    { label: "Input Channels", value: "2 / 4 / 6 / 8 ch (configurable)" },
    { label: "Communication", value: "Modbus/TCP (Ethernet)" },
    { label: "Power Supply", value: "24 VDC (22–26 VDC)" },
    { label: "Dimensions", value: "158 × 99 × 113 mm" },
  ],

  specGroups: [
    {
      title: "Vibration Measurement",
      specs: [
        {
          label: "Input Channels",
          value: "2 channels per slot (up to 4 slots = 8 ch)",
        },
        {
          label: "Compatible Sensors",
          value:
            "FK-202F (eddy current), CV-86/CV-87 (velocity), CA-302 (acceleration), voltage signal",
        },
        {
          label: "Monitor Types",
          value:
            "Displacement vibration, velocity vibration, acceleration vibration",
        },
        { label: "Monitor Range", value: "1 to 1,000 (configurable)" },
        { label: "Units", value: "μm, mils, mm/s, in/s, m/s², g" },
        { label: "Detection", value: "pk-pk, pk, rms" },
        { label: "AC Measurement Range", value: "0 to 9 V pk" },
        {
          label: "I/O Conversion Accuracy",
          value:
            "±1.5% F.S. at 100 Hz, 25°C / ±3.0% F.S. at −20 to +65°C",
        },
        {
          label: "High-pass Filter",
          value: "2, 5, 10, 20 Hz (−3 dB, selectable)",
        },
        {
          label: "Low-pass Filter",
          value: "500 Hz, 1 kHz, 4 kHz, 10 kHz (−3 dB, selectable)",
        },
        { label: "Input Impedance", value: "Approx. 50 kΩ" },
      ],
    },
    {
      title: "Alarm",
      specs: [
        {
          label: "Alarm Set Points",
          value: "DANGER (1 point) + ALERT (1 point) per channel",
        },
        { label: "Alarm Set Range", value: "0 to 100% of monitor range" },
        { label: "Alarm Delay Time", value: "0 to 5 sec (0.5 sec step)" },
        { label: "Alarm Reset", value: "Auto-reset or self-hold (selectable)" },
        {
          label: "Alarm Indicators",
          value: "OK (green), DANGER (red), ALERT (red flashing)",
        },
      ],
    },
    {
      title: "Output",
      specs: [
        {
          label: "Recorder Output (Non-isolated)",
          value: "4–20 mA DC or 1–5 V, 2 ch per slot",
        },
        { label: "Max Load Resistance (Current)", value: "600 Ω" },
        {
          label: "Isolated Recorder Output",
          value: "4–20 mA or 1–5 V, 4 ch per slot (optional)",
        },
        {
          label: "Relay Output",
          value: "4 ch per slot, SPDT dry contact, 250 VAC/2A, 30 VDC/2A",
        },
        {
          label: "Monitor Output",
          value: "BNC (front) + terminal block (bottom), 100 Ω impedance",
        },
      ],
    },
    {
      title: "Communication",
      specs: [
        { label: "Network", value: "Ethernet 10Base-T / 100Base-TX" },
        { label: "Protocol", value: "Modbus/TCP (RTU mode)" },
        { label: "Connector", value: "RJ-45 (shared with Device Config)" },
        {
          label: "Transmitted Data",
          value:
            "Measurement values, peak values, gap/bias voltage, alarm status, alarm settings",
        },
        {
          label: "Remote Control",
          value:
            "Channel bypass, DANGER bypass, peak hold reset, alarm reset, sequence mode",
        },
      ],
    },
    {
      title: "Display",
      specs: [
        {
          label: "Display Type",
          value: "4-digit 7-segment red LED (8 mm character height)",
        },
        {
          label: "Display Modes",
          value:
            "All-channel cycle, specific channel cycle/fixed, all-channel max value",
        },
        {
          label: "Status LEDs",
          value:
            "Power (green), alarm (red), sequence (yellow), DANGER bypass (green), communication (green)",
        },
      ],
    },
    {
      title: "Environmental & Physical",
      specs: [
        { label: "Operating Temperature", value: "−20 to +65°C" },
        { label: "Storage Temperature", value: "−30 to +85°C" },
        {
          label: "Relative Humidity",
          value: "20 to 90% RH (non-condensing)",
        },
        { label: "Power Supply", value: "24 VDC (22–26 VDC), 24 W max" },
        {
          label: "Dimensions",
          value: "Approx. 158.2 (W) × 99 (H) × 112.85 (D) mm",
        },
        { label: "Mounting", value: "35 mm DIN rail" },
        { label: "Mass (All full load)", value: "Max 0.9 kg" },
      ],
    },
    {
      title: "Explosion Protection",
      specs: [
        {
          label: "CSA C/US",
          value: "Class I, Division 2, Groups A, B, C, D T4",
        },
        { label: "ATEX", value: "Ex ec nC IIC T4 Gc" },
        { label: "IECEx", value: "Ex ec nC IIC T4 Gc" },
      ],
    },
  ],

  image: "/images/products/condition_monitor/vm25.png",
  gallery: [],

  documents: [
    {
      name: "VM-25 Compact Vibration Monitor Product Catalog",
      type: "catalog",
      url: "",
    },
    { name: "VM-25 Updated Information", type: "brochure", url: "" },
    {
      name: "VM-25M00 Condition Monitoring System Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-25M00 Specifications (Option selection supported)",
      type: "datasheet",
      url: "",
    },
    {
      name: "VM-25S01 Device Config Specifications",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/vm-25",
  featured: false,
  order: 3,
};
