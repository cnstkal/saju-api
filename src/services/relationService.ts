import { analyzeCheongan } from "../utils/cheonganRelation";
import { analyzeJiji } from "../utils/jijiRelation";


export function analyzeRelations(

  pillars:string[]

){


  const stems =
    pillars.map(
      p=>p.substring(0,1)
    );


  const branches =
    pillars.map(
      p=>p.substring(1,2)
    );


  return {

    cheongan:
      analyzeCheongan(stems),


    jiji:
      analyzeJiji(branches)

  };


}