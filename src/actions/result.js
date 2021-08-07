import {
  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
  SET_PLAYLIST,
  ADD_PLAYLIST, SET_SUGGESTION, ADD_SUGGESTION,
} from '../utils/constants';
import { get } from '../utils/api';

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums
});

export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums
});

export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
});

export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  artists
});

export const setPlayList = (playlists) => ({
  type: SET_PLAYLIST,
  playlists
});

export const addPlaylist = (playlists) => ({
  type: ADD_PLAYLIST,
  playlists
});

export const setSuggestion = (songLists) => ({
  type: SET_SUGGESTION,
  songLists
});

export const addSuggestion = (songLists) => ({
  type: ADD_SUGGESTION,
  songLists
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



export const initiateLoadMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addArtists(result.artists));
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
