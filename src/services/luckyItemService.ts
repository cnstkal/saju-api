import { getLuckyItems } from "../utils/luckyItems";

export function analyzeLuckyItems(
  yongsin: string
) {

  return {
    items: getLuckyItems(yongsin)
  };

}