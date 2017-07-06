const React = require('react');
const uuid  = require('node-uuid');
// import React from 'react';

const {TodoList} = require('TodoList');
const {AddTodo}  = require('AddTodo');
const {TodoSearch} = require('TodoSearch');
const TodoAPI = require('TodoAPI');

const {Board} = require('Board');
const {Tabs} = require('Tabs')
const {Pane} = require('Pane')


class TodoApp extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = {
            todos: TodoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch  = this.handleSearch.bind(this);
        this.handleToggle  = this.handleToggle.bind(this);
        
    }

    componentDidMount() {
        // let placeholderTodos = [{
        //         id: uuid(),
        //         text: 'Walk the beautiful dog',
        //         completed: false
        //     },{
        //         id:uuid(),
        //         text:'Daily word review',
        //         completed: true
        //     }, {
        //         id:uuid(),
        //         text:'Sell vegetables',
        //         completed: true
        //     }];
        
        // TodoAPI.setTodos(placeholderTodos);
    }

    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    }


    handleToggle(id) {
        console.log(id);

        let updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
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
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
                <Board />


                <Tabs >
                    <Pane label="Tab 1">
                        <div>Tab 1 contents</div>
                    </Pane>
                    <Pane label="Tab 2">
                        <div>Tab 2 contents</div>
                    </Pane>
                    <Pane label="Tab 3">
                        <div>Tab 3 contents</div>
                    </Pane>
                </Tabs>


                {/*<Tabs>
                    <Tab title="A First Tab">
                        A First Tab CONTENTS
                    </Tab>
                    <Tab title="A Second Tab">
                        A Second Tab CONTENTS
                    </Tab>
                </Tabs>*/}


            </div>
        );
    };
    
}

module.exports = {TodoApp};