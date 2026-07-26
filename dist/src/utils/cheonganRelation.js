"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeCheongan = analyzeCheongan;
const HAP = {
    갑: "기",
    을: "경",
    병: "신",
    정: "임",
    무: "계",
    기: "갑",
    경: "을",
    신: "병",
    임: "정",
    계: "무"
};
const CHUNG = {
    갑: "경",
    을: "신",
    병: "임",
    정: "계",
    무: "기",
    경: "갑",
    신: "을",
    임: "병",
    계: "정",
    기: "무"
};
function analyzeCheongan(stems) {
    const result = [];
    for (let i = 0; i < stems.length; i++) {
        for (let j = i + 1; j < stems.length; j++) {
            if (HAP[stems[i]] === stems[j]) {
                result.push(`${stems[i]}${stems[j]} 천간합`);
            }
            if (CHUNG[stems[i]] === stems[j]) {
                result.push(`${stems[i]}${stems[j]} 천간충`);
            }
        }
    }
    return result;
}
