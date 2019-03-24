import {
LogConstantsAdd
} from './LogConstants'

export function addLog(text) {

    return dispatch => {
        setTimeout(function(){
            dispatch(success(text))
        }, 1500)
    };

    function success(text) {
        return {type: LogConstantsAdd.LOG_ADD_SUCCESS, log: text}
    }

}