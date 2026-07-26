"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLuckyMonths = getLuckyMonths;
const MONTHS = {
    목: ["1월", "2월", "3월", "4월"],
    화: ["5월", "6월", "7월"],
    토: ["3월", "6월", "9월", "12월"],
    금: ["8월", "9월", "10월"],
    수: ["11월", "12월", "1월"]
};
function getLuckyMonths(element) {
    return MONTHS[element] ?? [];
}
