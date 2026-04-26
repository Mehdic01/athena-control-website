import type { Product } from "../../types";
import { vm5Series } from "./vm-5-series";
import { vm7Series } from "./vm-7-series";
import { vm25Series } from "./vm-25-series";
import { vm21Series } from "./vm-21-series";

export { vm5Series, vm7Series, vm25Series, vm21Series };

export const conditionMonitorProducts: Record<string, Product> = {
  "vm-5-series": vm5Series,
  "vm-7-series": vm7Series,
  "vm-25-series": vm25Series,
  "vm-21-series": vm21Series,
};
