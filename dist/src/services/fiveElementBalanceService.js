"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeFiveElement = analyzeFiveElement;
const fiveElementBalance_1 = require("../utils/fiveElementBalance");
function analyzeFiveElement(count) {
    return (0, fiveElementBalance_1.getElementBalance)(count);
}
