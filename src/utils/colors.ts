export const ELEMENT_COLOR: Record<string, string> = {
  목: "green",
  화: "red",
  토: "yellow",
  금: "white",
  수: "black"
};

export function getLuckyColor(
  element: string
): string {

  return ELEMENT_COLOR[element] ?? "";

}