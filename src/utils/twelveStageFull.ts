const STAGES: Record<string, string[]> = {

  갑: [
    "장생",
    "목욕",
    "관대",
    "건록",
    "제왕",
    "쇠",
    "병",
    "사",
    "묘",
    "절",
    "태",
    "양"
  ],

  을: [
    "사",
    "묘",
    "절",
    "태",
    "양",
    "장생",
    "목욕",
    "관대",
    "건록",
    "제왕",
    "쇠",
    "병"
  ]

};


export function getTwelveStage(

  stem: string,

  branchIndex: number

): string {


  return (
    STAGES[stem]?.[branchIndex]
    ??
    ""
  );

}