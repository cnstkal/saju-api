import { ElementCount } from "../utils/fiveElementCount";
import { getDayMasterStrength } from "../utils/strength";

export function analyzeStrength(
  count: ElementCount
) {

  const score =
    count.목 +
    count.화 +
    count.토 +
    count.금 +
    count.수;

  return {
    score,
    result: getDayMasterStrength(score)
  };

}