import { getHealthParts } from "../utils/health";

export function analyzeHealth(
  yongsin: string
) {

  return {
    organs: getHealthParts(yongsin)
  };

}