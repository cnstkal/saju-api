"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayMasterStrength = getDayMasterStrength;
function getDayMasterStrength(score) {
    if (score >= 9) {
        return "신강";
    }
    if (score >= 6) {
        return "중화";
    }
    return "신약";
}
