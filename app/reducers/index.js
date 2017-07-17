import loader from './loader';
import adder from './adder'
import {combineReducers} from 'redux';
const rootReducer= combineReducers({
  loader,
  adder
});

export default rootReducer;

