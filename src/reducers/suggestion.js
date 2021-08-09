import { SET_SUGGESTION, ADD_SUGGESTION } from '../utils/constants';

const suggestionReducer = (state = {}, action) => {
  const { songLists } = action;
  switch (action.type) {
    case SET_SUGGESTION:
      return songLists;
    // case ADD_SUGGESTION:
    //   return {
    //     ...state,
    //     next: songLists.next,
    //     items: [...state.items, ...songLists.items]
    //   };
    default:
      return state;
  }
};

export default suggestionReducer;
