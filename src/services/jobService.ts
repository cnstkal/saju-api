import { getRecommendedJobs } from "../utils/jobs";

export function analyzeJob(
  yongsin: string
) {

  return {
    jobs: getRecommendedJobs(yongsin)
  };

}