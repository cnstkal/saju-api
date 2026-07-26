import { ElementCount } from "../utils/fiveElementCount";
import {
  getYongSin,
  getHeeSin
} from "../utils/yongsin";

export function analyzeYongSin(
  count: ElementCount
) {

  return {

    yongsin: getYongSin(count),

    heesin: getHeeSin(count)

  };

}