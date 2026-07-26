import {
  STEM_ELEMENT,
  BRANCH_ELEMENT
} from "../utils/fiveElements";

export function getPillarElement(
  pillar: string
) {

  const stem = pillar.substring(0, 1);
  const branch = pillar.substring(1, 2);

  return {
    stem: STEM_ELEMENT[stem],
    branch: BRANCH_ELEMENT[branch]
  };

}