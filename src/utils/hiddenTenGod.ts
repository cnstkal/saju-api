import { getTenGod } from "./tenGod";
import { HIDDEN_STEMS } from "./hiddenStems";


export function getHiddenTenGod(

  dayStem: string,

  branch: string

) {


  const hidden =
    HIDDEN_STEMS[branch] ?? [];


  return hidden.map(stem => ({

    stem,

    tenGod:
      getTenGod(
        dayStem,
        stem
      )

  }));

}