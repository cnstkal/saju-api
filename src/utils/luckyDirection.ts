const DIRECTION: Record<string, string> = {
  목: "동",
  화: "남",
  토: "중앙",
  금: "서",
  수: "북"
};

export function getLuckyDirection(
  element: string
): string {

  return DIRECTION[element] ?? "";

}