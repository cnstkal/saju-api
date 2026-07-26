import { getTenGod } from "../utils/tenGod";


export function analyzeTenGod(
  dayPillar: string,
  pillars: string[]
) {

  const dayStem = dayPillar.substring(0, 1);


  return {

    year:
      getTenGod(
        dayStem,
        pillars[0].substring(0, 1)
      ),

    month:
      getTenGod(
        dayStem,
        pillars[1].substring(0, 1)
      ),

    day:
      getTenGod(
        dayStem,
        pillars[2].substring(0, 1)
      ),

    hour:
      getTenGod(
        dayStem,
        pillars[3].substring(0, 1)
      )

  };

}