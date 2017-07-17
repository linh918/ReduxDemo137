import * as types from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  isLoaded: false
};


export default function remover(state = initialState, action = {}) {
    switch (action.type) {
        case types.REMOVE_DATA: {
            console.log("remove data reducer");
            return {
                ...state
            }
        }

        case types.REMOVE_DATA_SUCCESS: {
            console.log("remove data success reducer");
            return {
                ...state
            }
        }

        case types.REMOVE_DATA_FAILURE: {
            console.log("remove data failure reducer");
            return {
                ...state,
                error: true
            }
        }

        default:
            return state;
    }
}
