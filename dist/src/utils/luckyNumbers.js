"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLuckyNumbers = getLuckyNumbers;
const NUMBERS = {
    목: [3, 4, 13, 14, 23, 24, 33, 34, 43, 44],
    화: [2, 7, 12, 17, 22, 27, 32, 37, 42, 47],
    토: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    금: [6, 9, 16, 19, 26, 29, 36, 39, 46, 49],
    수: [1, 8, 11, 18, 21, 28, 31, 38, 41, 48]
};
function getLuckyNumbers(element) {
    return NUMBERS[element] ?? [];
}
