import type { Product } from "../../../types";


export const rnb2000: Product = {
  slug: "rnb-2000",
  name: "RNB2000",
  brand: "renle",
  category: "frequency-inverter",
  subcategory: "low-voltage",

  shortDescription:
    "High-performance vector frequency inverter supporting both 3-phase AC asynchronous and permanent magnet synchronous motors, with strong dynamic performance and overload capacity for demanding automated production applications.",

  overview: [
    "The RNB2000 Series is a high-performance vector frequency inverter capable of driving both 3-phase AC asynchronous motors and 3-phase AC permanent magnet synchronous motors.",
    "It demonstrates strong dynamic performance and overload capacity for torque and speed control with low-speed high-torque output. The inverter supports various I/O extension cards, PG cards, and communication cards, making it suitable for automated production equipment and lines.",
  ],

  features: [
    {
      title: "DSP Platform",
      description:
        "Uses a TI (USA) next-generation digital signal processor for motor control with a main frequency reaching 150MHz.",
    },
    {
      title: "4th-Generation IGBT",
      description:
        "Employs Infineon (Germany) 4th-generation IGBT with a 175°C highest junction temperature, enabling operation without derating in environments up to 50°C.",
    },
    {
      title: "Dual Motor Support",
      description:
        "Supports both AC asynchronous and AC permanent magnet synchronous motors. Two groups of motor parameters can be preset and switched between via communication or terminals.",
    },
    {
      title: "V/f Current Limiting",
      description:
        "Under V/f mode, high-precision current limiting prevents overcurrent alarms during fast acceleration/deceleration or locked rotor conditions.",
    },
    {
      title: "Vector Torque Limiting",
      description:
        "Under vector control, high-precision torque limiting allows the drive to output strong or soft torque to protect mechanical equipment.",
    },
    {
      title: "V/f Separation Control",
      description:
        "Output frequency and output voltage can be set independently, applicable to frequency conversion power supplies and torque motor control.",
    },
    {
      title: "Smart Extension Interface",
      description:
        "Allows simultaneous connection of two extension cards to meet specialized industry control requirements.",
    },
    {
      title: "Off-Shaft PG Vector Control",
      description:
        "PG vector control is achievable when the encoder is not at the shaft end, provided the deceleration ratio between that axis and the motor axis is fixed.",
    },
    {
      title: "Speed Search",
      description:
        "Accurate and reliable speed search enables no-impact smooth start of a rotating motor.",
    },
    {
      title: "Process PID Control",
      description:
        "Features multiple giving/feedback modes with two groups of PID parameters freely switchable. Supports positive/negative action and is especially applicable to fan and pump energy saving.",
    },
    {
      title: "DC Bus Input",
      description:
        "Accepts DC power input, enabling common DC bus configurations across multiple drives.",
    },
    {
      title: "Overvoltage Stall Protection",
      description:
        "During fast deceleration of large-inertia loads, instantaneous output frequency adjustment reduces the probability of overvoltage tripping.",
    },
    {
      title: "Undervoltage Adjustment",
      description:
        "On instantaneous undervoltage or power failure, automatic frequency reduction maintains DC bus voltage for short-duration continuous operation, suited for fans and pumps.",
    },
    {
      title: "Overcurrent Stall Protection",
      description:
        "During fast acceleration of heavy loads, instantaneous frequency adjustment reduces the probability of overcurrent tripping.",
    },
    {
      title: "Low Frequency Oscillation Suppression",
      description:
        "Suppresses acute oscillation during no-load or light-load start of large motors to prevent fault tripping.",
    },
    {
      title: "Wave-by-Wave Current Limiting",
      description:
        "Automatically limits output current before overcurrent faults occur during heavy-load start or abrupt load increases.",
    },
  ],

  applications: [
    "Automated Production Lines",
    "Fans & Pumps",
    "Conveyors & Lifters",
    "Compressors",
    "Machine Tools",
    "Torque Motor Control",
  ],

  quickSpecs: [
    { label: "Input Voltage", value: "Three-phase AC 380V, 50/60Hz" },
    { label: "Output Frequency", value: "0 ~ 600 Hz" },
    { label: "Control Mode", value: "V/F, Open-loop Vector, Closed-loop Vector, Torque" },
    { label: "Overload Capacity", value: "150% / 60s; 180% / 10s; 200% / 1s" },
    { label: "Protection Level", value: "IP20" },
  ],

  specGroups: [
    {
      title: "Main Power Input",
      specs: [
        { label: "Rated Voltage", value: "Three-phase AC 380V, 50/60Hz" },
        { label: "Voltage Tolerance", value: "380V ±20%" },
        { label: "Frequency Tolerance", value: "±5%" },
      ],
    },
    {
      title: "Main Power Output",
      specs: [
        { label: "Rated Voltage", value: "0 ~ rated input voltage" },
        { label: "Output Frequency", value: "0Hz ~ 600Hz" },
      ],
    },
    {
      title: "Basic Features",
      specs: [
        { label: "PWM Mode", value: "SVPWM; 3-phase and 2-phase modulation" },
        { label: "Control Mode", value: "V/F control; open-loop vector; closed-loop vector (with PG); torque control" },
        { label: "Motor Types", value: "AC asynchronous; AC permanent magnet synchronous" },
        { label: "Operation Command Source", value: "External terminals, keypad/panel, communication" },
        { label: "Speed Command Source", value: "Analog, keypad, communication, high-speed pulse, multistage terminal speed, PID, simple PLC" },
        { label: "Speed Control Range (open-loop vector, async)", value: "1:200" },
        { label: "Speed Control Range (open-loop vector, sync)", value: "1:20" },
        { label: "Speed Control Precision (open-loop vector)", value: "±0.2%" },
        { label: "Speed Fluctuation (open-loop vector)", value: "±0.3%" },
        { label: "Torque Response (open-loop vector)", value: "<20ms" },
        { label: "Torque Control Precision (open-loop vector)", value: "10%" },
        { label: "Start Torque (async, open-loop vector)", value: "0.25Hz / 150%" },
        { label: "Start Torque (sync, open-loop vector)", value: "2.5Hz / 150%" },
        { label: "Overload Capacity", value: "150% for 60s; 180% for 10s; 200% for 1s" },
        { label: "Auto Voltage Adjustment", value: "Maintains constant output voltage when grid voltage changes" },
        { label: "Speed Search Start", value: "Smooth no-impact start of rotating motor" },
      ],
    },
    {
      title: "Control Terminal Input",
      specs: [
        { label: "Internal +10VDC Power", value: "1 route, max 50mA (for potentiometer)" },
        { label: "Internal +24VDC Power", value: "1 route, max 200mA (for logic input)" },
        { label: "Analog Input", value: "2 routes: 0~10VDC or 0/4~20mA DC; 1 route: -10~+10VDC" },
        { label: "Digital Input", value: "9 programmable logic inputs; NPN/PNP supported; 39 selectable functions" },
        { label: "Pulse Input", value: "2 high-speed pulse inputs (0~50KHz); usable as switching input, speed reference, or encoder input" },
      ],
    },
    {
      title: "Control Terminal Output",
      specs: [
        { label: "Analog Output", value: "2 routes; 0~10VDC or 0~20mA DC, selectable" },
        { label: "Digital Output", value: "1 programmable NPN open-collector output; 20 selectable functions" },
        { label: "Pulse Output", value: "1 high-speed pulse output; usable as switching output; 13 selectable functions" },
        { label: "Relay Output", value: "2 routes; 1 NO + 1 NC each; 250VAC/3A, 30VDC/1A" },
      ],
    },
    {
      title: "Communication Interface",
      specs: [
        { label: "Standard", value: "RS485; Modbus protocol" },
        { label: "Extended Options", value: "Profibus DP, CANopen, Ethernet TCP/IP" },
      ],
    },
    {
      title: "Operation Panel",
      specs: [
        { label: "Display", value: "State parameters, fault codes, parameter setting; default digitron; LED panel optional" },
        { label: "Indicators", value: "State lamp (operation status); unit lamp (data unit)" },
        { label: "Parameter Copy", value: "Upload to panel for storage; download from panel to drive" },
      ],
    },
    {
      title: "Fault Protection",
      specs: [
        { label: "Protection Types", value: "25 types" },
        {
          label: "Protection Functions",
          value:
            "Output overcurrent, bus overvoltage, bus undervoltage, motor overload, inverter overload, input phase loss, output phase loss, rectifier overtemperature, inverter overtemperature, external fault, communication fault, current detection fault, motor self-learning fault, EEPROM fault, PID feedback failure, braking unit fault, factory setting time arrival",
        },
      ],
    },
    {
      title: "Special Functions",
      specs: [
        {
          label: "Functions",
          value:
            "Parameter copy/backup, common DC bus, dual motor parameter switching, speed tracking, swing frequency control, fixed-length control, counting, pre-excitation, overcurrent/overvoltage stall, restart after power-off, skip frequency, 4-stage acceleration/deceleration, motor overtemperature protection, flexible fan control, process PID, simple PLC, drooping control, parameter discrimination, flux weakening control, high-precision torque control, V/f separation control",
        },
      ],
    },
    {
      title: "Environment & Installation",
      specs: [
        { label: "Standards", value: "IEC/EN61800-5-1 (low voltage); IEC/EN61800-3 (EMC)" },
        { label: "Installation Location", value: "Indoors; altitude <1000m; no dust, erosive gas, or direct sunlight" },
        { label: "Operating Temperature", value: "-25°C ~ 40°C (no derating); 40°C ~ 50°C: derate 1% per °C" },
        { label: "Storage Temperature", value: "-40°C ~ +70°C" },
        { label: "Altitude", value: "0~2000m; derate 1% per 100m above 1000m" },
        { label: "Humidity", value: "5%~95%; no condensation or dripping" },
        { label: "Vibration", value: "<5.9 m/s² (0.6g)" },
        { label: "Protection Level", value: "IP20" },
        { label: "Cooling Method", value: "Forced air" },
        { label: "Installation Method", value: "0.75~315kW wall-mounted; 350~500kW floor-standing" },
      ],
    },
  ],

  image: "/images/products/frequency_inverter/rnb2000.png",

  manufacturerUrl: "https://www.renle.com/?p=561&a=view&r=884",

  order: 2,
};
