import {createStore, applyMiddleware} from 'redux';
import rootReducer from './RootReducer';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    )
}
