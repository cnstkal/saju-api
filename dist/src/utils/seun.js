"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearLuck = getYearLuck;
const ganjiCycle_1 = require("./ganjiCycle");
function getYearLuck(year) {
    const cycle = (0, ganjiCycle_1.getGanjiCycle)();
    const index = (year - 1984 + 6000) % 60;
    return cycle[index];
}
