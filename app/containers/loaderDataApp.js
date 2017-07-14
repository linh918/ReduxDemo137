import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {View} from 'react-native';

import Loader from "../components/loader";
import Displayer from "../components/displayer";
import * as loaderActions from '../actions/loadActions';
import {connect} from 'react-redux';
import {fetchData} from '../actions/loadActions';

class LoaderDataApp extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {appData,actions}=this.props;
    return (
      <View style={{flex:1}} >
      <Loader
        appData={appData}
        {...actions}
       />
       
       </View>
    );
  }
}
function mapStateToProps(state){
  console.log("mapStateTopProps");
  return{
    appData:state.loader,
  };
}

function mapDispatchToProps(dispatch){
  console.log("mapDispatchToProps");
  return {
   actions:bindActionCreators(loaderActions,dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(LoaderDataApp);

