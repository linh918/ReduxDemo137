import React, {Component} from 'react';

import { Provider } from 'react-redux';


import UserContainer from './userContainer';

import { getPersonList, createPerson, initPersonDatabase } from '../database/Person';
import configureStore from '../store/configureStore';
  let store= configureStore();

export default class App extends Component {
  render(){
   
    return (
      <Provider store={store}>
        
        <UserContainer />
      </Provider>
    );
  }
}