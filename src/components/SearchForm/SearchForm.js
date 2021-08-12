import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import SuggestionsListComponent from '../Autocomplete/autocomplete';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);



  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    setShowSuggestions(true)
    props.handleSuggestion(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      setShowSuggestions(false)
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };

  return (
    <div>
      
    

      <Form onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter search term</Form.Label>
          <Form.Control
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Search for album, artist or playlist"
            onChange={handleInputChange}
            autoComplete="off"
          />
            {showSuggestions && <SuggestionsListComponent props={props}/>}
        </Form.Group>
        <Button variant="info" type="submit">
          Search
        </Button>
      </Form>



    </div>
  );
};
SearchForm.propTypes = {
  handleInputChange: PropTypes.func,
  handleSearch:PropTypes.func
};

export default SearchForm;
