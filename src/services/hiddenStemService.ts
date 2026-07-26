import { HIDDEN_STEMS } from "../utils/hiddenStems";

export function getHiddenStems(
  pillar: string
): string[] {

  const branch = pillar.substring(1, 2);

  return HIDDEN_STEMS[branch] ?? [];

}