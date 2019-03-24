import { combineReducers } from 'redux';
import {
    addTodo,
    deleteTodo
} from '../domain/components/todolist/TodoReducer'


const rootReducer = combineReducers({
    addTodo,
    deleteTodo
});

export default rootReducer;
