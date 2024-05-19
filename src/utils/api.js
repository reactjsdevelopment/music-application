import axios from 'axios';
import { setAuthHeader, setGeniusAuthHeader } from './functions';

/**
 * return full name of the user
 * @param   {string} firstName  First Name of the User
 * @param   {string} lastName   Last Name of the User
 * @return  {string}            Fullname of the user
 */
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

