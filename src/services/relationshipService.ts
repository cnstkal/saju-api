import { getRelationship } from "../utils/relationship";

export function analyzeRelationship(
  yongsin: string
) {

  return {
    relationship: getRelationship(yongsin)
  };

}