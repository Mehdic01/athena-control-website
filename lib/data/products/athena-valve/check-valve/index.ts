import type { Product } from "../../types";
import { axialFlowCheckValve } from "./axial-flow-check-valve";
import { normalSwingCheckValve } from "./normal-swing-check-valve";
import { dualPlateCheckValve } from "./dual-plate-check-valve";
import { yTypeCheckValve } from "./y-type-check-valve";
import { pressureSealSwingCheckValve } from "./pressure-seal-swing-check-valve";
import { liftTypeCheckValve } from "./lift-type-check-valve";

export const checkValveProducts: Record<string, Product> = {
  "axial-flow-check-valve": axialFlowCheckValve,
  "normal-swing-check-valve": normalSwingCheckValve,
  "dual-plate-check-valve": dualPlateCheckValve,
  "y-type-check-valve": yTypeCheckValve,
  "pressure-seal-swing-check-valve": pressureSealSwingCheckValve,
  "lift-type-check-valve": liftTypeCheckValve,
};
