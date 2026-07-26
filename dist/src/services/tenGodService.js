"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeTenGod = analyzeTenGod;
const tenGod_1 = require("../utils/tenGod");
function analyzeTenGod(dayPillar, pillars) {
    const dayStem = dayPillar.substring(0, 1);
    return {
        year: (0, tenGod_1.getTenGod)(dayStem, pillars[0].substring(0, 1)),
        month: (0, tenGod_1.getTenGod)(dayStem, pillars[1].substring(0, 1)),
        day: (0, tenGod_1.getTenGod)(dayStem, pillars[2].substring(0, 1)),
        hour: (0, tenGod_1.getTenGod)(dayStem, pillars[3].substring(0, 1))
    };
}
