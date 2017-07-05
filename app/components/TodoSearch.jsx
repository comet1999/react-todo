import React from 'react';

class TodoSearch extends React.Component { 

    constructor(props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this);

    }

    handleSearch() {

        let showCompleted = this.refs.showCompleted.checked;
        let searchText    = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
        
    }

    render() {
        return (
            <div>
                <input type="search" ref="searchText" placeholder="Buscar pendientes" onChange={this.handleSearch}/>
                <label>
                    <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                    Mostrar tareas completadas
                </label>
            </div>
        );
    }
}

module.exports = {TodoSearch}