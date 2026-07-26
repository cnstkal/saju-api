"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeMonthWoon = analyzeMonthWoon;
const monthwoon_1 = require("../utils/monthwoon");
function analyzeMonthWoon(year) {
    const result = [];
    for (let month = 1; month <= 12; month++) {
        result.push((0, monthwoon_1.getMonthWoon)(year, month));
    }
    return result;
}
