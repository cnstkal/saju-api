import { TWELVE_STAGE_TABLE } from "../utils/twelveStageTable";


const BRANCH_INDEX: Record<string, number> = {

  자: 0,
  축: 1,
  인: 2,
  묘: 3,
  진: 4,
  사: 5,
  오: 6,
  미: 7,
  신: 8,
  유: 9,
  술: 10,
  해: 11

};


export function analyzeTwelveStage(

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

      stage:
        TWELVE_STAGE_TABLE[dayStem]
        ? TWELVE_STAGE_TABLE[dayStem][
            BRANCH_INDEX[branch]
          ]
        : ""

    };

  });

}