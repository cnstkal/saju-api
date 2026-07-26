import { getLuckyColor } from "../utils/colors";

export function analyzeLuckyColor(
  yongsin: string
) {

  return {
    color: getLuckyColor(yongsin)
  };

}