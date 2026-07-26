"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHiddenStems = getHiddenStems;
const hiddenStems_1 = require("../utils/hiddenStems");
function getHiddenStems(pillar) {
    const branch = pillar.substring(1, 2);
    return hiddenStems_1.HIDDEN_STEMS[branch] ?? [];
}
