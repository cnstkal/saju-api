"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHiddenTenGod = getHiddenTenGod;
const tenGod_1 = require("./tenGod");
const hiddenStems_1 = require("./hiddenStems");
function getHiddenTenGod(dayStem, branch) {
    const hidden = hiddenStems_1.HIDDEN_STEMS[branch] ?? [];
    return hidden.map(stem => ({
        stem,
        tenGod: (0, tenGod_1.getTenGod)(dayStem, stem)
    }));
}
