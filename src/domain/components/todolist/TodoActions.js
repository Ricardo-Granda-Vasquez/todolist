import {
    todoConstantsAdd,
    todoConstantsDelete
} from './TodoConstants'

export function addTodo(text) {

    return dispatch => {
        dispatch(request({text}));

        setTimeout(function(){
            dispatch(success(text))
        }, 1000)
    };

    function request(text) {
        return {type: todoConstantsAdd.TODO_ADD_REQUEST, todo:text}
    }

    function success(text) {
        return {type: todoConstantsAdd.TODO_ADD_SUCCESS, todo: text}
    }

}

export function deleteTodo(id) {

    return dispatch => {
        dispatch(request({id}));

        setTimeout(function(){
            dispatch(success(id))
        }, 1000)
    };

    function request(id) {
        return {type: todoConstantsDelete.TODO_DELETE_REQUEST, id}
    }

    function success(id) {
        return {type: todoConstantsDelete.TODO_DELETE_SUCCESS, id}
    }
}