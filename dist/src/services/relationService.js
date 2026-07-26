"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeRelations = analyzeRelations;
const cheonganRelation_1 = require("../utils/cheonganRelation");
const jijiRelation_1 = require("../utils/jijiRelation");
function analyzeRelations(pillars) {
    const stems = pillars.map(p => p.substring(0, 1));
    const branches = pillars.map(p => p.substring(1, 2));
    return {
        cheongan: (0, cheonganRelation_1.analyzeCheongan)(stems),
        jiji: (0, jijiRelation_1.analyzeJiji)(branches)
    };
}
