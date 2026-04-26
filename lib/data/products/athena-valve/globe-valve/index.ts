import type { Product } from "../../types";
import { angleGlobeValve } from "./angle-globe-valve";
import { forgedSteelGlobeValve } from "./forged-steel-globe-valve";
import { castSteelGlobeValve } from "./cast-steel-globe-valve";
import { cryogenicGlobeValve } from "./cryogenic-globe-valve";
import { oxygenGlobeValve } from "./oxygen-globe-valve";
import { pressureSealGlobeValve } from "./pressure-seal-globe-valve";
import { bellowsSealedGlobeValve } from "./bellows-sealed-globe-valve";

export const globeValveProducts: Record<string, Product> = {
  "angle-globe-valve": angleGlobeValve,
  "forged-steel-globe-valve": forgedSteelGlobeValve,
  "cast-steel-globe-valve": castSteelGlobeValve,
  "cryogenic-globe-valve": cryogenicGlobeValve,
  "oxygen-globe-valve": oxygenGlobeValve,
  "pressure-seal-globe-valve": pressureSealGlobeValve,
  "bellows-sealed-globe-valve": bellowsSealedGlobeValve,
};
