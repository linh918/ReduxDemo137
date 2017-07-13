import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from "../components/counter";
import * as counterActions from '../actions/counterActions';
import * as otherActions from '../actions/otherActions';
import {connect} from 'react-redux';
class CounterApp extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {state,actions}=this.props;
    return (
      <Counter
        counter={state.count}
        {...actions}
       />
    );
  }
}
function mapStateToProps(state){
  console.log("mapStateTopProps");
  return{
    state:state.counter
  };
}

function mapDispatchToProps(dispatch){
  console.log("mapDispatchToProps");
  return {
     actions:bindActionCreators(otherActions,dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(CounterApp);

