import { countFiveElements } from "../utils/fiveElementCount";

export function getFiveElementCount(
  year: string,
  month: string,
  day: string,
  hour: string
) {

  return countFiveElements([
    year,
    month,
    day,
    hour
  ]);

}