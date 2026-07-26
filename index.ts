import express from "express";
import cors from "cors";
import sajuRouter from "./src/routes/saju";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/saju", sajuRouter);

app.get("/", (req, res) => {
  res.send("사주 API 서버가 실행 중입니다!");
});

app.get("/test", (req, res) => {
  res.json({
    ok: true,
    message: "test route works"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`사주 API 서버가 실행 중입니다! PORT: ${PORT}`);
});