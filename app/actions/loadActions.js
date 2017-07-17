import * as types from './actionTypes';
import getPhim from '../api/phim';
import { getPersonList, createPerson, initPersonDatabase } from '../database/Person';

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
  console.log("get fetch data action");
  let error = false;
  return (dispatch) => {
    dispatch(getData())
    console.log("after call getdata");
    let data = getPersonList();
    if (data.length > 0) {
      dispatch(getDataSuccess(data));
    } else {
      dispatch(getDataFailure());
    }
  }
}

