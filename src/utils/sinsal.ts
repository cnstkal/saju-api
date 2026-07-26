export const SINSAL: Record<string, string[]> = {

  자: [
    "도화살",
    "장성살"
  ],

  축: [
    "화개살",
    "반안살"
  ],

  인: [
    "역마살",
    "지살"
  ],

  묘: [
    "도화살",
    "재살"
  ],

  진: [
    "화개살",
    "월살"
  ],

  사: [
    "역마살",
    "망신살"
  ],

  오: [
    "도화살",
    "장성살"
  ],

  미: [
    "화개살",
    "반안살"
  ],

  신: [
    "역마살",
    "지살"
  ],

  유: [
    "도화살",
    "재살"
  ],

  술: [
    "화개살",
    "월살"
  ],

  해: [
    "역마살",
    "망신살"
  ]

};


export function getSinsal(
  branch: string
): string[] {

  return SINSAL[branch] ?? [];

}