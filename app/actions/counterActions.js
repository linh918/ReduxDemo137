import * as types from './actionTypes';

export function increment(){
    console.log("call increment function in action");
    return {
        
        type: types.INCREMENT
    };
}

export function decrement(){
      console.log("call decrement function in action");
    return {
        type: types.DECREMENT
    };
    
}