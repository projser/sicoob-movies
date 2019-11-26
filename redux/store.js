import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers/combine-reducer';

export default createStore(Reducers, applyMiddleware(thunk));
