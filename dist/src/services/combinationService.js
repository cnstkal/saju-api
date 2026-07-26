"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelation = getRelation;
const combinations_1 = require("../utils/combinations");
function getRelation(branch1, branch2) {
    if (combinations_1.SIX_COMBINATION[branch1] === branch2) {
        return "육합";
    }
    if (combinations_1.SIX_CLASH[branch1] === branch2) {
        return "충";
    }
    return "";
}
