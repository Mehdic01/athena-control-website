import type { Product } from "../../types";
import { pressureBalancePlugValve } from "./pressure-balance-plug-valve";
import { plugValve } from "./plug-valve";
import { orbitalPlugValve } from "./orbital-plug-valve";

export const plugValveProducts: Record<string, Product> = {
  "pressure-balance-plug-valve": pressureBalancePlugValve,
  "plug-valve": plugValve,
  "orbital-plug-valve": orbitalPlugValve,
};
