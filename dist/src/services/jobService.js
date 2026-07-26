"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeJob = analyzeJob;
const jobs_1 = require("../utils/jobs");
function analyzeJob(yongsin) {
    return {
        jobs: (0, jobs_1.getRecommendedJobs)(yongsin)
    };
}
