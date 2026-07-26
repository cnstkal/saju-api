import { getDayGanji } from "../utils/dayGanji";
import { getHourGanji } from "../utils/hourGanji";

export function getHourPillar(
  year: number,
  month: number,
  day: number,
  hour: number
): string {

  const dayGanji = getDayGanji(
    year,
    month,
    day
  );

  const dayStem = dayGanji.substring(0, 1);

  return getHourGanji(
    dayStem,
    hour
  );

}