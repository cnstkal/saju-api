"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLuckyTime = analyzeLuckyTime;
const luckyTime_1 = require("../utils/luckyTime");
function analyzeLuckyTime(yongsin) {
    return {
        times: (0, luckyTime_1.getLuckyTime)(yongsin)
    };
}
