"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaewoonDirection = getDaewoonDirection;
exports.createDaewoon = createDaewoon;
const STEMS = [
    "갑", "을", "병", "정", "무",
    "기", "경", "신", "임", "계"
];
const BRANCHES = [
    "자", "축", "인", "묘",
    "진", "사", "오", "미",
    "신", "유", "술", "해"
];
function getDaewoonDirection(yearStem, gender) {
    const yangStems = [
        "갑",
        "병",
        "무",
        "경",
        "임"
    ];
    const isYang = yangStems.includes(yearStem);
    const isMale = gender === "남";
    if (isYang === isMale) {
        return 1;
    }
    return -1;
}
function createDaewoon(startAge, yearPillar, direction) {
    const result = [];
    const stemIndex = STEMS.indexOf(yearPillar.substring(0, 1));
    const branchIndex = BRANCHES.indexOf(yearPillar.substring(1, 2));
    for (let i = 1; i <= 8; i++) {
        const s = (stemIndex + (i * direction) + 10)
            % 10;
        const b = (branchIndex + (i * direction) + 12)
            % 12;
        result.push({
            age: startAge + ((i - 1) * 10),
            ganji: STEMS[s] +
                BRANCHES[b]
        });
    }
    return result;
}
