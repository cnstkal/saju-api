import { getMonthWoon } from "../utils/monthwoon";


export function analyzeMonthWoon(

  year:number

) {


  const result = [];


  for(let month = 1; month <= 12; month++){


    result.push(

      getMonthWoon(
        year,
        month
      )

    );

  }


  return result;

}