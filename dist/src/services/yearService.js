"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearPillar = getYearPillar;
const sajuService_1 = require("./sajuService");
function getYearPillar(year, month, day) {
    return (0, sajuService_1.getYearGanji)(year, month, day);
}
