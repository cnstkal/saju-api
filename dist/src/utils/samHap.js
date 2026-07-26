"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMHAP = void 0;
exports.checkSamHap = checkSamHap;
exports.SAMHAP = [
    ["신", "자", "진"],
    ["해", "묘", "미"],
    ["인", "오", "술"],
    ["사", "유", "축"]
];
function checkSamHap(branches) {
    for (const group of exports.SAMHAP) {
        if (group.every(b => branches.includes(b))) {
            return group.join("") + " 삼합";
        }
    }
    return "";
}
