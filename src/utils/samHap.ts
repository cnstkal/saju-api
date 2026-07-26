export const SAMHAP = [

  ["신", "자", "진"],

  ["해", "묘", "미"],

  ["인", "오", "술"],

  ["사", "유", "축"]

];


export function checkSamHap(
  branches: string[]
): string {

  for (const group of SAMHAP) {

    if (
      group.every(
        b => branches.includes(b)
      )
    ) {

      return group.join("") + " 삼합";

    }

  }

  return "";

}