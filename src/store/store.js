import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import artistsReducer from '../reducers/artists';
import playlistReducer from '../reducers/playlist';
import suggestionReducer from '../reducers/suggestion';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    artists: artistsReducer,
    playlist: playlistReducer,
    suggestions: suggestionReducer

  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
