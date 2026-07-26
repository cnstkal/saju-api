"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthGanji = getMonthGanji;
const MONTH_BRANCHES = [
    "인",
    "묘",
    "진",
    "사",
    "오",
    "미",
    "신",
    "유",
    "술",
    "해",
    "자",
    "축"
];
const YEAR_STEM_GROUP = {
    "갑": 0,
    "기": 0,
    "을": 2,
    "경": 2,
    "병": 4,
    "신": 4,
    "정": 6,
    "임": 6,
    "무": 8,
    "계": 8
};
const STEMS = [
    "갑",
    "을",
    "병",
    "정",
    "무",
    "기",
    "경",
    "신",
    "임",
    "계"
];
function getMonthGanji(yearStem, solarMonth) {
    let monthIndex = solarMonth - 2;
    if (monthIndex < 0) {
        monthIndex += 12;
    }
    const branch = MONTH_BRANCHES[monthIndex];
    const start = YEAR_STEM_GROUP[yearStem];
    const stem = STEMS[(start + monthIndex) % 10];
    return stem + branch;
}
