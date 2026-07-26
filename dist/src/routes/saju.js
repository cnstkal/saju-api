"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sajuService_1 = require("../services/sajuService");
const monthService_1 = require("../services/monthService");
const dayService_1 = require("../services/dayService");
const hourService_1 = require("../services/hourService");
const fiveElementCount_1 = require("../utils/fiveElementCount");
const yongsin_1 = require("../utils/yongsin");
const tenGodService_1 = require("../services/tenGodService");
const hiddenTenGodService_1 = require("../services/hiddenTenGodService");
const twelveStageService_1 = require("../services/twelveStageService");
const sinsalService_1 = require("../services/sinsalService");
const daewoonService_1 = require("../services/daewoonService");
const sewoonService_1 = require("../services/sewoonService");
const monthwoonService_1 = require("../services/monthwoonService");
const relationService_1 = require("../services/relationService");
const interpretation_1 = require("../utils/interpretation");
const aiService_1 = require("../services/aiService");
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    const { year, month, day, hour = 0, minute = 0, gender = "", calendar = "solar", geminiKey, question = "전체 사주 풀이" } = req.body;
    if (year == null ||
        month == null ||
        day == null) {
        return res.status(400).json({
            success: false,
            message: "year, month, day는 필수입니다."
        });
    }
    const yearPillar = (0, sajuService_1.getYearGanji)(Number(year), Number(month), Number(day));
    const monthPillar = (0, monthService_1.getMonthPillar)(Number(year), Number(month), Number(day));
    const dayPillar = (0, dayService_1.getDayPillar)(Number(year), Number(month), Number(day));
    const hourPillar = (0, hourService_1.getHourPillar)(Number(year), Number(month), Number(day), Number(hour));
    const pillars = [
        yearPillar,
        monthPillar,
        dayPillar,
        hourPillar
    ];
    const elements = (0, fiveElementCount_1.countFiveElements)(pillars);
    const yongsin = {
        yongsin: (0, yongsin_1.getYongSin)(elements),
        heesin: (0, yongsin_1.getHeeSin)(elements)
    };
    const result = {
        pillars: {
            year: yearPillar,
            month: monthPillar,
            day: dayPillar,
            hour: hourPillar
        },
        elements,
        yongsin,
        tenGod: (0, tenGodService_1.analyzeTenGod)(dayPillar, pillars),
        hiddenTenGod: (0, hiddenTenGodService_1.analyzeHiddenTenGod)(dayPillar, pillars),
        twelveStage: (0, twelveStageService_1.analyzeTwelveStage)(dayPillar, pillars),
        sinsal: (0, sinsalService_1.analyzeSinsal)(pillars),
        relations: (0, relationService_1.analyzeRelations)(pillars),
        fortune: {
            daewoon: (0, daewoonService_1.analyzeDaewoon)(yearPillar, gender),
            sewoon: (0, sewoonService_1.analyzeSewoon)([
                Number(year),
                Number(year) + 1,
                Number(year) + 2
            ]),
            monthwoon: (0, monthwoonService_1.analyzeMonthWoon)(Number(year))
        },
        summary: (0, interpretation_1.makeSummary)({
            pillars: {
                day: dayPillar
            }
        })
    };
    let aiResult = null;
    if (geminiKey) {
        aiResult =
            await (0, aiService_1.analyzeWithAI)(geminiKey, result, question);
    }
    res.json({
        success: true,
        input: {
            year,
            month,
            day,
            hour,
            minute,
            gender,
            calendar,
            question
        },
        result,
        aiResult
    });
});
exports.default = router;
