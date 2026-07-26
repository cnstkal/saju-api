"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHourPillar = getHourPillar;
const dayGanji_1 = require("../utils/dayGanji");
const hourGanji_1 = require("../utils/hourGanji");
function getHourPillar(year, month, day, hour) {
    const dayGanji = (0, dayGanji_1.getDayGanji)(year, month, day);
    const dayStem = dayGanji.substring(0, 1);
    return (0, hourGanji_1.getHourGanji)(dayStem, hour);
}
