import {
  SET_PLAYLIST,
  ADD_PLAYLIST, 
} from '../utils/constants';
import { get } from '../utils/api';
import {
  setArtists, addArtists
} from './artistActions';



export const setPlayList = (playlists) => ({
  type: SET_PLAYLIST,
  playlists
});

export const addPlaylist = (playlists) => ({
  type: ADD_PLAYLIST,
  playlists
});



export const initiateGetResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://shazam.p.rapidapi.com/search?term=${encodeURIComponent(
        searchTerm
      )}&locale=en-US&offset=0&limit=5`;
      const result = await get(API_URL);
      const { artists, tracks } = result;
      dispatch(setPlayList(tracks))
      return dispatch(setArtists(artists));
    } catch (error) {
      console.log('error', error);
    }
  };
};


export const initiateLoadMorePlaylist = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);

      return dispatch(addPlaylist(result.tracks));
    } catch (error) {
      console.log('error', error);
    }
  };
};
