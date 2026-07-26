import { getYearGanji } from "./sajuService";
import { getMonthGanji } from "../utils/monthGanji";

export function getMonthPillar(
  year: number,
  month: number,
  day: number
): string {

  const yearGanji = getYearGanji(
    year,
    month,
    day
  );

  const yearStem = yearGanji.substring(0, 1);

  return getMonthGanji(
    yearStem,
    month
  );
}