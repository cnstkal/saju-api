export function createFinalResult(
  data:any
){

  return {

    ...data,

    generatedAt:
      new Date().toISOString()

  };

}