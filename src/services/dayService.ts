import { getDayGanji } from "../utils/dayGanji";

export function getDayPillar(
  year: number,
  month: number,
  day: number
): string {

  return getDayGanji(
    year,
    month,
    day
  );

}