"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCycleIndex = getCycleIndex;
function getCycleIndex(year) {
    return (year - 4) % 60;
}
