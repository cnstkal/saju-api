"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeHiddenTenGod = analyzeHiddenTenGod;
const hiddenTenGod_1 = require("../utils/hiddenTenGod");
function analyzeHiddenTenGod(dayPillar, pillars) {
    const dayStem = dayPillar.substring(0, 1);
    return pillars.map(pillar => {
        const branch = pillar.substring(1, 2);
        return {
            pillar,
            hidden: (0, hiddenTenGod_1.getHiddenTenGod)(dayStem, branch)
        };
    });
}
