"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLuckyFoods = analyzeLuckyFoods;
const luckyFoods_1 = require("../utils/luckyFoods");
function analyzeLuckyFoods(yongsin) {
    return {
        foods: (0, luckyFoods_1.getLuckyFoods)(yongsin)
    };
}
