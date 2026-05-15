import type { Product } from "../../../types";

export const mvc4: Product = {
  slug: "mvc4",
  name: "MVC 4",
  brand: "motortronics",
  category: "soft-starter",
  subcategory: "medium-voltage",
  keyProduct: true,

  shortDescription:
    "Medium voltage soft starter for AC motors up to 15 kV, combining a high-end motor protection relay with a solid-state starter for smooth, stepless acceleration and deceleration control.",

  overview: [
    "The MVC4 Medium Voltage Series Soft Starter is designed to start AC motors in any fixed speed application. It provides maximum protection with 'True Thermal Modeling,' while allowing smooth, stepless control of acceleration and deceleration.",
    "Motor and starter protection is taken to a new level by combining a high-end motor protection relay with a heavy duty solid state starter.",
    "Rated at 500% for 60 seconds, the MVC4 Series starter will never be the limiting factor in your application.",
  ],

  features: [
    // Hardware Features
    {
      title: "Advanced Programming",
      description:
        "Motor protection relay and ramp features configurable via keypad or laptop computer.",
    },
    {
      title: "Fiber Optic Isolation",
      description:
        "Low voltage compartment is fiber optically isolated, offering up to 110kV BIL rating for safety and reliability.",
    },
    {
      title: "Built-in Control Power",
      description:
        "Includes a built-in 120V control power transformer along with voltage and current metering.",
    },
    {
      title: "Disconnect Switch",
      description:
        "Load-break / fault-make rated disconnect switch with door safety interlocking.",
    },
    {
      title: "Visible Grounding Bar",
      description: "Provided for safe operation.",
    },
    {
      title: "Motor Fuses",
      description: "Coordinated motor fuses with blown fuse indicators.",
    },
    {
      title: "Line Isolation Contactor",
      description: "Line isolation vacuum contactor.",
    },
    {
      title: "Bypass Contactor",
      description:
        "Fully rated bypass contactor for increased thermal capacity and optional across-the-line starting.",
    },
    {
      title: "SCR Stack Assemblies",
      description:
        "Heavy duty SCR stack assemblies with ring transformer isolation for reliable SCR gate firing.",
    },
    {
      title: "RTD Option",
      description: "Accepts up to 12 RTD inputs.",
    },
    {
      title: "Ground Fault Protection",
      description: "Zero sequence ground fault protection available as an option.",
    },
    {
      title: "Cable Entry/Exit",
      description: "Top entry, bottom exit with room for stress cones.",
    },
    {
      title: "Removable Entry Plates",
      description: "Facilitates easy connections.",
    },
    {
      title: "Enclosure Rating",
      description: "NEMA 12 gasketed enclosure (NEMA 3R optional).",
    },
    // Advanced Protection
    {
      title: "True Thermal Modeling",
      description:
        "Monitors the motor for excessive thermal conditions from starting, running, and ambient factors.",
    },
    {
      title: "Retentive Thermal Memory",
      description:
        "Provides continuous overload protection even after a complete power loss.",
    },
    {
      title: "MVC Plus Memory",
      description:
        "Remembers the motor's last thermal state, tracks off time via real-time clock, and adjusts the model accordingly.",
    },
    {
      title: "Non-Volatile Memory",
      description: "Stores the thermal memory without the need for batteries.",
    },
    {
      title: "True Time Thermal Tracking",
      description:
        "Adjusts the thermal model based on motor temperature, running state, or power loss for accurate cooling rate modeling.",
    },
    {
      title: "Dynamic Reset Response",
      description:
        "Reset is only allowed after the motor has sufficient thermal capacity for a successful restart.",
    },
    {
      title: "Thermal Model Biasing",
      description:
        "Adjusts for heating effects from phase current imbalance or optional RTD inputs.",
    },
    {
      title: "Flexible Setup",
      description: "Allows the user to choose the level of overload protection.",
    },
    {
      title: "Programmable Trip Classes",
      description: "Selectable from NEMA/UL Classes 5 - 30.",
    },
    {
      title: "Dual Mode Protection",
      description:
        "Separate trip curves for start and run modes (e.g., Class 20 for start, Class 10 for run).",
    },
    {
      title: "Warning Levels",
      description:
        "Programmable and assignable to one of six built-in output relays.",
    },
    {
      title: "Custom Trip Curve",
      description: "Programmable based on the motor manufacturer's data.",
    },
    {
      title: "Remote or Automatic Overload Reset",
      description: "Can be activated for unattended operations.",
    },
  ],

  applications: [
    "Water & Pumping",
    "HVAC & Refrigeration",
    "Marine",
    "Oil & Gas",
    "Mining & Quarrying",
    "Food & Beverage",
    "Paper & Wood",
    "Manufacturing & Processing",
  ],

  quickSpecs: [
    { label: "AC Supply Voltage", value: "2.3 â€“ 13.8 kV" },
    { label: "Rated Current", value: "Up to 1000 A" },
    { label: "SCR Overload", value: "500% for 60s / 600% for 30s" },
  ],

  specGroups: [
    {
      title: "Electrical",
      specs: [
        {
          label: "AC Supply Voltage",
          value:
            "2300, 3300, 4160, 6000/7200V, 11-15kV VAC +10% to -15%, 50/60 Hz",
        },
        {
          label: "HP Rating (â‰¤7.2 kV)",
          value: "Up to 10,000HP @ 7.2kV (800 Amps max)",
        },
        {
          label: "HP Rating (â‰¤15 kV)",
          value: "Up to 20,000HP @ 15kV (800 Amps max)",
        },
        {
          label: "SCR Overload",
          value: "500% - 60 seconds, 600% - 30 seconds",
        },
        {
          label: "Power Circuit",
          value:
            "Series strings of SCR power modules (1, 2 or 3 matched pairs of SCRs per phase)",
        },
      ],
    },
    {
      title: "Insulation",
      specs: [
        { label: "SCR PIV (2300V)", value: "6,500V" },
        { label: "SCR PIV (3300-4160V)", value: "13,000V" },
        { label: "SCR PIV (6000-7200V)", value: "19,500V" },
        { label: "SCR PIV (11-15kV)", value: "39,000V" },
        { label: "BIL Rating (2300-7200V)", value: "60kV" },
        { label: "BIL Rating (11-15kV)", value: "110kV" },
        {
          label: "Transient Voltage Protection",
          value: "dv/dt circuits (1 per SCR pair)",
        },
        {
          label: "Vacuum Bypass Contactor",
          value: "Standard on all models, line start rated",
        },
      ],
    },
    {
      title: "Environmental",
      specs: [
        {
          label: "Ambient Temperature",
          value:
            "0 - 50Â°C (82Â°F to 122Â°F) (optional -20Â° to 50Â°C with heaters)",
        },
        { label: "Relative Humidity", value: "5 - 95%" },
        { label: "Altitude", value: "0 - 3300 ft (1000m above sea level)" },
        {
          label: "Enclosure",
          value:
            "NEMA 12 with 3R optional, top and bottom entrance plates, 11 gauge steel, ASA #61 gray",
        },
      ],
    },
    {
      title: "Digital Control Unit (DCU)",
      specs: [
        {
          label: "Display",
          value: "2 lines x 20 character backlit LCD display",
        },
        {
          label: "Status LEDs",
          value: "Power, Run, Alarm, Trip, Aux 1â€“8",
        },
      ],
    },
    {
      title: "Auxiliary Contacts",
      specs: [
        {
          label: "Contact Rating",
          value: "Multiple Form C contacts rated 5A @ 250VAC max",
        },
        {
          label: "Programmable Relays",
          value: "6 fully programmable relays (including fail-safe)",
        },
        {
          label: "Dedicated Relays",
          value: "5 dedicated relays (fault, at-speed, etc.)",
        },
      ],
    },
    {
      title: "Programmable Features",
      specs: [
        {
          label: "Motor Settings",
          value: "Motor FLA, service factor, insulation class",
        },
        {
          label: "Initial Torque",
          value: "0 â€“ 100% of nominal torque, voltage, or current",
        },
        {
          label: "Current Limit",
          value: "200 â€“ 600% of motor FLA",
        },
        {
          label: "Acceleration Time",
          value: "1 â€“ 120 seconds",
        },
        {
          label: "Custom Curves",
          value: "Three custom curves via plotted torque/time axis points",
        },
        {
          label: "Pump-Flexâ„¢ Deceleration",
          value: "1 â€“ 60 seconds with begin & end torque adjustment",
        },
        {
          label: "Kick Start",
          value: "0.1 â€“ 2.0 seconds (10 â€“ 100% voltage)",
        },
        {
          label: "Tach Feedback",
          value: "Closed-loop speed ramp (option)",
        },
      ],
    },
    {
      title: "Motor and Starter Protection",
      specs: [
        {
          label: "Protection Functions",
          value:
            "Electronic overload, phase loss, phase imbalance, phase reversal, short circuit detection, over/under current, over/under voltage, shorted SCR/shunt trip, starter over-temp, coast down lockout, starts-per-hour lockout, time between starts, RTD input (option), ground fault (option)",
        },
      ],
    },
    {
      title: "Statistical Data",
      specs: [
        {
          label: "Event Log",
          value:
            "Stores history of up to 60 events (data includes date & time, phase & ground fault current)",
        },
        {
          label: "Run Data",
          value: "Elapsed run time, last start time, average starting current",
        },
      ],
    },
    {
      title: "Metering",
      specs: [
        {
          label: "Parameters",
          value:
            "Percent of FLA, phase currents, kVAR, kVA, kW, power factor, demand, avg. start current, remaining thermal register, thermal capacity to start, measured capacity to start, time since last start, line frequency, phase order, RTD values (option)",
        },
      ],
    },
    {
      title: "Communications",
      specs: [
        {
          label: "Standard",
          value: "RS485 with Modbus RTU protocol or RS232 with Windows interface",
        },
        {
          label: "Options",
          value: "Ethernet/IP, Modbus TCP, DeviceNet, Profibus DP, PROFINET",
        },
      ],
    },
  ],

  image: "/images/products/soft-starters/mvc4.png",

  gallery: [
    {
      src: "/images/products/soft-starters/mvc-4.png",
      alt: "MVC 4 Medium Voltage Soft Starter",
    },
  ],

  documents: [
    { name: "MVC4 Brochure", type: "brochure", url: "" },
    { name: "Wiring Diagram (Line Start)", type: "manual", url: "" },
    { name: "Wiring Diagram (Soft Start Only)", type: "manual", url: "" },
  ],

  manufacturerUrl: "https://www.motortronics-uk.co.uk/soft-starters/mvc4/",

  featured: true,
  order: 1,
};
