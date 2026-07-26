"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthPillar = getMonthPillar;
const sajuService_1 = require("./sajuService");
const monthGanji_1 = require("../utils/monthGanji");
function getMonthPillar(year, month, day) {
    const yearGanji = (0, sajuService_1.getYearGanji)(year, month, day);
    const yearStem = yearGanji.substring(0, 1);
    return (0, monthGanji_1.getMonthGanji)(yearStem, month);
}
