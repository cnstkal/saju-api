"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeYongSin = analyzeYongSin;
const yongsin_1 = require("../utils/yongsin");
function analyzeYongSin(count) {
    return {
        yongsin: (0, yongsin_1.getYongSin)(count),
        heesin: (0, yongsin_1.getHeeSin)(count)
    };
}
