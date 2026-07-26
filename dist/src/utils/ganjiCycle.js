"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGanjiCycle = getGanjiCycle;
const STEMS = [
    "갑", "을", "병", "정", "무",
    "기", "경", "신", "임", "계"
];
const BRANCHES = [
    "자", "축", "인", "묘", "진", "사",
    "오", "미", "신", "유", "술", "해"
];
const GANJI = [];
for (let i = 0; i < 60; i++) {
    GANJI.push(STEMS[i % 10] +
        BRANCHES[i % 12]);
}
function getGanjiCycle() {
    return GANJI;
}
