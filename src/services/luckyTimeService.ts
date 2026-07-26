import { getLuckyTime } from "../utils/luckyTime";

export function analyzeLuckyTime(
  yongsin: string
) {

  return {
    times: getLuckyTime(yongsin)
  };

}