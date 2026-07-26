"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeStrength = analyzeStrength;
const strength_1 = require("../utils/strength");
function analyzeStrength(count) {
    const score = count.목 +
        count.화 +
        count.토 +
        count.금 +
        count.수;
    return {
        score,
        result: (0, strength_1.getDayMasterStrength)(score)
    };
}
