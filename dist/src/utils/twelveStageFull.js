"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTwelveStage = getTwelveStage;
const STAGES = {
    갑: [
        "장생",
        "목욕",
        "관대",
        "건록",
        "제왕",
        "쇠",
        "병",
        "사",
        "묘",
        "절",
        "태",
        "양"
    ],
    을: [
        "사",
        "묘",
        "절",
        "태",
        "양",
        "장생",
        "목욕",
        "관대",
        "건록",
        "제왕",
        "쇠",
        "병"
    ]
};
function getTwelveStage(stem, branchIndex) {
    return (STAGES[stem]?.[branchIndex]
        ??
            "");
}
