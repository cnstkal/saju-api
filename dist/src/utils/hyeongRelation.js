"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HYEONG = void 0;
exports.checkHyeong = checkHyeong;
exports.HYEONG = [
    ["인", "사", "신"],
    ["축", "술", "미"],
    ["자", "묘"]
];
function checkHyeong(branches) {
    for (const group of exports.HYEONG) {
        if (group.every(b => branches.includes(b))) {
            return group.join("") + " 형";
        }
    }
    return "";
}
