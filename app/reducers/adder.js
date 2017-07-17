import * as types from "../actions/actionTypes";
const initialState = {

  isAdding:false,
  isAdded:false,
  error:false,

};

export default function adder(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_DATA:
      console.log("add data reducer");
      return {
        ...state,
        isAdding: true
      };
      break;
     
  
    case types.ADD_DATA_SUCCESS:
      console.log("add data ok reducer");
      return {
        ...state,
        isAdded: true,
        isAdding:false,
      };

      break;

    case types.ADD_DATA_FAILURE:
      console.log("add data fail reducer");
      return {
        ...state,
        error: true,
        isAdding: false
      };
      break;

    default:
      return state;
  }
}
