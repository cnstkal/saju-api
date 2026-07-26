"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLuckyPlants = analyzeLuckyPlants;
const luckyPlants_1 = require("../utils/luckyPlants");
function analyzeLuckyPlants(yongsin) {
    return {
        plants: (0, luckyPlants_1.getLuckyPlants)(yongsin)
    };
}
