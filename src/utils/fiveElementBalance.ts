import { ElementCount } from "./fiveElementCount";

export function getElementBalance(
  count: ElementCount
) {

  return {

    부족: Object.entries(count)
      .sort((a, b) => a[1] - b[1])[0][0],

    과다: Object.entries(count)
      .sort((a, b) => b[1] - a[1])[0][0]

  };

}