"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeDaewoon = analyzeDaewoon;
const daewoon_1 = require("../utils/daewoon");
function analyzeDaewoon(yearPillar, gender) {
    const yearStem = yearPillar.substring(0, 1);
    const direction = (0, daewoon_1.getDaewoonDirection)(yearStem, gender);
    return (0, daewoon_1.createDaewoon)(10, yearPillar, direction);
}
