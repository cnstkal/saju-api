"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.THREE_HARMONY = void 0;
exports.isThreeHarmony = isThreeHarmony;
exports.THREE_HARMONY = [
    ["신", "자", "진"],
    ["해", "묘", "미"],
    ["인", "오", "술"],
    ["사", "유", "축"]
];
function isThreeHarmony(branches) {
    return exports.THREE_HARMONY.some(group => group.every(b => branches.includes(b)));
}
