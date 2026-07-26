"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAEUN_STEPS = void 0;
exports.getDaeunAge = getDaeunAge;
exports.DAEUN_STEPS = [
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100
];
function getDaeunAge(startAge) {
    return exports.DAEUN_STEPS.map(age => age + startAge - 10);
}
