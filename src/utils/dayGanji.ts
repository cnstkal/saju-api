const STEMS = [
  "갑", "을", "병", "정", "무",
  "기", "경", "신", "임", "계"
];

const BRANCHES = [
  "자", "축", "인", "묘", "진", "사",
  "오", "미", "신", "유", "술", "해"
];

const BASE_DATE = new Date(1984, 1, 2);

export function getDayGanji(
  year: number,
  month: number,
  day: number
): string {

  const target = new Date(year, month - 1, day);

  const diff = Math.floor(
    (target.getTime() - BASE_DATE.getTime()) /
    86400000
  );

  const stem = STEMS[(diff % 10 + 10) % 10];
  const branch = BRANCHES[(diff % 12 + 12) % 12];

  return stem + branch;

}