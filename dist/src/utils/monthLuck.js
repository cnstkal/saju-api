"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthLuck = getMonthLuck;
const MONTHS = [
    "인월",
    "묘월",
    "진월",
    "사월",
    "오월",
    "미월",
    "신월",
    "유월",
    "술월",
    "해월",
    "자월",
    "축월"
];
function getMonthLuck(month) {
    return MONTHS[(month + 10) % 12];
}
