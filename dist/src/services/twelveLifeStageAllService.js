"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLifeStage = getLifeStage;
const twelveLifeStageTable_1 = require("../utils/twelveLifeStageTable");
const branchIndex_1 = require("../utils/branchIndex");
function getLifeStage(dayStem, pillar) {
    const branch = pillar.substring(1);
    return twelveLifeStageTable_1.TWELVE_STAGE_TABLE[dayStem][branchIndex_1.BRANCH_INDEX[branch]];
}
