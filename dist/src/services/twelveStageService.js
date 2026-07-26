"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeTwelveStage = analyzeTwelveStage;
const twelveStageTable_1 = require("../utils/twelveStageTable");
const BRANCH_INDEX = {
    자: 0,
    축: 1,
    인: 2,
    묘: 3,
    진: 4,
    사: 5,
    오: 6,
    미: 7,
    신: 8,
    유: 9,
    술: 10,
    해: 11
};
function analyzeTwelveStage(dayPillar, pillars) {
    const dayStem = dayPillar.substring(0, 1);
    return pillars.map(pillar => {
        const branch = pillar.substring(1, 2);
        return {
            pillar,
            stage: twelveStageTable_1.TWELVE_STAGE_TABLE[dayStem]
                ? twelveStageTable_1.TWELVE_STAGE_TABLE[dayStem][BRANCH_INDEX[branch]]
                : ""
        };
    });
}
