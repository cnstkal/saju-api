const MONTHS = [
  "인월",
  "묘월",
  "진월",
  "사월",
  "오월",
  "미월",
  "신월",
  "유월",
  "술월",
  "해월",
  "자월",
  "축월"
];

export function getMonthLuck(
  month: number
): string {

  return MONTHS[(month + 10) % 12];

}