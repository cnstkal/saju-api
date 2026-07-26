import { ElementCount } from "./fiveElementCount";


type Element =
  | "목"
  | "화"
  | "토"
  | "금"
  | "수";


const GENERATE: Record<Element, Element> = {

  목: "화",
  화: "토",
  토: "금",
  금: "수",
  수: "목"

};


const CONTROL: Record<Element, Element> = {

  목: "토",
  화: "금",
  토: "수",
  금: "목",
  수: "화"

};


const ORDER: Element[] = [
  "목",
  "화",
  "토",
  "금",
  "수"
];



export function getYongSin(
  count: ElementCount
): string {


  // 가장 부족한 오행 찾기
  let minElement: Element = "토";

  let minValue = Number.MAX_SAFE_INTEGER;


  for (const e of ORDER) {

    if (count[e] < minValue) {

      minValue = count[e];

      minElement = e;

    }

  }


  // 완전 부족한 오행은 보완 대상으로 선택
  if (minValue === 0) {

    return minElement;

  }


  // 부족한 오행이 없으면
  // 극을 받는 오행을 보완
  let weakElement: Element = "토";

  let weakValue = Number.MAX_SAFE_INTEGER;


  for (const e of ORDER) {

    const score =
      count[e] +
      count[GENERATE[e]];


    if (score < weakValue) {

      weakValue = score;

      weakElement = e;

    }

  }


  return weakElement;

}




export function getHeeSin(
  count: ElementCount
): string {


  const yong =
    getYongSin(count) as Element;


  return GENERATE[yong];

}