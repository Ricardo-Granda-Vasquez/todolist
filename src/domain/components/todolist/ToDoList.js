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
        return date.toUTCString();
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

    markTodo(todo){

        let elementToMark = document.getElementById('todo-' + todo.id);
        elementToMark.classList.toggle('hidden');

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
            <article className='width-lg-80'>
                <div className="height-total margin-left-20 margin-right-20 padding-top-20 padding-bottom-20 padding-right-20 border-simple">
                    <h2 className="margin-left-20">Todo List </h2>
                    <ul className="no-style-list padding-left-10">
                        {todos.map(todo => (
                            <li className="todo-list-element padding-top-10 padding-bottom-10 margin-top-10 border-simple"  key={todo.id}>
                                <div class="line hidden margin-left-20" id={'todo-' + todo.id}></div>
                                <input type="checkbox" className="margin-left-10" onChange={() => this.markTodo(todo)}/>
                                <span className="todo-text padding-left-10"> {todo.title} </span>
                                    <button className="button-custom" onClick={() => this.deleteTodo(todo)}>X</button>
                            </li>
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