import type { Product } from "../../../types";


export const rnb5000: Product = {
  slug: "rnb-5000",
  name: "RNB5000",
  brand: "renle",
  category: "frequency-inverter",
  subcategory: "low-voltage",
  shortDescription:
    "High-performance frequency inverter series supporting V/F, open loop vector, and closed loop vector control, designed for fans, pumps, textile, air compressors, oilfields, coal mines, and heavy industrial applications.",
  overview: [
    "The RNB5000 Series is a high-performance frequency inverter supporting V/F control, open loop vector, and closed loop vector control modes for three-phase AC motors.",
    "Targeting common industrial usage, it is suitable for fan and pump loads as well as demanding automation applications across textile, stone sawing, air compressor, oilfield, coal mine, ball mill, and injection molding sectors. Closed-loop vector control achieves 0 Hz / 180% starting torque with a speed range of 1000:1, and the series supports multi-voltage ratings of 380V, 690V, and 1140V.",
  ],
  features: [
    {
      title: "High-Performance Current Vector Control",
      description:
        "High starting torque can be realized for induction motors: V/F control delivers 1 Hz / 150% torque at a 60:1 speed range; open loop vector delivers 0.5 Hz / 150% torque at 100:1; closed loop vector delivers 0 Hz / 180% torque at 1000:1.",
    },
    {
      title: "Three Motor Parameter Self-Tuning Methods",
      description:
        "Static self-tuning for motors connected to machinery during debugging; rotation self-tuning for high starting torque and precision; online parameter self-tuning detects motor characteristic changes during operation.",
    },
    {
      title: "Power Outage and Instantaneous Stop Handling",
      description:
        "Speed tracking for fluid machinery (fans, blowers) on power restoration. Instantaneous non-stop function automatically compensates when low bus voltage is detected, reducing dependence on UPS systems in film production lines.",
    },
    {
      title: "Advanced Debugging Tools",
      description:
        "Application selection auto-sets optimal parameters to reduce trial run time. Keyboard supports parameter copy (upload/download). xPowerTool provides real-time monitoring, parameter configuration, oscilloscope functions, and management of multiple inverters simultaneously.",
    },
    {
      title: "xLoaderTool for Online Software Upgrade",
      description:
        "Dedicated tool for online firmware upgrades, enabling product updates without hardware replacement.",
    },
    {
      title: "Master-Slave Control",
      description:
        "Configurable as master or slave for multi-motor systems. Master selects the synchronized reference (frequency, operating frequency, or torque); slave follows master commands. Supports drooping control for balanced load distribution.",
    },
    {
      title: "Brake Logic and Safety Shutdown",
      description:
        "Supports standard brake logic and safety shutdown functions. Suited for construction lifting equipment, tower cranes, and bridge applications.",
    },
    {
      title: "Speed-Limiting Torque Control",
      description:
        "Supports speed-limiting mode under a variety of torque control configurations for precise torque management.",
    },
  ],
  applications: [
    "Fans and Pumps",
    "Textile and Stone Sawing",
    "Air Compressors",
    "Oil Fields and Coal Mines",
    "Ball Mills and Injection Molding",
    "Construction Lifting and Tower Cranes",
  ],
  quickSpecs: [
    { label: "Rated Input Voltage", value: "380V / 690V / 1140V" },
    {
      label: "Control Mode",
      value: "V/F; Open Loop Vector; Closed Loop Vector",
    },
    {
      label: "Max Output Frequency",
      value: "3000 Hz (V/F); 300 Hz (Vector)",
    },
    { label: "Start Torque", value: "0.5 Hz / 150% motor rated torque" },
    { label: "Overload Capacity", value: "150% for 60 s; 180% for 3 s" },
  ],
  specGroups: [
    {
      title: "Basic Features",
      specs: [
        { label: "Rated Input Voltage", value: "380V / 690V / 1140V" },
        { label: "Input Frequency", value: "50 / 60 Hz" },
        { label: "Voltage Fluctuation", value: "−15% ~ +10%" },
        { label: "Voltage Unbalance", value: "< 3%" },
        { label: "Frequency Range (Input)", value: "47 ~ 63 Hz" },
        {
          label: "Control Mode",
          value: "V/F control; open loop vector; closed loop vector",
        },
        { label: "Frequency Resolution — Digital", value: "0.01 Hz" },
        {
          label: "Frequency Resolution — Analog",
          value: "0.5% × max frequency",
        },
        { label: "Max Output — V/F Control", value: "3000 Hz" },
        { label: "Max Output — Vector Control", value: "300 Hz" },
        { label: "Speed Control Range — V/F", value: "1:60" },
        { label: "Speed Control Range — Vector", value: "1:100" },
        {
          label: "Carrier Frequency",
          value: "0.5 ~ 12.0 kHz (auto-adjusted by heatsink temperature)",
        },
        {
          label: "Start Torque",
          value: "0.5 Hz / 150% of motor rated torque",
        },
        {
          label: "Overload Capacity",
          value: "150% rated current for 60 s; 180% for 3 s",
        },
      ],
    },
    {
      title: "Basic Functions",
      specs: [
        {
          label: "Operation Mode",
          value:
            "Keyboard; terminal (2-wire/3-wire); RS485 communication; switchable",
        },
        {
          label: "V/F Curve",
          value: "Straight line, multistage, multiple powers",
        },
        {
          label: "Accel/Decel Curve",
          value: "Straight line or S-curve; 4 sets; range 0.1 ~ 6000.0 s",
        },
        { label: "Torque Boost", value: "Automatic or manual" },
        {
          label: "Speed Tracking",
          value: "Available across all power ratings",
        },
        {
          label: "Motor Braking",
          value: "DC braking, energy consumption braking, flux braking",
        },
        {
          label: "DC Braking Frequency",
          value: "0.00 Hz ~ max frequency",
        },
        { label: "DC Braking Time", value: "0.0 ~ 100.0 s" },
        {
          label: "DC Braking Current",
          value: "0.0 ~ 100% of motor rated current",
        },
        {
          label: "Flux Braking",
          value:
            "For rapid stop / energy regeneration; prevents overvoltage",
        },
        {
          label: "Wave-by-Wave Current Limiting",
          value: "Minimizes overcurrent faults",
        },
        {
          label: "Overcurrent/Overvoltage Control",
          value: "Auto-limits current/voltage during operation",
        },
      ],
    },
    {
      title: "Special Functions",
      specs: [
        {
          label: "Terminal Delay",
          value:
            "0.0 ~ 3000.0 s response delay for input/output switching terminals",
        },
        {
          label: "Jog Control",
          value: "Keyboard or terminal; 0.00 Hz ~ max frequency",
        },
        { label: "Jog Accel/Decel Time", value: "0.1 ~ 6000.0 s" },
        {
          label: "Multistage Speed / Simple PLC",
          value: "Up to 16-stage speed operation",
        },
        {
          label: "Built-in PID",
          value: "Two groups; supports closed-loop process control",
        },
        {
          label: "Fixed Length & Counting",
          value:
            "Counting convertible to length for display or fixed-length control",
        },
        {
          label: "Swing Frequency",
          value:
            "Fixed swing, sudden change, and period output at any frequency",
        },
        { label: "Timing Control", value: "0 ~ 65000 h stop control" },
        {
          label: "Instantaneous Power Failure Non-stop",
          value:
            "Frequency reduction allows load feedback energy to compensate bus voltage drop",
        },
        {
          label: "Multifunction Jog Key",
          value: "Jog, direction switching, command source switching",
        },
      ],
    },
    {
      title: "Peripheral Terminals",
      specs: [
        {
          label: "Reference Power Supply",
          value: "10V / 30 mA (for analog input signal)",
        },
        {
          label: "Control Power",
          value: "24V / 200 mA (for switching terminals)",
        },
        {
          label: "Analog Input",
          value:
            "2 routes; voltage or current selectable; ranges: 0~10V, 0~20mA, −10~+10V; programmable",
        },
        {
          label: "Analog Output",
          value:
            "2 routes; voltage or current selectable; ranges: 0~10V, 0~20mA; programmable",
        },
        {
          label: "Digital Input",
          value:
            "6 multifunctional terminals; PNP and NPN modes; X6 supports high-speed pulse 0~100 kHz",
        },
        {
          label: "Digital Output",
          value:
            "2 open collector outputs (Y2: high-speed pulse 0~100 kHz); 2 relay output terminals",
        },
      ],
    },
    {
      title: "Fault Protection",
      specs: [
        {
          label: "Protection Types",
          value:
            "Input/output phase failure, undervoltage, overvoltage, overcurrent, overload, short circuit, module fault, peripheral fault, self-defined fault",
        },
      ],
    },
    {
      title: "Environment & Installation",
      specs: [
        {
          label: "Installation Site",
          value:
            "Indoors; no direct sun, dust, water, salt, oil mist, vapor, flammable or erosive gas",
        },
        {
          label: "Altitude ≤ 1000 m",
          value: "Full rated operation",
        },
        {
          label: "Altitude > 1000 m",
          value: "Derate 1% per 100 m increase",
        },
        {
          label: "Altitude > 3000 m",
          value: "Consult manufacturer",
        },
        {
          label: "Operating Temperature",
          value: "−10°C ~ +40°C; at 40°C~50°C derate 3% per 1°C increase",
        },
        { label: "Humidity", value: "< 95% RH, no condensation" },
        { label: "Vibration", value: "< 0.6 g" },
        { label: "Storage Temperature", value: "−25°C ~ +65°C" },
      ],
    },
  ],
  image: "/images/products/frequency_inverter/rnb5000.png",
  manufacturerUrl: "https://www.renle.com/?p=561&a=view&r=882",
  order: 4,
};
