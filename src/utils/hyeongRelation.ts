export const HYEONG = [

  ["인", "사", "신"],

  ["축", "술", "미"],

  ["자", "묘"]

];


export function checkHyeong(
  branches: string[]
): string {

  for (const group of HYEONG) {

    if (
      group.every(
        b => branches.includes(b)
      )
    ) {

      return group.join("") + " 형";

    }

  }

  return "";

}