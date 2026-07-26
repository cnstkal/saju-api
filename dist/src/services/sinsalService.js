"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeSinsal = analyzeSinsal;
const sinsal_1 = require("../utils/sinsal");
function analyzeSinsal(pillars) {
    return pillars.map(pillar => {
        const branch = pillar.substring(1, 2);
        return {
            pillar,
            sinsal: (0, sinsal_1.getSinsal)(branch)
        };
    });
}
