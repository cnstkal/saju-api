export const DAEUN_STEPS = [
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100
];

export function getDaeunAge(
  startAge: number
): number[] {

  return DAEUN_STEPS.map(
    age => age + startAge - 10
  );

}