import type { Product } from "../../../types";


export const vmxSynergy: Product = {
  slug: "vmx-synergy",
  name: "VMX-Synergy",
  brand: "motortronics",
  category: "soft-starter",
  subcategory: "low-voltage",

  shortDescription:
    "High-performance soft starter with iERS energy saving, color touchscreen, and automatic load tuning for applications up to 477 Amps.",

  overview: [
    "With a unique combination of features, performance and size, Motortronics has redefined the benchmark for soft starter design.",
    "The incorporation of Motortronics\u2019 unique iERS technology allows VMX-synergy\u2122 to deliver unrivalled soft start performance alongside energy saving capability on partially loaded motors.",
    "With product size and cabinet capacity becoming an increasing focus we developed VMX-synergy\u2122 to deliver the greatest power to size ratio of any other soft starter.",
    "In addition VMX-synergy\u2122 uses Motortronics\u2019 globally renowned Automatic Setup feature which allows the user to programme the unit to any common application using a simple 4 step process. To keep pace with the modern technology, VMX-synergy\u2122 removes the need for buttons and uses intuitive touch screen technology.",
    "With built in full motor overload protection as well as full data logging, field serviceable fans, upgradeable firmware and extensive input/output programmability, VMX-synergy\u2122 meets all of the key design criteria.",
  ],

  features: [
    {
      title: "Ease of Use",
      description:
        "The display will show all messages in full and 14 different global languages. The use of graphic/schematic images will facilitate complete understanding. Detailed logging will aid setup and onboard USB will allow configurations to be upload/downloaded and emailed.",
    },
    {
      title: "Touch Screen",
      description: "Colour Touch screen on all versions.",
    },
    {
      title: "Plug n Play",
      description: "The soft starter will \u2018tune\u2019 itself to the load.",
    },
    {
      title: "Auto Set Up",
      description:
        "The automatic functionality has been expanded so that more features can be configured without referring to parameter lists.",
    },
    {
      title: "Optimising",
      description:
        "Energy optimising is combined with bypass to give energy saving in more applications.",
    },
    {
      title: "Serviceability",
      description: "Field replaceable fans.",
    },
    {
      title: "2 Year Warranty",
      description:
        "This is made economically viable by the comprehensive logging features, so fault conditions can be easily identified.",
    },
  ],

  applications: [
    "HVAC",
    "Pumps",
    "Compressors",
    "Conveyors",
    "Fans",
    "Refrigeration",
  ],

  quickSpecs: [
    { label: "AC Supply Voltage", value: "200 - 480 VAC" },
    { label: "Current Ratings", value: "17 to 1080 Amps" },
    { label: "Enclosure", value: "IP20 / NEMA 1" },
    { label: "Bypass", value: "Internal" },
    { label: "Display", value: "3.5\" Color Touchscreen" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Designation", value: "3-phase SCR Energy Saving Motor Controller" },
        { label: "Supply Voltages", value: "208, 230, 400, 460 volts as standard" },
        { label: "Supply Frequency", value: "45 Hz \u2013 65 Hz" },
        { label: "Control Voltages", value: "24V DC, 110/230V AC" },
        { label: "Ambient Operating Conditions", value: "-20\u00B0C to 50\u00B0C" },
        { label: "Motortronics iERS Energy Saving Technology", value: "Yes" },
        { label: "In Delta / 6 Wire Connection", value: "Yes" },
      ],
    },
    {
      title: "Current Ratings",
      specs: [
        { label: "Size 1", value: "Up to 100A" },
        { label: "Size 2", value: "Up to 195A" },
        { label: "Size 3", value: "Up to 500A" },
        { label: "Size 4", value: "Up to 722A" },
        { label: "Size 5", value: "Up to 1080A" },
      ],
    },
    {
      title: "Standard Duty Rating",
      specs: [
        { label: "Trip Class", value: "10" },
        { label: "Starting Current", value: "3x 23 or 3.5x 17" },
        { label: "Starts/Hour", value: "5" },
        { label: "Duty", value: "90%" },
      ],
    },
    {
      title: "Bypass",
      specs: [
        { label: "Size 1 to 3", value: "Internally Bypassed" },
        { label: "Size 4 to 5", value: "No Bypass" },
      ],
    },
    {
      title: "Motor Protection",
      specs: [
        { label: "Overload Protection", value: "Full I\u00B2T Motor Overload with memory" },
        { label: "Current Limit", value: "Set at 4.5x to meet IEC standards" },
      ],
    },
    {
      title: "Frame Sizes",
      specs: [
        { label: "Up to 100 Amps", value: "95 mm wide" },
        { label: "Up to 195 Amps", value: "143 mm wide" },
        { label: "Up to 500 Amps", value: "205 mm wide" },
        { label: "Up to 722 Amps", value: "490 mm wide" },
        { label: "Up to 1080 Amps", value: "635 mm wide" },
      ],
    },
    {
      title: "Enclosure",
      specs: [
        { label: "Up to 195 Amps", value: "IP20/NEMA 1 \u2013 with finger guard" },
        { label: "Above 195 Amps", value: "IP00/NEMA 1" },
        { label: "Optional Finger Guards", value: "Up to 195A" },
        { label: "Main Chassis", value: "Metal" },
        { label: "Front Cover", value: "Injection Moulded Plastic" },
        { label: "Terminal Covers", value: "Injection Moulded Plastic" },
      ],
    },
    {
      title: "Terminals",
      specs: [
        { label: "Terminal Position", value: "Spacing to match common contactors" },
        { label: "Up to 195 Amps Construction", value: "Cage Clamp" },
        { label: "Above 195 Amps Construction", value: "Plain Busbar" },
      ],
    },
    {
      title: "Display & Interface",
      specs: [
        { label: "Display Technology", value: "3.5\" Colour-TFT Touch Screen" },
        { label: "Keypad", value: "Optional IP55 full colour touch keypad available" },
        { label: "Languages", value: "English, Arabic, Chinese (Mandarin simplified), Dutch, French, German, Greek, Italian, Japanese, Korean, Polish, Portuguese, Russian, Serbian, Spanish, Turkish, Vietnamese" },
      ],
    },
    {
      title: "Input/Outputs",
      specs: [
        { label: "Programmable Output Relays (NO)", value: "3" },
        { label: "Programmable Output Relays (NC)", value: "1" },
        { label: "Programmable Digital Inputs", value: "3" },
        { label: "PTC Thermistor Input", value: "1" },
        { label: "Analogue Input", value: "1 x 0-10V / 4-20mA" },
        { label: "Analogue Output", value: "1 x 0-10V / 4-20mA" },
        { label: "USB", value: "1" },
      ],
    },
    {
      title: "Communications",
      specs: [
        { label: "Standard", value: "Modbus RTU" },
        { label: "Optional", value: "Anybus providing Ethernet IP, Modbus TCP & Profibus" },
      ],
    },
    {
      title: "Data Logging",
      specs: [
        { label: "Memory Capacity", value: "4 Gb" },
        { label: "Logs", value: "Date of first start, total starts, soft stops, error events, exportable CSV format" },
      ],
    },
    {
      title: "Standards & Compliance",
      specs: [
        { label: "EU/IEC Legislation", value: "IEC 60947-4-2: 2012, Low Voltage Directive, Battery Directive, Energy Using Products/Energy Related Product Directives" },
        { label: "Environmental", value: "REACH, SVHC, RoHS, WEEE compliant" },
        { label: "Standards", value: "CE, CSA, ETL" },
        { label: "Warranty", value: "2 years" },
      ],
    },
    {
      title: "Serviceability",
      specs: [
        { label: "Fan Reliability", value: "Fan efficiency detected, logged, and reported" },
        { label: "Field Serviceability", value: "Firmware upgrade from USB port" },
      ],
    },
  ],

  image: "/images/products/soft-starters/vmx-synergy.png",

  gallery: [],

  documents: [
    { name: "VMX-Synergy Brochure", type: "brochure", url: "" },
    { name: "VMX-synergy Quick Start Guide", type: "manual", url: "" },
    { name: "VMX-synergy User Manual", type: "manual", url: "" },
    { name: "VMX-synergy Modbus RTU Parameter Tables", type: "manual", url: "" },
    { name: "VMX-synergy EtherNet/IP Module User Guide", type: "manual", url: "" },
    { name: "VMX-synergy Profibus DP Interface User Guide", type: "manual", url: "" },
    { name: "VMX-synergy Fan Installation Guide", type: "manual", url: "" },
  ],

  manufacturerUrl: "https://www.motortronics-uk.co.uk/soft-starters/vmx-synergy/",
  order: 2,
};
