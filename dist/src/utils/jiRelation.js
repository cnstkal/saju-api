"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeJiRelation = analyzeJiRelation;
const branchRelation_1 = require("./branchRelation");
const samHap_1 = require("./samHap");
const hyeongRelation_1 = require("./hyeongRelation");
function analyzeJiRelation(pillars) {
    const branches = pillars.map(p => p.substring(1, 2));
    const result = [];
    for (let i = 0; i < branches.length; i++) {
        for (let j = i + 1; j < branches.length; j++) {
            const relation = (0, branchRelation_1.getBranchRelation)(branches[i], branches[j]);
            if (relation) {
                result.push(relation);
            }
        }
    }
    const sam = (0, samHap_1.checkSamHap)(branches);
    if (sam) {
        result.push(sam);
    }
    const hyeong = (0, hyeongRelation_1.checkHyeong)(branches);
    if (hyeong) {
        result.push(hyeong);
    }
    return result;
}
