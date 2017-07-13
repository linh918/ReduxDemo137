import * as types from '../actions/actionTypes';
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function loader(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCHING_DATA:
    console.log("fetching data reducer");
      return {
        ...state,
        data: [],
        isFetching: true
      }
      break;
    case types.FETCHING_DATA_SUCCESS:
    
    console.log("fetching data ok reducer");
      return {
        ...state,
        data: action.data,
        isFetching: false
      }
    
       break;
      
      case types.FETCHING_DATA_FAILURE:
    
      console.log("fetching data fail reducer");
      return {
        ...state,
        error: true,
        isFetching: false
      }
       break;
     default:
      return state
  }
}