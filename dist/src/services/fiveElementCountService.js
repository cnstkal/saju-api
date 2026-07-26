"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFiveElementCount = getFiveElementCount;
const fiveElementCount_1 = require("../utils/fiveElementCount");
function getFiveElementCount(year, month, day, hour) {
    return (0, fiveElementCount_1.countFiveElements)([
        year,
        month,
        day,
        hour
    ]);
}
