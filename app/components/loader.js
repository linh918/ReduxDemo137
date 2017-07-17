import React, { Component } from 'react';
import { StyleSheet,ListView, View,Image,Dimensions, Text, TouchableOpacity } from 'react-native';
import ic_user from '../media/icon/ic_user.png';

export default class Loader extends Component {
  constructor(props) {
    super(props);
   

  
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
    };
  }

 _renderRow(dataSource) {
    return (
      <View style={styles.rowContainter}>
        <Image source={ic_user} style={styles.imageUser} />
        <Text style={styles.textUserName}>{dataSource.name}</Text>
        
      </View>

    );
  }
 
 
  render() {
    const { appData, loadData } = this.props;
    return (
      <View style={styles.container} >

        
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



  componentDidMount(){
  
     this.props.loadData();
  }
}
const {width}=Dimensions.get('window'); 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    margin:6,
   
    

  }
  ,
  rowContainter:{
    flex:1,
    width:width*0.8,
    flexDirection:'row',
    padding:10,
    borderRadius: 8,
    borderWidth: 1,
    margin:6,
    borderColor: '#d6d7da',

  },
  textUserName:{
    fontSize:16,
   
    

  },
  imageUser:{
    width:20,
    height:20,
    resizeMode:'cover',
    
  }
  

})