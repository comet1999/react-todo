const React = require('react');
// import React from 'react';

const {TodoList} = require('TodoList');
const {AddTodo}  = require('AddTodo');


class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                id: 1,
                text: 'Walk the beautiful dog'
            },{
                id:2,
                text:'Daily word review'
            }, {
                id:3,
                text:'Sell vegetables'
            }]
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        
    }

    handleAddTodo(text) {
        console.log(`Add todo: ${text}`);
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-app">
                <h2>Lista latinoamericana de pendientes</h2>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    };
    
}

module.exports = {TodoApp};