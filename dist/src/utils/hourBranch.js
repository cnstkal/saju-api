"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHourBranch = getHourBranch;
const BRANCHES = [
    "자",
    "축",
    "인",
    "묘",
    "진",
    "사",
    "오",
    "미",
    "신",
    "유",
    "술",
    "해"
];
function getHourBranch(hour) {
    const index = Math.floor(((hour + 1) % 24) / 2);
    return BRANCHES[index];
}
