import type { Product } from "../../types";
import { risingStemGateValve } from "./rising-stem-gate-valve";
import { pressureSealGateValve } from "./pressure-seal-gate-valve";
import { cryogenicGateValve } from "./cryogenic-gate-valve";
import { forgedSteelGateValve } from "./forged-steel-gate-valve";
import { castSteelGateValve } from "./cast-steel-gate-valve";
import { bellowsGateValve } from "./bellows-gate-valve";
import { throughConduitGateValve } from "./through-conduit-gate-valve";
import { slabGateValve } from "./slab-gate-valve";

export const gateValveProducts: Record<string, Product> = {
  "rising-stem-gate-valve": risingStemGateValve,
  "pressure-seal-gate-valve": pressureSealGateValve,
  "cryogenic-gate-valve": cryogenicGateValve,
  "forged-steel-gate-valve": forgedSteelGateValve,
  "cast-steel-gate-valve": castSteelGateValve,
  "bellows-gate-valve": bellowsGateValve,
  "through-conduit-gate-valve": throughConduitGateValve,
  "slab-gate-valve": slabGateValve,
};
