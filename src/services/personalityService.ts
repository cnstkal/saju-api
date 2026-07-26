import { getPersonality } from "../utils/personality";

export function analyzePersonality(
  yongsin: string
) {

  return {
    personality: getPersonality(yongsin)
  };

}