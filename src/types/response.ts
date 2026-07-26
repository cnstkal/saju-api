import { SajuResult } from "./pillar";

export interface ApiResponse {

  success: boolean;

  input: unknown;

  result: SajuResult;

}