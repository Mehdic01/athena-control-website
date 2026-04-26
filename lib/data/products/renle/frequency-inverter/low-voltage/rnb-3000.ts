import type { Product } from "../../../types";


export const rnb3000: Product = {
  slug: "rnb-3000",
  name: "RNB3000",
  brand: "renle",
  category: "frequency-inverter",
  subcategory: "low-voltage",
  shortDescription:
    "Frequency converter for three-phase AC motor speed control using SVPWM control theory and IGBT power output devices, designed for fan, pump, and compressor applications with adjustable carrier frequency to minimize motor noise.",
  overview: [
    "The RNB3000 Series is a frequency converter for three-phase AC motor speed control, employing microprocessor technology, SVPWM control theory, and IGBT power output devices for high reliability.",
    "Designed with adjustable carrier frequency to minimize motor noise, the RNB3000 targets applications operating outside high-efficiency zones — including fan, air compressor, and pump systems with large pressure/flow variation and extended run times. It is available in G type (heavy load, 150% overload) and P type (light load, 120% overload) configurations.",
  ],
  features: [
    {
      title: "Space Vector Technology",
      description:
        "Excellent vector algorithm guarantees big torque at low frequency with minimal switching loss.",
    },
    {
      title: "Dead-Zone Compensation",
      description:
        "Unique software method addressing low-frequency pulsating torque for smooth motor operation.",
    },
    {
      title: "Speed Tracking Self-Start",
      description:
        "Automatically recognizes motor speed and starts the running motor without requiring a sensor.",
    },
    {
      title: "Auto Energy Saving",
      description:
        "Software power factor regulation dynamically adjusted by load to minimize energy consumption.",
    },
    {
      title: "Voltage Fluctuation Control",
      description:
        "Output voltage vibration is within ±5% when input voltage vibration is within ±20%, ensuring stable motor performance.",
    },
    {
      title: "Comprehensive Protection",
      description:
        "Overvoltage, overcurrent, undervoltage, IGBT short-circuit, and inverse time limit overload protection built in.",
    },
    {
      title: "PWM Braking",
      description:
        "Built-in flexible energy consumption braking; user selects an appropriate braking resistor for their application.",
    },
    {
      title: "HMI with LCD Display",
      description:
        "LCD Chinese/English display with 8 digital inputs, 2 analog inputs, 3 digital outputs, and 2 analog outputs.",
    },
    {
      title: "Intelligent Temperature Detection",
      description:
        "Monitors heat sink temperature to protect the inverter and connected equipment from thermal damage.",
    },
    {
      title: "Fan Management",
      description:
        "Cooling fan start/stop is controlled by the run command or a user-set temperature threshold for extended fan life.",
    },
  ],
  applications: [
    "Fans",
    "Air Compressors",
    "Pumps",
    "Belt Conveyors",
    "Ball Mills and Rolling Machines",
    "Variable Flow Systems",
  ],
  quickSpecs: [
    { label: "Power Range (G type)", value: "1.5–500 kW" },
    { label: "Power Range (P type)", value: "2.2–500 kW" },
    { label: "Input Voltage", value: "3-phase 380 Vac, 50/60 Hz" },
    { label: "Output Frequency", value: "0–600 Hz" },
    { label: "Control Type", value: "Optimized Space Vector SPWM" },
  ],
  specGroups: [
    {
      title: "Input",
      specs: [
        { label: "Power Supply", value: "3-phase 380 Vac, 50/60 Hz" },
        { label: "Input Voltage Range", value: "±20%" },
        { label: "Voltage Imbalance Ratio", value: "<3%" },
        { label: "Frequency Range", value: "±5%" },
      ],
    },
    {
      title: "Output",
      specs: [
        {
          label: "Motor Capacity (Constant Torque — G type)",
          value: "1.5–500 kW",
        },
        {
          label: "Motor Capacity (Variable Torque — P type)",
          value: "2.2–500 kW",
        },
        { label: "Rated Output", value: "3-phase 380 Vac, 50/60 Hz" },
        { label: "Frequency Range", value: "0–600 Hz" },
        {
          label: "Setting Resolution — Analog",
          value: "0.4% of maximum set frequency",
        },
        {
          label: "Setting Resolution — Digital",
          value: "0.01 Hz (below 100 Hz); 0.1 Hz (above 100 Hz)",
        },
        {
          label: "Frequency Precision — Analog",
          value: "±0.2% (25 ± 10 °C)",
        },
        {
          label: "Frequency Precision — Digital",
          value: "±0.01% (−10 to +50 °C)",
        },
        {
          label: "Overcurrent Withstand — G Type",
          value: "150% rated output current for 1 min",
        },
        {
          label: "Overcurrent Withstand — P Type",
          value: "120% rated output current for 1 min",
        },
      ],
    },
    {
      title: "Control",
      specs: [
        { label: "Control Type", value: "Optimized Space Vector SPWM" },
        {
          label: "Torque Compensation",
          value: "Auto torque boost at start; up to 150%",
        },
        {
          label: "Slip Compensation",
          value: "Speed-drop correction under load",
        },
        {
          label: "Instant Power Failure Restart",
          value: "Yes — restarts upon power recovery",
        },
        { label: "Upper/Lower Frequency Limit", value: "Settable" },
        { label: "Skip Frequency", value: "3 groups" },
        {
          label: "Speed Tracking Restart",
          value: "Seamless transition to inverter control without stopping motor",
        },
        {
          label: "Accel/Decel Curve Types",
          value: "Linear, S1, S2",
        },
        {
          label: "Operation Modes",
          value:
            "Keyboard; keyboard control; communication (RS485); digital input; analog input",
        },
        {
          label: "Stop Modes",
          value: "Free stop; deceleration stop; deceleration with DC braking",
        },
        {
          label: "Carrier Frequency",
          value: "1 kHz to 6 kHz (adjustable)",
        },
        {
          label: "PID Closed-Loop Control",
          value: "Flow, pressure, temperature applications",
        },
        {
          label: "Frequency Setting Methods",
          value:
            "Keypad (▲/▼); 0–10 VDC analog; 0–20 mA / 4–20 mA current; multi-step (1–7 speeds)",
        },
        {
          label: "Running Status Output — Relay",
          value: "Run status, fault status, monitoring status",
        },
        {
          label: "Running Status Output — Analog",
          value: "Frequency, current, voltage, speed (selectable)",
        },
      ],
    },
    {
      title: "Protection",
      specs: [
        { label: "Overload", value: "Output load current monitoring" },
        { label: "Overvoltage", value: "DC bus overvoltage monitoring" },
        {
          label: "Surge Voltage",
          value: "Line-to-line or line-to-ground surge events",
        },
        {
          label: "Undervoltage",
          value: "DC bus drops below threshold",
        },
        { label: "Overheat", value: "Heat sink temperature monitoring" },
        {
          label: "Short-Circuit",
          value: "Output side short-circuit or overcurrent",
        },
        { label: "Ground Short-Circuit", value: "Output-side ground fault" },
        {
          label: "Motor Overheat",
          value: "Electronic relay overload protection",
        },
        { label: "Overcurrent", value: "100–150% (adjustable)" },
        {
          label: "Grounding",
          value: "U/V/W relative short-circuit → inverter stop",
        },
      ],
    },
    {
      title: "Environment & Installation",
      specs: [
        {
          label: "Installation Site",
          value:
            "Indoor; altitude <1,000 m; no corrosive/flammable gas, dust, oil mist, or water drops; no direct sunlight; no strong magnetic fields",
        },
        { label: "Operating Temperature", value: "−10 °C to +40 °C" },
        { label: "Humidity", value: "5–95% RH (no condensation)" },
        { label: "Vibration", value: "≤ 0.5 g" },
        { label: "Storage Temperature", value: "−25 °C to +60 °C" },
        {
          label: "Installation Method",
          value:
            "Wall mounting standard; 400–500 kW models may use bottom rack",
        },
      ],
    },
  ],
  image: "/images/products/frequency_inverter/rnb3000.png",
  manufacturerUrl: "https://www.renle.com/?p=561&a=view&r=883",
  order: 3,
};
