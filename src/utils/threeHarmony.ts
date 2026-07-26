export const THREE_HARMONY = [
  ["신", "자", "진"],
  ["해", "묘", "미"],
  ["인", "오", "술"],
  ["사", "유", "축"]
];

export function isThreeHarmony(
  branches: string[]
): boolean {

  return THREE_HARMONY.some(group =>
    group.every(b => branches.includes(b))
  );

}