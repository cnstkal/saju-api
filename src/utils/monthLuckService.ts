import { getMonthLuck } from "../utils/monthLuck";

export function createMonthLuck(
  year: number
) {

  const result = [];

  for (let month = 1; month <= 12; month++) {

    result.push({
      year,
      month,
      ganji: getMonthLuck(month)
    });

  }

  return result;

}