const expect    = require('expect');
const React     = require('react');
const ReactDOM  = require('react-dom');
const $         = require('jquery');
const TestUtils = require('react-addons-test-utils');

const {Todo} = require('Todo');


describe('TODO', () => {

    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () => {

        let todoData = {id:222, text:'Todo.test.jsx', completed: true};

        let spy = expect.createSpy();
        let todo  = TestUtils.renderIntoDocument(<Todo {...todo} onToggle={spy}/>);

        

        let $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(222);

        
    });
});