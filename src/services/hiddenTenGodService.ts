import { getHiddenTenGod } from "../utils/hiddenTenGod";


export function analyzeHiddenTenGod(

  dayPillar: string,

  pillars: string[]

) {


  const dayStem =
    dayPillar.substring(0, 1);


  return pillars.map(pillar => {


    const branch =
      pillar.substring(1, 2);


    return {

      pillar,

      hidden:

        getHiddenTenGod(
          dayStem,
          branch
        )

    };


  });

}