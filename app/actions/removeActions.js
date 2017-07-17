import * as types from './actionTypes';
import getPhim from '../api/phim';
import { getPersonList, createPerson, deletePerson } from '../database/Person';


export function removeData() {
  console.log("remove data");
  return {
    type: types.REMOVE_DATA
  }
}

export function removeDataSuccess() {
  console.log("remove data success");
  return {
    type: types.REMOVE_DATA_SUCCESS
  }
}

export function removeDataFailure() {
  console.log("remove data failure");
  return {
    type: types.REMOVE_DATA_FAILURE
  }
}

export function remove(obj) {
  console.log("remove  action");
  let error = false;
  return (dispatch) => {
    dispatch(removeData())
    try {
      deletePerson(obj);
      dispatch(removeDataSuccess())
    } catch (error) {
      console.log(error)
      dispatch(removeDataFailure())
    }

  }
}