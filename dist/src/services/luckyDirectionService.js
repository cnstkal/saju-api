"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLuckyDirection = analyzeLuckyDirection;
const luckyDirection_1 = require("../utils/luckyDirection");
function analyzeLuckyDirection(yongsin) {
    return {
        direction: (0, luckyDirection_1.getLuckyDirection)(yongsin)
    };
}
