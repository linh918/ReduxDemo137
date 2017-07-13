import * as types from '../actions/actionTypes';

const initialState = {
  count: 1
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      console.log("increase in reducer , count before=" + state.count);
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
    console.log("decrease  in reducer, count before=" + state.count);
      return {
        ...state,
        count: state.count - 1
      };
      case types.MULTI:
      console.log("increase in reducer , count before=" + state.count);
      return {
        ...state,
        count: state.count * 2
      };
    case types.DEVIDE:
    console.log("decrease  in reducer, count before=" + state.count);
      return {
        ...state,
        count: state.count/2
      };
    default:
      return state;
  }
}
export  function otherCounter(state = initialState, action = {}) {
  switch (action.type) {
    
    default:
      return state;
  }
}