"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFinalResult = createFinalResult;
function createFinalResult(data) {
    return {
        ...data,
        generatedAt: new Date().toISOString()
    };
}
