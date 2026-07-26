"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTenGod = getTenGod;
const ELEMENT = {
    갑: "목",
    을: "목",
    병: "화",
    정: "화",
    무: "토",
    기: "토",
    경: "금",
    신: "금",
    임: "수",
    계: "수"
};
const YINYANG = {
    갑: "양",
    병: "양",
    무: "양",
    경: "양",
    임: "양",
    을: "음",
    정: "음",
    기: "음",
    신: "음",
    계: "음"
};
const GENERATE = {
    목: "화",
    화: "토",
    토: "금",
    금: "수",
    수: "목"
};
const CONTROL = {
    목: "토",
    화: "금",
    토: "수",
    금: "목",
    수: "화"
};
function getTenGod(dayStem, targetStem) {
    const me = ELEMENT[dayStem];
    const target = ELEMENT[targetStem];
    const same = YINYANG[dayStem] === YINYANG[targetStem];
    if (me === target) {
        return same ? "비견" : "겁재";
    }
    if (GENERATE[me] === target) {
        return same ? "식신" : "상관";
    }
    if (GENERATE[target] === me) {
        return same ? "정인" : "편인";
    }
    if (CONTROL[me] === target) {
        return same ? "정재" : "편재";
    }
    return same ? "정관" : "편관";
}
