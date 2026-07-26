import { getYearPillar } from "./yearService";
import { getMonthPillar } from "./monthService";
import { getDayPillar } from "./dayService";
import { getHourPillar } from "./hourService";

export function createSajuResult(
  year: number,
  month: number,
  day: number,
  hour: number
) {

  return {

    pillar: {

      year: getYearPillar(
        year,
        month,
        day
      ),

      month: getMonthPillar(
        year,
        month,
        day
      ),

      day: getDayPillar(
        year,
        month,
        day
      ),

      hour: getHourPillar(
        year,
        month,
        day,
        hour
      )

    }

  };

}