"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLuckyColor = analyzeLuckyColor;
const colors_1 = require("../utils/colors");
function analyzeLuckyColor(yongsin) {
    return {
        color: (0, colors_1.getLuckyColor)(yongsin)
    };
}
