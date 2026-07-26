import { getLuckyNumbers } from "../utils/luckyNumbers";

export function analyzeLuckyNumbers(
  yongsin: string
) {

  return {
    numbers: getLuckyNumbers(yongsin)
  };

}