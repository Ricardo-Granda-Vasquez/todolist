import React from 'react';
import {PropTypes} from 'prop-types';

class TodoInput extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            inputValue:''
        }

        this.addTodo = this.addTodo.bind(this);
        this.setValue = this.setValue.bind(this);

    }

    setValue(object) {
        let value = object.target.value;

        this.setState({
            inputValue:value
        })
    }

    addTodo() {

        let value = this.state.inputValue;

        if(value !=='') {
            return this.props.addTodo(value);
        }

        return alert("you need to fill the input");

    }

    render() {

        return (
            <div className='margin-left-20 input-positioning-absolute margin-bottom-20'>
                <input type="text" className="todo-list-input" onChange={this.setValue} placeholder="ToDo PlaceHolder"/>
                <button className="add-todo padding-left-20" onClick={this.addTodo}>+</button>
            </div>
        );

    }


}

export default TodoInput;