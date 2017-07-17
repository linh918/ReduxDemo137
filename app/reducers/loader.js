import * as types from "../actions/actionTypes";
const initialState = {
  data: [],
  isLoading: false,
  error: false,
  isLoaded: false
};

export default function loader(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_DATA:
      console.log("get data reducer");
      return {
        ...state,
        isLoading: true
      };
      break;
     
  
    case types.GET_DATA_SUCCESS:
      console.log("get data ok reducer");
      return {
        ...state,
        data: action.data,
        isLoading: false
      };

      break;

    case types.GET_DATA_FAILURE:
      console.log("get data fail reducer");
      return {
        ...state,
        error: true,
        isLoading: false
      };
      break;
    
    // case types.REMOVE_DATA: {
    //   console.log("remove data reducer");
    //   return {
    //     ...state
    //   }
    // }

    // case types.REMOVE_DATA_SUCCESS: {
    //   console.log("remove data success reducer");
    //   return {
    //     ...state
    //   }
    // }

    // case types.REMOVE_DATA_FAILURE: {
    //   console.log("remove data failure reducer");
    //   return {
    //     ...state,
    //     error: true
    //   }
    // }

    default:
      return state;
  }
}
