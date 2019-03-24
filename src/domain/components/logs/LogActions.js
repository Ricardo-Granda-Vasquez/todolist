import {
LogConstantsAdd
} from './LogConstants'

export function addLog(text) {

    console.log(text);

    return dispatch => {

         dispatch(success(text));
    };

    function request(text) {
        return {type: LogConstantsAdd.LOG_ADD_REQUEST, log:text}
    }

    function success(text) {
        return {type: LogConstantsAdd.LOG_ADD_SUCCESS, log: text}
    }

}