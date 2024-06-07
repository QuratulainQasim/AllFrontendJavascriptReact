// store.js
import { combineReducers, createStore } from 'redux';
import counterReducer from '../redux/reducers/reducer1';
// import counterReducer from './counterReducer';
// import anotherReducer from './anotherReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add another reducer if needed
});

const store = createStore(rootReducer);

export default store;
