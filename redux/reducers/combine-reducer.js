import { combineReducers } from 'redux';
import clickReducer from './click-reducer';
import moviesReducer from './movies-reducer';

export default combineReducers({
  clickState: clickReducer,
  moviesState: moviesReducer,
});
