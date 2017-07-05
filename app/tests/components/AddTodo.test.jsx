const expect = require('expect');
const React  = require('react');
const ReactDOM = require('react-dom');
const $         = require('jquery');
const TestUtils = require('react-addons-test-utils');


const {AddTodo} = require('AddTodo');
const {TodoApp}     = require('TodoApp');


describe('ADD TODO', () => {

    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo prop with valid data', () => {

        let spy = expect.createSpy();
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);  
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);  

        let $el = $(ReactDOM.findDOMNode(addTodo));

        let newText = "Go surf"
        addTodo.refs.todoText.value = newText;

        TestUtils.Simulate.submit($el.find('form')[0]);

        // addTodo.handleSubmit();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(newText);

    });

    it('should NOT call onAddTodo prop with invalid input', () => {

        let spy = expect.createSpy();
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);  
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);  

        let $el = $(ReactDOM.findDOMNode(addTodo));

        let newText = ""
        addTodo.refs.todoText.value = newText;

        TestUtils.Simulate.submit($el.find('form')[0]);

        // addTodo.handleSubmit();
        expect(spy).toNotHaveBeenCalled();


    });
});