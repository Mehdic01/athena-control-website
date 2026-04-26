import type { Product } from "../../../types";


export const rnb6000: Product = {
  slug: "rnb-6000",
  name: "RNB6000",
  brand: "renle",
  category: "frequency-inverter",
  subcategory: "low-voltage",
  shortDescription:
    "Variable-frequency drive for three-phase AC motor speed control using modern microprocessor technology with SVPWM control theory and IGBT power output devices, with adjustable carrier frequency to reduce motor noise.",
  overview: [
    "The RNB6000 Series is a variable-frequency drive for three-phase AC motor speed control, employing modern microprocessor technology with SVPWM control theory and IGBT power output devices.",
    "With adjustable carrier frequency to reduce motor noise, the RNB6000 targets fan, air compressor, and pump systems operating outside their high-efficiency zones — including applications with large pressure and flow changes, extended run times, and systems currently using wind deflectors, valve interception, or bypass flow for flow adjustment.",
  ],
  features: [
    {
      title: "Space Vector Technology",
      description:
        "Newest space vector algorithm delivers high low-frequency torque with minimal switching loss for efficient motor control.",
    },
    {
      title: "Software Dead-Zone Compensation",
      description:
        "Unique dead-time compensation method ensures stable, smooth torque output at low and extreme speeds.",
    },
    {
      title: "Speed Tracking Self-Start",
      description:
        "Automatically recognizes the running motor's speed and transitions to inverter control without stopping. No speed sensor required.",
    },
    {
      title: "Auto Energy Saving",
      description:
        "Dynamic software power factor regulation continuously adjusts to load changes, minimizing energy consumption.",
    },
    {
      title: "Voltage Fluctuation Control",
      description:
        "Output voltage is held within ±5% even when input voltage varies within ±20%, ensuring stable motor performance.",
    },
    {
      title: "Comprehensive Protection",
      description:
        "Built-in overvoltage, overcurrent, undervoltage, IGBT short-circuit, and inverse time limit overload protection.",
    },
    {
      title: "DC Power Supply Support",
      description:
        "Supports DC bus power supply connection, reducing power supply investment cost when powering multiple drives from a shared DC bus.",
    },
    {
      title: "Built-in PWM Energy Braking",
      description:
        "Flexible energy consumption braking built in; user selects an appropriate external braking resistor for the application.",
    },
    {
      title: "HMI & I/O Interface",
      description:
        "LCD Chinese/English display with 8 digital inputs, 2 analog inputs, 3 digital outputs, and 2 analog outputs.",
    },
    {
      title: "Intelligent Temperature Management",
      description:
        "Intelligent heat sink temperature detection with automatic fan start/stop control for extended component life.",
    },
    {
      title: "DC Braking",
      description:
        "Built-in DC braking support for controlled motor deceleration and hold applications.",
    },
    {
      title: "Power Loss Ride-Through",
      description:
        "Maintains operation during momentary power loss by utilizing motor inertia energy to sustain the DC bus.",
    },
  ],
  applications: [
    "Fans",
    "Air Compressors",
    "Pumps",
    "HVAC Systems",
    "Variable Flow Systems",
    "Extended-Run Industrial Systems",
  ],
  quickSpecs: [
    { label: "Power Range", value: "1.5–315 kW" },
    { label: "Rated Current", value: "4.0–600 A" },
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
          label: "Applicable Motor Capacity",
          value: "1.5–315 kW (constant torque)",
        },
        {
          label: "Rated Output Current",
          value: "4.0–600 A (constant torque)",
        },
        { label: "Rated Output Voltage", value: "3-phase 380 V, 50/60 Hz" },
        { label: "Frequency Range", value: "0–600 Hz" },
        {
          label: "Setting Resolution — Analog",
          value: "0.4% of maximum set frequency",
        },
        {
          label: "Setting Resolution — Digital",
          value: "0.01 Hz (≤100 Hz); 0.1 Hz (>100 Hz)",
        },
        {
          label: "Frequency Precision — Analog",
          value: "±0.2% (25 ± 10°C)",
        },
        {
          label: "Frequency Precision — Digital",
          value: "±0.01% (−10 to +50°C)",
        },
        {
          label: "Overcurrent Withstand",
          value: "150% rated output current for 1 min",
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
          value: "Compensates speed drop under load",
        },
        {
          label: "Restart After Power Failure",
          value: "Restarts upon power recovery after momentary outage",
        },
        { label: "Upper/Lower Frequency Limit", value: "Settable" },
        { label: "Skip Frequency", value: "3 groups settable" },
        {
          label: "Speed Tracking Restart",
          value: "Switches to variable frequency control without stopping motor",
        },
        { label: "Accel/Decel Time", value: "0.1–999.9 s; independently settable" },
        { label: "Accel/Decel Curve Types", value: "Linear, S1, S2 curve" },
        {
          label: "Operation Modes",
          value:
            "Keyboard; keyboard control; communication; digital input; analog input",
        },
        {
          label: "Serial Communication",
          value: "RS485 port, upper machine control",
        },
        {
          label: "Stop Modes",
          value: "Free stop; deceleration stop; deceleration with DC braking",
        },
        {
          label: "Carrier Frequency",
          value: "1–6 kHz (adjustable for low-noise control)",
        },
        {
          label: "PID Closed-Loop Control",
          value: "Available for flow, pressure, temperature systems",
        },
        {
          label: "Frequency Setting Methods",
          value:
            "Keyboard (▲/▼); analog input (0–10 VDC, 0–20 mA, 4–20 mA); multi-step (1–7 steps via digital input)",
        },
        {
          label: "Running Status Output",
          value:
            "Relay (run/fault/monitor status); analog output (frequency, current, voltage, speed — selectable)",
        },
      ],
    },
    {
      title: "Protection",
      specs: [
        { label: "Overload", value: "Monitors output load current" },
        { label: "Overvoltage", value: "Monitors DC bus overvoltage" },
        {
          label: "Surge Voltage",
          value: "Line-to-line or line-to-ground surge events",
        },
        {
          label: "Undervoltage",
          value: "Triggers when DC bus drops below threshold",
        },
        { label: "Overheat", value: "Monitors heat sink temperature" },
        {
          label: "Short-Circuit to Ground",
          value: "Activates when output-side grounding short occurs",
        },
        { label: "Overcurrent", value: "100–150% (adjustable)" },
        {
          label: "Grounding",
          value: "Inverter stops if any of U, V, W is shorted to ground",
        },
      ],
    },
    {
      title: "Environment & Installation",
      specs: [
        {
          label: "Installation Site",
          value:
            "Indoor; altitude <1,000 m; no corrosive/flammable gas, dust, oil mist, or water drops; no direct sunlight; no strong magnetic field",
        },
        { label: "Operating Temperature", value: "−10°C to +40°C" },
        { label: "Humidity", value: "5–95% RH (non-condensing)" },
        { label: "Vibration", value: "≤ 0.5 g" },
        { label: "Storage Temperature", value: "−25°C to +65°C" },
      ],
    },
  ],
  image: "/images/products/frequency_inverter/rnb6000.png",
  manufacturerUrl: "https://www.renle.com/?p=561&a=view&r=881",
  order: 5,
};
    