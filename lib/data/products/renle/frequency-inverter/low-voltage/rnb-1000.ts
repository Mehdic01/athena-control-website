import type { Product } from "../../../types";


export const rnb1000: Product = {
  slug: "rnb-1000",
  name: "RNB1000",
  brand: "renle",
  category: "frequency-inverter",
  subcategory: "low-voltage",
  keyProduct: true,

  shortDescription:
    "Compact, high-reliability frequency inverter for 3-phase squirrel cage asynchronous motors, covering manufacturing and transportation applications from fans and pumps to machine tools and conveyors.",

  overview: [
    "The RNB1000 Series frequency inverter is designed for 3-phase squirrel cage asynchronous motors, offering compact structure and high reliability across a wide range of industrial applications.",
    "Built for the demands of manufacturing and transportation industries, the RNB1000 supports V/F control, open loop vector, and torque control modes with advanced protection and communication capabilities.",
  ],

  features: [
    {
      title: "Current Limiting (V/f mode)",
      description:
        "The driver gets rid of overcurrent alarm no matter in fast acceleration/deceleration or during locked rotor.",
    },
    {
      title: "Torque Limiting (Vector mode)",
      description:
        "High-precision torque limiting control allows the driver to output strong or soft torque.",
    },
    {
      title: "V/f Separation",
      description:
        "Output frequency and output voltage can be set separately, applicable to variable frequency power supply and torque motor control.",
    },
    {
      title: "Speed Search",
      description:
        "Accurate and reliable speed search enables no-impact smooth start of a rotating motor.",
    },
    {
      title: "Process PID",
      description:
        "Two groups of proportion, integration and differential parameters can be switched freely. Especially applicable to energy saving of fans and pumps.",
    },
    {
      title: "DC Power Input",
      description:
        "Supports input of DC power and enables the user to arrange application of a common DC bus.",
    },
    {
      title: "Overvoltage Stall Protection",
      description:
        "Instantaneous adjustment of output frequency can reduce the probability of overvoltage tripping.",
    },
    {
      title: "Undervoltage Adjustment",
      description:
        "DC bus voltage remains constant depending on the automatic reduction of output frequency.",
    },
    {
      title: "Overcurrent Stall Protection",
      description:
        "During fast acceleration of heavy load, the instantaneous large slip may result in overcurrent fault. This function prevents nuisance tripping in such conditions.",
    },
    {
      title: "Low Frequency Oscillation Suppression",
      description:
        "During no-load or light load start of large power motors, acute oscillation may occur. This feature actively suppresses such oscillation.",
    },
    {
      title: "Automatic Torque Boost",
      description:
        "Automatically adjusts output torque according to the state of the load, applicable to light load, no-load and even overload start.",
    },
  ],

  applications: [
    "Fans & Pumps",
    "Machine Tools",
    "Ceramic Machinery",
    "Woodworking Machinery",
    "Packing & Printing Machinery",
    "Conveyors & Lifters",
  ],

  quickSpecs: [
    { label: "Input Voltage", value: "Three-phase AC 380V, 50/60Hz" },
    { label: "Output Frequency", value: "0 ~ 600 Hz" },
    { label: "Overload Capacity", value: "150% / 60s; 180% / 10s; 200% / 1s" },
    { label: "Protection Level", value: "IP20" },
    { label: "Cooling", value: "Forced air cooling" },
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
        { label: "Output Voltage", value: "0 ~ rated input voltage" },
        { label: "Output Frequency", value: "0Hz ~ 600Hz" },
      ],
    },
    {
      title: "Technical Characteristics",
      specs: [
        { label: "PWM Method", value: "SVPWM, three-phase and two-phase modulation" },
        { label: "Control Method", value: "V/F, open loop vector, torque control" },
        { label: "Running Command Setting", value: "External terminal, keyboard panel, serial communication" },
        { label: "Speed Command Setting", value: "Analog, keyboard, serial, high-speed pulse, multi-stage, PID, simple PLC" },
        { label: "Speed Control Range (open loop vector)", value: "1:100" },
        { label: "Speed Control Accuracy (open loop vector)", value: "±0.5%" },
        { label: "Overload Capacity", value: "150% rated current 60s; 180% for 10s; 200% for 1s" },
        { label: "Auto Voltage Adjustment", value: "Keeps output voltage constant when grid voltage changes" },
        { label: "Speed Search Start", value: "Smooth start without impact on rotating motor" },
      ],
    },
    {
      title: "Control Terminal Input",
      specs: [
        { label: "Internal Power Supply", value: "+10VDC (max 50mA); +24VDC (max 200mA)" },
        { label: "Analog Input Ch1", value: "0~10VDC or 0/4~20mA DC" },
        { label: "Analog Input Ch2", value: "-10~+10VDC" },
        { label: "Switch Input", value: "8 programmable logic inputs, NPN/PNP, 39 selectable functions" },
        { label: "Pulse Input", value: "1 high-speed input, 0~50KHz range" },
      ],
    },
    {
      title: "Control Terminal Output",
      specs: [
        { label: "Analog Output", value: "2 channels, 0~10VDC or 0~20mA DC (optional)" },
        { label: "Switch Output", value: "2 programmable NPN open-collector outputs, 20 selectable functions" },
        { label: "Pulse Output", value: "1 high-speed NPN open-collector, 13 functions optional" },
        { label: "Relay Output", value: "2 channels, normally open + normally closed; 250VAC/3A, 30VDC/1A" },
      ],
    },
    {
      title: "Communication",
      specs: [
        { label: "Interface", value: "RS485" },
        { label: "Protocol", value: "Modbus" },
      ],
    },
    {
      title: "Operation Panel",
      specs: [
        { label: "Display", value: "Digital tube or LCD panel; shows status, fault codes, parameters" },
        { label: "Indicator Lights", value: "Status and unit indicators" },
        { label: "Keys", value: "Inverter control and parameter setting" },
        { label: "Parameter Copy", value: "Upload/download user parameters between panel and machine" },
      ],
    },
    {
      title: "Protection",
      specs: [
        { label: "Protection Types", value: "25 types" },
        {
          label: "Protection Functions",
          value:
            "Output overcurrent, bus overvoltage, bus undervoltage, motor overload, inverter overload, input phase loss, output phase loss, rectifier overheating, inverter module overheating, external fault, communication fault, current detection fault, motor auto-learning failure, EEPROM failure, PID feedback disconnection, braking unit failure, factory time arrival, and others",
        },
      ],
    },
    {
      title: "Environment & Installation",
      specs: [
        { label: "Standards", value: "IEC/EN61800-5-1 (low voltage); IEC/EN61800-3 (EMC)" },
        { label: "Installation Location", value: "Indoor; altitude < 1km; dust-free, no corrosive gas or direct sunlight" },
        { label: "Operating Temperature", value: "-25°C ~ 40°C (no derating); 40°C ~ 50°C: reduce output 1% per °C" },
        { label: "Storage Temperature", value: "-40°C ~ +70°C" },
        { label: "Altitude", value: "0~2000m; above 1000m: derate 1% per 100m" },
        { label: "Humidity", value: "5%~95%, no condensation" },
        { label: "Vibration", value: "< 5.9 m/s² (0.6g)" },
        { label: "Protection Level", value: "IP20" },
        { label: "Cooling Method", value: "Forced air cooling" },
        { label: "Installation Method", value: "0.75~315kW wall-mounted; 350~500kW floor-standing" },
      ],
    },
  ],

  image: "/images/products/frequency_inverter/rnb1000.png",

  // gallery ve document properties can be added when more media and documentation are available

  manufacturerUrl: "https://www.renle.com/?p=561&a=view&r=885",

  featured: true,
  order: 1,
};
