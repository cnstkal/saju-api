"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTwelveLifeStage = getTwelveLifeStage;
const twelveLifeStage_1 = require("../utils/twelveLifeStage");
function getTwelveLifeStage(dayStem, pillar) {
    const branch = pillar.substring(1);
    return (twelveLifeStage_1.TWELVE_LIFE_STAGE[dayStem]?.[branch] ??
        "");
}
