import React from 'react';

const {Todo} = require('Todo')

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    

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
                    {renderTodos()}
                </div>
            </div>
        );
    }
}

module.exports = {TodoList};