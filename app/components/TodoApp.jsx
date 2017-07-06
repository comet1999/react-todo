const React = require('react');
const uuid  = require('node-uuid');
// import React from 'react';

const {TodoList} = require('TodoList');
const {AddTodo}  = require('AddTodo');
const {TodoSearch} = require('TodoSearch');
const {Board} = require('Board');

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                id: uuid(),
                text: 'Walk the beautiful dog',
                completed: false
            },{
                id:uuid(),
                text:'Daily word review',
                completed: true
            }, {
                id:uuid(),
                text:'Sell vegetables',
                completed: true
            }],
            showCompleted: false,
            searchText: ''
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch  = this.handleSearch.bind(this);
        
    }

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid(),
                    text:text,
                    completed: false
                }
            ]
        });
    }

    handleSearch(showCompleted, searchText) {
        console.log(`${searchText}, ${showCompleted}`);

        searchText = searchText.toLowerCase();
        this.setState({
            showCompleted,
            searchText
        });

    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-app">
                <div className="title-r small-center">lista de peticiones a nuestro próximo presidente</div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
                <Board />
            </div>
        );
    };
    
}

module.exports = {TodoApp};