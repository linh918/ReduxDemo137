import * as types from './actionTypes';

export function multi(){
    console.log("call multi function in action");
    return {
        
        type: types.MULTI
    };
}

export function devide(){
      console.log("call devide function in action");
    return {
        type: types.DEVIDE
    };
    
}