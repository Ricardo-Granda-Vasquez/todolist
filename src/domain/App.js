import React from 'react';
import {PropTypes} from 'prop-types';
import Header from "../domain/components/header/Header";
import TodoList from "../domain/components/todolist/ToDoList";
import Logs from "../domain/components/logs/Logs";
import Footer from "../domain/components/footer/Footer";

class App extends React.Component {

    render() {

        return (
            <section className='content'>
                <Header/>
                <section className="main">
                    <TodoList/>
                    <Logs/>
                </section>
                <Footer/>
            </section>
        );

    }

}

export default App;
