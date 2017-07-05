const expect = require('expect');
const React  = require('react');
const ReactDOM = require('react-dom');
const $         = require('jquery');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');


describe('TODO APP', () => {

    it('should exist', () => {
        expect(TodoApp).toExist();
    });
});