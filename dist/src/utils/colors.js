"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELEMENT_COLOR = void 0;
exports.getLuckyColor = getLuckyColor;
exports.ELEMENT_COLOR = {
    목: "green",
    화: "red",
    토: "yellow",
    금: "white",
    수: "black"
};
function getLuckyColor(element) {
    return exports.ELEMENT_COLOR[element] ?? "";
}
