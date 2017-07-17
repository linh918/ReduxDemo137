
import {
  createStore,
  applyMiddleware
  , combineReducers

} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';


export default configureStore = () => {
  let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  let store = createStoreWithMiddleware(rootReducer);
  return store;
}