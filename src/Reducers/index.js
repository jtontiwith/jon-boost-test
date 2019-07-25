import * as actions from '../Actions';

const initialState = {
  userSearchInput: null,
  searchHistory: [],
  photos: []
}

export const appReducer = (state=initialState, action) => {
  if (action.type === actions.API_RESULT) {
    return Object.assign({}, state, {
      userSearchInput: action.searchText,
      photos: action.photos,
      searchHistory: [...state.searchHistory, action.searchText] 
    })
  }
  return state;
};