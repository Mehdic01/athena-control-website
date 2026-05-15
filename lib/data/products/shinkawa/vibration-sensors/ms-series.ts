import type { Product } from "../../types";

export const msSeries: Product = {
  slug: "ms-series",
  name: "MS Series",
  brand: "shinkawa",
  category: "vibration-sensors",
  subcategory: "sensors-for-pump-motor-turbine-compressor",

  shortDescription:
    "Magnetic pickups for non-contact rotational speed measurement. Simple, highly reliable structure suitable for speed control and overspeed detection.",

  overview: [
    "MS series magnetic pickups output a frequency signal proportional to the rotation speed of a rotating machine by detecting gear teeth on a rotating shaft without contact.",
    "The structure consists of a magnet, pole piece and detector coil. When a magnetic material crosses the pole piece, the changing magnetic flux causes the coil to generate an electrical signal with a frequency proportional to the gear revolution.",
    "The simple construction provides high reliability and is suitable for speed control and overspeed detection applications.",
  ],

  features: [
    {
      title: "Excellent durability and environmental resistance",
      description:
        "Robust construction withstands harsh industrial environments with an operating temperature range of âˆ’10 to +120Â°C.",
    },
    {
      title: "High output voltage",
      description:
        "Strong magnetic circuit design delivers high output voltage for reliable signal detection even at low rotational speeds.",
    },
    {
      title: "Vibration proof",
      description:
        "Withstands vibration levels up to 196 m/sÂ² (20G), suitable for installation on rotating machinery.",
    },
    {
      title: "Simple and reliable structure",
      description:
        "Passive magnetic design with no electronics â€” no power supply required, ensuring long-term reliability.",
    },
  ],

  applications: [
    "Turbine speed control",
    "Overspeed detection",
    "Pumps",
    "Motors",
    "Compressors",
    "General rotating machinery",
  ],

  quickSpecs: [
    { label: "Sensor Type", value: "Magnetic pickup (passive)" },
    { label: "Output Signal", value: "Frequency proportional to speed" },
    { label: "Operating Temperature", value: "âˆ’10 to +120Â°C" },
    { label: "Vibration Resistance", value: "196 m/sÂ² (20G)" },
    { label: "Thread Sizes", value: "M16 Ã— 1 / M24 Ã— 1.5" },
  ],

  specGroups: [
    {
      title: "MS-1601 / MS-1602 (M16)",
      specs: [
        { label: "DC Resistance", value: "95 to 115 Î© at 25Â°C" },
        { label: "Inductance", value: "35 mH typical" },
        {
          label: "Observed Gear Type",
          value: "Involute gear module 1 to 4 (D.P. 6 to 25)",
        },
        { label: "Threaded Size", value: "M16 Ã— 1" },
        {
          label: "Cable (MS-1601)",
          value: "Integral cable, 2 m fluoro resin 2-wire twisted pair shielded",
        },
        {
          label: "Connector (MS-1602)",
          value: "D/MS3102E10SL-3P / D/MS3108E10SL-3S",
        },
        { label: "Mass (MS-1601)", value: "Approx. 160 g" },
        { label: "Mass (MS-1602)", value: "Approx. 110 g" },
      ],
    },
    {
      title: "MS-2401 / MS-2402 (M24)",
      specs: [
        { label: "DC Resistance", value: "220 to 260 Î© at 25Â°C" },
        { label: "Inductance", value: "115 mH typical" },
        {
          label: "Observed Gear Type",
          value: "Involute gear module 3 to 10 (D.P. 2.5 to 8.5)",
        },
        { label: "Threaded Size", value: "M24 Ã— 1.5" },
        {
          label: "Cable (MS-2401)",
          value: "Integral cable, 2 m fluoro resin 2-wire twisted pair shielded",
        },
        {
          label: "Connector (MS-2402)",
          value: "D/MS3102E10SL-3P / D/MS3108E10SL-3S",
        },
        { label: "Mass (MS-2401)", value: "Approx. 380 g" },
        { label: "Mass (MS-2402)", value: "Approx. 300 g" },
      ],
    },
    {
      title: "Common Specifications",
      specs: [
        {
          label: "Operating Temperature",
          value: "âˆ’10 to +120Â°C (14 to 248Â°F)",
        },
        { label: "Vibration Resistance", value: "196 m/sÂ² (20G)" },
      ],
    },
  ],

  image: "/images/products/vibration-monitoring-systems/ms_series.png",
  gallery: [],

  documents: [
    {
      name: "MS-1601 Magnetic Pickup Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "MS-1602 Magnetic Pickup Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "MS-2401 Magnetic Pickup Specifications",
      type: "datasheet",
      url: "",
    },
    {
      name: "MS-2402 Magnetic Pickup Specifications",
      type: "datasheet",
      url: "",
    },
  ],

  manufacturerUrl: "https://www.shinkawa.co.jp/eng/products/ms",
  featured: false,
  order: 4,
};
