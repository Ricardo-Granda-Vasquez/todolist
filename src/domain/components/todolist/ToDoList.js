import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import TodoInput from "./TodoInput";
import * as Actions from "./TodoActions"
import {bindActionCreators} from 'redux';

class TodoList extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            todos:[]
        }


        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }


    addTodo(text) {

        this.props.actions.addTodo(text);

    }

    deleteTodo(id) {

        //logic of add

    }


    componentDidMount(){
        this.setState({
            todos:this.props.todos
        })
    }

    componentWillReceiveProps(props){

        console.log(props);

        if(props !== this.state){
            this.setState({
                 todos:props.todos
            })
        }

    }


    render(){


        const {todos} = this.props;

        console.log(todos);

        return (
            <article className='width-lg-70'>
                <div className="height-total margin-left-20 margin-right-20 padding-top-20 padding-bottom-20 border-simple">
                    <ul>
                        {todos.map(todo => (
                           <li className="station" key={todo.id}>{todo.title} <button>X</button></li>
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
        todos:state.addTodo.todos,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);