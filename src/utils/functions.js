import axios from 'axios';

export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
};

export const setAuthHeader = () => {
  try {
    axios.defaults.headers.common[
      'X-RapidAPI-Key'
    ] = `cbb5b0130dmsh1b81b5fae335c3ap18099fjsn74cc5d7826e0`;
    axios.defaults.headers.common[
      'x-rapidapi-host'
    ] = `shazam.p.rapidapi.com`;
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

export const setGeniusAuthHeader = () => {
  try {
    axios.defaults.headers.common[
      'X-RapidAPI-Key'
    ] = `cbb5b0130dmsh1b81b5fae335c3ap18099fjsn74cc5d7826e0`;
    axios.defaults.headers.common[
      'x-rapidapi-host'
    ] = `genius.p.rapidapi.com`;
  } catch (error) {
    console.log('Error setting auth', error);
  }
};
