export function getDayMasterStrength(
  score: number
): string {

  if (score >= 9) {
    return "신강";
  }

  if (score >= 6) {
    return "중화";
  }

  return "신약";

}