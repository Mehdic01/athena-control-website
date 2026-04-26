import type { Brand, ProductCategory, Product } from "./types";
import { lvSoftStarterProducts } from "./motortronics/soft-starters/low-voltage";
import { lvInverterProducts } from "./renle/frequency-inverter/low-voltage";
import { hvInverterProducts } from "./renle/frequency-inverter/high-voltage";
import { vibrationSensorProducts } from "./shinkawa/vibration-sensors";
import { conditionMonitorProducts } from "./shinkawa/condition-monitor";
import { mvSoftStarterProducts } from "./motortronics";
import { ballValveProducts } from "./athena-valve/ball-valve";
import { butterflyValveProducts } from "./athena-valve/butterfly-valve";
import { gateValveProducts } from "./athena-valve/gate-valve";
import { globeValveProducts } from "./athena-valve/globe-valve";
import { checkValveProducts } from "./athena-valve/check-valve";
import { plugValveProducts } from "./athena-valve/plug-valve";
import { pneumaticActuatorProducts } from "./valentech/pneumatic-actuator";
import { electricActuatorProducts } from "./valentech/electric-actuator";
import { completeActuatorEquipmentProducts } from "./valentech/complete-actuator-equipment";

const allProductRecords: Record<string, Product>[] = [
  lvSoftStarterProducts,
  lvInverterProducts,
  hvInverterProducts,
  vibrationSensorProducts,
  conditionMonitorProducts,
  mvSoftStarterProducts,
  ballValveProducts,
  butterflyValveProducts,
  gateValveProducts,
  globeValveProducts,
  checkValveProducts,
  plugValveProducts,
  pneumaticActuatorProducts,
  electricActuatorProducts,
  completeActuatorEquipmentProducts,
];

export function getAllProducts(): Product[] {
  return allProductRecords.flatMap((record) => Object.values(record));
}

export function getProductsByBrand(brand: Brand): Product[] {
  return getAllProducts().filter((p) => p.brand === brand);
}

export function getProductsByCategory(
  category: ProductCategory
): Product[] {
  return getAllProducts().filter((p) => p.category === category);
}

export function getProduct(
  category: string,
  slug: string
): Product | undefined {
  return getAllProducts().find(
    (p) => p.category === category && p.slug === slug
  );
}

export const brandNames: Record<Brand, string> = {
  motortronics: "Motortronics",
  renle: "RENLE",
  shinkawa: "SHINKAWA Electric",
  "athena-valve": "Athena Valve",
  valentech: "ValenTech",
};

export const categoryNames: Record<ProductCategory, string> = {
  "soft-starter": "Soft Starters",
  "frequency-inverter": "Frequency Inverters",
  "vibration-sensors": "Vibration Sensors",
  "condition-monitor": "Condition Monitors",
  "ball-valve": "Ball Valves",
  "butterfly-valve": "Butterfly Valves",
  "gate-valve": "Gate Valves",
  "globe-valve": "Globe Valves",
  "check-valve": "Check Valves",
  "plug-valve": "Plug Valves",
  "pneumatic-actuator": "Pneumatic Actuators",
  "electric-actuator": "Electric Actuators",
  "complete-actuator-equipment": "Complete Actuator Equipment",
};

export const categoryDescriptions: Record<ProductCategory, string> = {
  "soft-starter":
    "Controlled motor starting solutions for reduced mechanical and electrical stress",
  "frequency-inverter":
    "Variable speed drives for precise motor control and energy efficiency",
  "vibration-sensors":
    "Precision sensors for rotating machinery health and predictive maintenance",
  "condition-monitor":
    "Rack and DIN-rail monitoring systems for turbines, compressors, and pumps",
  "ball-valve":
    "Quarter-turn ball valves for reliable on/off and throttling service across industrial applications",
  "butterfly-valve":
    "Lightweight, high-flow butterfly valves for flow regulation in large-diameter pipelines",
  "gate-valve":
    "Full-bore gate valves for minimal pressure drop in fully open service conditions",
  "globe-valve":
    "Globe valves for precise flow throttling and control in process piping systems",
  "check-valve":
    "Non-return check valves that prevent backflow and protect pumps and compressors",
  "plug-valve":
    "Plug valves for quarter-turn on/off isolation with minimal flow restriction",
  "pneumatic-actuator":
    "Pneumatic actuators for reliable, fast on/off and modulating valve automation",
  "electric-actuator":
    "Electric actuators for precise, programmable valve control without compressed air",
  "complete-actuator-equipment":
    "Complete valve and actuator assemblies ready for direct installation",
};
