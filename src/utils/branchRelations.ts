export function getBranch(
  pillar: string
): string {

  return pillar.substring(1);

}

export function getStem(
  pillar: string
): string {

  return pillar.substring(0, 1);

}