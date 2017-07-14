import React, { Component } from 'react';
import { StyleSheet,ListView, View, Text, TouchableOpacity } from 'react-native';
import { getPersonList, createPerson, initPersonDatabase } from '../model/Person';


export default class Loader extends Component {
  constructor(props) {
    super(props);
   

  
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
    };
  }

 _renderRow(dataSource) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{dataSource.name}</Text>
        <Text style={styles.title}>{dataSource.phone}</Text>
      </View>

    );
  }
 
 
  render() {
    const { appData, fetchData } = this.props;
    return (
      <View style={styles.container} >

        <Text style={{ margin: 16 }} >Load data example</Text>
        <TouchableOpacity onPress={fetchData} style={styles.button} >
          <Text>LoadData</Text>
        </TouchableOpacity>
        {appData.isFetching&&<Text>Loading..</Text>}
         {appData.data.length?(
            <ListView
          dataSource={this.state.dataSource.cloneWithRows(appData.data)}
          renderRow={this._renderRow.bind(this)}
          />
         )
            :null
         }
       

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