import {
  SIX_COMBINATION,
  SIX_CLASH
} from "../utils/combinations";

export function getRelation(
  branch1: string,
  branch2: string
): string {

  if (SIX_COMBINATION[branch1] === branch2) {
    return "육합";
  }

  if (SIX_CLASH[branch1] === branch2) {
    return "충";
  }

  return "";

}