import { ADD_PLACE } from '../actions/placesActions';

const initialState = {
  searchHistory: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.place],
      };
    default:
      return state;
  }
}

export default placesReducer;
