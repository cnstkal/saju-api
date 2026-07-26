"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUNISHMENT = void 0;
exports.hasPunishment = hasPunishment;
exports.PUNISHMENT = [
    ["인", "사", "신"],
    ["축", "술", "미"],
    ["자", "묘"]
];
function hasPunishment(branches) {
    return exports.PUNISHMENT.some(group => group.every(b => branches.includes(b)));
}
