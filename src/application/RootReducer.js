import { combineReducers } from 'redux';
import {
    ReducerActions
} from '../domain/components/todolist/TodoReducer'
import {LogReducer} from '../domain/components/logs/LogReducer';

const rootReducer = combineReducers({
    ReducerActions,
    LogReducer
});

export default rootReducer;
