import apisauce from 'apisauce';
import { Environment, Strings } from '../constants';
import { ResponseType } from './Types';

export const apiConfig = apisauce.create({
  baseURL: Environment.BASEURL,
  timeout: 2000,
});

export const getListData = (endpoit: string) =>
  apiConfig.get(`${endpoit}&api_key=${Environment.API_KEY}`);

export function getError(response: ResponseType) {
  if (response?.problem === 'NETWORK_ERROR') {
    return Strings.internetConnection;
  }
  return Strings.somethingWrong;
}
