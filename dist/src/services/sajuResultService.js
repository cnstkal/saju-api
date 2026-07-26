"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSajuResult = createSajuResult;
const yearService_1 = require("./yearService");
const monthService_1 = require("./monthService");
const dayService_1 = require("./dayService");
const hourService_1 = require("./hourService");
function createSajuResult(year, month, day, hour) {
    return {
        pillar: {
            year: (0, yearService_1.getYearPillar)(year, month, day),
            month: (0, monthService_1.getMonthPillar)(year, month, day),
            day: (0, dayService_1.getDayPillar)(year, month, day),
            hour: (0, hourService_1.getHourPillar)(year, month, day, hour)
        }
    };
}
