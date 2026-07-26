"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBeforeIpchun = isBeforeIpchun;
function isBeforeIpchun(year, month, day) {
    const ipchunDay = getIpchunDay(year);
    if (month < 2)
        return true;
    if (month > 2)
        return false;
    return day < ipchunDay;
}
function getIpchunDay(year) {
    // 임시값
    // 다음 단계에서 천문 계산으로 교체
    return 4;
}
