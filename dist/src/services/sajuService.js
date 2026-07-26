"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearGanji = getYearGanji;
const solarTerms_1 = require("../utils/solarTerms");
const HEAVENLY_STEMS = [
    "갑", "을", "병", "정", "무",
    "기", "경", "신", "임", "계"
];
const EARTHLY_BRANCHES = [
    "자", "축", "인", "묘", "진", "사",
    "오", "미", "신", "유", "술", "해"
];
const GANJI60 = [];
for (let i = 0; i < 60; i++) {
    GANJI60.push(HEAVENLY_STEMS[i % 10] +
        EARTHLY_BRANCHES[i % 12]);
}
function getYearGanji(year, month, day) {
    let targetYear = year;
    if ((0, solarTerms_1.isBeforeIpchun)(year, month, day)) {
        targetYear--;
    }
    const index = (targetYear - 1984 + 6000) % 60;
    return GANJI60[index];
}
