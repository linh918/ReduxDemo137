import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {View} from 'react-native';
import Adder from '../components/adder';
import Loader from "../components/loader";
import * as loaderActions from '../actions/loadActions';

import * as adderActions from '../actions/addActions';
import {connect} from 'react-redux';

import { getPersonList, createPerson, initPersonDatabase } from '../database/Person';

class UserContainer extends Component{
  constructor(props){
    super(props);

  }

  render(){
    const {appData,addData,loadActions,addActions}=this.props;
    return (
      <View style={{flex:1}} >
     <Adder  
          {...addActions}
     />
      <Loader 
          appData={appData}
          addData={addData}
          {...loadActions}
        />
       
       </View>
    );
  }
}
function mapStateToProps(state){
  console.log("mapStateTopProps");
  return{
    appData:state.loader,
    addData:state.adder,
  };
}

function mapDispatchToProps(dispatch){
  console.log("mapDispatchToProps");
  return {
   loadActions:bindActionCreators(loaderActions,dispatch),
   
   addActions:bindActionCreators(adderActions,dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(UserContainer);

