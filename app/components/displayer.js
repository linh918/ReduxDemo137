import React, { Component } from 'react';
import { StyleSheet,ListView, View, Text, TouchableOpacity } from 'react-native';
import { getPersonList, createPerson, initPersonDatabase } from '../model/Person';


export default class Displayer extends Component {
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
 _loadData(){
   
   let data=getPersonList();
   return (
      <ListView
          dataSource={this.state.dataSource.cloneWithRows(data)}
          renderRow={this._renderRow.bind(this)}
          />
   )
  

 }
  render() {
    const { appData, getData } = this.props;
    return (
      <View style={styles.container} >

        <Text>ListView</Text>
          {
              appData.error && <Text >Error </Text>
          }
           {
             appData.isLoaded? (
                this._loadData()
             ):null
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