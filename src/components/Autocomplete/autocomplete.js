
import React from 'react';
import _ from 'lodash';
import "./autocomplete.css";
import PropTypes from "prop-types";

let SuggestionsListComponent = ({ ...props}) => {
  

    let suggestions;
    if (!_.isEmpty(props.props.result.suggestions)) {
      suggestions =  props.props.result.suggestions;
    }
 






  if ((suggestions && suggestions.length)) {
    SuggestionsListComponent = (
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => {
          let className;



          return (
            <li className={className} key={suggestion.term}>
              {suggestion.term}
            </li>
          );
        })}
      </ul>
    );
  } else {
    SuggestionsListComponent = (
      <div className="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  }

return SuggestionsListComponent;

    }

    SuggestionsListComponent.propTypes = {
      suggestions: PropTypes.array
    };
export default SuggestionsListComponent;