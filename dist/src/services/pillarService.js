"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPillars = getPillars;
const yearService_1 = require("./yearService");
const monthService_1 = require("./monthService");
function getPillars(year, month, day) {
    const yearPillar = (0, yearService_1.getYearPillar)(year, month, day);
    const monthPillar = (0, monthService_1.getMonthPillar)(year, month, day);
    return {
        year: yearPillar,
        month: monthPillar,
        day: "",
        hour: ""
    };
}
