import { getGanjiCycle } from "./ganjiCycle";

export function getYearLuck(
  year: number
): string {

  const cycle = getGanjiCycle();

  const index = (year - 1984 + 6000) % 60;

  return cycle[index];

}