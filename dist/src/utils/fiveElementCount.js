"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countFiveElements = countFiveElements;
const fiveElements_1 = require("./fiveElements");
function countFiveElements(pillars) {
    const result = {
        목: 0,
        화: 0,
        토: 0,
        금: 0,
        수: 0
    };
    for (const pillar of pillars) {
        const stem = pillar.substring(0, 1);
        const branch = pillar.substring(1, 2);
        const stemElement = fiveElements_1.STEM_ELEMENT[stem];
        const branchElement = fiveElements_1.BRANCH_ELEMENT[branch];
        if (stemElement) {
            result[stemElement]++;
        }
        if (branchElement) {
            result[branchElement]++;
        }
    }
    return result;
}
