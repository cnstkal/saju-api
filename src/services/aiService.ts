import { GoogleGenerativeAI } from "@google/generative-ai";


export async function analyzeWithAI(

  apiKey: string,

  sajuData: any,

  question: string = "전체 사주 풀이"

) {


  const genAI =
    new GoogleGenerativeAI(apiKey);


  const model =
    genAI.getGenerativeModel({

      model: "gemini-2.5-flash"

    });



  const prompt = `

너는 전통 명리학 상담가다.

아래 사주 데이터를 기반으로
부드러운 상담 형식으로 설명해줘.

조건:
- 단정적인 표현 금지
- 일반인이 이해하기 쉽게 설명
- 좋은 점과 주의점을 함께 제시
- 명리 용어는 풀어서 설명

사주 데이터:

${JSON.stringify(sajuData, null, 2)}


질문:

${question}

`;



  const result =
    await model.generateContent(prompt);


  return result.response.text();

}