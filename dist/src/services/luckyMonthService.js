"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLuckyMonths = analyzeLuckyMonths;
const luckyMonths_1 = require("../utils/luckyMonths");
function analyzeLuckyMonths(yongsin) {
    return {
        months: (0, luckyMonths_1.getLuckyMonths)(yongsin)
    };
}
