"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeFortune = analyzeFortune;
const daewoonService_1 = require("./daewoonService");
const sewoonService_1 = require("./sewoonService");
const monthwoonService_1 = require("./monthwoonService");
function analyzeFortune(yearPillar, gender, year) {
    return {
        daewoon: (0, daewoonService_1.analyzeDaewoon)(yearPillar, gender),
        sewoon: (0, sewoonService_1.analyzeSewoon)([
            year,
            year + 1,
            year + 2
        ]),
        monthwoon: (0, monthwoonService_1.analyzeMonthWoon)(year)
    };
}
