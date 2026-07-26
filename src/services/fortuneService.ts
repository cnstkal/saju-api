import { analyzeDaewoon } from "./daewoonService";
import { analyzeSewoon } from "./sewoonService";
import { analyzeMonthWoon } from "./monthwoonService";


export function analyzeFortune(

  yearPillar:string,

  gender:string,

  year:number

){

  return {

    daewoon:

      analyzeDaewoon(
        yearPillar,
        gender
      ),


    sewoon:

      analyzeSewoon([
        year,
        year + 1,
        year + 2
      ]),


    monthwoon:

      analyzeMonthWoon(
        year
      )

  };

}