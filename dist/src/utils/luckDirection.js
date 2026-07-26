"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isForwardLuck = isForwardLuck;
function isForwardLuck(gender, yearStem) {
    const yang = [
        "갑",
        "병",
        "무",
        "경",
        "임"
    ];
    const isYang = yang.includes(yearStem);
    return gender === "남"
        ? isYang
        : !isYang;
}
