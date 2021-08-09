import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import ArtistsList from '../ArtistsList/ArtistsList';
import PlayList from '../PlayList/PlayList';

const SearchResult = (props) => {

  const {
    isValidSession,
    loadMore,
    result,
    setCategory,
    selectedCategory
  } = props;
  const {  artists, playlist } = result;

// let newCategory = '';
// if (selectedCategory == 'tracks') {
//   newCategory = 'playlist';
// }
  return (
    <React.Fragment>
      <div className="search-buttons">
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
        {!_.isEmpty(artists.hits) && (
          <button
            className={`${
              selectedCategory === 'artists' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('artists')}
          >
            Artists
          </button>
        )}

      </div>
      <div className={`${selectedCategory === 'artists' ? '' : 'hide'}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>
      <div className={`${selectedCategory === 'playlist' ? '' : 'hide'}`}>
        {playlist && <PlayList playlist={playlist} />}
      </div>
      {!_.isEmpty(result[selectedCategory]) &&
        !_.isEmpty(result[selectedCategory]) && (
          <div className="load-more" onClick={() => loadMore(selectedCategory)}>
            <Button variant="info" type="button">
              Load More
            </Button>
          </div>
        )}
    </React.Fragment>
  );
};

export default SearchResult;
