import * as types from '../actions/actionTypes';
const initialState = {
  data: [],
  isLoading: false,
  error: false,
  isLoaded:false,
}

export default function loader(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_DATA:
    console.log("fetching data reducer");
      return {
        ...state,
        isLoading:true,
      }
      break;
    case types.ACTION_SUCCESS:
    
    console.log("fetching data ok reducer");
      return {
        ...state,
        data: action.data,
        isLoading: false
      }
    
       break;
      
      case types.ACTION_FAILURE:
    
      console.log("fetching data fail reducer");
      return {
        ...state,
        error: true,
        isLoading: false
      }
       break;
     default:
      return state
  }
}