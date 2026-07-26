import { getTenGod } from "./tenGod";


export function getBranchTenGod(

  dayStem: string,

  branchHidden: string[]

) {

  return branchHidden.map(stem => ({

    stem,

    tenGod:
      getTenGod(
        dayStem,
        stem
      )

  }));

}