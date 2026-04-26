import type { Product } from "../../types";
import { ballValveWithPneumaticActuator } from "./ball-valve-with-pneumatic-actuator";
import { butterflyValveWithPneumaticActuator } from "./butterfly-valve-with-pneumatic-actuator";
import { gateValveWithPneumaticActuator } from "./gate-valve-with-pneumatic-actuator";
import { ballValveWithElectricActuator } from "./ball-valve-with-electric-actuator";
import { gateValveWithElectricActuator } from "./gate-valve-with-electric-actuator";
import { butterflyValveWithElectricActuator } from "./butterfly-valve-with-electric-actuator";

export const completeActuatorEquipmentProducts: Record<string, Product> = {
  "ball-valve-with-pneumatic-actuator": ballValveWithPneumaticActuator,
  "butterfly-valve-with-pneumatic-actuator": butterflyValveWithPneumaticActuator,
  "gate-valve-with-pneumatic-actuator": gateValveWithPneumaticActuator,
  "ball-valve-with-electric-actuator": ballValveWithElectricActuator,
  "gate-valve-with-electric-actuator": gateValveWithElectricActuator,
  "butterfly-valve-with-electric-actuator": butterflyValveWithElectricActuator,
};
