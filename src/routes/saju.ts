import { Router } from "express";

import { getYearGanji } from "../services/sajuService";
import { getMonthPillar } from "../services/monthService";
import { getDayPillar } from "../services/dayService";
import { getHourPillar } from "../services/hourService";

import { countFiveElements } from "../utils/fiveElementCount";
import { getYongSin, getHeeSin } from "../utils/yongsin";

import { analyzeTenGod } from "../services/tenGodService";
import { analyzeHiddenTenGod } from "../services/hiddenTenGodService";
import { analyzeTwelveStage } from "../services/twelveStageService";

import { analyzeSinsal } from "../services/sinsalService";

import { analyzeDaewoon } from "../services/daewoonService";
import { analyzeSewoon } from "../services/sewoonService";
import { analyzeMonthWoon } from "../services/monthwoonService";

import { analyzeRelations } from "../services/relationService";
import { makeSummary } from "../utils/interpretation";

import { analyzeWithAI } from "../services/aiService";


const router = Router();



router.post("/", async (req, res) => {


  const {

    year,
    month,
    day,
    hour = 0,
    minute = 0,
    gender = "",
    calendar = "solar",

    geminiKey,
    question = "전체 사주 풀이"

  } = req.body;



  if (
    year == null ||
    month == null ||
    day == null
  ) {

    return res.status(400).json({

      success:false,

      message:"year, month, day는 필수입니다."

    });

  }



  const yearPillar =
    getYearGanji(
      Number(year),
      Number(month),
      Number(day)
    );



  const monthPillar =
    getMonthPillar(
      Number(year),
      Number(month),
      Number(day)
    );



  const dayPillar =
    getDayPillar(
      Number(year),
      Number(month),
      Number(day)
    );



  const hourPillar =
    getHourPillar(
      Number(year),
      Number(month),
      Number(day),
      Number(hour)
    );



  const pillars = [

    yearPillar,
    monthPillar,
    dayPillar,
    hourPillar

  ];



  const elements =
    countFiveElements(
      pillars
    );



  const yongsin = {

    yongsin:
      getYongSin(elements),

    heesin:
      getHeeSin(elements)

  };



  const result = {


    pillars:{

      year:yearPillar,

      month:monthPillar,

      day:dayPillar,

      hour:hourPillar

    },


    elements,


    yongsin,



    tenGod:

      analyzeTenGod(
        dayPillar,
        pillars
      ),



    hiddenTenGod:

      analyzeHiddenTenGod(
        dayPillar,
        pillars
      ),



    twelveStage:

      analyzeTwelveStage(
        dayPillar,
        pillars
      ),



    sinsal:

      analyzeSinsal(
        pillars
      ),



    relations:

      analyzeRelations(
        pillars
      ),



    fortune:{


      daewoon:

        analyzeDaewoon(
          yearPillar,
          gender
        ),



      sewoon:

        analyzeSewoon([

          Number(year),

          Number(year)+1,

          Number(year)+2

        ]),



      monthwoon:

        analyzeMonthWoon(
          Number(year)
        )


    },



    summary:

      makeSummary({

        pillars:{

          day:dayPillar

        }

      })

  };



  let aiResult = null;



  if(geminiKey){


    aiResult =
      await analyzeWithAI(

        geminiKey,

        result,

        question

      );


  }



  res.json({


    success:true,


    input:{

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



export default router;