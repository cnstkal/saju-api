"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeJiji = analyzeJiji;
const CHUNG = {
    자: "오",
    축: "미",
    인: "신",
    묘: "유",
    진: "술",
    사: "해",
    오: "자",
    미: "축",
    신: "인",
    유: "묘",
    술: "진",
    해: "사"
};
const HAP = {
    자: "축",
    축: "자",
    인: "해",
    해: "인",
    묘: "술",
    술: "묘",
    진: "유",
    유: "진",
    사: "신",
    신: "사",
    오: "미",
    미: "오"
};
function analyzeJiji(branches) {
    const result = [];
    for (let i = 0; i < branches.length; i++) {
        for (let j = i + 1; j < branches.length; j++) {
            if (HAP[branches[i]] === branches[j]) {
                result.push(`${branches[i]}${branches[j]} 지지합`);
            }
            if (CHUNG[branches[i]] === branches[j]) {
                result.push(`${branches[i]}${branches[j]} 지지충`);
            }
        }
    }
    return result;
}
