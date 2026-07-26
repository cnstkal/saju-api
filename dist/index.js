"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const saju_1 = __importDefault(require("./src/routes/saju"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/saju", saju_1.default);
app.get("/", (req, res) => {
    res.send("사주 API 서버가 실행 중입니다!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`사주 API 서버가 실행 중입니다! PORT: ${PORT}`);
});
