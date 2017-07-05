const expect = require('expect');
const React  = require('react');
const ReactDOM = require('react-dom');
const $         = require('jquery');
const TestUtils = require('react-addons-test-utils');


const {TodoSearch} = require('TodoSearch');



describe('ADD TODO', () => {

    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch prop with entered input text', () => {

        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);  



        let searchText    = "Go surf"
        let showCompleted = false;

        todoSearch.refs.searchText.value      = searchText;
        todoSearch.refs.showCompleted.checked = showCompleted;


      
        TestUtils.Simulate.change(todoSearch.refs.searchText);

      
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(showCompleted, searchText);

    });


    it('should call onSearch prop with proper checked value', () => {

        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);  


        let showCompleted = true;


        todoSearch.refs.showCompleted.checked = showCompleted;

        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
 
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(showCompleted, '');

    });

 
});