export interface IshortURL {
  counter: number
  id: number
  short: string
  target: string
}

export interface IstatisticsResponse {
  data: IshortURL[];
  totalCount: number;
}