import * as types from './actionTypes';
import getPhim from '../api/phim';
import { getPersonList, createPerson, initPersonDatabase } from '../model/Person';
export function getData(){
 
  console.log("get data action");
  return {
    type: types.FETCHING_DATA,
    

  }
}

export function getDataSuccess(data){
   console.log("get data ok action");
 
  return {
    type: types.FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure(){
   console.log("get data fail action");
  return {
    type: types.FETCHING_DATA_FAILURE
  }
}


export function fetchData(){
 console.log("get fetch data action");
 let error=false;
  return(dispatch)=>{
    dispatch(getData())
    console.log("after call getdata");
   let data= getPersonList();
    if(data.length>0){
      dispatch(getDataSuccess(data));
    }else{
      dispatch(getDataFailure());
    }
  }
}

// export function fetchData(){
//  console.log("get fetch data action");
//  let error=false;
//   return(dispatch)=>{
//     dispatch(getData())
//     console.log("after call getdata");
//     getPhim()
//      .then(([response,json])=>{
//        dispatch(getDataSuccess(json))
//      })
//       .catch((err)=>{
//         console.log(err);
//        dispatch(getDataFailure())
//       })
    
//   }
// }
