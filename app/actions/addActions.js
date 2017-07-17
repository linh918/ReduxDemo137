import * as types from './actionTypes';
import getPhim from '../api/phim';
import { getPersonList, createPerson, initPersonDatabase } from '../database/Person';

export function addData() {
  console.log("add data action");
  console.log("--------------");
  return {
    type: types.ADD_DATA,
  }
}

export function addDataSuccess() {
  console.log("add data ok action");
  return {
    type: types.ADD_DATA_SUCCESS,
  }
}

export function addDataFailure() {
  console.log("add data fail action");
  return {
    type: types.ADD_DATA_FAILURE,
  }
}


export function add(_name) {
  console.log("add  action");
  let error = false;
  return (dispatch) => {
    dispatch(addData())
    try {
      createPerson(_name)
      dispatch(addDataSuccess())
    } catch (error) {
      dispatch(addDataFailure())
    }

  }
}

