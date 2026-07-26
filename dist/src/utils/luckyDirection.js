"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLuckyDirection = getLuckyDirection;
const DIRECTION = {
    목: "동",
    화: "남",
    토: "중앙",
    금: "서",
    수: "북"
};
function getLuckyDirection(element) {
    return DIRECTION[element] ?? "";
}
