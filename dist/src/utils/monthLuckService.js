"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMonthLuck = createMonthLuck;
const monthLuck_1 = require("../utils/monthLuck");
function createMonthLuck(year) {
    const result = [];
    for (let month = 1; month <= 12; month++) {
        result.push({
            year,
            month,
            ganji: (0, monthLuck_1.getMonthLuck)(month)
        });
    }
    return result;
}
