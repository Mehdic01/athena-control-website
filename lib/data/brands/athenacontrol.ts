import type { ElementType } from "react";
import { Shield, Award, Cpu, Zap, Factory, Droplets, Activity, Globe } from "lucide-react";
import { li } from "framer-motion/client";

export interface CompanyStat {
  value: string;
  label: string;
}

export interface CompanyValue {
  icon: ElementType;
  label: string;
}

export interface BrandsPageStats {
  label: string;
  value: string;
  description: string;
}

export interface Industry {
  label: string;
  icon: ElementType;
}

export const companyStats: CompanyStat[] = [
  { value: "3+",    label: "Decades of Trust" },
  { value: "500+",  label: "HP Motor Range" },
  { value: "13.8kV", label: "Max Voltage" },
  { value: "4",     label: "World Partners" },
];

export const companyValues: CompanyValue[] = [
  { icon: Shield, label: "Integrity" },
  { icon: Award,  label: "Professionalism" },
  { icon: Cpu,    label: "Engineering Excellence" },
];

export const industries: Industry[] = [
  { label: "Cooling & HVAC",       icon: Zap },
  { label: "Food & Beverage",      icon: Factory },
  { label: "Mining",               icon: Shield },
  { label: "Manufacturing",        icon: Cpu },
  { label: "Water Treatment",      icon: Droplets },
  { label: "Heating Systems",      icon: Activity },
  { label: "Pumps & Compressors",  icon: Zap },
  { label: "Turbine Control",      icon: Globe },
];

export const contactInfo = {
  email:   "sales@athena-control.com",
  address: "Adalet, Anadolu Cd. No:41 Kat:8,\n35530 Bayraklı, İzmir, TÜRKİYE",
  domain:  "https://athena-control.com",
  linkedIn: "https://www.linkedin.com/company/athena-control",
  phone : "+90 539 237 89 74",
};

export const pageStats: BrandsPageStats[] = [
  {
    label: "Global Partners",
    value: "5",
    description: "We have established strong partnerships with leading companies around the world to expand our reach and provide localized support to our clients.",
  },
  {
    label: "Years of Innovation",
    value: "30+",
    description: "With over three decades of experience, we have consistently pushed the boundaries of technology to deliver cutting-edge solutions in motor control and automation.",
  },
  {
    label: "Total Products",
    value: "50+",
    description: "Our extensive product portfolio includes a wide range of motor control solutions, from variable frequency drives to soft starters, designed to meet the diverse needs of our customers across various industries.",
  },
];
