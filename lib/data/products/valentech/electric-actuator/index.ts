import type { Product } from "../../types";
import { multiTurnElectricActuator } from "./multi-turn-electric-actuator";
import { compactModuleElectricActuator } from "./compact-module-electric-actuator";
import { partiallyRotaryElectricActuator } from "./partially-rotary-electric-actuator";
import { angularTravelElectricActuator } from "./angular-travel-electric-actuator";

export const electricActuatorProducts: Record<string, Product> = {
  "multi-turn-electric-actuator": multiTurnElectricActuator,
  "compact-module-electric-actuator": compactModuleElectricActuator,
  "partially-rotary-electric-actuator": partiallyRotaryElectricActuator,
  "angular-travel-electric-actuator": angularTravelElectricActuator,
};
