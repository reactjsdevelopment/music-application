import React, { useState } from 'react';

import {
  initiateGetResult,
  
  initiateLoadMorePlaylist,
} from '../../actions/playListAction';
import {
  initiateLoadMoreArtists,
} from '../../actions/artistActions';
import {
 initiateSuggestion
} from '../../actions/suggestionAction';
import { connect } from 'react-redux';
import SearchResult from '../SearchResult/SearchResult';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import ReactGA from 'react-ga';
ReactGA.initialize('G-20BKV0X36F'); //Unique Google Analytics tracking number

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('playlist');
  const [selectedSuggestions, setSelectedSuggestions] = useState('hints');
  const [searchItem, setSearchItem] = useState('');
  const [count, setCount] = useState(1);




  const handleSearch = (searchTerm) => {
      setSearchItem(searchTerm);
      setIsLoading(true);
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setIsLoading(false);
        setSelectedCategory('playlist');
      });
  };

  const handleSuggestion = (searchTerm) => {
    props.dispatch(initiateSuggestion(searchTerm)).then(() => {
      setSelectedSuggestions('hints');
    });
};

  const incrementCount = () => {
    setCount(count + 1)
  }

  const loadMore = async (type) => {
      incrementCount()
      const { dispatch } = props;
      setIsLoading(true);
      const API_URL = `https://shazam.p.rapidapi.com/search?term=${encodeURIComponent(
        searchItem
      )}&locale=en-US&offset=${count}&limit=5`;
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

  function fireTracking() {
    ReactGA.pageview(window.location.hash);
}

function handleClick() {
  ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Link',
  });
}
<Router onUpdate={fireTracking} history={hashHistory}>
    ...
</Router>

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
               <a onClick={()=>{this.handleClick()}}>Link</a>
        </div>
      ) }
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {

  return {
    artists: state.artists,
    playlist: state.playlist,
    suggestions: state.suggestions

  };
};

export default connect(mapStateToProps)(Dashboard);
