import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import TodoInput from "./TodoInput";
import * as Actions from "./TodoActions"
import * as LogActions from "../logs/LogActions";
import {bindActionCreators} from 'redux';



class TodoList extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            todos:[]
        }

        this.addTodo = this.addTodo.bind(this);
    }


    getLogDate(){
        let date = new Date();
        return date.toString();
    }

    addTodo(text) {

        this.props.actions.addTodo(text);
        let dateString = this.getLogDate();
        let textLog = dateString + ' - ' + text + ' was created';
        this.props.logActions.addLog(textLog);

    }

    deleteTodo(todo) {

        this.props.actions.deleteTodo(todo.id);
        let dateString = this.getLogDate();
        let textLog = dateString + ' - ' + todo.title + ' was deleted';
        this.props.logActions.addLog(textLog);

    }

    componentDidMount(){
        this.setState({
            todos:this.props.todos
        })
    }

    componentWillReceiveProps(props){
       this.setState({
           todos:props.todos
       })
    }

    render(){

        const {todos} = this.state;
        return (
            <article className='width-lg-70'>
                <div className="height-total margin-left-20 margin-right-20 padding-top-20 padding-bottom-20 border-simple">
                    <ul>
                        {todos.map(todo => (
                           <li className="station" key={todo.id}>{todo.title} <button onClick={() => this.deleteTodo(todo)}>X</button></li>
                        ))}
                    </ul>
                    <TodoInput addTodo={this.addTodo}/>
                </div>
            </article>
        );

    }


}

function mapStateToProps(state,ownProps){
    return {
        todos:state.ReducerActions.todos,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch),
        logActions:bindActionCreators(LogActions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);