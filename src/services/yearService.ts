import { getYearGanji } from "./sajuService";

export function getYearPillar(
  year: number,
  month: number,
  day: number
): string {

  return getYearGanji(
    year,
    month,
    day
  );

}