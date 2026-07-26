export function isForwardLuck(
  gender: "남" | "여",
  yearStem: string
): boolean {

  const yang = [
    "갑",
    "병",
    "무",
    "경",
    "임"
  ];

  const isYang = yang.includes(yearStem);

  return gender === "남"
    ? isYang
    : !isYang;

}