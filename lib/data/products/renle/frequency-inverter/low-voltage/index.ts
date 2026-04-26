import { rnb1000 } from "./rnb-1000";
import { rnb2000 } from "./rnb-2000";
import { rnb3000 } from "./rnb-3000";
import { rnb5000 } from "./rnb-5000";
import { rnb6000 } from "./rnb-6000";
import type { Product } from "../../../types";

export { rnb1000, rnb2000, rnb3000, rnb5000, rnb6000 };

export const lvInverterProducts: Record<string, Product> = {
  "rnb-1000": rnb1000,
  "rnb-2000": rnb2000,
  "rnb-3000": rnb3000,
  "rnb-5000": rnb5000,
  "rnb-6000": rnb6000,
};
