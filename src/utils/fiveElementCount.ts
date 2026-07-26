import { BRANCH_ELEMENT, STEM_ELEMENT } from "./fiveElements";

export interface ElementCount {
  목: number;
  화: number;
  토: number;
  금: number;
  수: number;
}


export function countFiveElements(
  pillars: string[]
): ElementCount {

  const result: ElementCount = {
    목: 0,
    화: 0,
    토: 0,
    금: 0,
    수: 0
  };


  for (const pillar of pillars) {

    const stem = pillar.substring(0, 1);
    const branch = pillar.substring(1, 2);


    const stemElement =
      STEM_ELEMENT[stem] as keyof ElementCount | undefined;


    const branchElement =
      BRANCH_ELEMENT[branch] as keyof ElementCount | undefined;


    if (stemElement) {
      result[stemElement]++;
    }


    if (branchElement) {
      result[branchElement]++;
    }

  }


  return result;

}