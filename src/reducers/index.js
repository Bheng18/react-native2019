// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
// import counterReducer from './counterReducer';
import usersReducers from './usersReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
//   counter: counterReducer,
  usersReducer: usersReducers,
});
// Exports
export default rootReducer;