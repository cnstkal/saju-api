"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthWoon = getMonthWoon;
function getMonthWoon(year, month) {
    return {
        year,
        month,
        label: `${year}년 ${month}월 운세`
    };
}
