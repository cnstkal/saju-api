"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealthParts = getHealthParts;
const HEALTH = {
    목: ["간", "담", "근육", "눈"],
    화: ["심장", "혈관", "혈액순환"],
    토: ["위", "비장", "소화기관"],
    금: ["폐", "기관지", "피부"],
    수: ["신장", "방광", "허리"]
};
function getHealthParts(element) {
    return HEALTH[element] ?? [];
}
