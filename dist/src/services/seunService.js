"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeun = createSeun;
const seun_1 = require("../utils/seun");
function createSeun(startYear, count = 10) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push({
            year: startYear + i,
            ganji: (0, seun_1.getYearLuck)(startYear + i)
        });
    }
    return result;
}
