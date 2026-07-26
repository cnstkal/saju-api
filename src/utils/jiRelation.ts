import { getBranchRelation } from "./branchRelation";
import { checkSamHap } from "./samHap";
import { checkHyeong } from "./hyeongRelation";


export function analyzeJiRelation(
  pillars: string[]
) {

  const branches =
    pillars.map(
      p => p.substring(1,2)
    );


  const result:string[] = [];


  for(let i=0;i<branches.length;i++){

    for(let j=i+1;j<branches.length;j++){

      const relation =
        getBranchRelation(
          branches[i],
          branches[j]
        );

      if(relation){
        result.push(relation);
      }

    }

  }


  const sam =
    checkSamHap(branches);


  if(sam){
    result.push(sam);
  }


  const hyeong =
    checkHyeong(branches);


  if(hyeong){
    result.push(hyeong);
  }


  return result;

}