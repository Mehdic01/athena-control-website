import type { Product } from "../../../types";


export const vmxSynergyPlus: Product = {
  slug: "vmx-synergy-plus",
  name: "VMX-Synergy Plus",
  brand: "motortronics",
  category: "soft-starter",
  subcategory: "low-voltage",
  keyProduct: true,

  shortDescription:
    "Feature-rich soft starter with iERS energy saving technology, i45 smart application profiles, and a removable 3.5\" color touchscreen for fast commissioning.",

  overview: [
    "With a unique combination of smart features, VMX-Synergy Plus\u2122 sets new performance standards for soft starters",
    "The incorporation of Motortronics\u2019 unique iERS technology allows VMX-Synergy Plus\u2122 to deliver unrivalled soft start performance alongside energy saving capability on partially loaded motors.",
    "VMX-Synergy Plus\u2122 uses Motortronics\u2019 globally renowned i45 smart application pre-program suite. This allows the user to program the unit to any common application in 4 simple steps using our intuitive touch screen technology.",
    "With built in full motor overload protection, the feature rich VMX-Synergy Plus\u2122 will meet all key design criteria.",
  ],

  features: [
    {
      title: "i45 Smart Application Pre-program Suite",
      description:
        "The automatic functionality has been expanded to include 45 preconfigured parameters settings to meet your application needs.",
    },
    {
      title: "Ease of use",
      description: "Intuitive set-up and commissioning in under 60 seconds.",
    },
    {
      title: "Fire mode",
      description:
        "External input signal overriding normal controls allowing the motor to continue running in emergency situations.",
    },
    {
      title: "Jogging function",
      description:
        "Allows motor to be slowly rotated into position for maintenance & process control.",
    },
    {
      title: "MLink software",
      description: "For easy commissioning, startup & diagnosis.",
    },
    {
      title: "Lifetime event logging",
      description:
        "Comprehensive logging feature to easily identify energy savings, trends and fault conditions.",
    },
    {
      title: "Flexible communications",
      description: "Modbus-RTU, Anybus, USB and Ethernet.",
    },
    {
      title: "Ready for digital transformation",
      description:
        "Ready to remotely deliver accurate, real-time information about drive events that can be used for predictive maintenance, energy data management and resource optimisation.",
    },
    {
      title: "Plug n Play",
      description: "The soft starter will \u2018tune\u2019 itself to the load.",
    },
    {
      title: "Automatic reset",
      description:
        "Automatically resets trips in predefined situations. Reduces the requirement to send a service technician to reset nuisance trips.",
    },
    {
      title: "Removable touchscreen",
      description:
        "A removable 3.5\" colour touch screen rated IP66/NEMA4X \u2013 ready for panel mounting - is fitted as standard.",
    },
    {
      title: "Optional 7\" inch screen",
      description: "Msmart 7\" and 3.5\" touch screen options available.",
    },
  ],

  applications: [
    "HVAC",
    "Pumps",
    "Compressors",
    "Conveyors",
    "Fans",
    "Industrial Process Lines",
  ],

  quickSpecs: [
    { label: "AC Supply Voltage", value: "200 \u2013 600 VAC" },
    { label: "Amp Ratings", value: "17 to 1250 Amps" },
    { label: "Enclosure", value: "IP00/IP20/NEMA 1" }
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Designation", value: "3-phase SCR Energy Saving Motor Controller" },
        { label: "Supply Voltages", value: "200 to 600 Volts as standard, 45 to 65 Hz" },
        { label: "Rated Impulse Withstand Voltage", value: "Main circuit: 6kV, Control supply circuit: 4kV" },
        { label: "Overvoltage Category / Pollution Degree", value: "III/3" },
        { label: "Motortronics iERS", value: "Yes, including enhanced Energy Saving Calculator" },
        { label: "Automatic Set Up Wizard", value: "A suite of 45 pre-programmed application \u2018complete setup\u2019 profiles" },
        { label: "In Delta / 6 Wire Connection", value: "Yes" },
      ],
    },
    {
      title: "Current Ratings",
      specs: [
        { label: "Size 1", value: "Up to 100A" },
        { label: "Size 2", value: "Up to 195A" },
        { label: "Size 3", value: "Up to 500A" },
        { label: "Size 4", value: "Up to 850A" },
        { label: "Size 5", value: "Up to 1250A" },
      ],
    },
    {
      title: "Bypass & Duty Rating",
      specs: [
        { label: "Bypass", value: "All sizes Internally Bypassed, Form 1" },
        { label: "Trip Class", value: "10, 20, 30 available" },
        { label: "Starting (Trip Class 10)", value: "3 x 23 or 3.5 x 17" },
        { label: "Starts/Hour", value: "5 (smaller models), 3 (larger models)" },
        { label: "Duty", value: "90%" },
      ],
    },
    {
      title: "Motor Protection",
      specs: [
        { label: "Motor Protection", value: "Full I\u00B2T Motor Overload with memory" },
        { label: "Short-Circuit Co-ordination (Type 1)", value: "With associated short circuit protective device" },
        { label: "Short-Circuit Co-ordination (Type 2)", value: "With correctly selected semiconductor fuses" },
      ],
    },
    {
      title: "Enclosure & Terminals",
      specs: [
        { label: "Up to 195A", value: "IP20/NEMA 1 (optional finger guards available)" },
        { label: "Terminal Position", value: "Spacing to match common contactors and circuit breakers" },
        { label: "Up to 195A Construction", value: "Cage Clamp" },
        { label: "Above 195A Construction", value: "Plain Busbar" },
      ],
    },
    {
      title: "Control Supply",
      specs: [
        { label: "Rated Control Circuit Voltages", value: "24Vdc, 110Vac or 230Vac" },
        { label: "Smaller Models", value: "24Vdc & 110/230Vac" },
        { label: "Larger Models", value: "110Vac or 230Vac" },
      ],
    },
    {
      title: "Ambient Conditions",
      specs: [
        { label: "Standard Operating", value: "-20\u00B0C to 50\u00B0C" },
        { label: "Larger Models", value: "-20\u00B0C to 40\u00B0C" },
        { label: "With De-rating", value: "Up to 60\u00B0C" },
      ],
    },
    {
      title: "Display & Interface",
      specs: [
        { label: "Display Technology", value: "3.5\" Colour-TFT resistive Touch Screen, detachable for enclosure mounting IP66/NEMA 4X" },
        { label: "Languages", value: "English, Arabic, Chinese (Mandarin), Dutch, French, German, Greek, Italian, Japanese, Korean, Polish, Portuguese, Russian, Serbian, Spanish, Turkish, Ukrainian, Vietnamese" },
      ],
    },
    {
      title: "Input/Outputs",
      specs: [
        { label: "Digital Inputs", value: "4 x Programmable digital inputs" },
        { label: "Output Relays (NO, 1A)", value: "3 x NO Programmable Output Relays, 1 Amp" },
        { label: "Output Relay (NC, 1A)", value: "1 x NC Programmable Output Relay, 1 Amp" },
        { label: "Output Relay (NO, 3A)", value: "1 x NO Programmable Output Relay, 3 Amps" },
        { label: "Analogue Input", value: "1 x 0-10V or 4-20mA Programmable" },
        { label: "Analogue Output", value: "1 x 0-10V or 4-20mA Programmable" },
        { label: "PTC Thermistor Input", value: "1" },
        { label: "USB", value: "1" },
        { label: "Expansion Port", value: "1 x Add On Smart Module" },
      ],
    },
    {
      title: "Communications",
      specs: [
        { label: "Standard", value: "2 x Modbus-RTU" },
        { label: "Optional", value: "Profibus, EtherNet/IP (via Anybus)" },
      ],
    },
    {
      title: "Data Logging",
      specs: [
        { label: "Memory", value: "16 Gb" },
        { label: "Event Logging", value: "200 million events" },
      ],
    },
    {
      title: "Standards & Compliance",
      specs: [
        { label: "EU/IEC Legislation", value: "IEC 60947-4-2, Low Voltage Directive, EMC Directive" },
        { label: "Environmental", value: "REACH, SVHC, RoHS (2011/65/EU), WEEE" },
        { label: "Standards", value: "CE, UL, cULus, UKCA" },
        { label: "Warranty", value: "2 years from first motor start" },
      ],
    },
    {
      title: "Serviceability",
      specs: [
        { label: "Field Serviceability", value: "Cassette-based cards, USB firmware upgrade capability" },
      ],
    },
  ],

  image: "/images/products/softstarters/vmx-synergy-plus.png",

  gallery: [],

  documents: [
    { name: "VMX-Synergy Plus Brochure", type: "brochure", url: "" },
    { name: "VMX-Synergy Plus Comms", type: "manual", url: "" },
    { name: "VMX-Synergy Plus Quick Start Guide", type: "manual", url: "" },
    { name: "VMX-synergy Plus User Manual", type: "manual", url: "" },
    { name: "VMX-Synergy Plus Modbus Parameters", type: "manual", url: "" },
    { name: "VMX-Synergy Plus Battery Removal", type: "manual", url: "" },
  ],

  manufacturerUrl: "https://www.motortronics-uk.co.uk/soft-starters/vmx-synergy-plus/",
  featured: true,
  order: 1,
};
