import * as types from './actionTypes';
import getPhim from '../api/phim';
import { getPersonList, createPerson, deletePerson } from '../database/Person';

export function getData() {

  console.log("get data action");
  return {
    type: types.GET_DATA,


  }
}

export function getDataSuccess(data) {
  console.log("get data ok action");

  return {
    type: types.GET_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  console.log("get data fail action");
  return {
    type: types.GET_DATA_FAILURE,
  }
}


export function loadData() {
  console.log("load data action");
  let error = false;
  return (dispatch) => {
    dispatch(getData())
    console.log("after call getdata");
    let data = getPersonList();
    if (data.length >= 0) {
      dispatch(getDataSuccess(data));
    } else {
      dispatch(getDataFailure());
    }
  }
}

// export function removeData() {
//   console.log("remove data");
//   return {
//     type: types.REMOVE_DATA
//   }
// }

// export function removeDataSuccess() {
//   console.log("remove data success");
//   return {
//     type: types.REMOVE_DATA_SUCCESS
//   }
// }

// export function removeDataFailure() {
//   console.log("remove data failure");
//   return {
//     type: types.REMOVE_DATA_FAILURE
//   }
// }

// export function remove(obj) {
//   console.log("remove  action");
//   let error = false;
//   return (dispatch) => {
//     dispatch(removeData())
//     try {
//       deletePerson(obj);
//       dispatch(removeDataSuccess())
//     } catch (error) {
//       console.log(error)
//       dispatch(removeDataFailure())
//     }

//   }
// }