import { getSewoon } from "../utils/sewoon";


export function analyzeSewoon(

  years: number[]

) {


  return years.map(year => {

    return getSewoon(year);

  });

}