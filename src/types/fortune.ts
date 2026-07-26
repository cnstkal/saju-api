export interface DaewoonResult {

  age: number;

  ganji: string;

}


export interface SewoonResult {

  year: number;

  ganji: string;

}


export interface MonthWoonResult {

  year: number;

  month: number;

  label: string;

}


export interface FortuneResult {

  daewoon: DaewoonResult[];

  sewoon: SewoonResult[];

  monthwoon: MonthWoonResult[];

}