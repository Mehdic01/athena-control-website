import type { Product } from "../../types";
import { cvSeries } from "./cv-series";
import { caSeries } from "./ca-series";
import { msSeries } from "./ms-series";
import { zarkSeries } from "./zark-series";
import { fkSeries } from "./fk-series";
import { wkWknSeries } from "./wk-wkn-series";

export { cvSeries, caSeries, msSeries, zarkSeries, fkSeries, wkWknSeries };

export const vibrationSensorProducts: Record<string, Product> = {
  "cv-series": cvSeries,
  "ca-series": caSeries,
  "ms-series": msSeries,
  "zark-series": zarkSeries,
  "fk-series": fkSeries,
  "wk-wkn-series": wkWknSeries,
};
