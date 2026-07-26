import { TWELVE_LIFE_STAGE } from "../utils/twelveLifeStage";

export function getTwelveLifeStage(
  dayStem: string,
  pillar: string
): string {

  const branch = pillar.substring(1);

  return (
    TWELVE_LIFE_STAGE[dayStem]?.[branch] ??
    ""
  );

}