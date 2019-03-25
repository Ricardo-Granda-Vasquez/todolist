import React from 'react';
import {PropTypes} from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as Actions from "./LogActions";

class Logs extends React.Component {

    render(){

        const {logs} = this.props;

        return (
            <aside className='width-lg-20'>
                <div className="height-total margin-left-20 margin-right-20 padding-top-20 padding-bottom-20 padding-right-20 border-simple">
                    <h2 className="margin-left-20">Log List </h2>
                    <ul>
                        {logs.map(todo => (
                            <li className="station" key={todo.id}>{todo.log}</li>
                        ))}
                    </ul>
                </div>
            </aside>
        );

    }


}

function mapStateToProps(state,ownProps){
    return {
        logs:state.LogReducer.logs,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logs);