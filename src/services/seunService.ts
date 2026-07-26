import { getYearLuck } from "../utils/seun";

export function createSeun(
  startYear: number,
  count = 10
) {

  const result = [];

  for (let i = 0; i < count; i++) {

    result.push({
      year: startYear + i,
      ganji: getYearLuck(startYear + i)
    });

  }

  return result;

}