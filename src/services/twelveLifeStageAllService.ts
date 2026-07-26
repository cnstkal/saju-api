import { TWELVE_STAGE_TABLE } from "../utils/twelveLifeStageTable";
import { BRANCH_INDEX } from "../utils/branchIndex";

export function getLifeStage(
  dayStem: string,
  pillar: string
): string {

  const branch = pillar.substring(1);

  return TWELVE_STAGE_TABLE[dayStem][BRANCH_INDEX[branch]];

}