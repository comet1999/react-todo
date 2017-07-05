const React = require('react');
// import React from 'react';

const {TodoList} = require('TodoList');


class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                id: 1,
                text: 'Walk Alana'
            },{
                id:2,
                text:'Daily word review'
            }, {
                id:3,
                text:'Sell vegetables'
            }]
        }
        
    }

    render() {
        const {todos} = this.state;
        return (
            <div>
                <h2>TodoApp</h2>
                <TodoList todos={todos} />
            </div>
        );
    };
    
}

module.exports = {TodoApp};