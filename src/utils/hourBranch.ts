const BRANCHES = [
  "자",
  "축",
  "인",
  "묘",
  "진",
  "사",
  "오",
  "미",
  "신",
  "유",
  "술",
  "해"
];

export function getHourBranch(
  hour: number
): string {

  const index = Math.floor(
    ((hour + 1) % 24) / 2
  );

  return BRANCHES[index];

}