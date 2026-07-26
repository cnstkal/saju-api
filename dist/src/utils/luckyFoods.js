"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLuckyFoods = getLuckyFoods;
const FOODS = {
    목: [
        "시금치",
        "브로콜리",
        "상추",
        "양배추",
        "오이",
        "키위",
        "청포도",
        "녹차",
        "나물류",
        "허브"
    ],
    화: [
        "토마토",
        "딸기",
        "체리",
        "고추",
        "파프리카",
        "홍삼",
        "닭고기",
        "계란",
        "석류",
        "자몽"
    ],
    토: [
        "감자",
        "고구마",
        "단호박",
        "현미",
        "콩",
        "두부",
        "옥수수",
        "버섯",
        "바나나",
        "밤"
    ],
    금: [
        "배",
        "무",
        "도라지",
        "양파",
        "마늘",
        "은행",
        "흰콩",
        "우유",
        "치즈",
        "요거트"
    ],
    수: [
        "검은콩",
        "흑미",
        "미역",
        "김",
        "다시마",
        "굴",
        "조개",
        "연어",
        "참치",
        "물"
    ]
};
function getLuckyFoods(element) {
    return FOODS[element] ?? [];
}
