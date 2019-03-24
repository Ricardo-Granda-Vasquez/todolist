import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import TodoInput from "./TodoInput";
import * as Actions from "./TodoActions"
import {addLog} from "../logs/LogActions";
import {bindActionCreators} from 'redux';

class TodoList extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            todos:[]
        }

        this.addTodo = this.addTodo.bind(this);
    }


    addTodo(text) {
        this.props.actions.addTodo(text);

        let date = new Date();
        let dateString = date.toString();

        let textLog = dateString + ' ' + text + ' was created';
        addLog(textLog);

    }

    deleteTodo(id) {
        console.log(id);

        this.props.actions.deleteTodo(id);

    }


    componentDidMount(){
        this.setState({
            todos:this.props.todos
        })
    }

    componentWillReceiveProps(props){
        console.log(props);
       this.setState({
           todos:props.todos
       })
    }

    render(){

        const {todos} = this.state;

        console.log(todos);
        let that = this;
        return (
            <article className='width-lg-70'>
                <div className="height-total margin-left-20 margin-right-20 padding-top-20 padding-bottom-20 border-simple">
                    <ul>
                        {todos.map(todo => (
                           <li className="station" key={todo.id}>{todo.title} <button onClick={() => this.deleteTodo(todo.id)}>X</button></li>
                        ))}
                    </ul>
                    <TodoInput addTodo={this.addTodo}/>
                </div>
            </article>
        );

    }


}

function mapStateToProps(state,ownProps){

    console.log(state);

    return {
        todos:state.ReducerActions.todos,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);