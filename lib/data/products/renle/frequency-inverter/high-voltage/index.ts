import { rnhvSeries } from "./rnhv-series";
import type { Product } from "../../../types";

export { rnhvSeries };

export const hvInverterProducts: Record<string, Product> = {
  "rnhv-series": rnhvSeries,
};
