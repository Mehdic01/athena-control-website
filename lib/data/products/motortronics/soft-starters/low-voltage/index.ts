import { vmxSynergyPlus } from "./vmx-synergy-plus";
import { vmxSynergy }     from "./vmx-synergy";
import { vmxAgility }     from "./vmx-agility";
import { vmxPfe }         from "./vmx-pfe";
import type { Product } from "../../../types";

export { vmxSynergyPlus, vmxSynergy, vmxAgility, vmxPfe };

export const lvSoftStarterProducts: Record<string, Product> = {
    "vmx-synergy-plus": vmxSynergyPlus,
      "vmx-synergy":      vmxSynergy,
        "vmx-agility":      vmxAgility,
          "vmx-pfe":          vmxPfe,
}
