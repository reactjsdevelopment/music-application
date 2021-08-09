import {
     SET_SUGGESTION, ADD_SUGGESTION,
  } from '../utils/constants';
  import { get } from '../utils/api';

export const setSuggestion = (songLists) => ({
    type: SET_SUGGESTION,
    songLists
  });
  
  export const addSuggestion = (songLists) => ({
    type: ADD_SUGGESTION,
    songLists
  });

  export const initiateSuggestion = (searchTerm) => {
    return async (dispatch) => {
      try {
        const API_URL = `https://shazam.p.rapidapi.com/auto-complete?term=${encodeURIComponent(
          searchTerm
        )}&locale=en-US`;
        const result = await get(API_URL);
  
        const { hints } = result;
        return dispatch(setSuggestion(hints));
      } catch (error) {
        console.log('error', error);
      }
    };
  };