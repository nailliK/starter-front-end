import { combineReducers } from 'redux';
import foo from './foo';

// combine all of our reducers into one
const rootReducer = combineReducers({
  foo
});

export default rootReducer;