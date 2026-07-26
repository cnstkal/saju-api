import { getHourBranch } from "./hourBranch";

const STEMS = [
  "갑", "을", "병", "정", "무",
  "기", "경", "신", "임", "계"
];

const START_STEM: Record<string, number> = {
  "갑": 0,
  "기": 0,

  "을": 2,
  "경": 2,

  "병": 4,
  "신": 4,

  "정": 6,
  "임": 6,

  "무": 8,
  "계": 8
};

export function getHourGanji(
  dayStem: string,
  hour: number
): string {

  const branch = getHourBranch(hour);

  const branchIndex = [
    "자","축","인","묘","진","사",
    "오","미","신","유","술","해"
  ].indexOf(branch);

  const stem = STEMS[
    (START_STEM[dayStem] + branchIndex) % 10
  ];

  return stem + branch;

}