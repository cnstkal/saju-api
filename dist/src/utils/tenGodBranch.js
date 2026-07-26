"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBranchTenGod = getBranchTenGod;
const tenGod_1 = require("./tenGod");
function getBranchTenGod(dayStem, branchHidden) {
    return branchHidden.map(stem => ({
        stem,
        tenGod: (0, tenGod_1.getTenGod)(dayStem, stem)
    }));
}
