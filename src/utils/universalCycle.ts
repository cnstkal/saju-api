export function getCycleIndex(

  year:number

){

  return (
    year - 4
  ) % 60;

}