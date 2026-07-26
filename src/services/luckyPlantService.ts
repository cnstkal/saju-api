import { getLuckyPlants } from "../utils/luckyPlants";

export function analyzeLuckyPlants(
  yongsin: string
) {

  return {
    plants: getLuckyPlants(yongsin)
  };

}