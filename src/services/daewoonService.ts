import {
  getDaewoonDirection,
  createDaewoon
} from "../utils/daewoon";


export function analyzeDaewoon(

  yearPillar: string,

  gender: string

) {


  const yearStem =
    yearPillar.substring(0, 1);


  const direction =
    getDaewoonDirection(
      yearStem,
      gender
    );


  return createDaewoon(

    10,

    yearPillar,

    direction

  );

}