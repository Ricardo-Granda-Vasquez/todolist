import {
LogConstantsAdd
} from './LogConstants'

export function addLog(text) {

    console.log(text);

    return dispatch => {
         dispatch(success(text));
    };

    function success(text) {
        return {type: LogConstantsAdd.LOG_ADD_SUCCESS, log: text}
    }

}