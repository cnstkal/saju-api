import { getDaeunAge } from "../utils/daeun";

export function createDaeun(
  startAge: number,
  ganji: string[]
) {

  const ages = getDaeunAge(startAge);

  return ages.map((age, index) => ({
    age,
    ganji: ganji[index] ?? ""
  }));

}