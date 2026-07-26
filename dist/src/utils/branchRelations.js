"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBranch = getBranch;
exports.getStem = getStem;
function getBranch(pillar) {
    return pillar.substring(1);
}
function getStem(pillar) {
    return pillar.substring(0, 1);
}
