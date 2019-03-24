import React from 'react';
import {PropTypes} from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as Actions from "./LogActions";

class Logs extends React.Component {

    render(){

        return (
            <aside className='width-lg-30'>
                <div className="height-total margin-left-20 margin-right-20 padding-top-20 padding-bottom-20 border-simple">
                    <ul>
                        <li>Logs 1</li>
                        <li>Logs 1</li>
                        <li>Logs 1</li>
                        <li>Logs 1</li>
                        <li>Logs 1</li>
                    </ul>
                </div>
            </aside>
        );

    }


}

function mapStateToProps(state,ownProps){

    console.log(state);

    return {
        todos:[],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logs);