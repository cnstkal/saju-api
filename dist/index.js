"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const saju_1 = __importDefault(require("./src/routes/saju"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/saju", saju_1.default);
app.post("/saju-test", (req, res) => {
    res.json({
        ok: true,
        message: "post works"
    });
});
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
