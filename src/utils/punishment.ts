export const PUNISHMENT = [
  ["인", "사", "신"],
  ["축", "술", "미"],
  ["자", "묘"]
];

export function hasPunishment(
  branches: string[]
): boolean {

  return PUNISHMENT.some(group =>
    group.every(b => branches.includes(b))
  );

}