import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let {id, text} = this.props;

        return(
            <div className="todo-item cell"> {id}. {text} </div>
        );
    }
}

module.exports = {Todo};