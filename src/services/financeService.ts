import { getFinance } from "../utils/finance";

export function analyzeFinance(
  yongsin: string
) {

  return {
    finance: getFinance(yongsin)
  };

}