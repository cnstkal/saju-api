"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRelations = getAllRelations;
const branchRelations_1 = require("../utils/branchRelations");
const combinationService_1 = require("./combinationService");
function getAllRelations(pillars) {
    const result = [];
    for (let i = 0; i < pillars.length; i++) {
        for (let j = i + 1; j < pillars.length; j++) {
            const type = (0, combinationService_1.getRelation)((0, branchRelations_1.getBranch)(pillars[i]), (0, branchRelations_1.getBranch)(pillars[j]));
            if (type) {
                result.push(`${i}-${j}:${type}`);
            }
        }
    }
    return result;
}
