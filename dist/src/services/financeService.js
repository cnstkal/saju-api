"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeFinance = analyzeFinance;
const finance_1 = require("../utils/finance");
function analyzeFinance(yongsin) {
    return {
        finance: (0, finance_1.getFinance)(yongsin)
    };
}
