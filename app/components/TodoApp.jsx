const React = require('react');
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
                id: 1,
                text: 'Walk the beautiful dog'
            },{
                id:2,
                text:'Daily word review'
            }, {
                id:3,
                text:'Sell vegetables'
            }],
            showCompleted: false,
            searchText: ''
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch  = this.handleSearch.bind(this);
        
    }

    handleAddTodo(text) {
        console.log(`Add todo: ${text}`);
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
                <h2 className="title-r">Lista latinoamericana de pendientes</h2>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
                <Board />
            </div>
        );
    };
    
}

module.exports = {TodoApp};