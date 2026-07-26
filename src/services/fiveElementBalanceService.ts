import { getElementBalance } from "../utils/fiveElementBalance";
import { ElementCount } from "../utils/fiveElementCount";

export function analyzeFiveElement(
  count: ElementCount
) {

  return getElementBalance(count);

}