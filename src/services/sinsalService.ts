import { getSinsal } from "../utils/sinsal";


export function analyzeSinsal(

  pillars: string[]

) {


  return pillars.map(pillar => {


    const branch =
      pillar.substring(1,2);


    return {

      pillar,

      sinsal:
        getSinsal(branch)

    };


  });

}