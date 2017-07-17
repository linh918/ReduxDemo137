import loader from './loader';
import adder from './adder';
import remover from './remover'
import {combineReducers} from 'redux';
const rootReducer= combineReducers({
  loader,
  adder,
  remover
});

export default rootReducer;

