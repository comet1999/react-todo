import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        let {id, text, completed} = this.props;

        return(
            <div className="todo-item cell" onClick={() => {
                this.props.onToggle(id);
            }}> 
            <input type="checkbox" checked={completed}/>{id}. {text} </div>
        );
    }
}

module.exports = {Todo};