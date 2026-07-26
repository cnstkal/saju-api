import { getBranch } from "../utils/branchRelations";
import { getRelation } from "./combinationService";

export function getAllRelations(
  pillars: string[]
) {

  const result: string[] = [];

  for (let i = 0; i < pillars.length; i++) {
    for (let j = i + 1; j < pillars.length; j++) {

      const type = getRelation(
        getBranch(pillars[i]),
        getBranch(pillars[j])
      );

      if (type) {
        result.push(
          `${i}-${j}:${type}`
        );
      }

    }
  }

  return result;

}