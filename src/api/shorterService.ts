import { IshortURL, IstatisticsResponse } from "../interfaces/IshortURL";
import { SortType } from "../interfaces/types";

const baseUrl = 'https://front-test.hex.team/api/';
const token = localStorage.getItem('token');

export const getStatistics = async (order: SortType[], offset: number, limit: number): Promise<IstatisticsResponse | undefined> => {
  const filters = order.map(item => 'order=' + item).join('&');
  try {
    const res = await fetch(`${baseUrl}statistics?${filters}&offset=${offset}&limit=${limit}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Authorization': token as string,
      }
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail[0].msg);
    }
    const totalCountHeader = res.headers.get('x-total-count');
    const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;

    const data: IshortURL[] = await res.json();
    return { data, totalCount };
  } catch (error) {
    alert((error as Error).message);
  }
}

export const squeeze = async (url: string): Promise< IshortURL | undefined> => {
  try {
    const res = await fetch(`${baseUrl}squeeze?link=${url}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Authorization': token as string,
      }
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.detail[0].msg);
    }
    return await res.json();
  } catch (error) {
    alert((error as Error).message);
  }
}