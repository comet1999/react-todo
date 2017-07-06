const expect    = require('expect');

const TodoAPI = require('TodoAPI');


describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    it('setTodos - should set valid todos array', () => {

        let todos = [{
            id: 999,
            text:'TodoAPI.test.jsx',
            completed:false
        }];
        TodoAPI.setTodos(todos);
        let actualTodos = JSON.parse(localStorage.getItem('todos'));
        expect(actualTodos).toEqual(todos);
    });

    it('setTodos - should not set invalid todos', () => {

        let badTodos = {
            id: 999,
        };
        TodoAPI.setTodos(badTodos);
        expect(localStorage.getItem('todos')).toBe(null);
    });


    it('getTodos - should return empty array for bad local storage data', () => {       
        let actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual([]);
    });

    it('getTodos - should return array for valid local storage data', () => {     
        let todos = [{
            id: 999,
            text:'TodoAPI.test.jsx',
            completed:false
        }];

        localStorage.setItem('todos', JSON.stringify(todos));
        let actualTodos = TodoAPI.getTodos()
        expect(actualTodos).toEqual(todos);
    });


});