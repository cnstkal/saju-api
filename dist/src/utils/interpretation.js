"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSummary = makeSummary;
function makeSummary(data) {
    const day = data.pillars.day;
    return {
        title: "사주 종합 분석",
        summary: `${day} 일간을 기준으로 오행, 십성, 운의 흐름을 분석합니다.`
    };
}
