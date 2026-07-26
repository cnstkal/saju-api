import { getLuckyMonths } from "../utils/luckyMonths";

export function analyzeLuckyMonths(
  yongsin: string
) {

  return {
    months: getLuckyMonths(yongsin)
  };

}