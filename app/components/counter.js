import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default class Counter extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    const { counter, multi, devide } = this.props;
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress ={multi}style={styles.button} >
          <Text>Up</Text>
        </TouchableOpacity>
        <Text style={{margin:16}} >{counter}</Text>
        <TouchableOpacity onPress ={devide}style={styles.button} >
          <Text>Down</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
  ,button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
})