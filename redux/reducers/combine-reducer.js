import { combineReducers } from 'redux';
import clickReducer from './click-reducer';
import moviesReducer from './movies-reducer';
import genresReducer from './genre-reducer';

export default combineReducers({
  clickState: clickReducer,
  moviesState: moviesReducer,
  genresState: genresReducer,
});
