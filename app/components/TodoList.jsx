import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';


const {Todo} = require('Todo')

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    component

    

    render() {

        let {todos} = this.props;

        let renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id}  {...todo}/>
                );
            });
        };



        return(
            <div className="grid-container">
                <div className="grid-y small-centered ">
                    <div>TodoList</div>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300} >
                        {renderTodos()}
                    </CSSTransitionGroup>
                    
                </div>
            </div>
        );
    }
}

module.exports = {TodoList};