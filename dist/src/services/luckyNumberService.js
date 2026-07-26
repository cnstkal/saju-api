"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLuckyNumbers = analyzeLuckyNumbers;
const luckyNumbers_1 = require("../utils/luckyNumbers");
function analyzeLuckyNumbers(yongsin) {
    return {
        numbers: (0, luckyNumbers_1.getLuckyNumbers)(yongsin)
    };
}
