import React, {Component} from 'react';

import { Provider } from 'react-redux';


import LoaderDataApp from './loaderDataApp';

import configureStore from '../store/configureStore';
  let store= configureStore();

export default class LoadApp extends Component {
  render(){
    return (
      <Provider store={store}>
        <LoaderDataApp />
      </Provider>
    );
  }
}