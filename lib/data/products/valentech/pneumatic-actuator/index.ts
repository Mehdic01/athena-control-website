import type { Product } from "../../types";
import { springReturnForkTypePneumaticActuator } from "./spring-return-fork-type-pneumatic-actuator";
import { doubleActingForkTypePneumaticActuator } from "./double-acting-fork-type-pneumatic-actuator";
import { linearPneumaticActuator } from "./linear-pneumatic-actuator";
import { rackAndPinionPneumaticActuator } from "./rack-and-pinion-pneumatic-actuator";
import { fastUltraFastActingPneumaticActuator } from "./fast-ultra-fast-acting-pneumatic-actuator";

export const pneumaticActuatorProducts: Record<string, Product> = {
  "spring-return-fork-type-pneumatic-actuator": springReturnForkTypePneumaticActuator,
  "double-acting-fork-type-pneumatic-actuator": doubleActingForkTypePneumaticActuator,
  "linear-pneumatic-actuator": linearPneumaticActuator,
  "rack-and-pinion-pneumatic-actuator": rackAndPinionPneumaticActuator,
  "fast-ultra-fast-acting-pneumatic-actuator": fastUltraFastActingPneumaticActuator,
};
