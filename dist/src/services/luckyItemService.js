"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLuckyItems = analyzeLuckyItems;
const luckyItems_1 = require("../utils/luckyItems");
function analyzeLuckyItems(yongsin) {
    return {
        items: (0, luckyItems_1.getLuckyItems)(yongsin)
    };
}
