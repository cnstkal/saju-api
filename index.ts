import express from "express";
import sajuRouter from "./src/routes/saju";

const app = express();

app.use(express.json());

app.use("/saju", sajuRouter);

app.get("/", (req, res) => {
  res.send("사주 API 서버가 실행 중입니다!");
});

app.listen(3000, () => {
  console.log("사주 API 서버가 실행 중입니다!");
});