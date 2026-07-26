"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPillarElement = getPillarElement;
const fiveElements_1 = require("../utils/fiveElements");
function getPillarElement(pillar) {
    const stem = pillar.substring(0, 1);
    const branch = pillar.substring(1, 2);
    return {
        stem: fiveElements_1.STEM_ELEMENT[stem],
        branch: fiveElements_1.BRANCH_ELEMENT[branch]
    };
}
