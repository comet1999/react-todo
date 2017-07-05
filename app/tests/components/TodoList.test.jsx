const expect = require('expect');
const React  = require('react');
const ReactDOM = require('react-dom');
const $         = require('jquery');
const TestUtils = require('react-addons-test-utils');


const {TodoList} = require('TodoList');
const {Todo}     = require('Todo');


describe('TODO LIST', () => {

    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each Todo item', () => {
        let todos = [{
                id: 1,
                text: 'Walk the dog'
            },{
                id:2,
                text:'Daily word review'
            }, {
                id:3,
                text:'Sell vegetables'
            }];


        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todosComponents.length).toBe(3);
        console.log(todosComponents);
        
    });
});