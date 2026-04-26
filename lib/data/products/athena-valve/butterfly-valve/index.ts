import type { Product } from "../../types";
import { tripleOffsetButterflyValve } from "./triple-offset-butterfly-valve";
import { concentricButterflyValve } from "./concentric-butterfly-valve";
import { doubleOffsetButterflyValve } from "./double-offset-butterfly-valve";
import { butterflyWaferTypeValve } from "./butterfly-wafer-type-valve";

export const butterflyValveProducts: Record<string, Product> = {
  "triple-offset-butterfly-valve": tripleOffsetButterflyValve,
  "concentric-butterfly-valve": concentricButterflyValve,
  "double-offset-butterfly-valve": doubleOffsetButterflyValve,
  "butterfly-wafer-type-valve": butterflyWaferTypeValve,
};
