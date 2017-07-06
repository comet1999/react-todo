const expect = require('expect');
const React  = require('react');
const ReactDOM = require('react-dom');
const $         = require('jquery');
const TestUtils = require('react-addons-test-utils');

const {TodoApp} = require('TodoApp');


describe('TODO APP', () => {

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {

        let todoText = 'test text';
        let todoApp  = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value when handleToggle called', () => {

        let todoData = {id:111, text:'test test', completed: false};

        let todoApp  = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(111);
        expect(todoApp.state.todos[0].completed).toBe(true);

        
    });
});