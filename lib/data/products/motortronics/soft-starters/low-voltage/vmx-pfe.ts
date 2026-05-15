import type { Product } from "../../../types";


export const vmxPfe: Product = {
  slug: "vmx-pfe",
  name: "VMX-PFE",
  brand: "motortronics",
  category: "soft-starter",
  subcategory: "low-voltage",

  shortDescription:
    "Ultra-compact DIN-rail mounted soft starter with internal bypass for small AC induction motors up to 41 Amps.",

  overview: [
    "With ratings from 2.2kW to 22kW, the VMX-PFE\u2122 is ideally placed to support smaller AC induction motors. Easy DIN rail mounting makes the VMX-PFE\u2122 the natural choice for distributors and customers alike.",
    "Benefiting from Motortronics\u2019 excellence in engineering, the VMX-PFE\u2122 combines the quality and reliability you have come to expect. This is one product that ticks all the boxes.",
  ],

  features: [
    {
      title: "Internally Bypassed",
      description:
        "Reduces cost because the soft starter is out of circuit once it has done its job. This reduces cabinet size and the heat produced which again reduces cost.",
    },
    {
      title: "Over Current Protected",
      description:
        "Protects the soft starter against use above its duty rating.",
    },
    {
      title: "45mm Wide (Size 1)",
      description:
        "Same width as typical existing control gear for easy connectability and enables a more compact cabinet to be used.",
    },
    {
      title: "DIN Rail Mounted",
      description: "For easy installation \u2013 it just clips on.",
    },
  ],

  applications: [
    "Small Pumps",
    "HVAC",
    "Fans",
    "Compressors",
  ],

  quickSpecs: [
    { label: "AC Supply Voltage", value: "230 \u2013 460 VAC" },
    { label: "Current Ratings", value: "1 to 41 Amps" },
    { label: "Enclosure", value: "IP20" },
    { label: "Bypass", value: "Internal" },
    { label: "Display", value: "LED Indicators" },
  ],

  specGroups: [
    {
      title: "Electrical",
      specs: [
        { label: "Current", value: "1\u201341 A" },
        { label: "Operational Voltage", value: "230\u2013460 VAC (\u221215% +10%)" },
        { label: "Rated Frequency", value: "50\u201360 Hz \u00B12 Hz" },
      ],
    },
    {
      title: "Performance",
      specs: [
        { label: "Start Time", value: "1 to 30 Seconds" },
        { label: "Stop Time", value: "0 to 30 Seconds" },
        { label: "Index Rating (Class 2)", value: "AC53b: 3-5: 355" },
        { label: "Index Rating (Class 10)", value: "AC53b: 3-23: 697" },
        { label: "Starts per Hour", value: "10" },
        { label: "Starts per Hour (with Fan)", value: "Up to 60" },
      ],
    },
    {
      title: "Physical",
      specs: [
        { label: "IP Rating", value: "IP20" },
        { label: "Altitude", value: "1000m without de-rating" },
        { label: "Ambient Temperature", value: "0\u00B0C to 40\u00B0C without de-rating" },
      ],
    },
  ],

  image: "/images/products/soft-starters/vmx-pfe.png",

  gallery: [],

  documents: [
    { name: "VMX-PFE Brochure", type: "brochure", url: "" },
    { name: "VMX-PFE Installation Guide", type: "manual", url: "" },
    { name: "VMX-PFE Single Phase Application Note", type: "manual", url: "" },
  ],

  manufacturerUrl: "https://www.motortronics-uk.co.uk/soft-starters/vmx-pfe/",
  order: 4,
};
