import React, { Component } from 'react';
import {AsyncStorage} from 'react-native'
import { Provider } from 'react-redux';
import UserContainer from './userContainer';
import { getPersonList, createPerson, initPersonDatabase } from '../database/Person';
import configureStore from '../store/configureStore';
let store = configureStore();

export default class App extends Component {

  checkFirstRun = async () => {
    try {
      var v = await AsyncStorage.getItem("@AAA:key");
      if (v == null) {
        await AsyncStorage.setItem("@AAA:key", "already");
        //everything run once here
        initPersonDatabase();
        console.log('first run')
      }
    } catch (error) {
      console.log(error)
    }
  }


  componentWillMount() {
    this.checkFirstRun();
  }

  render() {

    return (
      <Provider store={store}>
        <UserContainer />
      </Provider>
    );
  }
}