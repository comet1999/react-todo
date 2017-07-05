const expect    = require('expect');
const React     = require('react');
const ReactDOM  = require('react-dom');
const $         = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Todo = require('Todo');


describe('TODO', () => {

    it('should exist', () => {
        expect(Todo).toExist();
    });
});