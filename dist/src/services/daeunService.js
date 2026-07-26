"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDaeun = createDaeun;
const daeun_1 = require("../utils/daeun");
function createDaeun(startAge, ganji) {
    const ages = (0, daeun_1.getDaeunAge)(startAge);
    return ages.map((age, index) => ({
        age,
        ganji: ganji[index] ?? ""
    }));
}
