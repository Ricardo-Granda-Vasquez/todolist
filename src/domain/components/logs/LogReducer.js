import {
    LogConstantsAdd,
} from './LogConstants'

const initialState = {
    isLoading:true,
    logs : []
};

export function LogReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case LogConstantsAdd.LOG_ADD_REQUEST:
            return {...state};
            break;
        case LogConstantsAdd.LOG_ADD_SUCCESS:

            let newTodo ={
                id:counter,
                title:action.todo
            };

            counter++;

            return {
                ...state,
                todos: [...state.todos, newTodo]
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