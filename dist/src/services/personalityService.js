"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzePersonality = analyzePersonality;
const personality_1 = require("../utils/personality");
function analyzePersonality(yongsin) {
    return {
        personality: (0, personality_1.getPersonality)(yongsin)
    };
}
