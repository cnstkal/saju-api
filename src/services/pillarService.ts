import { getYearPillar } from "./yearService";
import { getMonthPillar } from "./monthService";

export function getPillars(
  year: number,
  month: number,
  day: number
) {

  const yearPillar = getYearPillar(
    year,
    month,
    day
  );

  const monthPillar = getMonthPillar(
    year,
    month,
    day
  );

  return {
    year: yearPillar,
    month: monthPillar,
    day: "",
    hour: ""
  };

}