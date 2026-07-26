"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeHealth = analyzeHealth;
const health_1 = require("../utils/health");
function analyzeHealth(yongsin) {
    return {
        organs: (0, health_1.getHealthParts)(yongsin)
    };
}
