import axios from 'axios';
import { setAuthHeader, setGeniusAuthHeader } from './functions';

export const get = async (url, params) => {
  setAuthHeader();
  const result = await axios.get(url, params);
  return result.data;
};

export const getGeniusApi = async (url, params) => {
  setGeniusAuthHeader();
  const result = await axios.get(url, params);
  return result.data;
};

