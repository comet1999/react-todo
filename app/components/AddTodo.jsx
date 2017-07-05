import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAdd() {
        let {text} = this.refs;
        this.props.handleAddTodo(text.value);

    }

    handleSubmit(e) {
        e.preventDefault();
        let todoText = this.refs.todoText.value;

        if(todoText.length > 0) {
            
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);

        } else {
            this.refs.todoText.focus();
        }

    }

    render() {



        return(
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
                    <input ref="todoText" type="text" placeholder="¿Qué tiene que hacer?"/>
                    <button className="button expanded hollow">Añadir un pendiente</button>
            
                </form>
            
                {/* <input ref="text" type="text" placeholder="¿Qué tiene que hacer?"/>
                <button onClick={this.handleAdd} className="button primary expanded hollow">Añadir un pendiente</button>
            */}
            
            </div>
        );
    }
}

module.exports = {AddTodo};