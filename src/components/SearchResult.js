import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import ArtistsList from './ArtistsList';
import PlayList from './PlayList';

const SearchResult = (props) => {

  const {
    isValidSession,
    loadMore,
    result,
    setCategory,
    selectedCategory
  } = props;
  const {  artists, playlist } = result;

let newCategory = '';
if (selectedCategory == 'tracks') {
  newCategory = 'playlist';
}
  return (
    <React.Fragment>
      <div className="search-buttons">
        {!_.isEmpty(artists.hits) && (
          <button
            className={`${
              selectedCategory === 'tracks' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('tracks')}
          >
            Artists
          </button>
        )}
        {!_.isEmpty(playlist.hits) && (
          <button
            className={`${
              selectedCategory === 'playlist' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('playlist')}
          >
            PlayLists
          </button>
        )}
      </div>
      <div className={`${selectedCategory === 'playlist' ? '' : 'hide'}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>
      <div className={`${selectedCategory === 'tracks' ? '' : 'hide'}`}>
        {playlist && <PlayList playlist={playlist} />}
      </div>
      {!_.isEmpty(result[newCategory]) &&
        !_.isEmpty(result[newCategory]) && (
          <div className="load-more" onClick={() => loadMore(newCategory)}>
            <Button variant="info" type="button">
              Load More
            </Button>
          </div>
        )}
    </React.Fragment>
  );
};

export default SearchResult;
