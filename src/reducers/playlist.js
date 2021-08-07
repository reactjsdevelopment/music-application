import { SET_PLAYLIST, ADD_PLAYLIST } from '../utils/constants';

const playlistReducer = (state = {}, action) => {
  const { playlists } = action;
  
  switch (action.type) {
    case SET_PLAYLIST:
      return playlists;
    case ADD_PLAYLIST:
      return {
        ...state,
        next: playlists.hits,
        items: [...state.hits, ...playlists.hits]
      };
    default:
      return state;
  }
};

export default playlistReducer;
