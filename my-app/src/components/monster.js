import React, { Component } from 'react';
import "./monster.css";
import CardList from './cardlist';
import Search from './search';

class Monster extends Component {
    constructor(){
        super()

        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => this.setState({ monsters: data }))
    }
   
    searchChange = (event) => {
     return
    }
  
    render() {
        const Monster = this.state.monsters;
        return (
            <div className="monster">
                <Search />
                <CardList Monster={Monster} />
            </div>
        )
    }
}

export default  Monster;