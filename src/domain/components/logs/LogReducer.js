import {
    LogConstantsAdd,
} from './LogConstants'

const initialState = {
    isLoading:true,
    logs : []
};

let counter = 1;

export function LogReducer(state = initialState, action) {
    switch (action.type) {
        case LogConstantsAdd.LOG_ADD_REQUEST:
            return {...state};
            break;
        case LogConstantsAdd.LOG_ADD_SUCCESS:

            let newLog ={
                id:counter,
                log:action.log
            };

            counter++;

            return {
                ...state,
                isLoading:false,
                logs: [...state.logs, newLog]
            };

            break;
        case LogConstantsAdd.LOG_ADD_FAILURE:
            return {
                isLoading: false,
                todos:[]
            };
            break;
        default:
            return state
            break;

    }
}