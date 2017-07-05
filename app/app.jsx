const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');


const {TodoApp} = require('TodoApp');


// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// require('style!css!applicationStyles');
require('style!css!sass!applicationStyles');


ReactDOM.render(
    <TodoApp/>


    , document.getElementById('app')
);
