"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementBalance = getElementBalance;
function getElementBalance(count) {
    return {
        부족: Object.entries(count)
            .sort((a, b) => a[1] - b[1])[0][0],
        과다: Object.entries(count)
            .sort((a, b) => b[1] - a[1])[0][0]
    };
}
