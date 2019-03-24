import {
    todoConstantsAdd,
    todoConstantsDelete
} from './TodoConstants'

const initialState = {
    isLoading:true,
    todos : []
};

let counter = 1;

export function addTodo(state = initialState, action) {
    switch (action.type) {
        case todoConstantsAdd.TODO_ADD_REQUEST:

            return {
                isLoading: true,
                todos: initialState.todos,
            };
        case todoConstantsAdd.TODO_ADD_SUCCESS:

            console.log(action);

            let newTodo ={
                id:counter,
                title:action.todo
            };

            counter++;

            return {
                ...state,
                todos: [...initialState.todos, newTodo]
            };


        case todoConstantsAdd.TODO_ADD_FAILURE:
            return {
                isLoading: false,
                todos:[]
            };
        default:
            return state
    }
}

export function deleteTodo(state = initialState, action) {
    switch (action.type) {
        case todoConstantsDelete.TODO_DELETE_REQUEST:
            return {
                isLoading:true,
                todoList:{}
            };
        case todoConstantsDelete.TODO_DELETE_SUCCESS:
            return {
                isLoading: false,
                todoList: action.todoResponse,
            };
        case todoConstantsDelete.TODO_DELETE_FAILURE:
            return state;
        default:
            return state
    }
}