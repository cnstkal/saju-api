import { getLuckyDirection } from "../utils/luckyDirection";

export function analyzeLuckyDirection(
  yongsin: string
) {

  return {
    direction: getLuckyDirection(yongsin)
  };

}