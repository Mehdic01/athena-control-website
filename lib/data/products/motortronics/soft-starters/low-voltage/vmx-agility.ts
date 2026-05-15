import type { Product } from "../../../types";


export const vmxAgility: Product = {
  slug: "vmx-agility",
  name: "VMX-Agility",
  brand: "motortronics",
  category: "soft-starter",
  subcategory: "low-voltage",

  shortDescription:
    "Compact soft starter with 3S advanced starting technology, i23 application profiles, and OLED display for ratings up to 477 Amps.",

  overview: [
    "VMX-agility\u2122 has been developed to exceed the exacting demands of industrial automation motor control clients. VMX-agility\u2122 delivers stable start and stop ramps for smooth, efficient performance. Three standard frame sizes cover all typical applications from 7.5kW to 250kW at 500VAC, 15 - 350HP at 600VAC.",
  ],

  features: [
    {
      title: "i23 smart application pre-program suite",
      description:
        "A suite of pre-programmed application \u2018complete setup\u2019 profiles facilitate a quick and comprehensive commission process to give freedom and independence to engineers. Typical VMX-agility\u2122 setup takes less than 1 minute whereas a comparable competitive product commission could be 60 to 120 minutes for only a partial setup.",
    },
    {
      title: "3S Technology",
      description:
        "Automatic ramp control profiles ensure smooth start and stop performance, delivering stable acceleration and deceleration in all operating conditions.",
    },
    {
      title: "OLED Display",
      description:
        "Full text messages enabling fast programming and rapid fault finding with no codes and real-time value monitoring. Local display of recent logged events.",
    },
    {
      title: "USB",
      description:
        "For field firmware upgrades and downloading of the event logging data.",
    },
    {
      title: "Modbus RTU",
      description:
        "Communications as standard. No need for optional communication cards.",
    },
    {
      title: "Motor Overload Protection",
      description:
        "Protecting the motor and soft starter in the event of an overload situation at full I\u00B2t motor overload with intelligent thermal memory retention feature.",
    },
    {
      title: "Life Event Logging",
      description:
        "VMX-agility\u2122 life event logging is a unique feature that records the last 1600 events to enable fast accurate fault analysis and their resolution.",
    },
    {
      title: "Loss Reduction",
      description:
        "An integral bypass is initiated at the top of ramp and reduces losses in the soft starter.",
    },
    {
      title: "Start Delay Feature",
      description:
        "Intentional start delay allowing pump actuators to engage before start.",
    },
    {
      title: "Control Circuit",
      description:
        "A standard 24 VDC control voltage supply with an optional power module which adapts the digital input voltages to accept a 110/230 VAC signal.",
    },
    {
      title: "Lowers Panel Production Costs",
      description:
        "Three unit frame sizes across the voltage range of 200-600VAC with vertical or horizontal mounting to facilitate efficient panel layout.",
    },
    {
      title: "Soft Stopping",
      description:
        "Current is limited during soft stopping and gives greater control against water hammer.",
    },
    {
      title: "Fire Mode",
      description:
        "External input signal overriding normal controls allowing the motor to continue running in emergency situations.",
    },
    {
      title: "Frequent Number of Starts",
      description:
        "Optional cooling fan for frequent duty applications with up to 40 starts per hour - size 1, and from 10 to 40 starts per hour (rating dependent) - size 2.",
    },
    {
      title: "Optional Remote Display Keypad",
      description:
        "Plug in remote mounting unit keypad mimics the VMX-agility\u2122 display and keypad function.",
    },
    {
      title: "Optional Power Supply Unit Module",
      description:
        "Unique to VMX-agility\u2122 this module enables control voltage options in one standard product unit.",
    },
  ],

  applications: [
    "HVAC",
    "Pumps",
    "Compressors",
    "Conveyors",
    "Fans",
  ],

  quickSpecs: [
    { label: "AC Supply Voltage", value: "200 \u2013 600 VAC" },
    { label: "Current Ratings", value: "17 to 477 Amps" },
    { label: "Enclosure", value: "IP20 / NEMA 1" },
    { label: "Bypass", value: "Internal" },
    { label: "Display", value: "OLED" },
  ],

  specGroups: [
    {
      title: "General",
      specs: [
        { label: "Operational Voltage", value: "200\u2013600 VAC" },
        { label: "Rated Frequency", value: "50\u201360 Hz \u00B1 5 Hz" },
        { label: "Internally Bypassed", value: "Yes" },
      ],
    },
    {
      title: "Duty Rating",
      specs: [
        { label: "Trip Class", value: "Trip Class 10: 3.5-17: 90-5 (Trip Class 20 & 30)" },
        { label: "Standard Starts/Hour", value: "5 starts/stops per hour" },
        { label: "With Optional Fan (AGY-101 to 203)", value: "40 starts/stops per hour" },
        { label: "With Optional Fan (AGY-205)", value: "30 starts/stops per hour" },
        { label: "With Optional Fan (AGY-207)", value: "20 starts/stops per hour" },
        { label: "With Optional Fan (AGY-209)", value: "10 starts/stops per hour" },
      ],
    },
    {
      title: "Motor Protection",
      specs: [
        { label: "Overload", value: "Full I\u00B2t Motor Overload" },
      ],
    },
    {
      title: "Enclosure & Ambient",
      specs: [
        { label: "Size 1 IP/NEMA", value: "IP20/NEMA Class 1 with finger guard fitted (PLS-SGY-008)" },
        { label: "Size 2 IP/NEMA", value: "IP20/NEMA Class 1 with finger guard fitted (PLS-SGY-009)" },
        { label: "Size 3 IP/NEMA", value: "IP00 as standard; IP20/NEMA Class 1 with optional terminal cover kit (PLS-SGY-061)" },
        { label: "Ambient Temperature", value: "-20 \u00B0C to 40 \u00B0C without de-rating; 60 \u00B0C with de-rating" },
      ],
    },
    {
      title: "Control Supply",
      specs: [
        { label: "Standard", value: "24 VDC" },
        { label: "With Optional Power Supply Module", value: "110 to 230 VAC" },
      ],
    },
    {
      title: "Input/Outputs",
      specs: [
        { label: "Digital Inputs", value: "2 Digital Inputs, 1 Programmable" },
        { label: "Digital Outputs", value: "2 Digital Outputs, 1 Programmable" },
      ],
    },
    {
      title: "Display & Interface",
      specs: [
        { label: "Screen", value: "OLED" },
        { label: "Languages", value: "English, French, German, Spanish, Portuguese, Italian" },
      ],
    },
    {
      title: "Communications & Data",
      specs: [
        { label: "Communications", value: "Modbus RTU" },
        { label: "Event Logging", value: "Full logging functionality for use with StartView" },
      ],
    },
    {
      title: "Standards & Compliance",
      specs: [
        { label: "Standards", value: "CE, UL" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
  ],

  image: "/images/products/soft-starters/vmx-agility.png",

  gallery: [],

  documents: [
    { name: "VMX-agility Brochure", type: "brochure", url: "" },
    { name: "VMX-agility Full User Manual", type: "manual", url: "" },
    { name: "VMX-agility Quick Start Guide", type: "manual", url: "" },
    { name: "VMX-agility Remote Keypad User Guide", type: "manual", url: "" },
    { name: "VMX-agility Fan Installation Guide", type: "manual", url: "" },
    { name: "VMX-agility Power Supply Installation Manual", type: "manual", url: "" },
  ],

  manufacturerUrl: "https://www.motortronics-uk.co.uk/soft-starters/vmx-agility/",
  order: 3,
};
