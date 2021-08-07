
import React from 'react';


let SuggestionsListComponent = ({ props}) => {

    // const {showSuggestions, userInput, filteredSuggestions, activeSuggestion}
    // return <p>dscsd</p>
        // <div>
{/* let suggestionsListComponent; */}
const filteredSuggestions = props.result.suggestions;
const userInput = 'k';
const showSuggestions = true;
const activeSuggestion = 0;
if (showSuggestions && userInput) {
  if (filteredSuggestions.length) {
    SuggestionsListComponent = (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;

          // Flag the active suggestion with a class
          if (index === activeSuggestion) {
            className = "suggestion-active";
          }

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
}
return SuggestionsListComponent;
        //  </div>

    }

export default SuggestionsListComponent;