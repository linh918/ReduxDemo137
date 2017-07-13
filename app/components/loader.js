import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default class Loader extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { appData, fetchData } = this.props;
    return (
      <View style={styles.container} >

        <Text style={{ margin: 16 }} >Load data example</Text>
        <TouchableOpacity onPress={fetchData} style={styles.button} >
          <Text>LoadData</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          
          {
              appData.error && <Text >Error </Text>
          }
          {
            appData.data.length ? (
              appData.data.map((phim, i) => {
                return (
                  <View key={i} >
                    <Text>{phim.TieuDe}</Text>
                  </View>
                )
              })
            ) : null
          }
        </View>

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
  , button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
})