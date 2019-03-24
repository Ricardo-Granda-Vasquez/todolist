import {
    todoConstantsAdd,
    todoConstantsDelete
} from './TodoConstants'

const initialState = {
    isLoading:true,
    todos : []
};

let counter = 1;

export function ReducerActions(state = initialState, action) {
    switch (action.type) {
        case todoConstantsAdd.TODO_ADD_REQUEST:
            return {...state};
            break;
        case todoConstantsAdd.TODO_ADD_SUCCESS:

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
        case todoConstantsAdd.TODO_ADD_FAILURE:
            return {
                isLoading: false,
                todos:[]
            };
            break;
        case todoConstantsDelete.TODO_DELETE_REQUEST:
            return {
                ...state
            };
            break;
        case todoConstantsDelete.TODO_DELETE_SUCCESS:
            console.log(state);
            console.log(state.todos.filter(item => item.id !== action.id));

            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.id)
            };
            break;
        case todoConstantsDelete.TODO_DELETE_FAILURE:
            return state;
            break;
        default:
            return state
            break;

    }
}