"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayPillar = getDayPillar;
const dayGanji_1 = require("../utils/dayGanji");
function getDayPillar(year, month, day) {
    return (0, dayGanji_1.getDayGanji)(year, month, day);
}
