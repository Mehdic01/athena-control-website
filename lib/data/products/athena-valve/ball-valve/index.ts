import type { Product } from "../../types";
import { forgedSteelFloatingBallValve } from "./forged-steel-floating-ball-valve";
import { topEntryBallValve } from "./top-entry-ball-valve";
import { castSteelFloatingBallValve } from "./cast-steel-floating-ball-valve";
import { jacketedFloatingBallValve } from "./jacketed-floating-ball-valve";
import { cryogenicBallValve } from "./cryogenic-ball-valve";
import { castSteelTrunnionBallValve } from "./cast-steel-trunnion-ball-valve";
import { forgedSteelTrunnionBallValve } from "./forged-steel-trunnion-ball-valve";
import { dbbBallValve } from "./dbb-ball-valve";

export {
  forgedSteelFloatingBallValve,
  topEntryBallValve,
  castSteelFloatingBallValve,
  jacketedFloatingBallValve,
  cryogenicBallValve,
  castSteelTrunnionBallValve,
  forgedSteelTrunnionBallValve,
  dbbBallValve,
};

export const ballValveProducts: Record<string, Product> = {
  "forged-steel-floating-ball-valve": forgedSteelFloatingBallValve,
  "top-entry-ball-valve":             topEntryBallValve,
  "cast-steel-floating-ball-valve":   castSteelFloatingBallValve,
  "jacketed-floating-ball-valve":     jacketedFloatingBallValve,
  "cryogenic-ball-valve":             cryogenicBallValve,
  "cast-steel-trunnion-ball-valve":   castSteelTrunnionBallValve,
  "forged-steel-trunnion-ball-valve": forgedSteelTrunnionBallValve,
  "dbb-ball-valve":                   dbbBallValve,
};
