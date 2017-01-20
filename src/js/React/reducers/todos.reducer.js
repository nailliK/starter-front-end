import {
  SET_LOADING
} from '../actions/types';

const paginationLimit = 40;

const INITIAL_STATE = {
  isLoading: 0
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {

    // set loading state
    case SET_LOADING: {
      let isLoading = state.isLoading;
      action.payload === 'INCREMENT' ? isLoading++ : isLoading--;
      return Object.assign({}, state, {
        isLoading: isLoading
      });
    }
    
    default:
      return state;
    }
}