import React, { useState } from 'react';

import {
  initiateGetResult,
  
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists, initiateSuggestion
} from '../actions/result';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
import Header from './Header';
import Loader from './Loader';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('tracks');
  const [selectedSuggestions, setSelectedSuggestions] = useState('hints');
  const [searchItem, setSearchItem] = useState('');



  const handleSearch = (searchTerm) => {
      setSearchItem(searchTerm);
      setIsLoading(true);
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setIsLoading(false);
        setSelectedCategory('tracks');
      });
  };

  const handleSuggestion = (searchTerm) => {
    // setIsLoading(true);
    props.dispatch(initiateSuggestion(searchTerm)).then(() => {
      // setIsLoading(false);
      setSelectedSuggestions('hints');
    });
};

  const loadMore = async (type) => {
    
      const { dispatch, albums, artists, playlist } = props;
      setIsLoading(true);
      const API_URL = `https://shazam.p.rapidapi.com/search?term=${encodeURIComponent(
        searchItem
      )}&locale=en-US&offset=1&limit=5`;
      switch (type) {
        case 'artists':
          await dispatch(initiateLoadMoreArtists(API_URL));
          break;
        case 'playlist':
          await dispatch(initiateLoadMorePlaylist(API_URL));
          break;
        default:
      }
      setIsLoading(false);
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const {  artists, playlist, suggestions } = props;
  const result = {  artists, playlist, suggestions };

  return (
    <React.Fragment>
      {(
        <div>
          <Header />
          <SearchForm handleSearch={handleSearch} handleSuggestion={handleSuggestion} result={result}/>
          <Loader show={isLoading}>Loading...</Loader>
          <SearchResult
            result={result}
            loadMore={loadMore}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
         
          />
        </div>
      ) }
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {

  return {
    albums: state.albums,
    artists: state.artists,
    playlist: state.playlist,
    suggestions: state.suggestions

  };
};

export default connect(mapStateToProps)(Dashboard);
