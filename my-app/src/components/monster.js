import React, { Component } from 'react';
import "./monster.css";
import CardList from './cardlist';
import Search from './search';

class Monster extends Component {
    constructor(){
        super()

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => this.setState({ monsters: data }))
    }
   
    searchChange = (event) => {
     return this.setState({ searchField: event.target.value })
    }
  
    render() {
        const { monsters, searchField } = this.state;
        const filter = monsters.filter((robot) => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className="monster">
                <Search searchChange={this.searchChange} />
                <CardList Monster={monsters} />
            </div>
        )
    }
}

export default  Monster;