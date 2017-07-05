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
            <div>
                <div>TodoList</div>
                {renderTodos()}
            </div>
        );
    }
}

module.exports = {TodoList};