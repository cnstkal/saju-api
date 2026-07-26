"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BRANCH_CHUNG = exports.BRANCH_HAP = void 0;
exports.getBranchRelation = getBranchRelation;
exports.BRANCH_HAP = {
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
exports.BRANCH_CHUNG = {
    자: "오",
    오: "자",
    축: "미",
    미: "축",
    인: "신",
    신: "인",
    묘: "유",
    유: "묘",
    진: "술",
    술: "진",
    사: "해",
    해: "사"
};
function getBranchRelation(a, b) {
    if (exports.BRANCH_HAP[a] === b) {
        return "지지합";
    }
    if (exports.BRANCH_CHUNG[a] === b) {
        return "지지충";
    }
    return "";
}
