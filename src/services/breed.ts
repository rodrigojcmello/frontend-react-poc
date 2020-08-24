import request from '../utils/request';
import { BreedResponse } from '../routes/Fetch/BreedList/types';

export function listAll(): Promise<BreedResponse> {
  return request<BreedResponse>('https://dog.ceo/api/breeds/list/all');
}

export function post(): string {
  return 'string';
}
