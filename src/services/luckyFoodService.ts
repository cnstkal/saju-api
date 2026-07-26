import { getLuckyFoods } from "../utils/luckyFoods";

export function analyzeLuckyFoods(
  yongsin: string
) {

  return {
    foods: getLuckyFoods(yongsin)
  };

}