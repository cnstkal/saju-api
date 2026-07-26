"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeSewoon = analyzeSewoon;
const sewoon_1 = require("../utils/sewoon");
function analyzeSewoon(years) {
    return years.map(year => {
        return (0, sewoon_1.getSewoon)(year);
    });
}
