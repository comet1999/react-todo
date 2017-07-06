const expect = require('expect');
const React  = require('react');
const ReactDOM = require('react-dom');
const $         = require('jquery');
const TestUtils = require('react-addons-test-utils');


const {TodoApp} = require('TodoApp');


describe('APP', () => {

    it('should pass tests', () => {
        expect(TodoApp).toExist();
    });

    it('should add a new todo to the state', () => {
       const newTodoText = 'Send a message to E.T.'
       const todoApp     = TestUtils.renderIntoDocument(<TodoApp/>);

       todoApp.setState({todos: []});
       todoApp.handleAddTodo(newTodoText);

       expect(todoApp.state.todos[0].text).toBe(newTodoText);

    });

       


});